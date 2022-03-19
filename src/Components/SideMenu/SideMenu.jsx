import React from 'react';
import './SideMenu.scss';
import Twitter from '../Lib/Icons/Twitter';
import MenuIcons from '../Lib/Icons/MenuIcons';
import languages from '../../Localization/languages';
import user1 from '../../Assets/Images/Ellipse3.png';
import user2 from '../../Assets/Images/Ellipse3@2x.png';
import { Context as LangContext } from '../../Context/Language/Language';

function SideMenu() {
    const ctxLang = React.useContext(LangContext);
    return (
        <div className='side-menu'>
            <div className="side-menu__inner">
                <a href="#link" className='side-menu__logo-link'><Twitter width={40} height={30} className={'side-menu__logo'} alt={languages[ctxLang.lang].main.side_menu.logo_alt}/></a>

                <ul className="side-menu__list">
                    <li className="side-menu__item">
                        <button className="side-menu__button active">
                            <MenuIcons icon='home' active={true}/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.home}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className="side-menu__button">
                            <MenuIcons icon='explore'/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.explore}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className="side-menu__button">
                            <MenuIcons icon='notify'/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.notify}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className="side-menu__button">
                            <MenuIcons icon='message'/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.chat}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className="side-menu__button">
                            <MenuIcons icon='bookmark'/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.books}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className="side-menu__button">
                            <MenuIcons icon='list'/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.list}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className="side-menu__button">
                            <MenuIcons icon='profile'/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.profile}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className="side-menu__button">
                            <MenuIcons icon='more'/>
                            <p className="side-menu__desc">{languages[ctxLang.lang].main.side_menu.more}</p>
                        </button>
                    </li>
                    <li className="side-menu__item">
                        <button className='side-menu__tweet'>{languages[ctxLang.lang].main.side_menu.tweet}</button>
                    </li>
                </ul>

                <div className="side-menu__profile">
                    <a href="#link2" className="side-menu__profile__link">
                        <img src={user1} alt="User1" srcSet={`${user1} 1x, ${user2} 2x`}/>
                    </a>
                    <div className="side-menu__profile__description">
                        <a href='#link' className="side-menu__profile__name">Bobur</a>
                        <a href='#link' className="side-menu__profile__username">@bobur_mavlonov</a>
                    </div>
                    <button className="side-menu__profile__button">
                        &bull;&bull;&bull;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;