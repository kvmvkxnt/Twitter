import React from 'react';
import './Content.scss';
import SideMenu from '../SideMenu/SideMenu';
import Feed from '../Feed/Feed';
import Recomendations from '../Recomendations/Recomendations';

function Content(){
    // const ctx = React.useContext(Context);
    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu/>
                    <Feed/>
                    <Recomendations/>
                </div>
            </div>
        </div>
    )
}

export default Content;