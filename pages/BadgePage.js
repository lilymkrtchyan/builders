import { MdClose } from 'react-icons/md';
import React from 'react';
import {useState} from 'react';
import CompanyBadges from './company-badges';
import { IoIosArrowBack } from 'react-icons/io';
import HowToEarn from './HowToEarn';


export default function BadgePage(props) {

        const {selectedItem, handleItemClick, filteredDiscounts} = props;

        const activePage = 'BadgePage';


    return (
        <>

    <div className='backIcon-image'>
        <a href='/company-badges'><IoIosArrowBack className="back-icon" /></a>

        <div className='the-badge-info'>
          <img className='badge-page-image' src={selectedItem.image} alt='badge' />
          <p className='badge-page-company'>{selectedItem.company}</p>
          <p className='badge-page-title'>{selectedItem.title}</p>
        </div>
    </div>

        <div className="separator"></div>

        <div className="badge-page-buttons">
        <a
          href='/BadgePage'
          className={`badge-page-button ${activePage === 'BadgePage' ? 'badge-page-active' : ''}`}
        >
         🎁 Rewards
        </a>
        <span className="button-space"></span>
        <a
          href='/HowToEarn'
          className={`badge-page-button ${activePage === 'HowToEarn' ? 'badge-page-active' : ''}`}
        >
         ★ How to Earn
        </a>
      </div>

        <div className="discounts-container">
          {filteredDiscounts.map(discount => (
            <div className="rewards-discount-banner" key={discount.id}>
              <div className="company-info">
                <a href='/company-badges'><img className="company-logo" src="assets/placeholder-image.jpg" alt="Company Logo" /> </a>
                <h3 className="company-title">{discount.title}</h3>
              </div>

              <p className="discount-amount">{discount.amount}</p>
              <div className="discount-banner-footer">
               <div className='discount-banner-footer-company'> Subway |</div>  <span>Silver Membership</span>
              </div>
            </div>
          ))}
        </div>
      </>
        
    );
}
