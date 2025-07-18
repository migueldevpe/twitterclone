import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Post.css'
// import { useState } from 'react'

interface PostProps {
    name: string;
    user: string;
    message: string
}

export default function post(props: PostProps) {

    // const [x, setX] = useState(x);

    return (
        <a href="#" className='post flex flex-row gap-3'>
            <img className='user' src="https://github.com/migueldevpe.png" alt="" />

            <div className='post-content flex flex-col gap-4'>

                <header className='post-content-header flex items-center gap-1'>
                    <strong>{props.name}</strong>
                    <span className='text-[#71767b]'>{props.user}</span>
                </header>

                <p className='text-justify'>
                    {props.message} 
                </p>

                <aside className="post-content-footer flex justify-around">
                    <button type='button'>
                        <ChatCircle />
                        20
                    </button>
                    <button type='button'>
                        <ArrowClockwise />
                        20
                    </button>
                    <button type='button'>
                        <Heart />
                        20
                    </button>
                </aside>

            </div>
        </a>
    )

}