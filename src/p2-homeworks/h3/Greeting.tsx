import React, {ChangeEvent} from 'react'
import s from './Greeting.module.scss'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {

    const inputClass = error ? s.input + ' ' + s.error : s.input
    const disabled = !name

    return (
        <div className={s.wrapper}>
            <input value={name} onKeyPress={(e) => e.key === 'Enter' && addUser()}
                   onChange={setNameCallback} className={inputClass}/>
            <button className={s.btn} disabled={disabled} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.errorSpan}>{error}</span>
        </div>
    )
}

export default Greeting