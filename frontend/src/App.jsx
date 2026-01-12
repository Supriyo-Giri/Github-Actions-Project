import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className="main-container">
        <Navbar/>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>
        <ToastContainer />
        
      </div>
    </>
  )
}

export default App
