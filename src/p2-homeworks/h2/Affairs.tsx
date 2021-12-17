import React, {
    Dispatch,
    SetStateAction
} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (id:number) => void
    filter:FilterType
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {
    //     props.setFilter('all')
    // }
    // const setHigh = () => {
    //     props.setFilter('high')
    // }
    // const setMiddle = () => {
    //     props.setFilter('middle')
    // }
    // const setLow = () => {
    //     props.setFilter('low')
    // }
    const set = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }
    const setClass = (filter:FilterType) => {
        return props.filter === filter ? s.btn + ' ' + s.active : s.btn
    }

        return (
        <div className={s.affairs}>
        <div className={s.affairBody}>
            {mappedAffairs}
        </div>

{/*            <button className={props.filter === 'all' ? s.active : ''} onClick={setAll}>All</button>
            <button className={props.filter === 'high' ? s.active : ''} onClick={setHigh}>High</button>
            <button className={props.filter === 'middle' ? s.active : ''} onClick={setMiddle}>Middle</button>
            <button className={props.filter === 'low' ? s.active : ''} onClick={setLow}>Low</button>*/}

           <div className={s.buttons}>
               <button className={setClass('all')} value={'all'} onClick={set}>All</button>
               <button className={setClass('high')} value={'high'} onClick={set}>High</button>
               <button className={setClass('middle')} value={'middle'} onClick={set}>Middle</button>
               <button className={setClass('low')} value={'low'} onClick={set}>Low</button>
           </div>
        </div>
    )
}

export default Affairs
