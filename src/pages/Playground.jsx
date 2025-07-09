import { useParams } from "react-router-dom";
import { Editor } from "../components/molecules/Editor/Editor";

export const Playground = () => {

    const params = useParams();
    
    return (
        <div>
            Playground
            {params.projectId}
            <Editor></Editor>
        </div>
    );
}