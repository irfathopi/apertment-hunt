import React from 'react';
import './HouseCards.css';
import HouseCardMap from '../HouseCardMap/HouseCardMap';

const projects = [
    {
        name:'Child Support',
        price:'329',
        location: 'Nasiraba H/S Chattogram',
    },
    {
        name:'Refuse Shelter',
        price:'329',
        location: 'Nasiraba H/S Chattogram',
    },
    {
        name:'Refuse Shelter', 
        price:'329',
        location: 'Nasiraba H/S Chattogram',
    },
    {
        name:'Refuse Shelter',
        price:'329',
        location: 'Nasiraba H/S Chattogram',
    },
    
]

const HouseCards = () => {
    return (
        <div className="houseCards">
            <h5 className="houserent__color d-flex justify-content-center">House Rent</h5>
            <h2 className="heading">Discover the latest rent   <br /> available today</h2>


            {
                projects.map(project =><HouseCardMap project = {project}></HouseCardMap>)
            }
            
        </div>
    );
};

export default HouseCards;



// {/* <div class="card card__padding">
//                     <img src={img3} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">Washington Avenue</h5>
//                         <p class="card-text"> <RoomIcon />Nasirabad H/S Chattogram</p>
//                         <p class="card-text"><small class="text-muted"><HotelIcon />3 Bedrooms  <BathtubIcon />2 Bathroom</small></p>
//                         <h1 className="amount">$283</h1>
//                         <button type="button" class="btn btn-success viewdetails__btn">View Details</button>
//                     </div>
//                 </div> */}