import React from "react";
import s from './Friend.module.css';

function Friend(props) {

    return (
        <div className={s.friendWrapper}>
            <img src={props.avatar} className={s.friendAvatar}/>
            <div>
                <span className={s.friendName}>{props.name}</span><br/>
                <span className={s.friendEmail}>{props.email}</span>
            </div>
        </div>);
}

export default Friend;