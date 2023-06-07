import { FaBox, FaSearch, FaBell } from 'react-icons/fa';
import { GrSearch } from 'react-icons/gr';
import { BsBell } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
import { RxCorners } from 'react-icons/rx';


export default function Header() {
    

    return  (
<header>
        <img className="profile-pic" src="assets/placeholder-image.jpg" alt="Placeholder" />

        <div className="icons">
        
                <RxCorners /> 
                <GrSearch />
                <a href="/notification"><BsBell /></a> 
            
        </div>
</header>
    );
}