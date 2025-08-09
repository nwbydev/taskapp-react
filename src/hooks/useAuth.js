import { login, register } from "../services/authService";

export const useAuth = () => {

    const handleLogin = async (data) => {
        const response = await login(data);
        return response.data;
    }; 

    const handleRegister = async (data) => {
        const response = await register(data);
        return response.data;
    };  
    return { handleLogin,handleRegister }  
}