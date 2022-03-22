import React from 'react';
import './Tweet.scss';
import TweetIcons from '../Lib/Icons/TweetIcons';
import PropTypes from 'prop-types';
import userImage from '../../Assets/Images/noUserImage.webp';
import { Context as LangContext } from '../../Context/Language/Language';
import languages from '../../Localization/languages';

function Tweet({ className, name, username, time, tweet, imageSrc1, imageSrc2, imageSrc3, imageSrc4, active1, active2, pinned, tweetId }) {
    const ctxLang = React.useContext(LangContext);

    return (
        <li className={`tweet__item ${className}__item`} data-tweet-id={tweetId}>
            {pinned ? <p className='tweet__pin'><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8625 12.675C16.55 11.2208 14.9108 9.75335 13.5208 9.23751L13.0675 5.11418L14.3133 3.24585C14.4441 3.04918 14.4566 2.79751 14.3441 2.59001C14.2325 2.38168 14.0175 2.25418 13.7816 2.25418H6.16497C5.92831 2.25418 5.71331 2.38251 5.60164 2.59001C5.48997 2.79835 5.50164 3.05085 5.63331 3.24668L6.88164 5.11918L6.47831 9.23835C5.08831 9.75501 3.45081 11.2217 3.14164 12.6683C3.10831 12.8017 3.12831 13.005 3.25164 13.1633C3.33747 13.2733 3.50497 13.405 3.81831 13.405H7.19997L9.61997 18.9983C9.68497 19.1517 9.83664 19.25 10.0016 19.25C10.1666 19.25 10.3183 19.1517 10.385 18.9983L12.8041 13.4042H16.185C16.4983 13.4042 16.665 13.2742 16.7516 13.1658C16.8733 13.0092 16.895 12.8042 16.8641 12.6742L16.8625 12.675Z" fill="#536471" />
            </svg> {languages[ctxLang.lang].main.tweet.pin}</p> : null}
            <div className="tweet__tweet">
                <a href="#link" className={`tweet__user ${className}__user`}>
                    <img src={imageSrc1 ? imageSrc1 : userImage} srcSet={`${imageSrc1 ? imageSrc1 : userImage} 1x, ${imageSrc2 ? imageSrc2 : imageSrc1 ? imageSrc1 : userImage} 2x`} alt="User" />
                </a>

                <div className={`tweet__tweet-info ${className}__tweet-info`}>
                    <a href='#link3' className={`tweet__tweet-info__user ${className}__tweet-info__user`}><span className='name'>{name}</span> {username} &bull; {time}</a>
                    <p className={`tweet__tweet-info__tweet ${className}__tweet-info__tweet`}>
                        {tweet}
                    </p>

                    {!imageSrc3 ? null : <img src={imageSrc3} srcSet={`${imageSrc3} 1x, ${imageSrc4} 2x`} alt="some" className={`tweet__tweet-info__img ${className}__tweet-info__img`} />}

                    <div className={`tweet__tweet-info__buttons ${className}__tweet-info__buttons`}>
                        <button className={`tweet__tweet-info__button ${className}__tweet-info__button comments`} data-tweet-id={tweetId}>
                            <TweetIcons type='comments' />
                            <span className={`tweet__tweet-info__number ${className}__tweet-info__number`}>1000</span>
                        </button>
                        <button className={`tweet__tweet-info__button ${className}__tweet-info__button retweet`} data-tweet-id={tweetId}>
                            <TweetIcons type='retweet' active={active1} />
                            <span className={`tweet__tweet-info__number ${className}__tweet-info__number`}>1000</span>
                        </button>
                        <button className={`tweet__tweet-info__button ${className}__tweet-info__button likes`} data-tweet-id={tweetId}>
                            <TweetIcons type='like' active={active2} />
                            <span className={`tweet__tweet-info__number ${className}__tweet-info__number`}>1000</span>
                        </button>
                        <button className={`tweet__tweet-info__button ${className}__tweet-info__button shares`} data-tweet-id={tweetId}>
                            <TweetIcons type='share' />
                        </button>
                        <button className={`tweet__tweet-info__button ${className}__tweet-info__button stats`} data-tweet-id={tweetId}>
                            <TweetIcons type='stats' />
                        </button>
                    </div>
                </div>

                <button className={`tweet__button ${className}__button`}>
                    &bull;&bull;&bull;
                </button>
            </div>
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
    pinned: PropTypes.bool
}

Tweet.defaultProps = {
    active1: false,
    acitve2: false,
    pinned: false,
}

export default Tweet;