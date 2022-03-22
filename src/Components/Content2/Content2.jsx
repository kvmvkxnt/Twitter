import React from "react";
import './Content2.scss';
import Recomendations from '../Recomendations/Recomendations';
import SideMenu from '../SideMenu/SideMenu';
import Profile from '../Profile/Profile';
import user1 from '../../Assets/Images/profile-rounded.png';
import user2 from '../../Assets/Images/profile-rounded@2x.png';
import prof from '../../Assets/Images/profile.png';
import prof2 from '../../Assets/Images/profile@2x.png';
import tweet1 from '../../Assets/Images/usertweet.png';
import tweet2 from '../../Assets/Images/usertweet@2x.png';
import { useParams } from 'react-router-dom';
import Loading from "../Lib/Load/Loading";
import languages from "../../Localization/languages";
import { Context as LangContext } from "../../Context/Language/Language";

function Content2() {
    const { user_id } = useParams();
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState();
    const ctxLang = React.useContext(LangContext);

    React.useEffect(() => {
        if (user_id === '1234') {
            setLoading(false);
            setUser({
                id: 1234,
                username: '@bobur_mavlonov',
                newName: 'Bobur',
                pr: user1,
                pr2: user2,
                prof: prof,
                prof2: prof2,
                tweets: [
                    {
                        id: 0,
                        pin: true,
                        time: 'Apr 1',
                        text: languages[ctxLang.lang].userTweets.tweet1,
                        reply: false,
                        like: false,
                    },
                    {
                        id: 1,
                        time: 'Apr 1',
                        text: languages[ctxLang.lang].userTweets.tweet2,
                        reply: false,
                        like: false,
                    },
                    {
                        id: 2,
                        time: 'Apr 1',
                        text: languages[ctxLang.lang].userTweets.tweet3,
                        img: tweet1,
                        img2: tweet2,
                        reply: false,
                        like: false,
                    }
                ]
            });
        } else {
            (async () => {
                const res = await fetch('https://reqres.in/api/users/' + user_id)
                const data = await res.json();

                if (data?.data) {
                    const usr = data.data;
                    setLoading(false);
                    setUser({
                        username: usr.email,
                        newName: usr.first_name + ' ' + usr.last_name,
                        pr: usr.avatar,
                        pr2: usr.avatar,
                    });
                } else {
                    setLoading(false);
                    setUser();
                }
            })();
        }
    }, [user_id, ctxLang.lang]);

    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu />
                    {loading && <Loading />}
                    {user ? <Profile editActive={user.id === 1234 ? true : false} username={user.username} name={user.newName} pr1={user.pr} pr2={user.pr2 ? user.pr2 : user.pr1} imgSrc={user.prof} imgSrc2={user.prof2 ? user.prof2 : user.prof} tweets={user.tweets} /> : <h2>No user</h2>}
                    <Recomendations active={true} />
                </div>
            </div>
        </div>
    )
}

export default Content2;