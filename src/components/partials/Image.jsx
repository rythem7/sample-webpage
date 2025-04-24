import React from 'react';
import {motion as Motion} from 'framer-motion';
import { floatVariants } from '../../animations/variants.js';

function Image({src, className, alt, animate}) {
  return (
    <Motion.img 
        src={src} 
        alt={!alt ? "cube": alt} 
        className={className}
        variants={animate ? floatVariants : ""}
        initial={animate ? "initial" : ""}
        animate={animate ? "animate" : ""}
        transition="transition"
        whileHover="hover" 
    />
    
  )
}

export default Image;
