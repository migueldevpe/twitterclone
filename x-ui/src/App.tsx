// import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
          <RouterProvider router={router} />
    </div>
  )
}

