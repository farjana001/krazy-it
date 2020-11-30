import React from 'react';
import './DesignForm.scss';
import upload from '../../images/icon/up.png';
import set from '../../images/icon/set.png';
import select from '../../images/icon/select.png';
import Aos from "aos";
import "aos/dist/aos.css";
import DesignTemplate from './DesignTemplate/DesignTemplate';
import { useEffect } from 'react';

const progressBar = [
    {
        text: "Upload image",
        img: upload
    },
    {
        text: "Set design",
        img: set
    },
    {
        text: "Select",
        img: select
    }
]

const DesignForm = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <section>
            <div className="designForm__wrapper">
                <div className="container">
                    <h1 className="content__header">Your design template</h1>
                    <div className="progressBar mx-auto mt-5">
                        <ul data-aos="flip-left">
                            {
                                progressBar.map((each, index) =>
                                    <li key={each.index}>
                                        <div className="progress__item">
                                            <img src={each.img} alt="icon" />
                                            <p>{each.text}</p>
                                        </div>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
                <DesignTemplate />
            </div>
        </section>
    );
};

export default DesignForm;