import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './League.css'
import { Link } from 'react-router-dom';

const League = (props) => {
   
    const {strLeague, strSport, idLeague} = props.league;

    const [leagueInfo, setLeagueInfo] = useState({});

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch (url)
        .then(res => res.json())
        .then(data => setLeagueInfo(data.leagues[0]))
    }, [idLeague])

    return (
        <div className='col-md-12 col-lg-4 col-sm-12 league-div'>
        <div className="card  d-flex justify-content-center align-items-center">
            <img src={leagueInfo.strBadge} className="card-img-top league-img" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title ">{strLeague}</h5>
                    <p className="card-text text-center">Sports type: {strSport}</p>

                    <Link to={`/league/${idLeague}`}>
                        <a href="/home" className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></a>
                    </Link>
                    
                </div>
        </div>
    </div>
    );
};

export default League;