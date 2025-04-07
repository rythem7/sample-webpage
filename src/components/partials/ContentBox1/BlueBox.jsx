import MainGraphic from './MainGraphic';
import Cubes from './CubeBoxes';

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
                    
                    <div className='flex-1 flex justify-start'>
                        <div className='prose-3xl'>
                            <h1 className="text-5xl font-bold">Fun & Engaging Learning</h1>
                            <h3 className=" text-xl">
                                AI-driven personalization keeps education exciting and tailored to each child.
                            </h3>
                            <button className="mt-4 btn btn-primary lg:btn-wide">Get Started</button>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* </div>     */}

            
            
        </div>
    );
}

export default BlueBoxWithNav;