import React from 'react';
import './Construction.scss';
import { useNavigate } from 'react-router-dom';

function Construction({ site }) {
    const navigate = useNavigate();
    return (<div className='content'>
        <div className="container">
            <div className="content__inner">
                <button className="construction__btn" onClick={() => {
                    navigate(-1);
                }}>Exit</button>
                <p className="construction__txt">{site} page is under construction. Please, be patient</p>
            </div>
        </div>
    </div>)
}

export default Construction;