import './App.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import ThemeSwitcher from './assets/ThemeSwitcher';
import BlueBoxWithNav from './components/partials/ContentBox1/BlueBox';
import YellowBar from './components/partials/StatsDiv';
import PaperPlaneShadow from './assets/PaperPlaneShadow.svg';
import Footer from './components/Footer';
import CardBody from './components/partials/CardBody';
import LowerBlue from './components/partials/LowerBlueDiv/LowerBlue';



function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    
  }, []);

  return(
    // Size for base
    <div className='relative flex flex-col min-h-screen w-screen items-center bg-base-280 px-10 pt-8 pb-0 gap-8'>

      <img src={PaperPlaneShadow} alt="paper plane" className='absolute left-0 top-240' />
      
      <BlueBoxWithNav />
      
      <YellowBar />
      
      <div className='bg-transparent flex items-center h-[5rem] mt-20' id='target-card'>
        <h1 className='text-6xl text-secondary'>Why Choose Us ?</h1>
      </div>

      <div className='grid grid-cols-2 grid-rows-2 gap-15 p-10 justify-items-center'>
        <div><CardBody title="Nava Card"/></div>
        <div><CardBody title="Nava Card"/></div>
        <div><CardBody title="Nava Card"/></div>
        <div><CardBody title="Nava Card"/></div>
      </div>

      <LowerBlue />

      <div className='grid grid-cols-2 grid-rows-3 gap-15 p-10 justify-items-center'>
        <div className='col-span-2'>
          <h1 className='text-primary'>Navi Heading</h1>
        </div>
        <div><CardBody title="Nava Card"/></div>
        <div><CardBody title="Nava Card"/></div>
        <div><CardBody title="Nava Card"/></div>
        <div><CardBody title="Nava Card"/></div>
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