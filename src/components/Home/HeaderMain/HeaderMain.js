import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <div style={{height: '600px'}} className="row d-flex align-items-center justify-content-around">            
            <div className="col-md-4">
                <h1 style={{color: '#203047'}}>Your New Smila <br/> Starts Here</h1>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque odio molestiae ad adipisci rem temporibus.</p>
                <button className="btn btn-primary" type="submit">Get Appoinment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default HeaderMain;