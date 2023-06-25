import { MdClose } from 'react-icons/md';
import React from 'react';
import {useState} from 'react';
import CompanyBadges from './company-badges';
import { IoIosArrowBack } from 'react-icons/io';
import { ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'flowbite-react';


export default function HowToEarn(props) {

        const {selectedItem, handleItemClick, filteredDiscounts} = props;

        const activePage = 'HowToEarn';

        const requirements = [
            { id: 1, title: 'Number of Visits/Week', amount: '5 Visits', required: 10, completed: 5 },
            { id: 2, title: 'Amount Spent/Week', amount: '$120', required: 120, completed: 50 },
          ];

    return (
        <>
           

            <div className='backIcon-image'>
        <a href='/company-badges'><IoIosArrowBack className="back-icon" /></a>

        <div className='the-badge-info'>
          <img className='badge-page-image' src='/assets/subway-membership.png' alt='badge' />
          <p className='badge-page-company'>Subway</p>
          <p className='badge-page-title'>Silver Members</p>
        </div>
    </div>

        <div className="notif-separator"></div>

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

           
            
                {requirements.map(requirement => (
                    <div key={requirement.id}>
                        <h2 className='how-to-earn-title'>{requirement.title}</h2>
                        <p className='how-to-earn-amount'>{requirement.amount}</p>
                        <div className='progress-container'>
                            <div
                             className='progress-bar'
                             style={{ width: `${(requirement.completed / requirement.required) * 100}%` }}>
                             </div>
                        </div>
                    </div>
                ))}
         

        
        </>

    );
}