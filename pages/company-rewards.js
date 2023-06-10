import { MdClose } from 'react-icons/md';
import React from 'react';

export default function CompanyBadges() {
    const activePage = 'rewards';

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
      </>
    );
}