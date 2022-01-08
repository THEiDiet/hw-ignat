import React from 'react'
import Header from './Header'
import MyRoutes from './Routes'
import {HashRouter as Router} from 'react-router-dom'
import s from './pages/HW5.module.scss'

function HW5() {
    return (
        <div className={s.wrapper}>
            <Router>
                <Header/>
                <MyRoutes/>
            </Router>
        </div>
    )
}

export default HW5
