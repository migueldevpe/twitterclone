import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import './Default.css'

export default function Default() {

    return (
        <div className='layout w-full flex flex-row'>

        <Sidebar />

        <div className='content w-full' >
            <Outlet />
        </div>
      </div>
    )

}