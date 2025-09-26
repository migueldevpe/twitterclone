import './Timeline.css'

import { useState, type FormEvent, type KeyboardEvent } from "react"

import Header from "../components/Header"
import Post from "../components/Post"
import Separetor from "../components/Separetor"
import UserIMG from '../assets/user.webp'

export default function Timeline() {
  const [newPost, setNewPost] = useState('');

  const [posts, setTweets] = useState([
    'Olá! Desenvolvi esse site com React.js e TypeScript, com a intenção de me aprofundar ainda mais para pegar experiência e aprendizado. Desse jeito, ficarei ainda mais confiante e treinado para desenvolver diversas aplicações com React.js e Tailwind CSS.',
    'Sabia que você pode alterar o tema clicando no ícone de sol no canto superior direito do cabeçalho? Deixe de acordo com o que você achar melhor.',
    "Faça o seu post, basta digitar e clicar em 'Post' ou Ctrl + Enter. (O post será com o meu perfil)",
    '⬇⬇⬇⬇⬇',
    'Desce',
    'Desce mais um pouquinho',
    'Só mais um pouquinho',
    'Clique aqui!'
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

        <button title="Postar" className='flex justify-center' type='submit'>Post</button>

      </form>

      <Separetor />

      {posts.map(post => {
        return <Post key={post} message={post}/>
      })}

    </main>
  )

}