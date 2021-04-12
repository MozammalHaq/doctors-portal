import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = (info) => {
    const { title, description, icon, background } = info.info;
    return (
        <div className="col-md-4">
            <div className={`d-flex align-items-center justify-content-center text-white info-${background}`}>
                <div className="card-icon">
                    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;