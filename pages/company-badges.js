import { MdClose } from 'react-icons/md';
import React from 'react';
import {useState} from 'react';
import BadgePage from './BadgePage';



export function CompanyBadges() {
  const activePage = 'badges'; // Set the active page here

  const [selectedItem, setSelectedItem] = useState(null);

  const badges = [
    { id: 1, company: 'Subway', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 2, company: 'Subway', title: 'Gold Membership', image: 'assets/placeholder-image.jpg' },
    { id: 3, company: 'Subway', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 4, company: 'Subway', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 5, company: 'Subway', title: 'Silver Membership', image: 'assets/subway-membership.png' },
    { id: 6, company: 'Subway', title: 'Silver Membership', image: 'assets/subway-membership.png' },
  ];

  const discounts = [
    { id: 1, title: 'Joe & The Juice', amount: '10% Discount' },
    { id: 2, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
    { id: 3, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
    { id: 4, title: 'Subway', amount: 'Lorem Ipsum Sit Dolor' },
  ];

  const handleItemClick = (badge) => {
    console.log('Item clicked:', badge);
    setSelectedItem(badge);
  }

  console.log('Selected Item:', selectedItem);

  if(selectedItem){

    const filteredDiscounts = discounts.filter(
      (discount) => discount.title === selectedItem.company
    );

    return(
      

        <BadgePage
          selectedItem = {selectedItem}
          handleItemClick = {handleItemClick}
          filteredDiscounts = {filteredDiscounts}
        />

        );
 
   
  }

  return (
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

      
      <div className="company-badge-container">
        {badges.map(badge => (
          <div className="company-badge-item" key={badge.id}>
            <img className="company-badge-image" src={badge.image} alt='badge' onClick={() => {
                  console.log('Image clicked');
                  handleItemClick(badge)
                  }}/>
            <div className="company-badge-info-title">
              <div className='company-badge-info'>
                <img className='company-badge-logo' src='assets/placeholder-image.jpg' alt="Company Logo" />
                <p className='company-badge-name'>{badge.company}</p>
              </div>
              <p className="company-badge-title">{badge.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CompanyBadges;