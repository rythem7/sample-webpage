import mainLogo from '../../../assets/mainLogo.png';
import { motion as Motion } from 'framer-motion';
import { fadeIn } from '../../../animations/variants.js';

const menuItems = [
    { label: "Courses", subItems: [] },
    { label: "Parent", subItems: ["Quick Tutorial", "My Account"] },
    { label: "About Us", subItems: [] },
];

function NavBar() {
    return (
        <nav className="navbar bg-transparent size-full pt-5" aria-label="Main Navigation">
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden p-0"
                        aria-label="Open Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-transparent rounded-box mt-3 w-52 p-2 shadow">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a>{item.label}</a>
                                {item.subItems.length > 0 && (
                                    <ul className="p-2">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}><a>{subItem}</a></li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <a className="lg:px-[20%] btn btn-ghost" aria-label="Home">
                    <img src={mainLogo} alt="Logo" className="md:scale-100 lg:scale-130" />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex px-15">
                <ul className="menu menu-horizontal px-1 text-lg lg:text-2xl text-base-200">
                    {menuItems.map((item, index) => (
                        <Motion.li
                            key={index}
                            className="lg:mx-10"
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            transition="transition"
                        >
                            {item.subItems.length > 0 ? (
                                <details>
                                    <Motion.summary
                                        variants={fadeIn}
                                        initial="initial"
                                        animate="animate"
                                        whileHover="hover"
                                        transition="transition"
                                        layout
                                    >
                                        {item.label}
                                    </Motion.summary>
                                    <ul className="p-2 bg-transparent">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}><a>{subItem}</a></li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <a>{item.label}</a>
                            )}
                        </Motion.li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end lg:pr-15">
                <a className="btn lg:btn-wide btn-primary lg:text-xl" aria-label="Start Learning">Start Learning</a>
            </div>
        </nav>
    );
}

export default NavBar;

