import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from './MyCheckbox.module.scss'


type CheckBoxType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    text?: string
    isChecked: boolean
}
const MyCheckbox = ({text, isChecked, onChange,type, ...rest}: CheckBoxType) => {

    return (
        <div className={s.checkContainer}>
            <input className={s.checkbox} id='checkbox' onChange={onChange} checked={isChecked}
                   type="checkbox" {...rest}/>
            <label className={s.text} htmlFor="checkbox">{text ? text : 'check me'}</label>
        </div>
    );
};

export default MyCheckbox;