import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import X_Logo from '../assets/x-icon.svg'
import './Sidebar.css'

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
          <a href="https://br.linkedin.com/in/miguelsoaresabs" target='_blank' rel='noreferrer'>
            <User />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/migueldevpe" target='_blank' rel='noreferrer'>
            <DotsThreeCircle />
            <span>GitHub</span>
          </a>
        </nav>

        <button title='Postar' className='new-post flex justify-center' type='submit'><Pencil /><span>Post</span></button>

      </aside>
    </div>
  )

}