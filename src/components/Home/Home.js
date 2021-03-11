import React, { useEffect, useState } from 'react';
import League from '../League/League';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Header from '../Header/Header';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))

    }, [])

    return (
        <div className="home-div">
            <Header headerClass="homeHeader">
                <h1 className="header-title">Leagues Treasure</h1>
            </Header>

            <div className="row leagues-div text-center">
                {
                    leagues.map(league => <League key={league.idLeague}  league={league}></League>)
                }
            </div>
        </div>
    );
};

export default Home;