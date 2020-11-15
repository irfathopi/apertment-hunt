import React from 'react';
import './Header.css';
import HeaderBanner from '../../../images/Rectangle13.png'


const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( to bottom, rgba(0, 0, 0, 0.1) 0.1%, rgba(0, 0, 0, 1) 90%), url(${HeaderBanner})`}} className ="header__banner">
            <h2 className="banner__heading d-flex justify-content-center">FIND YOUR HOUSE RENT</h2>


                <form class="form-inline d-flex justify-content-center">
                    <div class="form-group mx-sm-3 mb-2">
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Search..."/>
                    </div>
                        <button type="button" class="  mr-5 btn btn-success login__btn ">Find now</button>
                </form>
        </div>
    );
};

export default Header;