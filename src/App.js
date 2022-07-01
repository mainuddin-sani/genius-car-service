import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import ServicesDetails from './pages/Home/ServicesDetails/ServicesDetails';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <RequireAuth>
              <About></About>
          </RequireAuth>
        }></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:id' element={<ServicesDetails></ServicesDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
