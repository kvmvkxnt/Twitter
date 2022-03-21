import React from 'react';
import './Construction.scss';
import SideMenu from '../SideMenu/SideMenu';
import Recomendations from '../Recomendations/Recomendations';
import { useNavigate } from 'react-router-dom';
import Stars from '../Lib/Icons/Stars';
import { Context as ThemeContext } from '../../Context/Theme/Theme';

function Construction({ site }) {
    const navigate = useNavigate();
    const ctxTheme = React.useContext(ThemeContext);
    return (<div className='content'>
        <div className="container">
            <div className="content__inner">
                <SideMenu />
                <div className="construction" style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
                    <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
                        <button className="construction__btn" style={{ display: "flex", alignItems: "center", columnGap: "10px", marginBottom: "20px" }} onClick={() => {
                            navigate(-1);
                        }}>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z" fill="black" />
                            </svg>
                            Exit
                        </button>

                        <button className='construction__theme' onClick={() => {
                            if (ctxTheme.theme === 'dark') {
                                ctxTheme.setTheme('light')
                            } else {
                                ctxTheme.setTheme('dark');
                            }
                        }}>
                            <Stars />
                        </button>
                    </div>
                    <p className="construction__txt" style={{ fontWeight: "700", fontSize: "30px" }}>{site} page is under construction. Please, be patient</p>
                </div>
                <Recomendations />
            </div>
        </div>
    </div>)
}

export default Construction;