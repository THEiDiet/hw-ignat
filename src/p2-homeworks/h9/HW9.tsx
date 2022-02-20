import React from 'react'
import Clock from './Clock'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'


function HW9() {
    return (
        <div>
            <span className={c.hw__title}>homeworks 9</span>
            <div className={c.container}>
                <Clock/>
            </div>
        </div>
    )
}

export default HW9
