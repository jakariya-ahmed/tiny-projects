
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import UsersProvider from './hooks/useUsersContext';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

function App() {

  


  return (
<CartProvider>
    <UsersProvider>
      
        <BrowserRouter>
          <Header />
          <AppRoutes />

        </BrowserRouter>
    </UsersProvider>
  </CartProvider>
      


  )
}

export default App
