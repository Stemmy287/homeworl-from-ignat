import React from 'react'
import s from './Message.module.css'
import {RootMessage} from './RootMessage/RootMessage';

export type MessagePropsType = {
    avatar?: string,
    name: string,
    message: string,
    time: string,

}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="avatar" className={s.img}/>
            <RootMessage name={props.name} message={props.message} time={props.time}/>
        </div>
    )
}


