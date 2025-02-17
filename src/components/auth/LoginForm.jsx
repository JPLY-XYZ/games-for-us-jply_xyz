import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function LoginForm() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [remember, setRemember] = useState(false);
   const {login} = useAuth();
 
   const handleSubmit = (e) => {
     e.preventDefault(); 
 
     
     console.log('Email:', email);
     console.log('Password:', password);
     console.log('Recordar:', remember);

     login(email, password, remember);

     setEmail('');
     setPassword('');
     setRemember(false);
   };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Email address"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
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
          <div className="flex items-center justify-between flex-wrap">
            <label
              className="text-sm text-gray-200 cursor-pointer"
              htmlFor="remember-me"
            >
              <input className="mr-2" id="remember-me" type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}/>
              Remember me
            </label>
            <a
              className="text-sm text-blue-500 hover:underline mb-0.5"
              href="#"
            >
              Forgot password?
            </a>
            <p className="text-white mt-4">
              Don't have an account?
              <Link to={"/register"} 
                className="text-sm text-blue-500 -200 hover:underline mt-4"
                href="#"
              >
                Signup
              </Link>
            </p>
          </div>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
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
