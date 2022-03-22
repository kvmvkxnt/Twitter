import './Content3.scss';
import SideMenu from '../SideMenu/SideMenu';
import Lists from '../Lists/Lists';
import React from 'react';
import Recomendations from '../Recomendations/Recomendations';
import languages from '../../Localization/languages';
import { Context } from '../../Context/Language/Language';

function Content3() {
    const ctxLang = React.useContext(Context);
    React.useEffect(() => {
        document.title = languages[ctxLang.lang].main.side_menu.list;
    })
    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu />
                    <Lists />
                    <Recomendations />
                </div>
            </div>
        </div>
    )
}

export default Content3;