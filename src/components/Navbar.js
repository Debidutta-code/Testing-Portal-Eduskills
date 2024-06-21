import eduSkillsLogo from '../assets/eduskillslogo.png';
import ProfileImage from '../assets/profileImg.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-main-component">
            <div className="navbar-content-container">
                <div className="navbar-logo-content-container">
                    <div className="navbar-main-logo-image-container">
                        <img className="navbar-main-logo-image" src={eduSkillsLogo} alt='Eduskills'></img>
                    </div>
                </div>
                <div className='navbar-main-searchbar-container'>
                    <input type='text' placeholder='Search user profile'></input>
                    <button className='navbar-search-button'>
                        {/* <IoIosSearch />  */}
                        Search
                    </button>
                </div>
                <div className="navbar-main-profile-container">
                    <div className='navbar-profile-image-container'>
                        <img className='navbar-profile-image' src={ProfileImage} alt='Profile'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;