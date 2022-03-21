import './Content3.scss';
import SideMenu from '../SideMenu/SideMenu';
import Lists from '../Lists/Lists';
import Recomendations from '../Recomendations/Recomendations';

function Content3() {
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