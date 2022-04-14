import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Fol from "./components/Fol";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/> }></Route>
        <Route path='/fol' element={ <Fol/> }></Route>
        <Route path='/search' element={ <Search/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
