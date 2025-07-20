import { useState, type FormEvent, type KeyboardEvent } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import Separetor from '../components/Separetor'
import UserIMG from '../assets/user.png'
import './Postage.css'

export default function Postage() {
    const [newAnswer, setNewAnswer] = useState('')

    const [answers, setAnswers] = useState([
        'Concordo!',
        'Muito massa meu!',
        'Aí sim! Parabéns'
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

            <Post message='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur consequatur illum dolorum dolorem culpa aperiam, magnam recusandae dignissimos maxime quas vitae nostrum ea rerum quae. Ad quidem possimus reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur consequatur illum dolorum dolorem culpa aperiam, magnam recusandae dignissimos maxime quas vitae nostrum ea rerum quae. Ad quidem possimus reiciendis.'/>

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

                <button className='flex justify-center' type='submit'>Answer</button>

            </form>

            {answers.map(answer => {
                return <Post key={answer} message={answer}/>
            })}

        </main>
    )

}