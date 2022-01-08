import React from 'react'
import Message from './Message'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, unde ut! Architecto commodi cum ea eaque eligendi eos harum hic illum itaque labore, molestias necessitatibus, qui recusandae sequi tempore voluptas!',
    time: '22:00:21',
}

function HW1() {
    return (
        <div>
            <span className={c.hw__title}>homeworks 1</span>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
