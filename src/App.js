import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import UpdateCycleDetails from './components/UpdateCycleDetails/UpdateCycleDetails';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddProduct from './components/AddProduct/AddProduct';
import MyProduct from './components/MyProduct/MyProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/update-details/:id' element={<UpdateCycleDetails />}></Route>
        <Route path='/manage-inventory' element={<ManageInventory />}></Route>
        <Route path='/add-product' element={<AddProduct />}></Route>
        <Route path='/myproduct' element={<MyProduct />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
