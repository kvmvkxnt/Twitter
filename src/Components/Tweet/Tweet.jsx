import React from 'react';
import './Tweet.scss';
import user1 from '../../Assets/Images/Ellipse3.png';
import user2 from '../../Assets/Images/Ellipse3@2x.png';
import TweetIcons from '../Lib/Icons/TweetIcons';

function Tweet({className, name, username, time, tweet}) {
    return (
        <li className={`tweet ${className}__item`}>
            <a href="#link" className={`${className}__user`}>
                <img src={user1} srcSet={`${user1} 1x, ${user2} 2x`} alt="User" />
            </a>

            <div className={`${className}__tweet-info`}>
                <p className={`${className}__tweet-info__user`}>{name}<span>{username}</span> &bull; <span>{time}</span></p>
                <p className={`${className}__tweet-info__tweet`}>
                    {tweet}
                </p>
                <div className={`${className}__tweet-info__buttons`}>
                    <TweetIcons type='stats' />
                </div>
            </div>
        </li>
    )
}

export default Tweet;