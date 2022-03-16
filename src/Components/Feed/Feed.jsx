import React from 'react';
import './Feed.scss';
import Stars from '../Lib/Icons/Stars';
import user1 from '../../Assets/Images/Ellipse3.png';
import user2 from '../../Assets/Images/Ellipse3@2x.png';
import TweetButton from '../Lib/Icons/TweetButton';
import Tweet from '../Tweet/Tweet';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inner">
                <div className="feed__heading">
                    <h1 className="feed__title">Home</h1>
                    <button className='feed__button'>
                        <Stars />
                    </button>
                </div>
                <div className="feed__tweet">
                    <img src={user1} alt="User1" className='feed__user' srcSet={`${user1} 1x, ${user2} 2x`} />
                    <form className="feed__form">
                        <textarea type="text" className="feed__input" placeholder="What's happening" rows={1}/>
                        <div className="feed__buttons">
                            <TweetButton type='image'/>
                            <TweetButton type='gif'/>
                            <TweetButton type='stats'/>
                            <TweetButton type='smile'/>
                            <TweetButton type='schedule'/>
                        </div>
                        <input type="submit" value="Tweet" className='feed__submit' disabled/>
                    </form>
                </div>
                <ul className="feed__list">
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                    <Tweet/>
                </ul>
            </div>
        </div>
    )
}

export default Feed;