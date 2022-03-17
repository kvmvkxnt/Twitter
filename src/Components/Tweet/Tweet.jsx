import React from 'react';
import './Tweet.scss';
import user1 from '../../Assets/Images/Ellipse3.png';
import user2 from '../../Assets/Images/Ellipse3@2x.png';
import TweetIcons from '../Lib/Icons/TweetIcons';

function Tweet({ className, name, username, time, tweet }) {
    return (
        <li className={`tweet__item ${className}__item`}>
            <a href="#link" className={`tweet__user ${className}__user`}>
                <img src={user1} srcSet={`${user1} 1x, ${user2} 2x`} alt="User" />
            </a>

            <div className={`tweet__tweet-info ${className}__tweet-info`}>
                <a href='#link3' className={`tweet__tweet-info__user ${className}__tweet-info__user`}><span className='name'>{name}cloutexhibition</span> {username}@RajLahoti &bull; {time}25m</a>
                <p className={`tweet__tweet-info__tweet ${className}__tweet-info__tweet`}>
                    {tweet}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quas quaerat nam ratione id accusamus, odio iusto, soluta repellendus dolor in doloribus iure quos aliquam? Nemo, quos molestiae? Cupiditate, nulla.
                </p>
                <div className={`tweet__tweet-info__buttons ${className}__tweet-info__buttons`}>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='comments' />
                        5
                    </button>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='retweet' />
                    </button>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='like' />
                    </button>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='share' />
                    </button>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='stats' />
                    </button>
                </div>
            </div>

            <button className={`tweet__button ${className}__button`}>
                &bull;&bull;&bull;
            </button>
        </li>
    )
}

export default Tweet;