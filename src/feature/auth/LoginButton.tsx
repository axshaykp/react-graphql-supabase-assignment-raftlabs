import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="bg-blue-500 text-white font-medium px-3 py-2 rounded-lg"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
}
