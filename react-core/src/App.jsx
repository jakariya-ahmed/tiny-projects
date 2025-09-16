import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/core/Users';
import CreateUser from './components/core/CreateUser';
import UsersProvider from './hooks/useUsersContext';
import MemoComp from './components/core/MemoComp';



function App() {

  


  return (

    <UsersProvider>
      <div>
        <CreateUser />
        <Users />
        <MemoComp />
          
      </div>
    </UsersProvider>
      

      


  )
}

export default App
