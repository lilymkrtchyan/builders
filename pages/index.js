import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import { useState } from 'react';
import RedeemPop from './redeemPop';

function DiscountBanner() {

  const [showPopup, setShowPopup] = useState(false);

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  }

  const discounts = [
    { id: 1, title: 'Joe & The Juice', amount: '10% Discount' },
    { id: 2, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
    { id: 3, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
    { id: 4, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
  ];

  const openPopup = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
    <div>
      <Header />

      <main>
        <h1 className="for-u">For You</h1>

        <div className="discounts-container">
          {discounts.map(discount => (
               
                <a style={linkStyle} href={`/?showPopup=${showPopup}`} onClick={openPopup}> 
                <div className="discount-banner" key={discount.id}> 
                  <div className="company-info">
                  <img className="company-logo" src="assets/placeholder-image.jpg" alt="Company Logo" /> 
                  <h3 className="company-title">{discount.title}</h3>
                
              </div>
         

              <p className="discount-amount">{discount.amount}</p>
              <div className="discount-banner-footer">
               <div className='discount-banner-footer-company'> Subway |</div>  <span>Silver Membership</span>
              </div>
            </div>
            </a> 
          ))}
          
        </div>
      </main>

      <div className="separator"></div>

      <NavBar />

    
    </div>
            
    <div>
    {showPopup && (
      <div className="popup-overlay">
        <div className="popup-container">
          <button className="close-button" onClick={() => setShowPopup(false)}>
             X
           </button>
        <RedeemPop />
     </div>
  </div>
                  )}
    </div>
    </>
  );
}


export default DiscountBanner;
