import axiosInstance from "../config/axiosConfig"

export const createProject = async () => {
    try{
        const response = await axiosInstance.post('/api/v1/projects');
        console.log(response);
        return response;
    } catch(error){
        console.log(error);
        throw error;
    }
}

export const getProjectTree = async ({ projectId }) => {
    try {
        const response = await axiosInstance.get(`/api/v1/projects/${projectId}/tree`);
        console.log(response.data);
        return response?.data?.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}