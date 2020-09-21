import React from "react";
import style from './Message.module.css';

type PropsMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: PropsMessage) {
    return (
        <div className={style.message}>
            <div className={style.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <span className={style.title}>{props.name}</span>
                    <span className={style.text}>{props.message}</span>
                    <span className={style.date}>{props.time}</span>
                </div>
            </div>
        </div>
    );
}

export default Message;
