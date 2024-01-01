import { useEffect } from 'react';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  useEffect(()=>{
    if(localStorage.getItem("theme") === "light"){
      document.querySelector("body").setAttribute("data-theme","light")
      document.querySelector("#darkmode-toggle").checked = false;
    }
    else
      document.querySelector("body").setAttribute("data-theme","dark")
  },[])

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;