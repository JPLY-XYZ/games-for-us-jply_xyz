import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate(); // hook para navegar
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <>
      <h1>REGISTER IS DISABLED IN THIS MOMEMENT</h1>
      <div className="flex flex-col items-center justify-center  dark">
        <Link to="/login">Login here</Link>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default Register;
