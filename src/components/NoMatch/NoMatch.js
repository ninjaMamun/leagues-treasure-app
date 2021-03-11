import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import notFound from './not found.png'

const NoMatch = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card row" style={{width: "36rem"}}>
                <img className="card-img-top" src={notFound} alt="not found img"/>
                    <div className="card-body">
                        <h4 className="card-text text-center">Sorry, Page Not Found!</h4>
                    </div>
            </div>
        </div>
    );
};

export default NoMatch;
