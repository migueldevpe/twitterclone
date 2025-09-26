import './Postage.css'

import { useState, type FormEvent, type KeyboardEvent } from 'react'

import Header from '../components/Header'
import Post from '../components/Post'
import Separetor from '../components/Separetor'
import UserIMG from '../assets/user.webp'


export default function Postage() {
  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswers] = useState([
    "Acesse meu LinkedIn clicando em 'LinkedIn' ou no ícone de perfil na barra lateral à esquerda.",
    "Acesse meu GitHub clicando em 'GitHub' ou no ícone de mais na barra lateral à esquerda.",
    "Deixe o seu comentário, basta escrever e clicar em 'Answer' ou Ctrl + Enter. (O comentário será com o meu perfil).",
    'Para voltar a tela inicial, basta clicar em Home ou no ícone de casa, na parte superior esquerda, embaixo da logo do X (Twitter).'
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswers([
      newAnswer,
      ...answers
    ])
    setNewAnswer('')

    if (newAnswer.length === 0) {
    setAnswers([
      ...answers
    ])
    }
  }
  
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([
        newAnswer,
        ...answers
      ])
      setNewAnswer('')
    }
  }

  return (
    <main id='post' className='postage w-full'>

      <Header tittle='Post'/>

      <Post message='Desenvolvi apenas para estudo, tem muitas coisas que ainda não estão funcional, como por exemplo, cada post ter sua aba de comentários. Mais pra frente pretendo ajeitar o que ainda não está funcional, porém, no momento atual, irei focar em estudar mais, para aprender de verdade.'/>

      <Separetor />

      <form onSubmit={createNewAnswer} className='answer-post-form flex flex-col gap-2'>

        <label className='flex gap-3' htmlFor="post">
        <img src={UserIMG} alt="Imagem do Usuário" />
        <textarea 
          id="post" 
          placeholder="Post your answer"
          value={newAnswer}
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
          ></textarea>
        </label>

        <button title='Responder' className='flex justify-center' type='submit'>Answer</button>

      </form>

      {answers.map(answer => {
        return <Post key={answer} message={answer}/>
      })}

    </main>
  )

}