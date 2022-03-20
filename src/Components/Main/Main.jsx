import React from 'react';
import Login from '../Login/Login';
import { Context as TokenContext } from '../../Context/Token/Token';
import AuthApp from '../../Auth';

function Main() {
    const ctxToken = React.useContext(TokenContext);

    if (ctxToken.token) {
        return <AuthApp />
    } else {
        return <Login />
    }
}

export default Main;