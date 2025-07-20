import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import './App.css'

export default function App() {

  return (
    <div className='flex justify-center'>
          <RouterProvider router={router} />
    </div>
  )

}

