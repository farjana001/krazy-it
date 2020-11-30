import React from 'react';
import './ServiceDetails.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ServiceDetails = ({ services }) => {
    const { title, icon, details } = services;

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className="col-md-4 col-sm-6 nav-link">
            <div data-aos="fade-up" className="service-card text-center my-5 p-5">
                <div className="icon-image">
                    <img style={{ height: '75px' }} className="img-fluid" src={icon} alt="" />
                </div>
                <h5 style={{ fontWeight: '700' }} className="header-text mt-3 mb-2">{title}</h5>
                <p className="text-p px-3">{details}</p>
            </div>
        </div>
    );
};


export default ServiceDetails;