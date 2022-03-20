import React from 'react';
import Login from '../Login/Login';
import './Main.scss';
// import { Context as TokenContext } from '../../Context/Token/Token';
import { Routes, Route } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import Feed from '../Feed/Feed';
import Profile from '../Profile/Profile';
import Recomendations from '../Recomendations/Recomendations';

function Main() {
    // const ctxToken = React.useContext(TokenContext);

    return (
        <main className='main'>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<div className='content'>
                    <div className="container">
                        <div className="content__inner">
                            <SideMenu />
                            <Feed />
                            <Recomendations />
                        </div>
                    </div>
                </div>} />
                <Route path='/profile' element={<div className='content'>
                    <div className="container">
                        <div className="content__inner">
                            <SideMenu />
                            <Profile />
                            <Recomendations />
                        </div>
                    </div>
                </div>} />
                <Route path='/lists' element={<div className='content'>
                    <div className="container">
                        <div className="content__inner">
                            <SideMenu />
                            <p>No lists page yet. Page is under construction. Enjoy login page.</p>
                            <Recomendations />
                        </div>
                    </div>
                </div>} />
            </Routes>
        </main>
    )
}

export default Main;