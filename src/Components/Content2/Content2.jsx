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

function Content2() {
    const { user_id } = useParams();
    const [loading, setLoading] = React.useState(true);

    const [user, setUser] = React.useState();

    React.useEffect(() => {
        if (user_id === '1234') {
            setLoading(false);
            setUser({
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
                        text: "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
                        reply: false,
                        like: false,
                    },
                    {
                        id: 1,
                        time: 'Apr 1',
                        text: "Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas.",
                        reply: false,
                        like: false,
                    },
                    {
                        id: 2,
                        time: 'Apr 1',
                        text: "A bo'pti maskamasman",
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
                const usr = data.data;

                setLoading(false);
                setUser({
                    username: usr.email,
                    newName: usr.first_name + ' ' + usr.last_name,
                    pr: usr.avatar,
                    pr2: usr.avatar,
                })
            })();
        }
    }, [user_id]);

    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                    <SideMenu />
                    {loading && <Loading />}
                    {user && <Profile username={user.username} name={user.newName} pr1={user.pr} pr2={user.pr2 ? user.pr2 : user.pr1} imgSrc={user.prof} imgSrc2={user.prof2 ? user.prof2 : user.prof} tweets={user.tweets} />}
                    <Recomendations active={true} />
                </div>
            </div>
        </div>
    )
}

export default Content2;