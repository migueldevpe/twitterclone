import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import X_Logo from '../assets/x-icon.svg'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

    return (
        <div className='sidebar-fixed w-full'>
            <aside className='sidebar flex items-start flex-col gap-8 w-full'>

            <img className='logo' src={X_Logo} alt="Logo" />

            <nav className='main-nav flex flex-col gap-2'>
              <NavLink to="/">
                <House weight='fill' />
                <span>Home</span>
              </NavLink>
              <a href="" target='' rel=''>
                <Hash />
                <span>Explore</span>
              </a>
              <a href="" target='' rel=''>
                <Bell />
                <span>Notifications</span>
              </a>
              <a href="" target='' rel=''>
                <Envelope />
                <span>Message</span>
              </a>
              <a href="" target='' rel=''>
                <BookmarkSimple />
                <span>Bookmarks</span>
              </a>
              <a href="" target='' rel=''>
                <FileText />
                <span>Lists</span>
              </a>
              <a href="" target='' rel=''>
                <User />
                <span>Profile</span>
              </a>
              <a href="" target='' rel=''>
                <DotsThreeCircle />
                <span>More</span>
              </a>
            </nav>

            <button className='new-post flex justify-center' type='submit'>Post</button>

          </aside>
        </div>
    )

}