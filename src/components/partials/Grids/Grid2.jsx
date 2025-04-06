import CardBody from './CardBody';
import g21 from '../../../assets/Grid2/g21.png';
import g22 from '../../../assets/Grid2/g22.png';
import g23 from '../../../assets/Grid2/g23.png';
import g24 from '../../../assets/Grid2/g24.png';

export default function Grid2() {
    return(
        <div className='grid grid-cols-2 grid-rows-2 gap-15 p-10 justify-items-center'>
        <CardBody title="Nava Card" imgSrc={g21}/>
        <CardBody title="Nava Card" imgSrc={g22}/>
        <CardBody title="Nava Card" imgSrc={g23}/>
        <CardBody title="Nava Card" imgSrc={g24}/>
      </div>
    );
}