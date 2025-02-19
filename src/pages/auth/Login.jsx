import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  const navigate = useNavigate(); // hook para navegar
  const {isAuthenticated} = useAuth();

  if (isAuthenticated) {
   navigate('/');
  }

  return <div className=" w-full flex flex-col items-center justify-center">  
  <LoginForm />
  </div>;
}

export default Login;
