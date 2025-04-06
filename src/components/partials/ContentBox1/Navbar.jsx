import mainLogo from '../../../assets/mainLogo.png';

const item1 = "Courses";
const item2 = "Parent";
const item3 = "About Us";
const subItem1 = "Quick Tutorial";
const subItem2 = "My Account";

function NavBar() {
    return(

        <div className="navbar bg-transparent size-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>                        
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-transparent rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><a>{item1}</a></li>
                        <li>
                            <a>{item2}</a>
                            <ul className="p-2">
                                <li><a>{subItem1}</a></li>
                                <li><a>{subItem2}</a></li>
                            </ul>
                        </li>
                        <li><a>{item3}</a></li>
                    </ul>
                </div>

                <a className="lg:px-[20%] btn btn-ghost">
                    <img src={mainLogo} alt='logo' className='md:scale-100 lg:scale-130' />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex px-15">
                <ul className="menu menu-horizontal px-1 text-lg lg:text-2xl text-base-200">
                    <li className='lg:mx-10'><a>{item1}</a></li>
                    <li className='lg:mx-10'>
                        <details>
                            <summary>{item2}</summary>
                            <ul className="p-2 bg-transparent">
                                <li><a>{subItem1}</a></li>
                                <li><a>{subItem2}</a></li>
                            </ul>
                        </details>
                    </li>
                    <li className='lg:mx-10'><a>{item3}</a></li>
                </ul>
            </div>
            <div className="navbar-end lg:pr-15">
                <a className="btn lg:btn-wide btn-primary lg:text-xl">Start Learning</a>
            </div>
        </div>
    )
};

export default NavBar;

