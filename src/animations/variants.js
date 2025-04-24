export const fadeIn = {
    initial: { 
        scale:0, 
        opacity:0, 
        transition:{
            duration:0.1, 
            type:"tween", 
            ease:"easeIn"
        } 
    },
    animate: { 
        scale:1, 
        opacity:1, 
        transition:{
            duration:0.3, 
            type:"spring", 
            stiffness:100, 
            
        } 
    },
    hover: {
        scale:1.20, 
        transition:{
            type:"tween", 
            duration:0.2, 
            ease:"easeOut"
        }
    },
    transition: {
        duration: 0.05, // This applies when hover ends (reverts)
        ease: "easeIn",
    }
};

export const floatVariants = {
    animate: {
        y: [0, -20, 0],      // Up 20px, then back
        rotate: [0, 2, 0],   // Rotate a bit, then back
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
        }
    }
};

export const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 3, // Adjust the delay between each child animation
        },
    },
};
  
export const slideUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

export const hover = {
    onHover: {
        scale:1.10, 
        transition:{
            type:"tween", 
            duration:0.2, 
            ease:"easeOut"
        }
    }
}