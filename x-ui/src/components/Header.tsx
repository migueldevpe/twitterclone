import { Sparkle } from 'phosphor-react'
import { useEffect } from 'react'
import { toggleTheme, setupInitialTheme } from "../utils/theme.ts";
import './Header.css'

interface PropHeader {
  tittle: string
}

export default function Header(props: PropHeader) {
  useEffect(() => {
    setupInitialTheme();
  }, []);

    return (
        <header className='timeline-header flex items-center justify-between flex-row'>
            {props.tittle}

            <aside className='flex items-center flex-row gap-3'>
            <button title='Trocar tema' onClick={toggleTheme} className='bttntheme'></button>
            <Sparkle />
            </aside>
        </header>        
    )

}