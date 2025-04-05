import './App.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import ThemeSwitcher from './assets/ThemeSwitcher';
import BlueBoxWithNav from './components/partials/ContentBox1/BlueBox';
import YellowBar from './components/partials/StatsDiv';
import PaperPlaneShadow from './assets/PaperPlaneShadow.svg';
import Footer from './components/Footer';
import CardBody from './components/partials/CardBody';
import LowerBlue from './components/partials/LowerBlue';
import Grid1 from './components/partials/Grid1';
import Grid2 from './components/partials/Grid2';
import Heading from './components/partials/HeadingBase';



function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    
  }, []);

  return(
    // Size for base
    <div className='relative flex flex-col min-h-screen w-screen items-center bg-base-200 px-10 pt-8 pb-0 gap-8'>

      <img src={PaperPlaneShadow} alt="paper plane" className='absolute left-0 top-240 origin-left lg:scale-130 md:scale-90 scale-75 opacity-70' />
      
      <BlueBoxWithNav />
      
      <YellowBar />
      
      <Heading />

      <Grid1 />
      

      <LowerBlue />
      {/* <h1 className='text-primary'>Navi Heading</h1> */}
      <Heading />

      <Grid2 />

      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App





{/* <div className="grid grid-flow-col grid-cols-5 gap-4 w-full h-full">
<div class="bg-primary p-4 hidden lg:block">Column 1</div>
<Hero />
<div class="bg-accent p-4 hidden lg:block">Column 4</div>
</div> */}