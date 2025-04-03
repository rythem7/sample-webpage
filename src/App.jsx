import './App.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
// import NavBar from './components/Navbar';
// import Hero from './components/HeroCollection';
import ThemeSwitcher from './assets/ThemeSwitcher';
// import Footer from './components/Footer';
import BlueBoxWithNav from './components/BlueBox';
import Stats from './components/partials/StatsDiv';




function App() {

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return(
    // Size for base
    <div className='flex flex-col min-h-screen w-screen items-center bg-base-280 p-8 pt-7 gap-8'>
      {/* <NavBar /> */}
       <BlueBoxWithNav />
      
      <Stats />
      
      
      {/* <Footer /> */}

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