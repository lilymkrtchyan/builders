import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NFCRedeem } from './nfc-redeem'


export default function RedeemPop() {

    const handleRedeem = () => {
        // Redirect to the "nfc-redeem" page
        window.location.href = '/nfc-redeem';
      };

    return (
        <>
        
        <div className='redeem-pop-container'>
        <img className='redeempop-company-logo' src='assets/placeholder-image.jpg' alt='placeholder company image' />
        <p className='redeempop-company-name'>Joe & The Juice</p>
        <p className='redeempop-reward'>10% Discount</p>

        <div className='redeempop-requirement-container'>
            <p className='word-requirement'>Requirement:</p>
            <div className='redeempop-company-title'>
                <p className='redeempop-container-company'>Subway |</p>
                <p className='redeempop-container-title'>Silver Members</p>
            </div>
        </div>

        <div className='exp-date-limit'>
            <dev className='exp-date-container'>
                <p className='word-exp-date'>Expiery Date</p>
                <p className='date'>24 Dec 2022</p>
            </dev>

            <div className='limit-container'>
                <p className='word-limit'>Limit</p>
                <p className='limit'>One Time</p>
            </div>
        </div>

        <div className="separator"></div>

        <div className='description-container'>
            <p className='word-description'>Description</p>
            <p className='paragraph-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed efficitur neque, vel molestie ligula. Lorem ipsum dolor sit amet. </p>
        </div>

        <button className="redeem-button" onClick={handleRedeem}>Redeem</button>

        </div>
        </>
    );
}