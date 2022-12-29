import React from "react";
import s from './TopMenuItem.module.css';

function TopMenuItem(props) {

    return <div className={s.menuItem}>{props.title}<i className={s.downArrow}/></div>
}

export default TopMenuItem;