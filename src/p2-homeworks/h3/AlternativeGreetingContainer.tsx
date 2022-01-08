import React, {ChangeEvent, useState, KeyboardEvent, MouseEvent} from 'react'
import {UserType} from "./HW3";
import swal from 'sweetalert'
import s from './Greeting.module.scss'
import AlternativeGreetingPresent from "./AlternativeGreetingPresent";


const cat = 'https://cdn2.iconfinder.com/data/icons/cat-power/256/cat_purr.png'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name:string)=> void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

    }
    const addUser = () => {
        console.log(error + ' ' + name)
        if(name.trim()){
            swal({
                className:s.swalModal,
                title: "This is a greeting",
                text: `Hello ${name}!`,
                icon: cat,
                buttons: {
                    confirm: {
                        text: "Meow",
                        className: s.swalButtonConfirm,
                    }
                }
            })
            setError('')
            addUserCallback(name)

        } else {
            setError(`You even didn't enter your name. What do you want from me?`)
        }
        setName('')
    }

    const totalUsers = users.length

    return (
        <AlternativeGreetingPresent
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
