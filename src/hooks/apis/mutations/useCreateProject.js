import { useMutation } from "@tanstack/react-query"
import { createProject } from "../../../apis/projects.js"

export const useCreateProject = () => {
    const { mutateAsync, isPending, isSuccess, error } = useMutation({
        mutationFn: createProject,
        onSuccess: (data) => {
            console.log("Project created successfully", data);
        },
        onError: () => {
            console.log("Error creating project");
        }
    });

    return {
        createProjectMutation: mutateAsync,
        isPending,
        isSuccess,
        error
    }
}