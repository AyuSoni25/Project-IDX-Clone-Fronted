import { useParams } from "react-router-dom";
import { EditorComponent } from "../components/molecules/Editor/Editor";

export const Playground = () => {

    const params = useParams();
    
    return (
        <div>
            Playground
            {params.projectId}
            <EditorComponent/>
        </div>
    );
}