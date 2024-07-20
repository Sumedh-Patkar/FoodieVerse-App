import React from 'react';
import beerIcon from '../assets/images/beermug.ico';
import breakfastIcon from '../assets/images/big-breakfast.ico';
import breadIcon from '../assets/images/bread.ico';
import cornIcon from '../assets/images/earofcorn.ico';
import riceIcon from '../assets/images/fried_rice.ico';
import saladIcon from '../assets/images/greensalad.ico';
import hamburgerIcon from '../assets/images/hamburger.ico';
import nachosIcon from '../assets/images/nachos.ico';
import noodlesIcon from '../assets/images/noodles.ico';
import pizzaIcon from '../assets/images/pizza.ico';
import popcornIcon from '../assets/images/popcorn.ico';
import appleIcon from '../assets/images/redapple.ico';
import sandwichIcon from '../assets/images/sandwich.ico';
import tacosIcon from '../assets/images/taco.ico';
import cakeIcon from '../assets/images/shortcake.ico';

const Footer = () => {
  return (
    <footer id="footer" className="text-light bg-dark pt-5">
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h2>Kangawesome Food Blog</h2>
            <h6 className="text-secondary fw-light">A delightful journey into culinary excellence.</h6>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="tel:+123456789">+1 (234) 567-89</a></li>
              <li><a href="mailto:info@Kangawesome.com">info@Kangawesome.com</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com/Kangawesome" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/Kangawesome" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com/Kangawesome" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        {/* Food Icons Section */}
        <div className="row mt-4">
          <div className="col-lg-12">
            <h5 className="text-center mb-3"><em className='fw-light'>Indulge in endless culinary inspiration!</em></h5>
            <div className="d-flex justify-content-center align-items-center">
              <img src={sandwichIcon} alt="Sandwich Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={tacosIcon} alt="Tacos Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={cakeIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={beerIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={breakfastIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={breadIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={cornIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={riceIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={saladIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={hamburgerIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={nachosIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={noodlesIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={pizzaIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={popcornIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
              <img src={appleIcon} alt="Cake Icon" className="food-icon mr-3" style={{ maxWidth: '3%', height: 'auto' }} />
            </div>
          </div>
        </div>
        
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">© 2024 Kangawesome. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
