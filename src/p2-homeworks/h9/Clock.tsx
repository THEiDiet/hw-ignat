import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        setDate(new Date())
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)

    }
    const hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
    const min = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
    const sec = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()
    const stringTime = `${hours}:${min}:${sec}` // fix with date
    const stringDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}` // fix with date

    return (
        <div className={c.timerContainer}>
            <div
                className={c.timer}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div >

            {show && (
                <div className={c.date}>
                    {stringDate}
                </div>
            )}

            <div className={c.btnContainer}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
