import { useParams } from "react-router-dom";
import { EditorComponent } from "../components/molecules/Editor/Editor";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";

export const Playground = () => {

    const params = useParams();
    
    return (
        <div>
            Playground
            {params.projectId}
            <EditorComponent/>
            <EditorButton isActive={false} /> 
            <EditorButton isActive={true}/> 
        </div>
    );
}