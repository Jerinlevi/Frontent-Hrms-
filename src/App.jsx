// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import {Navigate,BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Employees from './components/Employees'
import Teams from './components/Teams'
import EmployeeTeam from './components/Employee-team'
import Assign from './components/Assign'

import UnAssign from './components/UnAssign'

import './App.css'

function App() {


const ProtectedRoute = ({ children }) => {
  const token=localStorage.getItem("token")
  try{
  if (!token) return <Navigate to="/login" replace />;
  return children;
  }catch(err){
    console.log(err)
  }
};
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element=
        {<ProtectedRoute>
        <Home/>
        </ProtectedRoute>}/>
        <Route path="/employees" element=
        {<ProtectedRoute>
        <Employees/>
        </ProtectedRoute>}/> 
        <Route path="/teams" element=
        {<ProtectedRoute>
        <Teams/>
        </ProtectedRoute>}/> 
        <Route path="/employee-team" element=
        {<ProtectedRoute>
        <EmployeeTeam/>
        </ProtectedRoute>}/> 
        <Route path="/assign" element=
        {<ProtectedRoute>
        <Assign/>
        </ProtectedRoute>}/> 
        <Route path="/unassign" element=
        {<ProtectedRoute>
        <UnAssign/>
        </ProtectedRoute>}/> 
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
