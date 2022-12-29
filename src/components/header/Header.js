import logo from "../../images/logo.png";
import userImg from "../../images/admin.jpg";
import backProfileImg from "../../images/timeline-1.jpg";
import userAvatar from "../../images/user-avatar.jpg";
import React from "react";
import s from './Header.module.css';
import TopMenuItem from './TopMenuItem/TopMenuItem.js';
import SettingItem from './SettingItem/SettingItem.js';

function Header() {
    return <div className={s.header}>
        <div className={s.topMenu}>
            <img src={logo} className={s.logo} />
            <TopMenuItem title='Home'/>
            <TopMenuItem title='Timeline'/>
            <TopMenuItem title='Account Settings'/>
            <TopMenuItem title='More Pages'/>

            <div className={s.settingArea}>
                <SettingItem styleName={s.searchIcon}/>
                <SettingItem styleName={s.homeIcon}/>
                <SettingItem styleName={s.notificationIcon}/>
                <SettingItem styleName={s.messageIcon}/>
                <SettingItem styleName={s.languageIcon}/>
            </div>

            <div className={s.userImage}>
                <img src={userImg}/>
            </div>

            <div className={s.burgerMenu}><i className={s.burgerMenuIcon}/> </div>

        </div>
        <div className='profileBackImg'>
            <img src={backProfileImg} />
        </div>
        <div className={s.profileImg}>
            <img src={userAvatar} className={s.userAvatar}/>
        </div>
    </div>
}

export default Header;