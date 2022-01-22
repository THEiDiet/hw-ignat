import React from "react"
import {NavLink} from "react-router-dom";
import s from '../../p1-main/m1-ui/u1-app/App.module.scss'

export const Navigation = () => {

    return <div className={s.navigation}>
        <NavLink to='/' className={({isActive})=> `${s.link} ${isActive ? s.activeLink :''}`}>Home Page</NavLink>
        <NavLink to='/hw1'className={({isActive})=> `${s.link} ${isActive ? s.activeLink :''}`}>First</NavLink>
        <NavLink to='/hw2'className={({isActive})=> `${s.link} ${isActive ? s.activeLink :''}`}>Second</NavLink>
        <NavLink to='/hw3'className={({isActive})=> `${s.link} ${isActive ? s.activeLink :''}`}>Third</NavLink>
        <NavLink to='/hw4'className={({isActive})=> `${s.link} ${isActive ? s.activeLink :''}`}>Fourth</NavLink>
        <NavLink to='/hw5'className={({isActive})=> `${s.link} ${isActive ? s.activeLink :''}`}>Fifth</NavLink>
    </div>
}