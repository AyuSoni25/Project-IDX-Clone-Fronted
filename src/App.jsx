import { Route, Routes } from 'react-router-dom';
import './App.css'
import usePing from './hooks/apis/queries/usePing'
import { CreateProject } from './pages/CreateProject';

export const App = () => {
  const {isLoading, data} = usePing();

  if(isLoading){
    return (
      <>
        Loading...
      </>
    )
  }
  console.log(data);
  return (
    <Routes>
      <Route path="/" element={<CreateProject />} />
    </Routes>
  )
}