import React from 'react';
import {Context} from '../../Context/Theme/Theme';

function Content(){
    const ctx = React.useContext(Context);
    return (
        <p className={`content ${ctx.theme === 'dark' ? 'content--dark' : ''}`}>This is The Main Page <br /> It's under contruction, so please wait some time and enjoy login page! :)</p>
    )
}

export default Content;