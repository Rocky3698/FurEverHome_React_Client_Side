import service1 from '../assets/petBoarding.png'
import service2 from '../assets/petCare.png'
import service3 from '../assets/petGroming.png'
// import service4 from '../assets/petTraining.png'
const ServicesIconGroup = () => {
    return (
        <div className='md:flex items-center  gap-6 justify-end hidden'>
            <div className='flex flex-col items-center gap-2 bg-secondary p-3 rounded-2xl drop-shadow-md'>
                <figure className='w-20 h-auto opacity-65'>
                    <img className='h-full w-full object-cover object-center' src={service1} alt="" />
                </figure>
                <h3 className='font-semibold opacity-70 px-1'>Pet Boarding</h3>
            </div>
            <div className='flex flex-col items-center gap-2 bg-secondary p-3 rounded-2xl drop-shadow-md'>
                <figure className='w-20 h-auto opacity-50'>
                    <img className='h-full w-full object-cover object-center' src={service2} alt="" />
                </figure>
                <h3 className='font-semibold opacity-70 px-5'>Pet Care</h3>
            </div>
            <div className='flex flex-col items-center gap-2 bg-secondary p-3 rounded-2xl drop-shadow-md'>
                <figure className='w-20 h-auto opacity-50'>
                    <img className='h-full w-full object-cover object-center' src={service3} alt="" />
                </figure>
                <h3 className='font-semibold opacity-70'>Pet Grooming</h3>
            </div>
            
        </div>
    );
};

export default ServicesIconGroup;