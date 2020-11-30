import React from 'react';
import DesignForm from '../../DesignForm/DesignForm';
import OurServices from '../../OurServices/OurServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <DesignForm />
            <OurServices />
            <Footer />
        </div>
    );
};

export default Home;