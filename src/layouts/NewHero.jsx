import AvatarGroup from '../components/AvatarGroup';
import { PiPawPrintFill } from "react-icons/pi";
import WireIn from '../assets/svg/WireIn.svg';
import WireOut from '../assets/svg/WireOut.svg';
import bannerImg from '../assets/bannerimg.png';
import petTie from '../assets/petTie.png'
import AdoptNowButton from '../components/buttons/AdoptNowButton';
import DonateNowButton from '../components/buttons/DonateNowButton';
import ServicesIconGroup from '../components/ServicesIconGroup';

const NewHero = () => {
    return (
        <div className='overflow-hidden'>
            <div className='container mx-auto md:flex items-end justify-between '>
                <div className="md:pt-14 pt-10 md:space-y-14 space-y-10 px-4 md:px-0">
                    <div className="md:text-7xl text-4xl font-extrabold md:space-y-3 space-y-2 ">
                        <h1 className='z-10'>Find Your Perfect <br /></h1>
                        <div className='flex items-center gap-5'>
                            <h1>Pet</h1>
                            <div className='bg-secondary shadow-xl p-2 md:p-3 rounded-xl -z-10 rotate-[5deg] relative'>
                                <h1 className='drop-shadow-xl text-marble'>Companion</h1>
                                <img className='absolute bottom-9 md:bottom-16 left-[40%] drop-shadow-2xl' src={WireIn} alt="" />
                                <img className='absolute -top-1 md:-top-5 right-[44%] -rotate-6 drop-shadow-2xl' src={WireOut} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center md:gap-5 gap-3'>
                            <h1>Today</h1>
                            <div className='h-10 md:h-16 md:w-52 w-24 bg-primary drop-shadow-sm rounded-3xl flex items-center justify-center '>
                                <figure className='w-1/3 opacity-60'>
                                    <img className='h-full w-full object-cover object-center' src={petTie} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <p className="md:text-xl text-lg opacity-70 font-Playfair_Display z-10">
                        #SaveALife <br />
                        Thousands of pets waiting for a loving home. <br className='hidden md:block' /> Start your adoption journey now
                    </p>
                    <div className='md:space-x-10 flex justify-between md:block'>
                        <AdoptNowButton></AdoptNowButton>
                        <DonateNowButton></DonateNowButton>
                    </div>
                    <div className='flex items-center gap-3 pt-10'>
                        <div>
                            <AvatarGroup></AvatarGroup>
                        </div>
                        <div>
                            <h1 className='font-bold'>15M+</h1>
                            <p className='font-Playfair_Display opacity-60'>Active Shelters <br />
                                across the world</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <ServicesIconGroup></ServicesIconGroup>
                    <figure className='-rotate-[3.74deg] relative z-10 md:-right-32 md:-bottom-6 -mb-8 md:mb-0'>
                        <img className='object-cover object-right w-full h-full' src={bannerImg} alt="" />
                    </figure>
                </div>
            </div>
            <div className='-rotate-3 drop-shadow-lg md:-ms-2 mb-20 py-1 md:py-0 md:h-14 w-[101%] z-0 bg-tertiary opacity-95  overflow-hidden flex items-center justify-center'>
                <div className='md:text-5xl text-white opacity-90 font-semibold flex items-center gap-3 justify-center text-nowrap'>
                    <h1 className='flex items-center gap-3'>ADOPTNOW <PiPawPrintFill /></h1>
                    <h1 className='flex items-center gap-3'>ADOPTNOW <PiPawPrintFill /></h1>
                    <h1 className='flex items-center gap-3'>ADOPTNOW <PiPawPrintFill /></h1>
                    <h1 className='flex items-center gap-3'>ADOPTNOW <PiPawPrintFill /></h1>
                    <h1 className='flex items-center gap-3'>ADOPTNOW <PiPawPrintFill /></h1>
                    <h1 className='flex items-center gap-3'>ADOPTNOW <PiPawPrintFill /></h1>
                    <h1 className='flex items-center gap-3'>ADOPTNOW <PiPawPrintFill /></h1>
                </div>
            </div>
            <div className='bg-secondary drop-shadow-md py-1 hidden md:block px-3 w-fit rounded-full h-fit ms-auto me-10 relative -top-20'>
                <h1 className='opacity-50'> Pet Adoption Platform</h1>
            </div>
        </div>
    );
};

export default NewHero;