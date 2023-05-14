export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.img} alt="" />
            {props.isNotAvailable && <div className="sold-out-badge">Sold Out</div>}
            <div className="card-stats">
                <img className="card-star" src="./images/star.png" alt="star" />
                <p className="card-review-score">{props.reviewScore.toFixed(1)}</p>
                <p className="card-review-count">({props.reviewCount})</p>
                <p>•</p> 
                <p className="card-country">{props.location}</p>
            </div>
            <p className="card-text">{props.text}</p>
            <div className="card-price-container">
                <p className="card-price">From {props.currency}{props.price}</p>
                <p className="card-unit">/ {props.unit}</p>
            </div>
        </div>
    )
}