import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import UsersProvider from './hooks/useUsersContext';
import Navbar from './components/navbar';

function App() {

  


  return (

    <UsersProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />

      </BrowserRouter>
      
    </UsersProvider>
      

      


  )
}

export default App
