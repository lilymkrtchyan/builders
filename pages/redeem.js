import React from 'react';
import { MdClose } from 'react-icons/md';


export default function Redeem() {
    return(
        <>
        
        <a href='/discover'><MdClose className="close-icon" /></a>

        <div className='qr-and-info'>
            <img className='qr-code' src='assets/theQRcode.png'></img>
            <h2 className='redeem-name'>Katie Brown</h2>
            <p className='redeem-username'>@katie</p>
        </div>

        <button className='show-qr-button'>Show QR to Earn!</button>

        </>
    );
}

