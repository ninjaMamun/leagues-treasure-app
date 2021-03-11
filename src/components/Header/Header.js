import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './soccer-ball.png'

const Header = (props) => {
    const className = `row d-flex justify-content-center ${props.headerClass}`;
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/home">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top nav-logo" alt=""/>
                        Leagues Treasure
                </a>
            </nav>

                <div className={className} >
                    {props.children}
                </div>
        </div>
    );
};

export default Header;