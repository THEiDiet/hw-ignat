import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affair}>
            <div>{props.affair.name}</div>
            <div className={s[props.affair.priority]}>{props.affair.priority}</div>
            <div className={s.btnCont}>
                <button  className={s.btn} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
