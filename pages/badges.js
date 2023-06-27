import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

function Badges() {
  const badges = [
    { id: 1, company: 'Subway', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 2, company: 'Subway', title: 'Gold Membership', image: 'assets/placeholder-image.jpg' },
    { id: 3, company: 'McDonalds', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 4, company: 'McDonalds', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 5, company: 'Burger King', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 6, company: 'Burger King', title: 'Silver Membership', image: 'assets/subway-membership.png' },
  ];

  // Create an array of unique company names
  const companyNames = [...new Set(badges.map((badge) => badge.company))];

  return (
    <>
      <Header />

      <h1 className='heading-badges-word'>Badges</h1>

      {companyNames.map((company) => (
      <div key={company} className="badge-section">

      <div className='company-logo-name-badges'>
        <img className="badge-company-small-logo" src='assets/subway-membership.png' alt='company logo' />
        <h2 className='badges-company-name'>{company}</h2>
      </div>

      <div className="badges-image-info">
      <div className="badges-image-container">
        {badges
          .filter((badge) => badge.company === company)
          .map((badge) => (
            <div key={badge.id} className="badge-item">
              <div className="badges-image">
                <img src={badge.image} alt={badge.title} />
              </div>
              <div className='badges-badge-item-company-name-logo'>
                <div className='small-logo-badge-item'><img  src='assets/subway-membership.png' alt='logo'></img></div>
                <p>{company}</p>
              </div>

              <p className='badges-badge-item-title'>{badge.title}</p>
            </div>
          ))}
      </div>
    </div>
  </div>
))}
    
  

      <NavBar />
    </>
  );
}

export default Badges;
