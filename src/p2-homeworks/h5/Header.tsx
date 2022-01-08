import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './pages/HW5.module.scss'

function Header() {
    let finalClass = ({isActive}: { isActive: boolean }) => isActive ? s.active : ''
    return (
        <div className={s.links}>
            <input type="checkbox" id='input' className={s.hidden_menu_ticker}/>
            <label className={s.btn_menu} htmlFor="input">
                <span className={s.first}/>
                <span className={s.second}/>
                <span className={s.third}/>
            </label>
            <ul className={s.hidden_menu}>
                <li><NavLink className={finalClass} to={PATH.PRE_JUNIOR}>PreJunior</NavLink></li>
                <li><NavLink className={finalClass} to={PATH.JUNIOR}>Junior</NavLink></li>
                <li><NavLink className={finalClass} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink></li>
            </ul>



        </div>
    )
}

export default Header
