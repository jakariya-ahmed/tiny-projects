
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import UsersProvider from './hooks/useUsersContext';
import Navbar from './components/navbar';
import { CartProvider } from './context/CartContext';

function App() {

  


  return (

    <UsersProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />

        </BrowserRouter>
      </CartProvider>
    </UsersProvider>
      


  )
}

export default App
