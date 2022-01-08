import React, {useState} from "react";
import {v1} from "uuid";
import s from "./Greeting.module.scss";
import AlternativeGreetingContainer from "./AlternativeGreetingContainer";
import {UserType} from "./HW3";

function AlternativeGreeting() {

    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        setUsers([...users,{_id:v1(), name}])
    }
    return (
        <div>
            <span className={s.hwName}>Alternative homework</span>
            <AlternativeGreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    );
}

export default AlternativeGreeting;
