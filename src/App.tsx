import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./features/Auth/LoginButton";
import View from "./features/View/View";

function App() {
  const { isAuthenticated } = useAuth0();
  return <>{isAuthenticated ? <View /> : <LoginButton />}</>;
}

export default App;
