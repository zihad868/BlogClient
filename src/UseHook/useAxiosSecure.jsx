import axios from "axios";
import { useContext } from "react";
import { UserProvider } from "../Provider/profileProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API
})

const useAxiosSecure = () => {
    const {handleLogout} =  useContext(UserProvider);
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function(config) {
        const token = localStorage.getItem('authorization');
        console.log("Token--->",token)
        config.headers.authorization = token;
        return config;
    }, function(error){
        return Promise.reject(error);
    })

    // User Interceptors 
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error) => {
        const status = error.response.status;
        console.log("Status error in the interceptors");

        if(status === 401 || status === 403){
            await handleLogout();
            navigate('/authentication/signin');
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;