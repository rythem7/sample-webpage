function CardBody({shadow, title, imgSrc}) {
    return(
        <div className={`card bg-base-200 w-full max-w-[561px] aspect-[10/11] ${shadow? shadow : null}`} >
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
        </div>
    );
}

export default CardBody;