
import Logo from '../components/Logo';
import JoinNowButton from '../components/buttons/JoinNowButton';
import SignIn from '../components/buttons/SignIn';
import NavLinks from '../components/NavLinks';
const Navbar = () => {
    return (
        <nav className="p-3 pt-5 font-Poppins border-b border-tertiary">
            <div className="container mx-auto flex justify-between items-center ">
                <Logo></Logo>
                <NavLinks></NavLinks>
                <div className='md:flex gap-5 items-center hidden'>
                    <SignIn></SignIn>
                    <JoinNowButton></JoinNowButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;