
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
const NavLinks = () => {
    return (
        <div>
            <div className='space-x-8 hidden md:block'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pets">Browse Pets</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
            </div>
            <div className="md:hidden">
                <MobileMenu></MobileMenu>
            </div>
        </div>
    );
};

export default NavLinks;