import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { email } = useContext(UserContext);
  const token = localStorage.getItem("authorization");


  const fetchUser = async () => {
    const response = await useAxiosSecure.get(`/auth/me?queryEmail=${email}`);
    return response.data;
  };

  const {
    data: userObj = {},
    isLoading,
    isError
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: !email,
  });
  return [userObj, isLoading, isError];
};

export default useUser;
