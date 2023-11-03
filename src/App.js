import "./App.css";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<HomePage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
