import React from 'react';
import './Footer.css';
import RoomIcon from '@material-ui/icons/Room';
import logo1 from '../../../logos/Vector-1.png';
import logo2 from '../../../logos/Vector-2.png';
import logo3 from '../../../logos/Vector-3.png';
import logo4 from '../../../logos/Vector.png'


const Footer = () => {
    return (
        <div className="footer d-flex justify-content-around row">
            <div className="location col-md-4 col-sm-12">
                <RoomIcon />
                <p>H#340 (4th Floor), Road #24,
                New DOHS, Mohakhali, Dhaka, Bangladesh
                Phone: 018XXXXXXXX
                E-mail: info@company.com
                </p>
            </div>
            <div className="others col-md-6  d-flex justify-content-around">
                <div ClassName="col-md-3">
                    <h5>Company</h5>
                    <li>About</li>
                    <li>Side map</li>
                    <li>Support Condition</li>
                    <li>Submit Listning</li>
                </div>
                <div ClassName="col-md-3">
                    <h5>Quick Links</h5>
                    <li>quick links</li>
                    <li>Rentals</li>
                    <li>Sales</li>
                    <li>Contact</li>
                    <li>Terms and condition</li>
                    <li>Our blog</li>
                </div>
                
            </div>
                <div className="col-md-6 col-sm-12 last__dis">
                    <p>We are the top real estate
                    agency in Sydney, with agents
                    available to answer any
                    question 24/7.</p>
                    <img className="logo__img" src={logo1} alt=""/>
                    <img className="logo__img" src={logo2} alt=""/>
                    <img className="logo__img" src={logo3} alt=""/>
                    <img className="logo__img" src={logo4} alt=""/>


                </div>
        </div>
    );
};

export default Footer;