import axiosInstance from "../config/axiosConfig"

export const createProject = async () => {
    try{
        const response = await axiosInstance.post('/projects');
        console.log(response);
        return response;
    } catch(error){
        console.log(error);
        throw error;
    }
}

export const getProjectTree = async ({ projectId }) => {
    try {
        const response = await axiosInstance.get(`/projects/${projectId}/tree`);
        console.log(response.data);
        return response?.data?.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}