import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm() {


  const [remember, setRemember] = useState(
    JSON.parse(localStorage.getItem("rememberLoginData"))?.remember || false
  );
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("rememberLoginData"))?.email || ""
  );
  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem("rememberLoginData"))?.password || ""
  );
  
  useEffect(() => {
    if (remember) {
      localStorage.setItem("rememberLoginData", JSON.stringify({ remember, email, password }));
    } else {
      localStorage.removeItem("rememberLoginData");
    }
  }, [remember, email, password]);
  
  useEffect(() => {
    const rememberLoginData = JSON.parse(localStorage.getItem("rememberLoginData"));
    if (rememberLoginData) {
      setEmail(rememberLoginData.email);
      setPassword(rememberLoginData.password);
      setRemember(rememberLoginData.remember);
    }
  }, []);
  
 
  

   const {login} = useAuth();
 
   const handleSubmit = (e) => {
     e.preventDefault();      

     toast.promise(
      login(email, password, remember),
       {
         loading: 'Iniciando sesion...',
         success: <b>Sesion iniciada !</b>,
         error: <b>No se puede iniciar sesion.</b>,
       }
     );    
   };


    

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-gray-500 dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Email address"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-7 items-center justify-between flex-wrap">
            <label
              className="text-sm text-gray-200 cursor-pointer"
              htmlFor="remember-me"
            >
              <input className="mr-2" id="remember-me"  type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
              Remember me
            </label>
            <Link to={"/register"} 
              className=" text-sm dark:text-blue-500 text-blue-900 hover:underline mb-0.5"
              href="#"
            >
             Don't have an account?
            </Link>
          </div>
          <button
            className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
