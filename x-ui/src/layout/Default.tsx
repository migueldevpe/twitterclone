import './Default.css'

import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function Default() {

  return (
    <div className='layout w-full grid'>

    <Sidebar />

    <div className='content w-full' >
      <Outlet />
    </div>
  </div>
  )

}