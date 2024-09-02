import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API
})

const useAxiosSecure = () => {

    axiosSecure.interceptors.request.use(function(config) {
        const token = localStorage.getItem('authorization');
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
            
        }
    })

    return axiosSecure;
};

export default useAxiosSecure;