import "./App.css";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import { HomePage, NavBar, Checkout, ProductPage, SearchResults } from "./components";

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route path="/search" element={<SearchResults/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
