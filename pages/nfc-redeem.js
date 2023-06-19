import React from "react";

export default function NFCRedeem() {

   const activePage = 'nfc';

    return(
        <>

        <div className='centered-container'>
            <div className='redeem-options'>
                <a href='/nfc-redeem' className={`nfc-button ${activePage === 'nfc' ? 'redeem-active' : ''}`}>NFC</a>
                <a className={`qr-code-button ${activePage === 'qr-code' ? 'redeem-active' : ''}`}>QR Code</a>
            </div>
            <div className='info-and-image'>
                <p className='nfc-company-name'>Joe & The Juice</p>
                <p className='nfc-discount'>10% Discount</p>
                <div className='centered-image'>
                    <img className='wifi-sign' src='assets/nfc.png' alt='wifi sign' />
                </div>

                <div className='nfc-info-container'>
                    <p className='info-paragraph'>Hold your phone near NFC tag to redeem rewards.</p>
                </div>
            </div>
        </div>

        </>
    );
}