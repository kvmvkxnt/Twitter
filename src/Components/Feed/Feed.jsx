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
                        <textarea type="text" className="feed__input" placeholder={languages[ctxLang.lang].main.feed.form.input} rows={1} onInput={(evt) => {
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
                <ul className="feed__list">
                    <Tweet className='feed' name='Designta' pinned={true} username='@inner' time='25m' imageSrc1={user1_1} imageSrc2={user1_2} tweet={languages[ctxLang.lang].main.feed.tweets.tweet1} />
                    <Tweet className='feed' active2={true} name='cloutexhibition' username='@cloutexhibition' time='22m' imageSrc1={user2_1} imageSrc2={user2_2} tweet={languages[ctxLang.lang].main.feed.tweets.tweet2} />
                    <Tweet className='feed' active1={true} name='CreativePhoto' username='@RajLahoti' time='1h' imageSrc1={user3_1} imageSrc2={user3_2} imageSrc3={user3_3} imageSrc4={user3_4} tweet={languages[ctxLang.lang].main.feed.tweets.tweet3} />
                </ul>
            </div>
        </div>
    )
}

export default Feed;