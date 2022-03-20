import React from "react";
import './Content2.scss';
import Recomendations from '../Recomendations/Recomendations';
import SideMenu from '../SideMenu/SideMenu';
import Profile from '../Profile/Profile';

function Content2() {
    const tweets = [
        {
            name: 'Kamron',
            username: '@kvmvkxnt',
            text: 'I feel wierd today'
        }
    ]
    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu />
                    <Profile username="@kvmvkxnt" name="Kamron" tweets={tweets} />
                    <Recomendations active={true} />
                </div>
            </div>
        </div>
    )
}

export default Content2;