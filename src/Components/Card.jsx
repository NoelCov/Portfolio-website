function Card(props) {
    return (
        <div className="card-container">
            <h3>{props.title}</h3><hr />
            <h5>{props.text}</h5>
            <h5>{props.secondtext}</h5>
        </div>
    )
};

export default Card;