import './App.css'
import { BrowserRouter} from 'react-router-dom'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <div className='min-h-screen bg-slate-700'>
        <BrowserRouter>
            {/* Routes  */}

            <AppRouter />

            {/* Routes  */}
        </BrowserRouter>
    </div>
  )
}

export default App
