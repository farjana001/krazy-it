import React from 'react';
import './Footer.scss';
import youtube from '../../../images/social-icon/youtube.png';
import facebook from '../../../images/social-icon/facebook.png';
import instagram from '../../../images/social-icon/insta.png';
import twitter from '../../../images/social-icon/twitter.png';
import whatsapp from '../../../images/social-icon/whatsapp.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
        <div className="container-fluid">
             <div className="footer-body text-white">
                 <div className="row">
                     <div className="col-lg-3 col-md-4 text-center mb-3">
                     <div className="logo">
                            <Link to="/home" className="logo__link"><h1 className="footer__logoText ml-1 mt-n3">PowerIT</h1></Link>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                         <h6>Need Help?</h6>
                         <p>Help Center</p>
                         <p>Email Support</p>
                         <p>Live Chat</p>
                         <p>Gift Certificates</p>
                         <p>Send us Feedback</p>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                         <h6>Digital Resources</h6>
                         <p>Articles</p>
                         <p>E-books</p>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                         <h6>Contact with Us</h6>
                         <ul className="social-icon">
                             <li><img src={youtube} alt=""/></li>
                             <li><img src={facebook} alt=""/></li>
                             <li><img src={instagram} alt=""/></li>
                             <li><img src={twitter} alt=""/></li>
                             <li><img src={whatsapp} alt=""/></li>
                         </ul>
                         <p>Forum</p>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                         <h6>Join Our Newsletter</h6>
                         <p>Get exclusive news, features and <br/>updates from the shredder weight <br/>loss academy</p>
                         <div>
                             <input  className="newsletterInput" type="text" placeholder="Enter your email"/> <br/>
                             <input className="button-brand" type="submit"/>
                         </div>
                     </div>
                 </div>
                 <div className="copyright text-center">
                     <p><small>&copy;2020 || All Rights Reserved by Power IT</small></p>
                 </div>
             </div>
         </div> 
     </footer>
    );
};

export default Footer;