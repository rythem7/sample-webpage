import './App.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import ThemeSwitcher from './assets/ThemeSwitcher';
import BlueBoxWithNav from './components/partials/ContentBox1/BlueBox';
import YellowBar from './components/partials/StatsDiv';
import PaperPlaneShadow from './assets/PaperPlaneShadow.svg';
import Footer from './components/Footer';
import LowerBlue from './components/partials/LowerBlue';
import Grid1 from './components/partials/Grids/Grid1';
import Grid2 from './components/partials/Grids/Grid2';
import Heading from './components/partials/HeadingBase';
import LowerCard from './components/partials/ContentBox2/LowerCard';
import FAQ from './components/partials/FAQ';



function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    
  }, []);

  return(
    // Size for base
    <div className='font-sans relative flex flex-col min-h-screen w-screen items-center bg-base-200 px-10 pt-8 pb-0 gap-8'>

      <img src={PaperPlaneShadow} alt="paper plane" className='absolute left-0 top-260 origin-left lg:scale-130 md:scale-90 scale-75 opacity-70' />
      
      <BlueBoxWithNav />
      
      <YellowBar />
      
      <Heading />

      <Grid1 />
      

      <LowerBlue />
      {/* <h1 className='text-primary'>Navi Heading</h1> */}
      <Heading />

      <Grid2 />

      <LowerCard />

      <div className='flex flex-col gap-4 lg:w-300 h-auto rounded-box'>
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </div>
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