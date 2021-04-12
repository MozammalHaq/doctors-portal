import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4">
            <img style={{height: '50px'}} src={service.image} alt="" />
            <h3 className="my-3">{service.name}</h3>
            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, esse!</p>
        </div>
    );
};

export default ServiceDetail;