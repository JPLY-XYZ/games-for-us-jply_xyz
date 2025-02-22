import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import RegisterForm from "../../components/auth/RegisterForm";
import { useEffect } from "react";

function Register() {

  useEffect(() =>{
      document.title= `Registro`;
   }, []) 

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
