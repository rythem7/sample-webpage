import DeskScreen from '../../../assets/desk_screen.png';

function LowerBlue() {
    return(
        <div className='w-screen bg-accent h-150 relative mb-100 mt-40 shadow-lg'>
            <div className="absolute bg-base-200 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/8 rounded-box">
                {/* <DeskScreen /> */}
                <img src={DeskScreen} alt="office" className='scale-130'/>
            </div>
        </div>
    );
}

export default LowerBlue;