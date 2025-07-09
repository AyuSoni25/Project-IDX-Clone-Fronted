import { Route, Routes } from "react-router-dom"
import { CreateProject } from "./pages/CreateProject"
import { Playground } from "./pages/Playground"

export const MainRouter = () => {
    return (
    <Routes>
      <Route path="/" element={<CreateProject />} />
      <Route path="/playground/:projectId" element={<Playground/>}/>
    </Routes>
    )
}