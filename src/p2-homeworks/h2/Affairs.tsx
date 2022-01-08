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
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

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
