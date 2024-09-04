import logo from "../assets/logo.png"
const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <figure className="h-12 w-12">
                <img className="object-cover h-full w-full" src={logo} alt="logo" />
            </figure>
            <h1 className="font-Poppins font-bold text-2xl">FurEver Home</h1>
        </div>
    );
};

export default Logo;