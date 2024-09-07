import fig1 from '../assets/fig1.jpg'
// import fig2 from '../assets/fig2.avif'
import Vector from '../assets/Vector.png'
import AdoptNowButton from '../components/buttons/AdoptNowButton';
import DonateNowButton from '../components/buttons/DonateNowButton';
import { FaArrowUp } from "react-icons/fa6";
const HeroSection = () => {
    return (
        <div className="">
            <div className="container mx-auto space-y-16 pt-10 ">
                <div className="flex justify-between items-center">
                    <div className='p-5 relative '>
                        <h1 className="text-7xl font-bold space-y-4 w-4/5 text-pretty">
                            Find Your Perfect Pet Companion Today
                        </h1>
                        <div className='space-x-5 mt-5'>
                            <AdoptNowButton></AdoptNowButton>
                            <DonateNowButton></DonateNowButton>
                        </div>
                    </div>

                    <div className="w-1/3 p-5 relative">
                        <figure className='absolute -top-10 -left-20'>
                            <img src={Vector} alt="" />
                        </figure>
                        <small className="font-Playfair_Display">#SaveALife</small>
                        <p className="text-3xl font-Playfair_Display">
                            Thousands of pets are waiting for a loving home. Start your adoption journey now.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-15 grid-rows-3 gap-5">
                    {/* Pet Care Service */}
                    <div className="border border-black border-spacing-1 rounded-lg col-span-3 row-span-2 p-5 flex items-center">
                        <img src="/path-to-your-icon/pet-care-icon.png" alt="Pet Care" className="w-16 h-16 mr-4" />
                        <div>
                            <h3 className="text-2xl font-semibold">Comprehensive Pet Care</h3>
                            <p className="text-lg">Our shelters provide top-tier veterinary care and grooming for all pets.</p>
                        </div>
                    </div>

                    {/* Adoption Info */}
                    <div className="rounded-lg col-span-5 row-span-3 bg-[#d0d7e1] p-5">
                        <div className='grid grid-cols-3 grid-rows-3 gap-2'>
                            <div className="rounded-lg border col-span-2 row-span-2">

                            </div>
                            <div className="rounded-lg col-span-1 row-span-2 ">
                                <div className='grid grid-cols-5 grid-rows-4 gap-2'>
                                    <figure className='col-span-5 row-span-2'>
                                        <img className='w-full h-full object-cover rounded-lg' src={fig1} alt="" />
                                    </figure>
                                    <figure className='col-span-2 row-span-1'>
                                        <img className='w-full h-full object-cover rounded-lg' src={fig1} alt="" />
                                    </figure>
                                    <figure className='col-span-3 row-span-1'>
                                        <img className='w-full h-full object-cover rounded-lg' src={fig1} alt="" />
                                    </figure>
                                    <figure className='col-span-5 row-span-1'>
                                        <img className='w-full h-full object-cover object-center rounded-lg' src={fig1} alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div className="rounded-lg border col-span-3 row-span-1">

                            </div>

                        </div>
                    </div>

                    {/* Highlighted Feature */}
                    <div className="rounded-lg col-span-4 row-span-3 bg-hero-1 bg-cover relative ">
                        <div className='absolute inset-0 bg-black bg-opacity-50 rounded-lg'></div>
                        <div className='relative z-10 h-full text-white p-5'>
                            <h3 className="text-2xl font-semibold mb-2">Shelter Partnerships</h3>
                            <p className="text-lg mb-6">We collaborate with multiple shelters to ensure safe adoption and care.</p>
                            <div className='h-1/2 w-1 border-l-2 border-dashed opacity-50'></div>
                            <FaArrowUp className='absolute -bottom-3 -right-4 w-12 h-12 p-3 rounded-full bg-blue-500 rotate-45'></FaArrowUp>
                        </div>
                    </div>

                    {/* Donation Info */}
                    <div className="border border-black border-spacing-1 rounded-lg col-span-3 row-span-2 p-5 flex items-center">
                        <img src="/path-to-your-icon/donate-icon.png" alt="Donate" className="w-16 h-16 mr-4" />
                        <div>
                            <h3 className="text-2xl font-semibold">Support Us</h3>
                            <p className="text-lg">Your donations help us provide care and shelter for pets in need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;