// import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'

import X_Logo from './assets/x-icon.svg' 

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <div className='layout w-full flex flex-row'>
        <div className='sidebar-fixed w-full'>
            <aside className='sidebar flex items-start flex-col gap-8 w-full'>

            <img className='logo' src={X_Logo} alt="Logo" />

            <nav className='main-nav flex flex-col gap-2'>
              <a className='active' href="#home" target='' rel=''>
                <House weight='fill' />
                Home
              </a>
              <a href="" target='' rel=''>
                <Hash />
                Explore
              </a>
              <a href="" target='' rel=''>
                <Bell />
                Notifications
              </a>
              <a href="" target='' rel=''>
                <Envelope />
                Message
              </a>
              <a href="" target='' rel=''>
                <BookmarkSimple />
                Bookmarks
              </a>
              <a href="" target='' rel=''>
                <FileText />
                Lists
              </a>
              <a href="" target='' rel=''>
                <User />
                Profile
              </a>
              <a href="" target='' rel=''>
                <DotsThreeCircle />
                Profile
              </a>
            </nav>

            <button className='new-post flex justify-center text-[black]' type='submit'>Post</button>

          </aside>
        </div>
        <div className='content w-full' >
          <main id='home' className='timeline w-full'>
            <header className='timeline-header flex items-center justify-between flex-row'>
              Home

              <Sparkle />
            </header>

            <form className='new-post-form flex flex-col gap-2'>

              <label className='flex gap-3' htmlFor="post">
                <img src="https://github.com/migueldevpe.png" alt="Miguel Soares" />
                <textarea id="post" placeholder="What's happening?"></textarea>
              </label>

              <button className='flex justify-center text-[black]' type='submit'>Post</button>

            </form>

            <div className='separetor'/>
          
            <Post name='Miguel Soares' user='@migueldevpe' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde adipisci totam harum, dolorum dolore quibusdam eaque eveniet, autem voluptas impedit iure consequatur vitae, quis cumque! Necessitatibus harum cumque quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ipsam pariatur soluta corrupti excepturi rerum maiores error blanditiis facilis dolorum, esse libero eum veritatis odio ea dolorem ut quia!'/>
            <Post name='Jorge Elissan' user='@jorgeelss' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ipsam pariatur soluta corrupti excepturi rerum maiores error blanditiis facilis dolorum, esse libero eum veritatis odio ea dolorem ut quia!'/>
            <Post name='Miguel Soares' user='@migueldevpe' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde adipisci totam harum, dolorum dolore quibusdam eaque eveniet, autem voluptas impedit iure consequatur vitae, quis cumque! Necessitatibus harum cumque quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ipsam pariatur soluta corrupti excepturi rerum maiores error blanditiis facilis dolorum, esse libero eum veritatis odio ea dolorem ut quia!'/>
            <Post name='Miguel Soares' user='@migueldevpe' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde adipisci totam harum, dolorum dolore quibusdam eaque eveniet, autem voluptas impedit iure consequatur vitae, quis cumque! Necessitatibus harum cumque quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ipsam pariatur soluta corrupti excepturi rerum maiores error blanditiis facilis dolorum, esse libero eum veritatis odio ea dolorem ut quia!'/>
            <Post name='Miguel Soares' user='@migueldevpe' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde adipisci totam harum, dolorum dolore quibusdam eaque eveniet, autem voluptas impedit iure consequatur vitae, quis cumque! Necessitatibus harum cumque quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ipsam pariatur soluta corrupti excepturi rerum maiores error blanditiis facilis dolorum, esse libero eum veritatis odio ea dolorem ut quia!'/>

          </main>
        </div>
      </div>
    </div>
  )
}

