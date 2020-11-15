import React from 'react';
import './HouseCardMap.css';
import hotel2 from './../../../images/hotel2.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import { Link } from 'react-router-dom';


const HouseCardMap = ({ project }) => {
    return (
        
            <div class="card col-md-4 " >

                <img src={hotel2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">{project.name}</h5>
                    <p><LocationOnIcon/>{project.location}</p>
                    <p> <HotelIcon/> 3 Bedrooms <BathtubIcon/> 2 Bathroom</p>
                    <h1 className="hotel__price">$ {project.price}</h1>
                    <Link to="/hotelbooking"> <button type="button" class="btn btn-success order__button">View Details</button></Link>
                    </div>
            </div>
    
        
    );
};

export default HouseCardMap;
