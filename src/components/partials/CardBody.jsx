function CardBody(props) {
    return(
        <div className={`card bg-base-200 w-100 ${props.shadow? props.shadow : null}`} >
            <figure>
                <img
                src={props.imgSrc}
                alt="Shoes"
                loading="lazy" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                
            </div>
        </div>
    );
}

export default CardBody;