import { MdClose } from 'react-icons/md';
import React from 'react';
import {useState} from 'react';
import CompanyBadges from './company-badges';
import { IoIosArrowBack } from 'react-icons/io';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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



            {/* <ProgressBar min={0} max={100} now={60} /> */}
            <div className='progress-bar-container'>
                {requirements.map(requirement => (
                    <div key={requirement.id}>
                        <h2>{requirement.title}</h2>
                        <p>{requirement.amount}</p>
                        <ProgressBar className='progress-bar'
                            now={(requirement.completed / requirement.required) * 100} 
                            label={`${requirement.completed}/${requirement.required}`}
                        />
                    </div>
                ))}
            </div>
        </>

    );
}