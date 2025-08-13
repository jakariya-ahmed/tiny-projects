import './App.css'
import { BrowserRouter} from 'react-router-dom'
import AppRouter from './router/AppRouter'
import { PostProvider } from './pages/dashboard/context/PostContext'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='min-h-screen bg-slate-700'>
        <BrowserRouter>
            {/* Routes  */}

         <PostProvider>
          <Toaster position='top-right' />
            <AppRouter />
         </PostProvider>
            {/* Routes  */}
        </BrowserRouter>
    </div>
  )
}

export default App
