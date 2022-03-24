import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sign.scss';
import Logo from '../Lib/Icons/Twitter';
import { Context as LangContext } from '../../Context/Language/Language';
import { Context as ThemeContext } from '../../Context/Theme/Theme';
import { Context as TokenContext } from '../../Context/Token/Token';
import languages from '../../Localization/languages';

function Sign() {
    const ctxTheme = React.useContext(ThemeContext);
    const ctxLang = React.useContext(LangContext);
    const ctxToken = React.useContext(TokenContext);
    const navigate = useNavigate();

    return (
        <div className='sign'>
            <div className="container">
                <div className="sign__inner">
                    <form className="sign__form" onKeyDown={(evt) => {
                        if (evt.key === 'Enter') {
                            evt.preventDefault();
                            return;
                        }
                    }} onSubmit={(evt) => {
                        evt.preventDefault();

                        const els = evt.target.elements;
                        const nameInput = els[3];
                        const emailInput = els[4];
                        const monthSelect = els[6];
                        const daySelect = els[7];
                        const yearSelect = els[8];
                        const error = evt.target.querySelector('.sign__error');

                        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || monthSelect.value === 'none' || daySelect.value === 'none' || yearSelect.value === 'none') {
                            error.textContent = languages[ctxLang.lang].main.sign_up.err_nodata;
                            error.classList.add('active');
                        } else {
                            (async () => {
                                const res = await fetch('https://reqres.in/api/register', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        email: 'eve.holt@reqres.in',
                                        password: "pistol",
                                    })
                                });

                                const data = await res.json();

                                if (data?.token) {
                                    ctxToken.setToken(data.token);
                                    navigate('/');
                                } else {
                                    error.textContent = data.error;
                                }
                            })();
                        }
                    }}>
                        <Link to='/' className='sign__link'>
                            <Logo className='sign__img' alt={languages[ctxLang.lang].main.login.alt} />
                        </Link>

                        <div className="sign__controls">
                            <button className='sign__controls__back' onClick={() => {
                                navigate('/');
                            }}>
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z" fill="black" />
                                </svg>
                            </button>

                            <select className='sign__controls__select' defaultValue={ctxLang.lang} onChange={(evt) => {
                                ctxLang.setLang(evt.target.value);
                            }}>
                                <option value="eng">ENG</option>
                                <option value="rus">RUS</option>
                                <option value="uzb">UZB</option>
                            </select>


                            <span><p className='opt1'>{languages[ctxLang.lang].main.login.opt1}</p><label className='sign__switch'>
                                <input type="checkbox" className='sign__checkbox visually-hidden' defaultChecked={ctxTheme.theme === 'dark' ? true : false} onChange={(evt) => {
                                    if (evt.target.checked) {
                                        ctxTheme.setTheme('dark')
                                    } else {
                                        ctxTheme.setTheme('light');
                                    }
                                }} />
                                <span className='sign__check'></span>
                            </label><p className='opt2'>{languages[ctxLang.lang].main.login.opt2}</p></span>
                        </div>

                        <h1 className="sign__heading">{languages[ctxLang.lang].main.sign_up.heading}</h1>

                        <input type="text" className="sign__input" placeholder={languages[ctxLang.lang].main.sign_up.placeholder1} />
                        <input type="number" className="sign__input" placeholder={languages[ctxLang.lang].main.sign_up.placeholder2_1} />

                        <button className="sign__button" onClick={(evt) => {
                            evt.preventDefault();
                            const clicked = evt.target;

                            if (clicked.matches('.active')) {
                                clicked.classList.remove('active');
                                clicked.previousElementSibling.placeholder = languages[ctxLang.lang].main.sign_up.placeholder2_1;
                                clicked.textContent = languages[ctxLang.lang].main.sign_up.change1;
                                clicked.previousElementSibling.type = 'number';
                            } else {
                                clicked.classList.add('active');
                                clicked.previousElementSibling.placeholder = languages[ctxLang.lang].main.sign_up.placeholder2_2;
                                clicked.textContent = languages[ctxLang.lang].main.sign_up.change2;
                                clicked.previousElementSibling.type = 'text';
                            }
                        }}>{languages[ctxLang.lang].main.sign_up.change1}</button>

                        <h2 className="sign__title">{languages[ctxLang.lang].main.sign_up.date}</h2>
                        <p className="sign__desc">{languages[ctxLang.lang].main.sign_up.text}</p>

                        <div className="sign__selects">
                            <select className="sign__selects__select" defaultValue='none' id='m_select'>
                                <option value="none" disabled hidden>{languages[ctxLang.lang].main.sign_up.select1}</option>
                                <option value="jan">{languages[ctxLang.lang].main.sign_up.select1_data.jan}</option>
                                <option value="feb">{languages[ctxLang.lang].main.sign_up.select1_data.feb}</option>
                                <option value="mar">{languages[ctxLang.lang].main.sign_up.select1_data.mar}</option>
                                <option value="apr">{languages[ctxLang.lang].main.sign_up.select1_data.apr}</option>
                                <option value="may">{languages[ctxLang.lang].main.sign_up.select1_data.may}</option>
                                <option value="jun">{languages[ctxLang.lang].main.sign_up.select1_data.jun}</option>
                                <option value="jul">{languages[ctxLang.lang].main.sign_up.select1_data.jul}</option>
                                <option value="aug">{languages[ctxLang.lang].main.sign_up.select1_data.aug}</option>
                                <option value="sep">{languages[ctxLang.lang].main.sign_up.select1_data.sep}</option>
                                <option value="oct">{languages[ctxLang.lang].main.sign_up.select1_data.oct}</option>
                                <option value="nov">{languages[ctxLang.lang].main.sign_up.select1_data.nov}</option>
                                <option value="dec">{languages[ctxLang.lang].main.sign_up.select1_data.dec}</option>
                            </select>

                            <select className="sign__selects__select" defaultValue='none' id='d_select' onClick={(evt) => {
                                const clicked = evt.target;
                                if (clicked.matches('.sign__selects__select')) {
                                    clicked.innerHTML = null;
                                    const mainOpt = document.createElement('option');
                                    mainOpt.disabled = true;
                                    mainOpt.hidden = true;
                                    mainOpt.value = 'none';
                                    mainOpt.textContent = languages[ctxLang.lang].main.sign_up.select2;
                                    mainOpt.selected = true;
                                    clicked.appendChild(mainOpt);

                                    for (var i = 1; i < 32; i++) {
                                        const newOpt = document.createElement('option');
                                        newOpt.value = i;
                                        newOpt.textContent = i;
                                        clicked.appendChild(newOpt);
                                    }
                                }
                            }}>
                                <option value="none" disabled hidden>{languages[ctxLang.lang].main.sign_up.select2}</option>
                            </select>

                            <select className="sign__selects__select" defaultValue='none' id='y_select' onClick={(evt) => {
                                const clicked = evt.target;
                                if (clicked.matches('.sign__selects__select')) {
                                    clicked.innerHTML = null;
                                    const mainOpt = document.createElement('option');
                                    mainOpt.disabled = true;
                                    mainOpt.hidden = true;
                                    mainOpt.value = 'none';
                                    mainOpt.textContent = languages[ctxLang.lang].main.sign_up.select3;
                                    mainOpt.selected = true;
                                    clicked.appendChild(mainOpt);

                                    for (var i = 2022; i > 1900; i--) {
                                        const newOpt = document.createElement('option');
                                        newOpt.value = i;
                                        newOpt.textContent = i;
                                        clicked.appendChild(newOpt);
                                    }
                                }
                            }}>
                                <option value="none" disabled hidden>{languages[ctxLang.lang].main.sign_up.select3}</option>
                            </select>
                        </div>

                        <p className="sign__error"></p>

                        <input type="submit" className="sign__submit" value={languages[ctxLang.lang].main.sign_up.button} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sign;