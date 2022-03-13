import React from 'react';
import Login from '../Login/Login';
import Content from '../Content/Content';
import './Main.scss';
import { Context as ThemeContext } from '../../Context/Theme/Theme';
import { Context as TokenContext } from '../../Context/Token/Token';

function Main() {
    const ctx = React.useContext(ThemeContext);
    const ctxToken = React.useContext(TokenContext);
    return (
        <main className={`main ${ctx.theme === 'dark' ? 'main--dark' : ''}`}>
            {!ctxToken.token ? <Login/> : <Content/>}
        </main>
    )
}

export default Main;