import axiosInstance from "../config/axiosConfig";

export const pingCheck = async() => {
    try {
        const response = await axiosInstance.get('/api/v1/ping');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
