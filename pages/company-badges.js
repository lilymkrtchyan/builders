import { MdClose } from 'react-icons/md';

export default function CompanyBadges(){

    return(
        <>
            <div className='company-badges-close'>
                <h1><img className='company-badges-logo' src='assets/placeholder-image.jpg' alt='logo' /></h1>
                <a href='/discover'><MdClose className="close-icon" /></a>
            </div>
            <h1 className='company-badges-heading'>Subway</h1>
        </>
    );
}