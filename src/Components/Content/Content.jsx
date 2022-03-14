import React from 'react';
// import {Context} from '../../Context/Theme/Theme';
import SideMenu from '../SideMenu/SideMenu';

function Content(){
    // const ctx = React.useContext(Context);
    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu/>
                </div>
            </div>
        </div>
    )
}

export default Content;