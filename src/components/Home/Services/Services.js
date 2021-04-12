import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        image: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container" style={{padding: '60px 0'}}>
            <div className="section-title text-center" style={{marginBottom: '50px'}}>
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="container">
                <div className="row text-center">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;