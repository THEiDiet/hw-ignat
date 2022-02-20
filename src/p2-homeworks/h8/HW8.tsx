import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'
import s from './HW8.module.scss'

export type UserType = {
    _id: number
    name: string
    age: number
}
export type InitialStateType = typeof  initialPeople
export type  actionsType = sortUpType | sortDownType |checkAdultHoodType
export type sortUpType = {type: 'sort', payload: 'up'}
export type sortDownType = {type: 'sort', payload: 'down'}
export type checkAdultHoodType = {type: 'check',payload:number}

const initialPeople:UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialStateType>(initialPeople)
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.man}>
            <div className={s.man__name}>{p.name}</div>
            <div className={s.man__age}>{p.age}</div>
        </div>
    ))
    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const checkAdultHood = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload:18}))

    return (
        <div>
            <span className={c.hw__title}>homeworks 8</span>
            <div className={c.container}>
                <div className={s.people}>
                    {finalPeople}
                </div>

                <div className={s.button__container}>
                    <SuperButton onClick={sortUp}>sort up</SuperButton>
                    <SuperButton onClick={sortDown}>sort down</SuperButton>
                    <SuperButton onClick={checkAdultHood}>check 18</SuperButton>
                </div>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    )
}

export default HW8
