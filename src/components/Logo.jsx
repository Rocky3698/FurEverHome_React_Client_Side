import logo from "../assets/Fat.png"
const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <figure className="h-10 w-10 md:h-12 md:w-12">
                <img className="object-cover h-full w-full rounded-lg" src={logo} alt="logo" />
            </figure>
            <h1 className="font-Poppins font-bold text-xl md:text-2xl">FurEver Home</h1>
        </div>
    );
};

export default Logo;