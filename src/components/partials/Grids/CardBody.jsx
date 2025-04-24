import { motion as Motion } from 'framer-motion';
import { fadeIn } from '../../../animations/variants.js';

function CardBody({shadow, title, imgSrc}) {
    return(
        <Motion.div 
            className={`card bg-base-200 w-full max-w-[561px] aspect-[10/11] ${shadow? shadow : null}`}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition="transition"
        >
            <figure>
                <img
                src={imgSrc}
                alt="Shoes"
                loading="lazy" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                
            </div>
        </Motion.div>
    );
}

export default CardBody;