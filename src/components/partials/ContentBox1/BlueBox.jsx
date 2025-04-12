import MainGraphic from './MainGraphic';
import Cubes from './CubeBoxes';
import lines from '../../../assets/lines.png';
import NavBar from "./Navbar";

function BlueBoxWithNav() {
    return(
        <div className="relative flex-3 min-h-[90vh] w-full flex flex-col bg-cover bg-center bg-secondary rounded-box shadow-xl text-primary-content p-5">
            <Cubes />
            <div>
                <NavBar />
            </div>
            
            <div className="hero h-full w-full bg-transparent place-content-center flex-3 -translate-y-1/20">
                <div className="hero-content max-h-max max-w-max min-w-[85vw] flex-col lg:flex-row-reverse">
                        
                    <div className="flex-1 flex justify-center">
                        <MainGraphic />
                    </div>
                    
                    <div className='flex-1 flex justify-center'>
                        <div className='flex flex-col gap-[1.5rem]'>
                            
                                
                            <h1 className="font-bold lg:text-6xl xl:text-8xl relative">
                                Fun & Engaging
                                <span className='absolute origin-bottom top-0 -right-2 w-12 h-auto mt-2 mr-2 -translate-y-1/2'>
                                    <img src={lines} alt="lines" />
                                </span>
                            </h1>
                            
                            <h1 className="font-bold lg:text-6xl xl:text-8xl">Learning</h1>
                            <h2 className="text-3xl text-bold">
                                AI-driven personalization keeps education exciting and <br></br>tailored to each child.
                            </h2>
                            <button className="mt-4 btn btn-primary btn-wide">Get Started</button>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* </div>     */}

            
            
        </div>
    );
}

export default BlueBoxWithNav;