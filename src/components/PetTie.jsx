import pt from '../assets/petTie.png'
const PetTie = () => {
    return (
        <div className='w-24  h-14 rounded-full drop-shadow-sm bg-primary md:flex items-center justify-center hidden'>
            <figure className='w-16 opacity-30'>
                <img className='h-full w-full object-cover object-center' src={pt} alt="" />
            </figure>
        </div>
    );
};

export default PetTie;