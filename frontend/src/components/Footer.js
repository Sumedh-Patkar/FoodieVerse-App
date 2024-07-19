import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-light bg-dark pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Rattatouile</h5>
            <p>A delightful journey into culinary excellence.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="tel:+123456789">+1 (234) 567-89</a></li>
              <li><a href="mailto:info@rattatouile.com">info@rattatouile.com</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com/rattatouile" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/rattatouile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com/rattatouile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">© 2024 Rattatouile. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
