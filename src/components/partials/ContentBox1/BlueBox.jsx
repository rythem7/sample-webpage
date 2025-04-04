
import Cubes from './CubeBoxes';
import Banda from '../../../assets/banda.png';
import NavBar from "./Navbar";

function BlueBoxWithNav() {
    return(
        <div className="relative flex-3 min-h-[70vh] w-full flex flex-col bg-cover bg-center bg-secondary rounded-box shadow-xl text-primary-content p-5">
            <Cubes />
            {/* Navbar */}
            <div >
                <NavBar />
            </div>
            {/* Hero Section */}
            {/* <div className="flex-3 items-center"> */}
            <div className="hero h-full w-full bg-transparent place-content-center flex-3 -translate-y-1/2'">
                <div className="hero-content flex-col lg:flex-row-reverse size-full">
                        
                    <div className="relative flex1">
                        <svg className='h-[25rem]' width="452" height="452" viewBox="0 0 452 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className='fill-primary shadow saturate-90' cx="226" cy="226" r="226"/>
                            <circle className='fill-primary shadow-xl brightness-115' cx="224" cy="226" r="185.753" fill="#FFCD66"/>
                            <circle className='fill-primary shadow-2xl brightness-130 saturate-80' cx="224" cy="229.096" r="147.571" fill="#FFE2A5"/>
                        </svg>
                        <img className='absolute top-30 left-15 scale-120' src={Banda} alt="working-guy" />
                    </div>
                    

                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6 lg:pr-30">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                
            </div>
            {/* </div>     */}

            
            
        </div>
    );
}

export default BlueBoxWithNav;