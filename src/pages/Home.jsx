
import Navbar from '../layouts/Navbar';
import NewHero from '../layouts/NewHero';
import PetTie from '../components/PetTie';
const Home = () => {
    return (
        <div className=''>
            <div className='relative '>
                <div className='absolute inset-0 md:flex -z-50'>
                    <div className='bg-primary md:w-[60%] md:h-full h-[60%]'></div>
                    <div className='bg-secondary md:w-[40%] md:h-full h-[40%] relative'>
                        <div className='absolute top-[45%] -left-12'>
                            <PetTie></PetTie>
                        </div>
                    </div>
                </div>
                <Navbar></Navbar>
                <NewHero></NewHero>
            </div>
        </div>
    );
};

export default Home;