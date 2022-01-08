import React from "react";
import s from './MyCheckbox.module.scss'


type CheckBoxType = {
    text?:string
}
const MyCheckbox = ({text}:CheckBoxType) => {
    return (
        <div className={s.checkContainer}>
            <input className={s.check} type="checkbox"/>
            {text && <span className={s.text}>{text}</span>}
        </div>
    );
};

export default MyCheckbox;