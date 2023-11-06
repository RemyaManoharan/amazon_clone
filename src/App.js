import "./App.css";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import { HomePage, NavBar } from "./components";

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route exact path="/" element={<HomePage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
