

import './App.css'

import Home from './Pages/Home'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import ExpensesPage from './Pages/ExpensesPage';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import DataNull from './components/DataNull';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);

  return (

    <div className='p-0 m-0'>
      {loading
        ? <Loading />
        : <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expenses" element={<ExpensesPage />} />
              <Route path='*' element={<DataNull name="Page Not Found" />} />
            </Routes>
          </BrowserRouter>
        </div>
      }

    </div>

  )
}

export default App
