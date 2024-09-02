import { createContext, useContext, useState } from "react";
import { UserContext } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const UserProvider = createContext(null);

const ProfileProvider = ({ children }) => {
  const { email, loading } = useContext(UserContext);

  const token = localStorage.getItem("authorization");
  

  const handleLogout = async() => {
    localStorage.removeItem('authorization')
  }

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API}/auth/me?queryEmail=${email}`, // Ensure this is correct
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log("Fetched user data:", response.data); // Log the response data
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error.response); // Log the detailed error response
      throw error;
    }
  };
  
  

  const { data: userObject = {}, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: !loading && !!email,
  });

  const {userInformation: user} = userObject;


  const userProfile = { user, isLoading, isError, handleLogout };

  return (
    <UserProvider.Provider value={userProfile}>
      {children}
    </UserProvider.Provider>
  );
};

export default ProfileProvider;
