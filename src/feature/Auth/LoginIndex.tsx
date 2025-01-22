import LoginLayout from "./Components/LoginLayout";
import { AuthoProvider } from "./Context/AuthContext";

export default function LoginIndex() {
  
  return (
    <AuthoProvider>
        <LoginLayout />
    </AuthoProvider>
  );
}
