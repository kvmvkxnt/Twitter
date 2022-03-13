import React from 'react';
import Logo from '../Lib/Icons/Twitter';
import './Login.scss';
import languages from '../../Localization/languages';
import { Context as LangContext } from '../../Context/Language/Language';
import { Context as ThemeContext } from '../../Context/Theme/Theme';
import { findElement } from '../../utils';
import { Context as TokenContext } from '../../Context/Token/Token';

function Login() {
        const ctxLang = React.useContext(LangContext);
        const ctxTheme = React.useContext(ThemeContext);
        const ctxToken = React.useContext(TokenContext);

        React.useEffect(() => {
            window.localStorage.removeItem('token')
        }, [])

        const handleSubmit = evt => {
            evt.preventDefault();

            const form = evt.target;
            const userName = findElement('#login-input', form);
            const pass = findElement('#pass-input', form);
            const error = findElement('.login__error', form);
            const correctUser = 'eve.holt@reqres.in';
            const correctPass = 'cityslicka';

            if (!userName.value.trim()) {
                error.textContent = 'No username';
            } else if (!pass.value.trim()) {
                error.textContent = 'No password';
            } else if (userName.value.trim() !== correctUser || pass.value.trim() !== correctPass) {
                error.textContent = 'Invalid username or password';
            } else {
                ctxToken.setToken('QpwL5tke4Pnpja7X4');
                error.textContent = 'Wait...';
            }

        }
        return (
            <div className={`login ${ctxTheme.theme === 'dark' ? 'login--dark' : ''}`}>
                <div className="container">
                    <div className="login__inner">
                        <form className='login__form' onSubmit={handleSubmit}>
                            <div className="login__section">
                                <a href="./index.html" className="login__link">
                                    <Logo className='login__img' alt={languages[ctxLang.lang].main.login.alt} />
                                </a>

                                <select className='login__select' defaultValue={ctxLang.lang} onChange={(evt) => {
                                    ctxLang.setLang(evt.target.value);
                                }}>
                                    <option value="eng">ENG</option>
                                    <option value="rus">RUS</option>
                                    <option value="uzb">UZB</option>
                                </select>

                                <span><p className='opt1'>{languages[ctxLang.lang].main.login.opt1}</p><label className='login__switch'>
                                    <input type="checkbox" className='login__checkbox visually-hidden' defaultChecked={ctxTheme.theme === 'dark' ? true : false} onChange={(evt) => {
                                        if (evt.target.checked) {
                                            ctxTheme.setTheme('dark')
                                        } else {
                                            ctxTheme.setTheme('light');
                                        }
                                    }} />
                                    <span className='login__check'></span>
                                </label><p className='opt2'>{languages[ctxLang.lang].main.login.opt2}</p></span>
                            </div>

                            <h1 className="login__heading">{languages[ctxLang.lang].main.login.heading}</h1>

                            <input type="text" className='login__input' id='login-input' defaultValue='eve.holt@reqres.in' placeholder={languages[ctxLang.lang].main.login.placeholder1} />
                            <input type="password" className='login__input' id='pass-input' defaultValue='cityslicka' placeholder={languages[ctxLang.lang].main.login.placeholder2} />

                            <input type="submit" value={languages[ctxLang.lang].main.login.button} className='login__button' />

                            <p className="login__error"></p>

                            <div className="login__links">
                                <a href="#link" className="login__link">{languages[ctxLang.lang].main.login.links.link1}</a>
                                <a href="#link" className='login__link'>{languages[ctxLang.lang].main.login.links.link2}</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

export default Login;