import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function DiscountBanner() {
  const discounts = [
    { id: 1, title: 'Joe & The Juice', amount: '10% Discount' },
    { id: 2, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
    { id: 3, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
    { id: 4, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
  ];

  return (
    <div>
      <header>
        <img className="profile-pic" src="assets/placeholder-image.jpg" alt="Placeholder" />

        <div className="icons">
          <p>icon 1</p>
          <p>icon 2</p>
          <p>icon 3</p>
        </div>
      </header>

      <main>
        <h1 className="for-u">For You</h1>
        <div className="discounts-container">
          {discounts.map(discount => (
            <div className="discount-banner" key={discount.id}>
              <div className="company-info">
                <img className="company-logo" src="assets/placeholder-image.jpg" alt="Company Logo" />
                <h3 className="company-title">{discount.title}</h3>
              </div>

              <p className="discount-amount">{discount.amount}</p>
              <div className="discount-banner-footer">
                Subway | <span>Silver Membership</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="separator"></div>

      <NavBar />

    
    </div>
  );
}

export default DiscountBanner;
