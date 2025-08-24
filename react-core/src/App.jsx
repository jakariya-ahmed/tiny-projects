import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  // const  handleCountIncrement = () => {
  //   setCount(prev => prev + 1);
  // }

  // const handleCountDecrement = () => {
  //   setCount(prev => (prev > 0 ? prev - 1 : 0));
  // }

  return (
    <>
     <div className='p-6'>
       
          <div className='flex gap-3'>
            <button
            className='px-4 py-1 bg-violet-300'
              onClick={ () => setCount((prev) => prev + 1)}
            >+</button>
          <h1 className='text-2xl'>Count: { count }</h1>

          <button
            className='px-4 py-1 bg-violet-300 disabled:opacity-40'
              onClick={ () => setCount(prev => (prev > 0 ? prev - 1 : 0))}
              disabled= { count === 0 }
            >-</button>

        </div>
     </div>
    </>


  )
}

export default App
