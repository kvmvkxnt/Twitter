import React from 'react';
import Login from '../Login/Login';
import Content from '../Content/Content';
import './Main.scss';
import { Context as ThemeContext } from '../../Context/Theme/Theme'

function Main() {
    const ctx = React.useContext(ThemeContext);
    const token = window.localStorage.getItem('token');
    return (
        <main className={`main ${ctx.theme === 'dark' ? 'main--dark' : ''}`}>
            {!token ? <Login/> : <Content/>}
        </main>
    )
}

export default Main;