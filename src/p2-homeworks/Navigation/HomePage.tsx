import React from 'react'
import s from '../../p1-main/m1-ui/u1-app/App.module.scss'

export const HomePage = () => {
    return <div className={s.homepage}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={s.arrow}><title/>
            <g data-name="1" id="_1">
                <path
                    d="M202.1,450a15,15,0,0,1-10.6-25.61L365.79,250.1,191.5,75.81A15,15,0,0,1,212.71,54.6l184.9,184.9a15,15,0,0,1,0,21.21l-184.9,184.9A15,15,0,0,1,202.1,450Z"/>
            </g>
        </svg>
        <p>Hello! Click any homeworks and start your check :)</p>
    </div>
}