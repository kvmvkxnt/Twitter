import React from 'react';
import Content1 from './Components/Content1/Content1';
import Content2 from './Components/Content2/Content2';
import Construction from './Components/Construction/Construction';
import { Routes, Route } from 'react-router-dom';

function AuthApp() {
    return <>
        <Routes>
            <Route path='/' element={<Content1 />} />
            <Route path='/profile' element={<Content2 />} />
            <Route path='/explore' element={<Construction site='Explore' />} />
            <Route path='/notifications' element={<Construction site='Notifications' />} />
            <Route path='/chat' element={<Construction site='Messages' />} />
            <Route path='/books' element={<Construction site='Bookmarks' />} />
            <Route path='/lists' element={<Construction site='Lists' />} />
            <Route path='/more' element={<Construction site='More' />} />
        </Routes>
    </>
}

export default AuthApp;