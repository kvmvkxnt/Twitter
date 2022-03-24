import React from 'react';
import Unauth from '../../Unauth';
import { Context as TokenContext } from '../../Context/Token/Token';
import AuthApp from '../../Auth';

function Main() {
    const ctxToken = React.useContext(TokenContext);

    if (ctxToken.token) {
        return <AuthApp />
    } else {
        return <Unauth />
    }
}

export default Main;