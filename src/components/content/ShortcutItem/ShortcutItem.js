import React from "react";
import s from './ShortcutItem.module.css';

function ShortcutItem(props) {

    return (
        <div className={s.shortcutItemWapper}>
            <i className={s.shortcutIcon}>{props.symbolCode}</i>
            <a className={s.shortcutTitle} href='/doSmth'>{props.title}</a>
        </div>
    );
}

export default ShortcutItem;