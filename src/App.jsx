import './App.css'
import usePing from './hooks/apis/queries/usePing'
import { MainRouter } from './MainRouter';

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
    <MainRouter/>
  )
}