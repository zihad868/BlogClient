import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [user, setUser] = useState({});
  const[loading, setLoading] = useState(true);


  useEffect(() => {
    const token = localStorage.getItem("authorization");
    if (token) {
      try {
        const actualToken = token.split(" ")[1];
        const decodedToken = jwtDecode(actualToken);
        setEmail(decodedToken.email);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
      setLoading(false);
    }
    
  }, [email]);

  const userInfo = { email, loading};
  console.log(loading,email)

  return (
    <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
