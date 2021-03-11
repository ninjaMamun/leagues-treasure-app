import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './LeagueInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars, faFutbol, faFlag, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import maleImg from '../../Photo/Rectangle 28.png';
import femaleImg from '../../Photo/female.png';
import { faTwitter,faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons'; 


const LeagueInfo = () => {
    const { leagueId } = useParams();
    const [leagueDetails, setLeagueDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setLeagueDetails(data.leagues[0]))
    }, [leagueId])
    const { strBadge, strLeague, strSport, dateFirstEvent, strCountry, strGender, strDescriptionEN, strDescriptionFR, strTwitter, strFacebook, strYoutube, strBanner } = leagueDetails;
    console.log(strGender);
    // const leagueDetailsHeaderStyle ={
    //     background: `linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(${strB})`,
    //     height: "400px",
    //     marginBottom: "50px",
    // }




    return (

        <div className="League-info-div">
            <Header headerClass="leagueDetailsHeader" >
                <img className="details-header-img" src={strBadge} alt=""></img>
            </Header>
            <div className="leagueInfoDiv">
                <div className="row clubinfo-div">
                    <div className="col-md-12 col-lg-6 col-sm-12 left-div">
                        <h2> {strLeague} </h2>
                        <p><FontAwesomeIcon className="icons" icon={faCalendarCheck} />Founded: {dateFirstEvent}</p>
                        <p><FontAwesomeIcon className="icons" icon={faFlag} />Country: {strCountry} </p>
                        <p><FontAwesomeIcon className="icons" icon={faFutbol} />Sport Type: {strSport} </p>
                        <p><FontAwesomeIcon className="icons" icon={faVenusMars} />Gender: {strGender} </p>
                    </div>
                    <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-end">
                        {
                            (strGender === "Male") ? <img className="gender-image" src={maleImg} alt=''></img> : <img className="gender-image" src={femaleImg} alt=''></img>
                        }


                    </div>
                </div>
                <div className="description-div">
                    <p> {strDescriptionEN} </p>
                    <br></br>
                    <p> {strDescriptionFR} </p>
                </div>
                <div className="socialIcon-div d-flex justify-content-center ">
                    <div className="col-md-1 d-flex justify-content-center">
                        <a target="_blank" rel="noreferrer" href={`https://${strTwitter}`}>
                            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                        </a>
                    </div>

                    <div className="col-md-1 d-flex justify-content-center">
                        <a target="_blank" rel="noreferrer" href={`https://${strFacebook}`}>
                            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                        </a>
                    </div>

                    <div className="col-md-1 d-flex justify-content-center">
                        <a target="_blank" rel="noreferrer" href={`https://${strYoutube}`}>
                            <FontAwesomeIcon className="social-icon youtube-icon" icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default LeagueInfo;