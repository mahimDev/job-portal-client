import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { signOutUser } = useAuth()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            console.log('Error: in interceptor ', error)
            if (error.status === 401 || error.status === 403) {
                signOutUser()
                    .then(() => {
                        console.log('log out user from auth provider')
                    })
                    .then(err => {
                        console.log(err)
                    })
                console.log('need to logout user')
            }
            return Promise.reject(error)
        })
    }, [])
    return axiosInstance
};

export default useAxiosSecure;