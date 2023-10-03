import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../../lib/api";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  if (data) console.log(data);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-center">
        Loading ...
      </div>
    );
  }
  console.log(isAuthenticated);
  return isAuthenticated ? (
    <>
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
      <LogoutButton />
    </>
  ) : (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="font-black text-3xl">Stories App</h1>
      <p>Login to continue</p>
      <LoginButton />
    </div>
  );
};

export default Profile;
