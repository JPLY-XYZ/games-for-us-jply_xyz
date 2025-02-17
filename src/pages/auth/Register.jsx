import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  const navigate = useNavigate(); // hook para navegar
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <>
      
     <RegisterForm />
    </>
  );
}

export default Register;
