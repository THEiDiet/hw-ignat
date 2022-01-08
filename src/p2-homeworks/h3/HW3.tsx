import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'
import AlternativeGreeting from "./AlternativeGreeting";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        setUsers([...users,{_id:v1(), name}])
    }
    return (
        <div className={c.marginTop}>
            <span className={c.hw__title}> homeworks 3</span>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            {/*Я натворила, можно проверит. Добавила sweet alert*/}
            <AlternativeGreeting/>
        </div>
    )
}

export default HW3
