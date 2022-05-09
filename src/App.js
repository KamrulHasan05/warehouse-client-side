import './App.css';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Home from '../src/components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
