
import Logo from '../components/Logo';
import JoinNowButton from '../components/buttons/JoinNowButton';
import SignIn from '../components/buttons/SignIn';
import NavLinks from '../components/NavLinks';
const Navbar = () => {
    return (
        <nav className="border border-[#5A5A5A] rounded-lg p-3 m-2 font-Poppins">
            <div className="container mx-auto flex justify-between items-center">
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