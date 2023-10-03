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
import { useDispatch } from "react-redux";
import { setEmail } from "./authSlice";

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
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, getIdTokenClaims, loginWithRedirect } =
    useAuth0();
  const [client, setClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null);

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
  }

  if (isAuthenticated && !client) {
    getIdTokenClaims().then((res) => {
      console.log(res?.email);
      const apolloClient = createApolloClient(res?.__raw as string);
      setClient(apolloClient);
      dispatch(setEmail(res?.email));
    });
  }

  return client && <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
