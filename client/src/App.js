// GOOGLE AUTH PROVIDER
import { GoogleOAuthProvider } from "@react-oauth/google";
// COMPONENTES
import Messenger from "./Components/Messenger";
// CONTEXT
import AccountProvider from "./Context/AccountProvider";

function App() {
  const clientId =
    "490702159052-803bpadqbff1pcu5tu44i5esmr9im4cl.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
