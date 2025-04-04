import bottomCube from '../../../assets/Cubes/bottomCube38.png';
import centerCube from '../../../assets/Cubes/cube35.png';
import leftCube from '../../../assets/Cubes/cube36.png';
import topCube from '../../../assets/Cubes/cube40.png';
import rightCube from '../../../assets/Cubes/right37.png';
import topRightCube from '../../../assets/Cubes/topRight39.png';

export default function Cubes () {
    return(
        <>
            <img src={topCube} alt="cube" className='absolute scale-125 origin-top top-0 left-[25%] -translate-x-1/2' />
            <img src={bottomCube} alt="cube" className='absolute scale-125 origin-bottom bottom-0 left-[35%] -translate-x-1/2' />
            <img src={leftCube} alt="cube" className='absolute scale-125 bottom-[20%] left-[10%]' />
            <img src={centerCube} alt="cube" className='absolute scale-125 top-1/2 left-[55%] -translate-x-1/2' />
            <img src={topRightCube} alt="cube" className='absolute scale-125 top-[15%] right-[10%] -translate-x-1/2' />
            <img src={rightCube} alt="cube" className='absolute scale-125 bottom-[10%] origin-right right-0 -translate-y-1/2' />
        </>
    );
}