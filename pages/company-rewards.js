import { MdClose } from 'react-icons/md';
import React from 'react';

export default function CompanyBadges() {
    const activePage = 'rewards';

    const discounts = [
      { id: 1, title: 'Joe & The Juice', amount: '10% Discount' },
      { id: 2, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
      { id: 3, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
      { id: 4, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
    ];

    return(
        <>
        <div className='company-badges-close'>
        <h1><img className='company-badges-logo' src='assets/placeholder-image.jpg' alt='logo' /></h1>
        <a href='/discover'><MdClose className="close-icon" /></a>
      </div>
      <h1 className='company-badges-heading'>Subway</h1>

        <div className="company-badge-buttons">
        <a
          href='/company-badges'
          className={`badge-button ${activePage === 'badges' ? 'active' : ''}`}
        >
          Badges
        </a>
        <span className="button-space"></span>
        <a
          href='/company-rewards'
          className={`reward-button ${activePage === 'rewards' ? 'active' : ''}`}
        >
          Rewards
        </a>
      </div>

      <main>
        
        <div className="discounts-container">
          {discounts.map(discount => (
               
                // <a style={linkStyle} href='/redeemPop'> 
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
            // </a> 
          ))}
          
        </div>
      </main>
      </>
    );
}