import React from 'react';
import './Feed.scss';
import Stars from '../Lib/Icons/Stars';
import user1 from '../../Assets/Images/Ellipse3.png';
import user2 from '../../Assets/Images/Ellipse3@2x.png';
import TweetButton from '../Lib/Icons/TweetButton';
import Tweet from '../Tweet/Tweet';
import user1_1 from '../../Assets/Images/inner.png';
import user1_2 from '../../Assets/Images/inner@2x.png';
import user2_1 from '../../Assets/Images/cloud@2x.png';
import user2_2 from '../../Assets/Images/cloud@2x.png';
import user3_1 from '../../Assets/Images/creative.png';
import user3_2 from '../../Assets/Images/creative@2x.png';
import user3_3 from '../../Assets/Images/image8.png';
import user3_4 from '../../Assets/Images/image8@2x.png';
import { Context as ThemeContext } from '../../Context/Theme/Theme';
import { Context as LangContext } from '../../Context/Language/Language';
import languages from '../../Localization/languages';

function Feed() {
    const ctxTheme = React.useContext(ThemeContext);
    const ctxLang = React.useContext(LangContext);
    const tweets = [
        {
            id: 0,
            reply: false,
            like: false,
        },
        {
            id: 1,
            reply: false,
            like: false,
        },
        {
            id: 2,
            reply: false,
            like: false,
        }
    ]

    const [editabletweets, setTweets] = React.useState(tweets);

    function notActive(clicked) {
        const amount = Number(clicked.querySelector('.tweet__tweet-info__number').textContent);
        clicked.querySelector('.tweet__tweet-info__number').textContent = amount - 1;
        clicked.classList.remove('active');
    }

    function beActive(clicked) {
        const amount = Number(clicked.querySelector('.tweet__tweet-info__number').textContent);
        clicked.querySelector('.tweet__tweet-info__number').textContent = amount + 1;
        clicked.classList.add('active');
    }

    return (
        <div className='feed'>
            <div className="feed__inner">
                <div className="feed__heading">
                    <h1 className="feed__title">{languages[ctxLang.lang].main.feed.heading}</h1>
                    <select className="feed__select" defaultValue={ctxLang.lang} onChange={(evt) => {
                        ctxLang.setLang(evt.target.value);
                    }}>
                        <option value="eng">ENG</option>
                        <option value="rus">RUS</option>
                        <option value="uzb">UZB</option>
                    </select>
                    <button className='feed__button' onClick={() => {
                        if (ctxTheme.theme === 'dark') {
                            ctxTheme.setTheme('light')
                        } else {
                            ctxTheme.setTheme('dark');
                        }
                    }}>
                        <Stars />
                    </button>
                </div>
                <div className="feed__tweet">
                    <img src={user1} alt="User1" className='feed__user' srcSet={`${user1} 1x, ${user2} 2x`} />
                    <form className="feed__form">
                        <textarea type="text" id='feed_input' className="feed__input" placeholder={languages[ctxLang.lang].main.feed.form.input} rows={1} onInput={(evt) => {
                            evt.target.style.height = 'auto';
                            evt.target.style.height = evt.target.scrollHeight + 'px';
                        }} />
                        <div className="feed__buttons">
                            <TweetButton type='image' />
                            <TweetButton type='gif' />
                            <TweetButton type='stats' />
                            <TweetButton type='smile' />
                            <TweetButton type='schedule' />
                        </div>
                        <input type="submit" value={languages[ctxLang.lang].main.feed.form.button} className='feed__submit' />
                    </form>
                </div>
                <ul className="feed__list" onClick={(evt) => {
                    const clicked = evt.target;
                    console.log(editabletweets);

                    if (clicked.matches('.tweet__tweet-info__button')) {
                        if (clicked.matches('.comments')) {
                            if (clicked.matches('.active')) {
                                notActive(clicked);
                            } else {
                                beActive(clicked);
                            }
                        }

                        if (clicked.matches('.retweet')) {
                            if (clicked.matches('.active')) {
                                notActive(clicked);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.dataset.tweetId));
                                editTweet.reply = false;
                                setTweets(newTweets);
                            } else {
                                beActive(clicked);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.dataset.tweetId));
                                editTweet.reply = true;
                                setTweets(newTweets);
                            }
                        }

                        if (clicked.matches('.likes')) {
                            if (clicked.matches('.active')) {
                                notActive(clicked);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.dataset.tweetId));
                                editTweet.like = false;
                                setTweets(newTweets);
                            } else {
                                beActive(clicked);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.dataset.tweetId));
                                editTweet.like = true;
                                setTweets(newTweets);
                            }
                        }
                    } else if (clicked.matches('svg') || clicked.matches('.tweet__tweet-info__number')) {
                        if (clicked.parentNode.matches('.comments')) {
                            if (clicked.parentNode.matches('.active')) {
                                notActive(clicked.parentNode);
                            } else {
                                beActive(clicked.parentNode);
                            }
                        }

                        if (clicked.parentNode.matches('.retweet')) {
                            if (clicked.parentNode.matches('.active')) {
                                notActive(clicked.parentNode);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.parentNode.dataset.tweetId));
                                editTweet.reply = false;
                                setTweets(newTweets);
                            } else {
                                beActive(clicked.parentNode);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.parentNode.dataset.tweetId));
                                editTweet.reply = true;
                                setTweets(newTweets);
                            }
                        }

                        if (clicked.parentNode.matches('.likes')) {
                            if (clicked.parentNode.matches('.active')) {
                                notActive(clicked.parentNode);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.parentNode.dataset.tweetId));
                                editTweet.like = false;
                                setTweets(newTweets);
                            } else {
                                beActive(clicked.parentNode);
                                const newTweets = [...editabletweets];
                                const editTweet = newTweets.find((tweet) => tweet.id === Number(clicked.parentNode.dataset.tweetId));
                                editTweet.like = true;
                                setTweets(newTweets);
                            }
                        }
                    }
                }}>

                    <Tweet className='feed' key={tweets[0].id} tweetId={tweets[0].id} active1={tweets[0].reply} active2={tweets[0].like} name='Designta' pinned={true} username='@inner' time='25m' imageSrc1={user1_1} imageSrc2={user1_2} tweet={languages[ctxLang.lang].main.feed.tweets.tweet1} />
                    <Tweet className='feed' key={tweets[1].id} tweetId={tweets[1].id} active1={tweets[1].reply} active2={tweets[1].like} name='cloutexhibition' username='@cloutexhibition' time='22m' imageSrc1={user2_1} imageSrc2={user2_2} tweet={languages[ctxLang.lang].main.feed.tweets.tweet2} />
                    <Tweet className='feed' key={tweets[2].id} tweetId={tweets[2].id} active1={tweets[2].reply} active2={tweets[2].like} name='CreativePhoto' username='@RajLahoti' time='1h' imageSrc1={user3_1} imageSrc2={user3_2} imageSrc3={user3_3} imageSrc4={user3_4} tweet={languages[ctxLang.lang].main.feed.tweets.tweet3} />
                </ul>
            </div>
        </div >
    )
}

export default Feed;