import React from 'react';
import './Content.scss';
import SideMenu from '../SideMenu/SideMenu';
// import Feed from '../Feed/Feed';
import Profile from '../Profile/Profile';
import Recomendations from '../Recomendations/Recomendations';

function Content() {
    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu />
                    <Profile />
                    {/* <Feed /> */}
                    <Recomendations />
                </div>
            </div>
        </div>
    )
}

export default Content;