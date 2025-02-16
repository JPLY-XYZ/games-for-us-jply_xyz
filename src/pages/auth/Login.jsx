import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "../../components/auth/loginForm";

function Login() {
  const navigate = useNavigate(); // hook para navegar
  const {isAuthenticated} = useAuth();

  if (isAuthenticated) {
   navigate('/');
  }

  return <>  
  <LoginForm />
  </>;
}

export default Login;
