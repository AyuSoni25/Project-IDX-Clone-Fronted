import { useParams } from "react-router-dom";
import { EditorComponent } from "../components/molecules/Editor/Editor";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";

export const Playground = () => {
  const { projectId: projectIdFromUrl } = useParams();

  const { projectId, setProjectId } = useTreeStructureStore();

  useEffect(() => {
    setProjectId(projectIdFromUrl);
  }, [setProjectId, projectIdFromUrl]);

  return (
    <>
      <div style={{ display: "flex" }}>
        {projectId && (
          <div
            style={{
              backgroundColor: "#333254",
              paddingRight: "10px",
              paddingTop: "0.3vh",
              minWidth: "250px",
              maxWidth: "25%",
              height: "99.7vh",
              overflow: "auto",
            }}
          >
            <TreeStructure />
          </div>
        )}
        <EditorComponent />
      </div>
      <EditorButton isActive={false} />
      <EditorButton isActive={true} />
    </>
  );
};
