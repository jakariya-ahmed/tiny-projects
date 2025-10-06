
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import UsersProvider from './hooks/useUsersContext';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

function App() {

  


  return (

    <UsersProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />

        </BrowserRouter>
      </CartProvider>
    </UsersProvider>
      


  )
}

export default App
