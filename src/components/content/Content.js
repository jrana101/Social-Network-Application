import React from "react";
import s from './Content.module.css';
import avatar1 from './../../images/friends/friend-avatar.jpg';
import avatar2 from './../../images/friends/friend-avatar2.jpg';
import avatar3 from './../../images/friends/friend-avatar3.jpg';
import avatar4 from './../../images/friends/friend-avatar4.jpg';
import avatar5 from './../../images/friends/friend-avatar5.jpg';
import avatar6 from './../../images/friends/friend-avatar6.jpg';
import avatar7 from './../../images/friends/friend-avatar7.jpg';
import avatar8 from './../../images/friends/friend-avatar8.jpg';
import Friend from './Friend/Friend.js';
import ShortcutItem from './ShortcutItem/ShortcutItem.js';

function Content() {

    return <div className={s.content}>
        <div className={s.contentMenu}>
            <div className={s.userNameRole}>
                <div className={s.userName}>Janice Griffith</div>
                <div className={s.userRole}>Group Admin</div>
            </div>
            <div className={s.contentMenuItem}>Timeline</div>
            <div className={s.contentMenuItem}>Photos</div>
            <div className={s.contentMenuItem}>Videos</div>
            <div className={s.contentMenuItem}>Friends</div>
            <div className={s.contentMenuItem}>Groups</div>
            <div className={s.contentMenuItem}>About</div>
            <div className={s.contentMenuItem}>More</div>

        </div>
        <div className={s.contentContainer}>

            <div className={s.lefColumn}>
                <div className={s.socialContainer}>
                    <b>Social:</b><br/>
                    Facebook<br/>
                    Twitter<br/>
                    Google<br/>
                </div>

                <div className={s.shortcutsContainer}>
                    <b>Shortcuts:</b><br/>
                   <ShortcutItem symbolCode='&#xe6b4;' title='News Feed'/>
                   <ShortcutItem symbolCode='&#xe68b;' title='Inbox'/>
                   <ShortcutItem symbolCode='&#xe6a3;' title='My Pages'/>
                   <ShortcutItem symbolCode='&#xe602;' title='Friends'/>
                   <ShortcutItem symbolCode='&#xe633;' title='Images'/>
                   <ShortcutItem symbolCode='&#xe6cf;' title='Videos'/>
                   <ShortcutItem symbolCode='&#xe726;' title='Messages'/>
                   <ShortcutItem symbolCode='&#xe6b8;' title='Notifications'/>
                   <ShortcutItem symbolCode='&#xe72e;' title='People Nearby'/>
                   <ShortcutItem symbolCode='&#xf080;' title='Insights' />
                   <ShortcutItem symbolCode='&#xe682;' title='Logout'/>
                </div>
            </div>

            <div className={s.feed}>
                feed
            </div>

            <div className={s.rightColumn}>
                <div className={s.favouritePageBlock}>
                    <div className={s.image}>
                        <div>Some text</div>
                    </div>
                </div>

                <div className={s.friendsBlock}>
                    <div className={s.friendList}>
                        <Friend avatar={avatar1} name='Bucky Barnes' email='wintersolder@gmail.com'/>
                        <Friend avatar={avatar2} name='Sarah Loren' email='bames@gmail.com'/>
                        <Friend avatar={avatar3} name='Jason Borne' email='jasonb@gmail.com'/>
                        <Friend avatar={avatar4} name='Cameron Diaz' email='camerond@gmail.com'/>
                        <Friend avatar={avatar5} name='Daniel Warbeer' email='danielwarb@gmail.com'/>
                        <Friend avatar={avatar6} name='Andrew' email='andrewn@gmail.com'/>
                    </div>
                </div>
                right column
            </div>
        </div>

    </div>
}

export default Content;