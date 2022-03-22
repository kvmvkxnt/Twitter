import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import Feed from '../Feed/Feed';
import './Content1.scss';
import Recomendations from '../Recomendations/Recomendations';


function Content1() {
    React.useEffect(() => {
        document.title = 'Twitter';
    })
    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu />
                    <Feed />
                    <Recomendations />
                </div>
            </div>
        </div>
    )
}

export default Content1;