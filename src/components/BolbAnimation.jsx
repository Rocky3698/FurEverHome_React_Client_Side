
const BolbAnimation = () => {
    return (
        <>
            <div className="absolute top-0 left-8 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 left-52 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-12 left-28 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </>
    );
};

export default BolbAnimation;