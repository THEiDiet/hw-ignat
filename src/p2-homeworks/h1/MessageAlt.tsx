import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {

    return (
        <div className={s.message}>
            <div className={s.avatar}><img src={props.avatar} alt=""/></div>
            <div className={s.messageItem}>
                <svg className={s.svg} viewBox="10 0 1 1">
                    <path d="m 10 1 l 1 0 l 0 -1 C 11 0.3 10.3 1 10 1" />
                </svg>
                <div className={s.messageBody}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
