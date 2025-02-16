import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/loginForm";
import { useAuth } from "../../context/AuthContext";

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
