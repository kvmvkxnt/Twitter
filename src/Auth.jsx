import React from 'react';
import Content1 from './Components/Content1/Content1';
import Content2 from './Components/Content2/Content2';
import Content3 from './Components/Content3/Content3';
import Construction from './Components/Construction/Construction';
import { Routes, Route, useNavigate } from 'react-router-dom';

function AuthApp() {
    const navigate = useNavigate();
    return <>
        <Routes>
            <Route path='/' element={<Content1 />} />
            <Route path='/profile/:user_id' element={<Content2 />} />
            <Route path='/explore' element={<Construction site='Explore' />} />
            <Route path='/notifications' element={<Construction site='Notifications' />} />
            <Route path='/chat' element={<Construction site='Messages' />} />
            <Route path='/books' element={<Construction site='Bookmarks' />} />
            <Route path='/lists' element={<Content3 />} />
            <Route path='/more' element={<Construction site='More' />} />
            <Route path='*' element={<button style={{ cursor: "pointer" }} onClick={() => {
                navigate(-1);
            }}>There is no page. Click on me!</button>} />
        </Routes>
    </>
}

export default AuthApp;