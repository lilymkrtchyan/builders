import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

function Discover() {
    const discounts = [
        { id: 1, title: 'Joe & The Juice', amount: '10% Discount' },
        { id: 2, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
      ];

    const badges = [
        { id: 1, title: 'Silver Membership', image: 'assets/subway-membership.png' },
        { id: 2, title: 'Gold Membership', image: 'assets/placeholder-image.jpg' },
      ];

    return(
        <>
        <Header />
        <h1>Discover</h1>
        <div className="separator"></div>

        <div className='popular-rewards-heading'>
            <h2>🔥</h2>
            <h2>Popular Rewards</h2>
            <div className="see-all-container">
                <a href="#" className="see-all-link">See All</a>
            </div>
        </div>
        <div className="discounts-container">
          {discounts.map(discount => (
            <div className="discount-banner" key={discount.id}>
              <div className="company-info">
                <img className="company-logo" src="assets/placeholder-image.jpg" alt="Company Logo" />
                <h3 className="company-title">{discount.title}</h3>
              </div>

              <p className="discount-amount">{discount.amount}</p>
              <div className="discover-discount-banner-footer">
                Subway | <span>Silver Membership</span>
              </div>
            </div>
          ))}
        </div>

        <div className="separator"></div>

    <div className='popular-budges-heading'>
        <h2>⭐</h2>
        <h2>Popular Badges</h2>
        <div className="see-all-container">
            <a href="#" className="see-all-link">See All</a>
        </div>
    </div>
            <div className="badge-container">
                {badges.map(badge => (
                    <div className="badge-item" key={badge.id}>
                        <img className="badge-image" src={badge.image} alt={badge.title} />
                        <p className="badge-title">{badge.title}</p>
                    </div>
                                    ))}
            </div>


        <div className="separator"></div>

        <NavBar />
        </>
    );
}

export default Discover;