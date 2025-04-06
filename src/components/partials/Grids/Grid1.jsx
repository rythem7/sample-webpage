import CardBody from "./CardBody";
import g1 from "../../../assets/Grid1/g1.png";
import g2 from "../../../assets/Grid1/g2.png";
import g3 from "../../../assets/Grid1/g3.png";
import g4 from "../../../assets/Grid1/g4.png";
function Grid1() {
    return(
        <div className='grid grid-cols-2 grid-rows-2 gap-15 p-10 justify-items-center'>
        <CardBody shadow="shadow-lg" title="Nava Card" imgSrc={g1}/>
        <CardBody shadow="shadow-lg" title="Nava Card" imgSrc={g2}/>
        <CardBody shadow="shadow-lg" title="Nava Card" imgSrc={g3}/>
        <CardBody shadow="shadow-lg" title="Nava Card" imgSrc={g4}/>
      </div>
    );
}

export default Grid1;