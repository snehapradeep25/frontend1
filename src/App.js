import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './units/navbar';
import Calculator from './units/calculator';
import LoginPage from './units/loginpage';
import Register from './units/Register';



function App() {
  return ( 
    <>
  <NavBar/>
  <BrowserRouter>
  <Routes>
   <Route path='/Register' element={<Register/>}></Route>
    <Route path='/LoginPage' element={<LoginPage/>}></Route>
    <Route path='/Calculator' element={<Calculator/>}></Route>
  
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
