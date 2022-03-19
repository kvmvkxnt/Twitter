import React from 'react';
import Login from '../Login/Login';
import Content from '../Content/Content';
import './Main.scss';
import { Context as TokenContext } from '../../Context/Token/Token';
// import { Routes, Route, useNavigate } from 'react-router-dom';

function Main() {
    const ctxToken = React.useContext(TokenContext);

    return (
        <main className='main'>
            {!ctxToken.token || ctxToken.token === 'null' ? <Login/> : <Content/>}
        </main>
    )
}

export default Main;