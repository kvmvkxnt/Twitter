import './Profile.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Profile({username, name, imgSrc, tweets}) {
    return (
        <dib className='profile'>
            <div className="profile__inner">
                
            </div>
        </dib>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    tweets: PropTypes.object.isRequired,
}

export default Profile;