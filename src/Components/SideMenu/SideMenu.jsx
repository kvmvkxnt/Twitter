import React from 'react';
import './SideMenu.scss';
import Twitter from '../Lib/Icons/Twitter';
import MenuIcons from '../Lib/Icons/MenuIcons';
import languages from '../../Localization/languages';
import user1 from '../../Assets/Images/Ellipse3.png';
import user2 from '../../Assets/Images/Ellipse3@2x.png';
import { NavLink, Link } from 'react-router-dom';
import { Context as LangContext } from '../../Context/Language/Language';
import { Context as TokenContext } from '../../Context/Token/Token';

function SideMenu() {
    const ctxLang = React.useContext(LangContext);
    const ctxToken = React.useContext(TokenContext);
    return (
        <div className='side-menu'>
            <div className="side-menu__inner">
                <Link to="/" className='side-menu__logo-link'><Twitter width={40} height={30} className={'side-menu__logo'} alt={languages[ctxLang.lang].main.side_menu.logo_alt} /></Link>

                <ul className="side-menu__list">
                    <li className="side-menu__item">
                        <NavLink to='/' className="side-menu__button">
                            <MenuIcons icon='home' active={true} />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.home}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <NavLink to='/explore' className="side-menu__button">
                            <MenuIcons icon='explore' />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.explore}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <NavLink to='/notifications' className="side-menu__button">
                            <MenuIcons icon='notify' />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.notify}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <NavLink to='/chat' className="side-menu__button">
                            <MenuIcons icon='message' />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.chat}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <NavLink to='/books' className="side-menu__button">
                            <MenuIcons icon='bookmark' />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.books}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <NavLink to='/lists' className="side-menu__button">
                            <MenuIcons icon='list' />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.list}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <NavLink to='/profile/1234' className="side-menu__button">
                            <MenuIcons icon='profile' />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.profile}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <NavLink to='/more' className="side-menu__button">
                            <MenuIcons icon='more' />
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.more}</p>
                        </NavLink>
                    </li>
                    <li className="side-menu__item">
                        <button className='side-menu__tweet'>{languages[ctxLang.lang].main.side_menu.tweet}</button>
                    </li>
                </ul>

                <div className="side-menu__profile">
                    <Link to='/profile/1234' className="side-menu__profile__link">
                        <img src={user1} alt="User1" srcSet={`${user1} 1x, ${user2} 2x`} />
                    </Link>
                    <div className="side-menu__profile__description">
                        <Link to='/profile/1234' className="side-menu__profile__name">Bobur</Link>
                        <Link to='/profile/1234' className="side-menu__profile__username">@bobur_mavlonov</Link>
                    </div>
                    <button className="side-menu__profile__out" onClick={() => {
                        ctxToken.setToken(null);
                    }}>{languages[ctxLang.lang].main.side_menu.out}</button>
                    <button className="side-menu__profile__button" onClick={(evt) => {
                        evt.target.previousElementSibling.classList.toggle('active');
                    }}>
                        &bull;&bull;&bull;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;