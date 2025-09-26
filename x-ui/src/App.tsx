import './App.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'

export default function App() {

  return (
    <div className='flex justify-center'>
      <RouterProvider router={router} />
    </div>
  )

}

