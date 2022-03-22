import React from 'react';
import './Lists.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Context as ThemeContext } from '../../Context/Theme/Theme';
import Stars from '../Lib/Icons/Stars';
import Loading from '../Lib/Load/Loading';

function Lists() {
    const [page, setPage] = React.useState(1);
    const [users, setUsers] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();
    const ctxTheme = React.useContext(ThemeContext);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('https://reqres.in/api/users?page=' + page);
            const data = await res.json();
            if (data?.data) {
                setLoading(false);
                setUsers(data.data);
            }
        })();
    }, [page])

    return (
        <div className='lists'>
            <div className="lists__inner">
                <div className="lists__header">
                    <button className="lists__back" style={{ display: "flex", alignItems: "center", columnGap: "10px", marginBottom: "20px" }} onClick={() => {
                        navigate(-1);
                    }}>
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z" fill="black" />
                        </svg>
                    </button>

                    <button className='lists__theme' onClick={() => {
                        if (ctxTheme.theme === 'dark') {
                            ctxTheme.setTheme('light')
                        } else {
                            ctxTheme.setTheme('dark');
                        }
                    }}>
                        <Stars />
                    </button>

                </div>

                <div className="lists__users">
                    {users && <>
                        <ul className="lists__list">
                            {users.map((user) => <Link key={user.id} to={`/profile/${user.id}`} className='lists__link'>
                                <li className="lists__item">
                                    <img src={user.avatar} alt="placeholder" className='lists__img' />
                                    <p className="lists__par">{user.first_name} {user.last_name}</p>
                                </li>
                            </Link>)}
                        </ul>

                        <div className="lists__buttons" onClick={(evt) => {
                            if (evt.target.matches('.lists__page')) {
                                setPage(evt.target.dataset.pageId);
                                setLoading(true);
                            }
                        }}>
                            <button className="lists__page" data-page-id="1">
                                1
                            </button>
                            <button className="lists__page" data-page-id="2">
                                2
                            </button>
                        </div>
                    </>}
                    {loading && <Loading />}
                </div>
            </div>
        </div>
    )
}

export default Lists;