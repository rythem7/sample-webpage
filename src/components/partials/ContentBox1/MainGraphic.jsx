import Banda from '../../../assets/banda.png';

export default function MainGraphic() {
    return(
        <div className='relative scale-80 lg:scale-100 xl:scale-125'>
            <svg className='aspect-square h-auto w-100' viewBox="0 0 452 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className='fill-primary shadow border-accent saturate-80' cx="226" cy="226" r="226"/>
                <circle className='fill-primary shadow-xl brightness-130 border-accent border-1 saturate-80' cx="224" cy="226" r="185.753" fill="#FFCD66"/>
                <circle className='fill-primary shadow-2xl brightness-180 saturate-80' cx="224" cy="229.096" r="147.571" fill="#FFE2A5"/>
            </svg>
            <img className='absolute top-37 left-12 scale-140' src={Banda} alt="working-guy" />
        </div>
    );
}