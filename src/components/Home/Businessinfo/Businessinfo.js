import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMarker, faMapMarker, faMapPin, faMapMarkedAlt, faMapMarked } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hour',
        description: 'We are open 7 days in week',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our llocation',
        description: 'Brookllyn, NY 10036, United States',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary'
    }
]

const Businessinfo = () => {
    return (
        <section className="container">
            <div className="row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default Businessinfo;