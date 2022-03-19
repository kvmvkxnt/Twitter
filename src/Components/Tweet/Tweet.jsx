import React from 'react';
import './Tweet.scss';
import TweetIcons from '../Lib/Icons/TweetIcons';
import PropTypes from 'prop-types';
import userImage from '../../Assets/Images/noUserImage.webp';

function Tweet({ className, name, username, time, tweet, imageSrc1, imageSrc2, imageSrc3, imageSrc4, active1, active2 }) {
    return (
        <li className={`tweet__item ${className}__item`}>
            <a href="#link" className={`tweet__user ${className}__user`}>
                <img src={imageSrc1} srcSet={`${imageSrc1} 1x, ${imageSrc2} 2x`} alt="User" />
            </a>

            <div className={`tweet__tweet-info ${className}__tweet-info`}>
                <a href='#link3' className={`tweet__tweet-info__user ${className}__tweet-info__user`}><span className='name'>{name}</span> {username} &bull; {time}</a>
                <p className={`tweet__tweet-info__tweet ${className}__tweet-info__tweet`}>
                    {tweet}
                </p>

                {!imageSrc3 ? null : <img src={imageSrc3} srcSet={`${imageSrc3} 1x, ${imageSrc4} 2x`} alt="some" className={`tweet__tweet-info__img ${className}__tweet-info__img`}/>}

                <div className={`tweet__tweet-info__buttons ${className}__tweet-info__buttons`}>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='comments' />
                        <span className={`tweet__tweet-info__number ${className}__tweet-info__number`}>1000</span>
                    </button>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='retweet' active={active1}/>
                        <span className={`tweet__tweet-info__number ${className}__tweet-info__number`}>1000</span>
                    </button>
                    <button className={`tweet__tweet-info__button ${className}__tweet-info__button`}>
                        <TweetIcons type='like' active={active2}/>
                        <span className={`tweet__tweet-info__number ${className}__tweet-info__number`}>1000</span>
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

Tweet.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    imageSrc1: PropTypes.string,
    imageSrc2: PropTypes.string,
    imageSrc3: PropTypes.string,
    imageSrc4: PropTypes.string,
    active1: PropTypes.bool,
    active2: PropTypes.bool,
}

Tweet.defaultProps = {
    imageSrc1: userImage,
    imageSrc2: userImage,
    active1: false,
    acitve2: false,
}

export default Tweet;