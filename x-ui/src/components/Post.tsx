import './Post.css'

import { Link } from 'react-router-dom'

import PostFooter from './PostFooter'
import UserIMG from '../assets/user.webp'

interface PostProps {
  message: string,
}

export default function Post(props: PostProps) {
  const postContents = [
  { comments: 5, repost: 2, likes: 10 }
  ];


  return (
    <Link to="/post" className='post flex flex-row gap-3'>
      <img className='user' src={UserIMG} alt="Imagem do Usuário" />

      <div className='post-content w-full flex flex-col gap-4'>

        <header className='post-content-header flex items-center gap-1'>
          <strong>Miguel Soares</strong>
          <span>@migueldevpe</span>
        </header>

        <p className='text-justify'>
          {props.message} 
        </p>

        <aside className="post-content-footer flex justify-around">
            {postContents.map(( content, index ) => {
              return <PostFooter key={index} comments={content.comments} repost={content.repost} likes={content.likes}/>
            })}
        </aside>

      </div>
    </Link>
  )

}