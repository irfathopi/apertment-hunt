import React from 'react';
import './Service.css';
import img1 from '../../../logos/affordable1.png';
import img2 from '../../../logos/apartment1.png';
import img3 from '../../../logos/lessee1.png';




const Service = () => {
    return (
        <div className="service__section">
            <div className="section__heading">
                <p>Service</p>
                <h2>We're an agency tailored to all <br/> client's needs that always delivers.</h2>
            </div>

            <div class="card-deck ">
                <div class="card Services__manage">
                    <img src={img1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Wide range of properties</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
                    <div class="card Services__manage">
                        <img src={img2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">
                                    Financing made easy
                                </h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                        <div class="card Services__manage">
                            <img src={img3} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Trusted by thousends</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                        </div>
                        </div>
                    </div>
    );
};

export default Service;