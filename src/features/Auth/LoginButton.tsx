import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="min-h-screen w-100 px-6 pt-16 bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-[400px] mx-auto bg-white">
        <div className="flex items-center gap-6 p-6">
            <div className="w-full flex flex-col gap-6">
              <p className="text-2xl font-black">Social</p>
              <img
                className="rounded-lg object-cover max-h-[300px]"
                src="/images/cover.jpg"
                alt=""
              />
              <button
                onClick={() => loginWithRedirect()}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-600/90 h-10 px-4 py-2 w-full"
              >
                Login
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
