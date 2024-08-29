import { jwtDecode } from "jwt-decode";

const getEmailFromToken = () => {
  const token = localStorage.getItem("authorization");
  if (token) {
    try {
      const actualToken = token.split(" ")[1];
      const decodedToken =  jwtDecode(actualToken);
      return decodedToken.email;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }
  return null;
};

export default getEmailFromToken;
