import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
const NavLinks = () => {
    return (
        <div>
            <div className='hidden md:flex items-center gap-8 '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pets">Browse Pets</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <div className="flex items-center gap-2">More
                    <MdOutlineArrowForwardIos className="rotate-90"/>
                </div>
            </div>
            <div className="md:hidden">
                <MobileMenu></MobileMenu>
            </div>
        </div>
    );
};

export default NavLinks;