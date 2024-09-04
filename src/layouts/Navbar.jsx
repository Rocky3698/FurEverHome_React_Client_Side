
import Logo from '../components/Logo';
const Navbar = () => {
    return (
        <nav className="border rounded-lg py-3 m-2">
            <div className="container mx-auto">
                <Logo></Logo>
            </div>
        </nav>
    );
};

export default Navbar;