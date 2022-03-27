import React from "react";


import email_icon from '../../../assets/images/icon-email.svg';
import phone_icon from '../../../assets/images/icon-phone.svg';

import "./FooterItem.css";

const FooterContact = (props) => {
  return (
    <div className={`footer_item ${props.className}`}>
      <h3 className="footer_item-title">For questions and suggestions</h3>
        <div className="footer_item-contact">
            <img src={email_icon} alt="email"/>
            <h4><a href="#/" className='email'  onClick={() => window.location = 'mailto:email@shelter.com'}>email@shelter.com</a></h4>
        </div>
        <div className="footer_item-contact">
            <img src={phone_icon} alt="phone"/>
            <h4><a href="tel:00136745677554">+13 674 567 75 54</a></h4>
        </div>
    
    </div>
  );
};

export default FooterContact;
