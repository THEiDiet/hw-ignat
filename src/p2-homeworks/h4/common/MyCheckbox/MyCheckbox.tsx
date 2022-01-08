import React from "react";
import s from './MyCheckbox.module.scss'


type CheckBoxType = {
    text?: string
}
const MyCheckbox = ({text}: CheckBoxType) => {
    return (
        <div className={s.checkContainer}>
            <input className={s.checkbox} id='checkbox' type="checkbox"/>
            <label className={s.text} htmlFor="checkbox">{text ? text : 'check me'}</label>
        </div>
    );
};

export default MyCheckbox;