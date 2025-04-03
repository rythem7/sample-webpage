import NavBar from "./partials/Navbar";

function BlueBoxWithNav() {
    return(
        <div className="relative min-h-[70vh] w-full flex flex-col justify-between bg-cover bg-center bg-info rounded-box" style={{ backgroundImage: "url('your-hero-image.jpg')" }}>
            {/* Navbar */}
            <div className="flex-1 p-3">
                <NavBar />
            </div>
            {/* Hero Section */}
            {/* <div className="flex-3 items-center"> */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-3 flex-col items-center justify-center text-center px-6">
                    <h1 className="text-5xl font-bold text-white">Welcome to My Website</h1>
                    <p className="mt-4 text-lg text-gray-200 max-w-2xl">
                    This is the hero section. It takes up the top 70% of the screen.
                    </p>
                    <button className="btn btn-primary mt-6">Get Started</button>
                </div>
            {/* </div>     */}
        </div>
    );
}

export default BlueBoxWithNav;