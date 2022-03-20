import './Recomendations.scss';
import React from 'react';
import user1_1 from '../../Assets/Images/mushtariy.png';
import user1_2 from '../../Assets/Images/mushtariy@2x.png';
import user2_1 from '../../Assets/Images/shuhrat.png';
import user2_2 from '../../Assets/Images/shuhrat@2x.png';
import languages from '../../Localization/languages';
import { Context as LangContext } from '../../Context/Language/Language';
import tweet1_1 from '../../Assets/Images/tweet1.png';
import tweet1_2 from '../../Assets/Images/tweet1@2x.png';
import tweet2_1 from '../../Assets/Images/tweet2.png';
import tweet2_2 from '../../Assets/Images/tweet2@2x.png';
import tweet3_1 from '../../Assets/Images/tweet3.png';
import tweet3_2 from '../../Assets/Images/tweet3@2x.png';
import tweet4_1 from '../../Assets/Images/tweet4.png';
import tweet4_2 from '../../Assets/Images/tweet4@2x.png';
import tweet5_1 from '../../Assets/Images/tweet5.png';
import tweet5_2 from '../../Assets/Images/tweet5@2x.png';
import tweet6_1 from '../../Assets/Images/tweet6.png';
import tweet6_2 from '../../Assets/Images/tweet6@2x.png';

function Recomendations() {
    const ctxLang = React.useContext(LangContext);

    return (
        <div className='recs'>
            <div className="recs__inner">
                <form className="recs__search">
                    <button className="recs__search__button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_11_1470" mask='alpha' maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#C4C4C4" />
                            </mask>
                            <g mask="url(#mask0_11_1470)">
                                <path d="M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z" fill="#5C6C79" />
                            </g>
                        </svg>

                    </button>
                    <input type="text" className="recs__search__input" placeholder={languages[ctxLang.lang].main.recs.input} />
                </form>

                <ul className="recs__tweets">
                    <li className="recs__tweets__item">
                        <img src={tweet1_1} srcSet={`${tweet1_1} 1x, ${tweet1_2} 2x`} alt="something" />
                    </li>
                    <li className="recs__tweets__item">
                        <img src={tweet2_1} srcSet={`${tweet2_1} 1x, ${tweet2_2} 2x`} alt="something" />
                    </li>
                    <li className="recs__tweets__item">
                        <img src={tweet3_1} srcSet={`${tweet3_1} 1x, ${tweet3_2} 2x`} alt="something" />
                    </li>
                    <li className="recs__tweets__item">
                        <img src={tweet4_1} srcSet={`${tweet4_1} 1x, ${tweet4_2} 2x`} alt="something" />
                    </li>
                    <li className="recs__tweets__item">
                        <img src={tweet5_1} srcSet={`${tweet5_1} 1x, ${tweet5_2} 2x`} alt="something" />
                    </li>
                    <li className="recs__tweets__item">
                        <img src={tweet5_1} srcSet={`${tweet6_1} 1x, ${tweet6_2} 2x`} alt="something" />
                    </li>
                </ul>

                <div className="recs__trends">
                    <div className="recs__trends__heading">
                        <h2 className="recs__trends__title">{languages[ctxLang.lang].main.recs.trends.heading}</h2>
                        <button className="recs__trends__settings">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_11_1488" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                    <rect x="0.00012207" width="24" height="24" fill="#C4C4C4" />
                                </mask>
                                <g mask="url(#mask0_11_1488)">
                                    <path d="M11.7901 8.23193C9.70012 8.23193 8.00012 9.93193 8.00012 12.0219C8.00012 14.1119 9.70012 15.8119 11.7901 15.8119C13.8801 15.8119 15.5801 14.1119 15.5801 12.0219C15.5801 9.93193 13.8801 8.23193 11.7901 8.23193ZM11.7901 14.3119C10.5281 14.3119 9.50012 13.2859 9.50012 12.0219C9.50012 10.7579 10.5301 9.73193 11.7901 9.73193C13.0501 9.73193 14.0801 10.7579 14.0801 12.0219C14.0801 13.2859 13.0521 14.3119 11.7901 14.3119Z" fill="black" />
                                    <path d="M11.7371 22.75H11.0151C9.83212 22.75 8.86113 21.862 8.75313 20.686L8.73912 20.539C8.71412 20.252 8.53212 20.006 8.26712 19.895C7.98112 19.775 7.68512 19.83 7.46912 20.01L7.35312 20.107C6.48512 20.832 5.10012 20.77 4.29312 19.967L3.78313 19.457C2.94713 18.617 2.88713 17.303 3.64313 16.397L3.74112 16.279C3.92712 16.057 3.97111 15.756 3.86311 15.492C3.75311 15.22 3.50512 15.038 3.21712 15.012L3.06712 14.998C1.88712 14.891 1.00012 13.918 1.00012 12.736V12.014C1.00012 10.831 1.88812 9.86 3.06412 9.752L3.22012 9.738C3.50512 9.713 3.75012 9.531 3.86212 9.265C3.97212 8.995 3.92713 8.692 3.74213 8.47L3.64812 8.354C2.89112 7.446 2.95013 6.131 3.78513 5.294L4.29712 4.782C5.10112 3.978 6.48512 3.917 7.35712 4.642L7.47311 4.74C7.69111 4.924 8.00112 4.97 8.26312 4.862C8.53312 4.75 8.71513 4.504 8.74013 4.219L8.75412 4.066C8.86112 2.886 9.83413 2 11.0161 2H11.7381C12.9211 2 13.8921 2.888 14.0001 4.064L14.0141 4.22C14.0391 4.505 14.2201 4.75 14.4861 4.86C14.7631 4.977 15.0661 4.922 15.2801 4.743L15.4001 4.641C16.2671 3.918 17.6541 3.979 18.4601 4.781L18.9701 5.293C19.8061 6.131 19.8661 7.446 19.1101 8.353L19.0101 8.471C18.8221 8.691 18.7761 8.993 18.8871 9.259C18.9991 9.529 19.2471 9.709 19.5331 9.737L19.6851 9.751C20.8651 9.858 21.7521 10.831 21.7521 12.013V12.736C21.7521 13.919 20.8641 14.89 19.6881 14.998L19.5331 15.012C19.2491 15.036 19.0031 15.217 18.8931 15.482C18.7801 15.754 18.8261 16.056 19.0101 16.277L19.1101 16.397C19.8661 17.302 19.8061 18.617 18.9701 19.457L18.4601 19.967C17.6531 20.771 16.2701 20.831 15.4001 20.107L15.2851 20.011C15.0681 19.828 14.7551 19.781 14.4951 19.889C14.2221 20.003 14.0401 20.249 14.0151 20.535L14.0011 20.685C13.8941 21.858 12.9211 22.745 11.7391 22.745L11.7371 22.75ZM7.96413 18.33C8.26413 18.33 8.55712 18.39 8.83412 18.505C9.62412 18.833 10.1581 19.559 10.2341 20.401L10.2481 20.548C10.2851 20.948 10.6151 21.248 11.0181 21.248H11.7401C12.1401 21.248 12.4701 20.948 12.5081 20.548L12.5221 20.4C12.5981 19.558 13.1321 18.833 13.9141 18.508C14.7071 18.178 15.6101 18.326 16.2471 18.858L16.3601 18.952C16.5381 19.1 16.7261 19.132 16.8531 19.132C17.0591 19.132 17.2531 19.052 17.3991 18.905L17.9091 18.395C18.1931 18.111 18.2141 17.665 17.9571 17.357L17.8571 17.237C17.3151 16.587 17.1801 15.697 17.5051 14.914C17.8311 14.124 18.5571 13.594 19.3991 13.517L19.5541 13.503C19.9511 13.466 20.2541 13.136 20.2541 12.733V12.011C20.2541 11.611 19.9511 11.281 19.5521 11.243L19.4001 11.229C18.5541 11.151 17.8301 10.619 17.5051 9.836C17.1791 9.048 17.3151 8.158 17.8581 7.509L17.9581 7.391C18.2151 7.081 18.1941 6.635 17.9101 6.351L17.4001 5.841C17.2541 5.694 17.0601 5.614 16.8541 5.614C16.7271 5.614 16.5391 5.646 16.3621 5.794L16.2421 5.894C15.6081 6.422 14.6921 6.564 13.9201 6.248C13.1321 5.921 12.6001 5.196 12.5231 4.352L12.5091 4.197C12.4741 3.8 12.1441 3.497 11.7421 3.497H11.0191C10.6191 3.497 10.2891 3.8 10.2511 4.199L10.2371 4.351C10.1611 5.194 9.62912 5.919 8.84712 6.244C8.06012 6.57 7.15412 6.427 6.51712 5.894L6.39912 5.798C6.21912 5.648 6.03111 5.618 5.90411 5.618C5.69811 5.618 5.50412 5.698 5.35812 5.844L4.84612 6.354C4.56412 6.638 4.54313 7.084 4.80013 7.392L4.90012 7.51C5.44012 8.163 5.57712 9.054 5.25212 9.835C4.92512 10.623 4.20012 11.155 3.35712 11.232L3.20113 11.246C2.80413 11.283 2.50111 11.613 2.50111 12.016V12.738C2.50111 13.138 2.80413 13.468 3.20312 13.506L3.35312 13.52C4.20112 13.598 4.92612 14.132 5.25012 14.916C5.57512 15.702 5.44013 16.591 4.89713 17.241L4.80112 17.356C4.54112 17.666 4.56312 18.112 4.84712 18.396L5.35712 18.906C5.50312 19.053 5.69712 19.133 5.90312 19.133C6.03012 19.133 6.21813 19.103 6.39513 18.953L6.51112 18.857C6.91712 18.521 7.43413 18.333 7.96413 18.333V18.33Z" fill="black" />
                                </g>
                            </svg>
                        </button>
                    </div>

                    <ul className="recs__trends__list">
                        <li className="recs__trends__item">
                            <div className="recs__trends__info">
                                <p className="recs__trends__location">{languages[ctxLang.lang].main.recs.trends.where}</p>
                                <h4 className="recs__trends__name">{languages[ctxLang.lang].main.recs.trends.name}</h4>
                                <p className="recs__trends__amount">{languages[ctxLang.lang].main.recs.trends.amount}</p>
                            </div>

                            <button className="recs__trends__button">&bull;&bull;&bull;</button>
                        </li>
                        <li className="recs__trends__item">
                            <div className="recs__trends__info">
                                <p className="recs__trends__location">{languages[ctxLang.lang].main.recs.trends.where}</p>
                                <h4 className="recs__trends__name">{languages[ctxLang.lang].main.recs.trends.name}</h4>
                                <p className="recs__trends__amount">{languages[ctxLang.lang].main.recs.trends.amount}</p>
                            </div>

                            <button className="recs__trends__button">&bull;&bull;&bull;</button>
                        </li>
                        <li className="recs__trends__item">
                            <div className="recs__trends__info">
                                <p className="recs__trends__location">{languages[ctxLang.lang].main.recs.trends.where}</p>
                                <h4 className="recs__trends__name">{languages[ctxLang.lang].main.recs.trends.name}</h4>
                                <p className="recs__trends__amount">{languages[ctxLang.lang].main.recs.trends.amount}</p>
                            </div>

                            <button className="recs__trends__button">&bull;&bull;&bull;</button>
                        </li>
                    </ul>

                    <button className="recs__trends__show">{languages[ctxLang.lang].main.recs.trends.more}</button>
                </div>

                <div className="recs__subs">
                    <h3 className="recs__subs__title">{languages[ctxLang.lang].main.recs.subs.heading}</h3>

                    <ul className="recs__subs__list">
                        <li className="recs__subs__item">
                            <div className="recs__subs__info">
                                <img src={user1_1} srcSet={`${user1_1} 1x, ${user1_2} 2x`} className='recs__subs__img' alt="some pic" />
                                <a href='#link' className="recs__subs__desc">
                                    <p className="recs__subs__name">Mushtariy</p>
                                    <p className="recs__subs__username">@Mushtar565266</p>
                                </a>
                            </div>
                            <button className="recs__subs__button">{languages[ctxLang.lang].main.recs.subs.button}</button>
                        </li>
                        <li className="recs__subs__item">
                            <div className="recs__subs__info">
                                <img src={user2_1} srcSet={`${user2_1} 1x, ${user2_2} 2x`} className='recs__subs__img' alt="some pic" />
                                <a href='#link' className="recs__subs__desc">
                                    <p className="recs__subs__name">Mushtariy</p>
                                    <p className="recs__subs__username">@Mushtar565266</p>
                                </a>
                            </div>
                            <button className="recs__subs__button">{languages[ctxLang.lang].main.recs.subs.button}</button>
                        </li>
                    </ul>

                    <button className="recs__subs__show">{languages[ctxLang.lang].main.recs.subs.more}</button>
                </div>

                <ul className="recs__c">
                    <li className="recs__c__item">
                        <a href="#link" className="recs__c__link">{languages[ctxLang.lang].main.recs.copyrights.terms}</a>
                    </li>
                    <li className="recs__c__item">
                        <a href="#link" className="recs__c__link">{languages[ctxLang.lang].main.recs.copyrights.privacy}</a>
                    </li>
                    <li className="recs__c__item">
                        <a href="#link" className="recs__c__link">{languages[ctxLang.lang].main.recs.copyrights.cookie}</a>
                    </li>
                    <li className="recs__c__item">
                        <a href="#link" className="recs__c__link">{languages[ctxLang.lang].main.recs.copyrights.imprint}</a>
                    </li>
                    <li className="recs__c__item">
                        <a href="#link" className="recs__c__link">{languages[ctxLang.lang].main.recs.copyrights.ads}</a>
                    </li>
                    <li className="recs__c__item">
                        <a href="#link" className="recs__c__link">{languages[ctxLang.lang].main.recs.copyrights.more} &bull;&bull;&bull;</a>
                    </li>
                    <li className="recs__c__item">
                        <p className="recs__c__link">© 2021 Twitter, Inc.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Recomendations;