import React from 'react';
import './OurServices.scss';
import service1 from '../../images/service-icon/service1.png'
import service2 from '../../images/service-icon/service2.png'
import service3 from '../../images/service-icon/service3.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const serviceData = [
    {
        icon: service1,
        title: 'Web & Mobile design',
        details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        icon: service2,
        title: 'Graphic design',
        details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        icon: service3,
        title: 'Web development',
        details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
];

const OurServices = () => {
    return (
        <section>
        <div className="container">
            <div className="service-section ">
                <h1 className="content__header">Services we provide</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        serviceData.map(srv => <ServiceDetails key={srv.title} services={srv} />)
                    }
                 
                </div>
            </div>
        </div>
    </section>
    );
};

export default OurServices;