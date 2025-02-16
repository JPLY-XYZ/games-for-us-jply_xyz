
const apiKey = import.meta.env.VITE_CLIENT_API_KEY;

// BASE AUTH FUNCTIONS
function login( email, password, remember, setIsAuthenticated  ) {
    
    console.log(email, password, remember, apiKey);

}

function logout(setIsAuthenticated) {
  
}

function checkIsAuthenticated(setIsAuthenticated) {
  
    return true;
}

function singup(setIsAuthenticated) {
  
}

export { login, logout, checkIsAuthenticated, singup };