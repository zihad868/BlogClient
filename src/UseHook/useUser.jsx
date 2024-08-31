import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Provider/AuthProvider";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query';
import axios from "axios";


const useUser = () => {
    const { email } = useContext(UserContext);
    const token = localStorage.getItem("authorization");

    console.log(token);

    const fetchUser = async () =>{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/auth/me`,{
            headers: {
                authorization: token
            }
        })
        return response.data;
    }

    const {data: user = {},  isLoading, error} = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
        enabled: !email
      })
      return {user,  isLoading, error}
};

export default useUser;