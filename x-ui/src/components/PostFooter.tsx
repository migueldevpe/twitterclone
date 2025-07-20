import { ArrowClockwise, ChatCircle, Heart, type IconWeight } from 'phosphor-react'
import { useState } from 'react'
import './PostFooter.css'

interface PropPostFooter {
    likes: number,
    repost: number,
    comments: number
}

export default function PostFooter(props: PropPostFooter) {
    const [chatWeigth, setChatWeigth] = useState<IconWeight>("regular");
    const [repostWeigth, setRepostWeigth] = useState<IconWeight>("regular");
    const [likeWeigth, setLikeWeigth] = useState<IconWeight>("regular");

    return (
        <>
            <button title='Comentar' type='button'>
                <ChatCircle weight={chatWeigth} onMouseEnter={() => setChatWeigth('fill')} onMouseLeave={() => setChatWeigth('regular')}/>
                {props.comments}
            </button>
            <button title='Repostar' type='button'>
                <ArrowClockwise weight={repostWeigth} onMouseEnter={() => setRepostWeigth('fill')} onMouseLeave={() => setRepostWeigth('regular')}/>
                {props.repost}
            </button>
            <button title='Curtir' type='button'>
                <Heart weight={likeWeigth} onMouseEnter={() => setLikeWeigth('fill')} onMouseLeave={() => setLikeWeigth('regular')}/>
                {props.likes}
            </button>
        </>

    )

}