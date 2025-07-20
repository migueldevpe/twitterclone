import { useState, type FormEvent, type KeyboardEvent } from "react"
import Header from "../components/Header"
import Post from "../components/Post"
import Separetor from "../components/Separetor"
import UserIMG from '../assets/user.png'
import './Timeline.css'

export default function Timeline() {
    const [newPost, setNewPost] = useState('');

    const [posts, setTweets] = useState([
        'testando',
        'testando2',
        'testando3'   
    ])

    function createNewPost(event: FormEvent) {
        event.preventDefault()

        setTweets([
            newPost,
            ...posts
        ])
        setNewPost('')

        if (newPost.length === 0) {
        setTweets([
            ...posts
        ])
        }
    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
            setTweets([
                newPost,
                ...posts
            ])
            setNewPost('')
        }
    }

    return (
        <main id='home' className='timeline w-full'>

            <Header tittle='Home'/>

            <form onSubmit={createNewPost} className='new-post-form flex flex-col gap-2'>

                <label className='flex gap-3' htmlFor="post">
                <img src={UserIMG} alt="Imagem do Usuário" />
                <textarea
                 id="post" 
                 placeholder="What's happening?"
                 value={newPost}
                 onKeyDown={handleHotkeySubmit}
                 onChange={(event) => {
                    setNewPost(event.target.value)
                 }}
                 ></textarea>
                </label>

                <button className='flex justify-center' type='submit'>Post</button>

            </form>

            <Separetor />

            {posts.map(post => {
                return <Post key={post} message={post}/>
            })}

        </main>
    )

}