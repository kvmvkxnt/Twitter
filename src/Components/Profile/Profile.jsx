import './Profile.scss';
import React from 'react';
import PropTypes from 'prop-types';
import profile1 from '../../Assets/Images/profile.png';
import profile2 from '../../Assets/Images/profile@2x.png';
import nouser from '../../Assets/Images/noUserImage.webp';
// import user1 from '../../Assets/Images/profile-rounded.png';
// import user2 from '../../Assets/Images/profile-rounded@2x.png';
import { Context as ThemeContext } from '../../Context/Theme/Theme';
import { Context as LangContext } from '../../Context/Language/Language';
import Stars from '../Lib/Icons/Stars';
import Tweet from '../Tweet/Tweet';
// import tweet1 from '../../Assets/Images/usertweet.png';
// import tweet2 from '../../Assets/Images/usertweet@2x.png';
import languages from '../../Localization/languages';

function Profile({ username, name, imgSrc, tweets }) {
    const ctxTheme = React.useContext(ThemeContext);
    const ctxLang = React.useContext(LangContext);

    return (
        <div className='profile'>
            <div className="profile__inner">
                <div className="profile__header">
                    <div className="profile__header__heading">
                        <button className='profile__header__button'>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z" fill="black" />
                            </svg>
                        </button>
                        <div className="profile__header__info">
                            <h1 className="profile__header__name">{name}</h1>
                            <p className="profile__header__amount">1,070 {languages[ctxLang.lang].main.profile.amount}</p>
                        </div>
                    </div>

                    <select className="profile__header__select" defaultValue={ctxLang.lang} onChange={(evt) => {
                        ctxLang.setLang(evt.target.value);
                    }}>
                        <option value="eng">ENG</option>
                        <option value="rus">RUS</option>
                        <option value="uzb">UZB</option>
                    </select>

                    <button className='profile__header__theme' onClick={() => {
                        if (ctxTheme.theme === 'dark') {
                            ctxTheme.setTheme('light')
                        } else {
                            ctxTheme.setTheme('dark');
                        }
                    }}>
                        <Stars />
                    </button>
                </div>

                <img src={profile1} srcSet={`${profile1} 1x, ${profile2} 2x`} alt="Some logo" />

                <div className="profile__info">
                    <img src={imgSrc ? imgSrc : nouser} alt="user" srcSet={`${imgSrc ? imgSrc : nouser} 1x, ${imgSrc ? imgSrc : nouser} 2x`} className='profile__info__image' />
                    <button className="profile__info__edit">{languages[ctxLang.lang].main.profile.profile_info.edit}</button>

                    <h2 className="profile__info__name">{name}</h2>
                    <p className="profile__info__username">{username}</p>

                    <p className="profile__info__desc">UX&UI designer at <a href='#link' className='desc_link'>@abutechuz</a></p>

                    <div className="profile__info__overview">
                        <p className="profile__info__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path d="M12 14.315C9.912 14.315 8.213 12.617 8.213 10.529C8.213 8.44099 9.913 6.73999 12 6.73999C14.087 6.73999 15.787 8.43999 15.787 10.527C15.787 12.614 14.087 14.312 12 14.312V14.315ZM12 8.24199C10.74 8.24199 9.713 9.26799 9.713 10.529C9.713 11.79 10.74 12.814 12 12.814C13.26 12.814 14.287 11.789 14.287 10.528C14.287 9.26699 13.26 8.23999 12 8.23999V8.24199Z" fill="black" />
                                    <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2C7.208 2 3.308 5.9 3.308 10.69C3.308 12.592 3.911 14.398 5.051 15.913L5.054 15.911L5.061 15.926C6.689 17.996 11.339 21.683 11.536 21.838C11.674 21.948 11.838 22.001 12.001 22.001C12.164 22.001 12.328 21.948 12.466 21.839C12.663 21.684 17.313 17.999 18.941 15.927L18.948 15.913L18.95 15.915C20.09 14.399 20.692 12.595 20.692 10.692V10.69ZM12 20.29C10.776 19.3 7.48 16.575 6.244 15.005C5.304 13.755 4.808 12.263 4.808 10.693C4.808 6.727 8.035 3.5 12 3.5C15.965 3.5 19.192 6.726 19.192 10.69C19.192 12.26 18.695 13.752 17.756 15.003C16.52 16.573 13.224 19.297 12 20.288V20.29Z" fill="black" />
                                </g>
                            </svg>
                            Mashag'daman
                        </p>

                        <a href='#dwlink' className="profile__info__item profile__info__link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path d="M11.96 14.945C11.893 14.945 11.824 14.935 11.757 14.918C10.627 14.6 9.66 13.932 8.962 12.986C8.13 11.861 7.786 10.478 7.994 9.09299C8.202 7.70799 8.936 6.48799 10.062 5.65499L13.592 3.04699C15.914 1.33099 19.202 1.82299 20.922 4.14699C21.752 5.27399 22.097 6.65699 21.889 8.04199C21.681 9.42699 20.946 10.647 19.819 11.48L18.339 12.574C18.006 12.82 17.535 12.749 17.289 12.416C17.043 12.082 17.113 11.612 17.447 11.366L18.927 10.271C19.73 9.67899 20.254 8.80799 20.403 7.82099C20.551 6.83299 20.305 5.84599 19.713 5.04299C18.488 3.38699 16.141 3.03299 14.483 4.25899L10.953 6.86699C10.151 7.45999 9.627 8.33099 9.478 9.31699C9.328 10.307 9.575 11.292 10.168 12.095C10.666 12.77 11.355 13.245 12.16 13.472C12.56 13.586 12.793 14 12.68 14.4C12.588 14.73 12.286 14.947 11.958 14.947L11.96 14.945Z" fill="black" />
                                    <path d="M7.27 22.054C5.66 22.054 4.073 21.319 3.045 19.929C2.213 18.802 1.869 17.419 2.077 16.035C2.285 14.651 3.02 13.43 4.147 12.597L5.625 11.503C5.959 11.258 6.43 11.328 6.675 11.661C6.92 11.994 6.852 12.465 6.518 12.711L5.038 13.806C4.235 14.399 3.712 15.27 3.563 16.256C3.415 17.246 3.66 18.231 4.253 19.034C5.478 20.691 7.823 21.044 9.483 19.819L13.011 17.211C14.669 15.986 15.021 13.641 13.796 11.981C13.298 11.307 12.609 10.831 11.804 10.605C11.404 10.492 11.171 10.078 11.284 9.67798C11.396 9.27798 11.812 9.04798 12.21 9.15598C13.34 9.47398 14.306 10.142 15.004 11.088C16.721 13.412 16.228 16.7 13.904 18.418L10.374 21.026C9.441 21.719 8.351 22.052 7.269 22.052L7.27 22.054Z" fill="black" />
                                </g>
                            </svg>
                            t.me/{username}
                        </a>

                        <p className="profile__info__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity='0.6'>
                                    <path d="M7.75 11.083C7.336 11.083 7 10.747 7 10.333C7 7.393 9.243 5 12 5C12.414 5 12.75 5.336 12.75 5.75C12.75 6.164 12.414 6.5 12 6.5C10.07 6.5 8.5 8.22 8.5 10.333C8.5 10.747 8.164 11.083 7.75 11.083Z" fill="black" />
                                    <path d="M20.75 10.333C20.75 5.323 16.825 1.25 12 1.25C7.175 1.25 3.25 5.324 3.25 10.333C3.25 14.938 6.57 18.745 10.855 19.33L9.155 21.16C9.018 21.305 8.982 21.517 9.062 21.7C9.142 21.882 9.322 22 9.522 22H14.479C14.677 22 14.857 21.882 14.936 21.7C15.016 21.517 14.98 21.305 14.844 21.16L13.144 19.33C17.429 18.745 20.749 14.938 20.749 10.333H20.75ZM12 17.917C8.002 17.917 4.75 14.515 4.75 10.333C4.75 6.151 8.002 2.75 12 2.75C15.998 2.75 19.25 6.15 19.25 10.333C19.25 14.516 15.998 17.917 12 17.917Z" fill="black" />
                                </g>
                            </svg>
                            Born November 24, 2000
                        </p>

                        <p className="profile__info__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292V19.708C2 20.972 3.028 22 4.292 22H19.708C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2ZM20.5 19.708C20.5 20.145 20.145 20.5 19.708 20.5H4.292C3.855 20.5 3.5 20.145 3.5 19.708V6.418C3.5 5.981 3.854 5.628 4.29 5.626H19.71C20.146 5.626 20.5 5.981 20.5 6.416V19.71V19.708Z" fill="black" />
                                    <path d="M7.03201 10.035C7.7417 10.035 8.31701 9.45968 8.31701 8.75C8.31701 8.04031 7.7417 7.465 7.03201 7.465C6.32232 7.465 5.74701 8.04031 5.74701 8.75C5.74701 9.45968 6.32232 10.035 7.03201 10.035Z" fill="black" />
                                    <path d="M7.03201 14.441C7.7417 14.441 8.31701 13.8657 8.31701 13.156C8.31701 12.4463 7.7417 11.871 7.03201 11.871C6.32232 11.871 5.74701 12.4463 5.74701 13.156C5.74701 13.8657 6.32232 14.441 7.03201 14.441Z" fill="black" />
                                    <path d="M16.968 10.035C17.6777 10.035 18.253 9.45968 18.253 8.75C18.253 8.04031 17.6777 7.465 16.968 7.465C16.2583 7.465 15.683 8.04031 15.683 8.75C15.683 9.45968 16.2583 10.035 16.968 10.035Z" fill="black" />
                                    <path d="M16.968 14.441C17.6777 14.441 18.253 13.8657 18.253 13.156C18.253 12.4463 17.6777 11.871 16.968 11.871C16.2583 11.871 15.683 12.4463 15.683 13.156C15.683 13.8657 16.2583 14.441 16.968 14.441Z" fill="black" />
                                    <path d="M12 10.035C12.7097 10.035 13.285 9.45968 13.285 8.75C13.285 8.04031 12.7097 7.465 12 7.465C11.2903 7.465 10.715 8.04031 10.715 8.75C10.715 9.45968 11.2903 10.035 12 10.035Z" fill="black" />
                                    <path d="M12 14.441C12.7097 14.441 13.285 13.8657 13.285 13.156C13.285 12.4463 12.7097 11.871 12 11.871C11.2903 11.871 10.715 12.4463 10.715 13.156C10.715 13.8657 11.2903 14.441 12 14.441Z" fill="black" />
                                    <path d="M7.03201 18.771C7.7417 18.771 8.31701 18.1957 8.31701 17.486C8.31701 16.7763 7.7417 16.201 7.03201 16.201C6.32232 16.201 5.74701 16.7763 5.74701 17.486C5.74701 18.1957 6.32232 18.771 7.03201 18.771Z" fill="black" />
                                    <path d="M12 18.771C12.7097 18.771 13.285 18.1957 13.285 17.486C13.285 16.7763 12.7097 16.201 12 16.201C11.2903 16.201 10.715 16.7763 10.715 17.486C10.715 18.1957 11.2903 18.771 12 18.771Z" fill="black" />
                                </g>
                            </svg>
                            {languages[ctxLang.lang].main.profile.profile_info.join} May 2020
                        </p>
                    </div>

                    <div className="profile__info__subs">
                        <p className="profile__info__follows"><span className='follow_amount'>67</span> {languages[ctxLang.lang].main.profile.profile_info.following}</p>
                        <p className="profile__info__follows"><span className='follow_amount'>47</span> {languages[ctxLang.lang].main.profile.profile_info.followers}</p>
                    </div>
                </div>

                <ul className="profile__buttons" >
                    <li className="profile__buttons__item">
                        <button className="profile__buttons__button active">{languages[ctxLang.lang].main.profile.profile_buttons.tweets}</button>
                    </li>
                    <li className="profile__buttons__item">
                        <button className="profile__buttons__button">{languages[ctxLang.lang].main.profile.profile_buttons.replies}</button>
                    </li>
                    <li className="profile__buttons__item">
                        <button className="profile__buttons__button">{languages[ctxLang.lang].main.profile.profile_buttons.media}</button>
                    </li>
                    <li className="profile__buttons__item">
                        <button className="profile__buttons__button">{languages[ctxLang.lang].main.profile.profile_buttons.likes}</button>
                    </li>
                </ul>

                <ul className="profile__tweets">
                    {!tweets ? null : tweets.map((tweet) =>
                        <Tweet name={tweet.name} username={tweet.username} tweet={tweet.text} />
                    )}
                </ul>
            </div>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    tweets: PropTypes.object.isRequired,
}

export default Profile;