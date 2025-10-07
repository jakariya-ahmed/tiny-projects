
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import UsersProvider from './hooks/useUsersContext';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';

function App() {
return (
  <CartProvider>
      <UsersProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </UsersProvider>
  </CartProvider>
      
  )
}

export default App
