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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/update-details/:id' element={
          <RequireAuth>
            <UpdateCycleDetails />
          </RequireAuth>
        }></Route>
        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route path='/add-product' element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        }></Route>
        <Route path='/myproduct' element={
          <RequireAuth>
            <MyProduct />
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
