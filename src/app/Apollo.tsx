import { ReactNode, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { setContext } from "@apollo/client/link/context";
import LoginButton from "../feature/auth/LoginButton";

const createApolloClient = (token: string) => {
  const httpLink = createHttpLink({
    uri: "https://social-react.hasura.app/v1/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache() as InMemoryCache,
  });

  return client;
};

const Apollo = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, getIdTokenClaims } =
    useAuth0();
  const [client, setClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null);

  if (isAuthenticated && !client) {
    getIdTokenClaims().then((res) => {
      console.log(res?.__raw);
      const apolloClient = createApolloClient(res?.__raw as string);
      setClient(apolloClient);
    });
  }
  
  if (!client || !isAuthenticated) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-3">
        <h1 className="font-black text-3xl">Stories App</h1>
        <p>Login to continue</p>
        <LoginButton />
      </div>
    );
  }
  
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
