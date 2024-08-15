import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import SideBar from './Components/Sidebar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Order/Order'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = 'http://localhost:4000'
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <hr/>
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Add url = {url}/>}/>
          <Route path="/list" element={<List  url = {url} />}/>
          <Route path="/orders" element={<Order url = {url} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
