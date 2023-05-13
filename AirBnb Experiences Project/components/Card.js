export default function Card({props}) {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card-stats">
                <img className="card-star" src="./images/star.png" alt="star" />
                <p className="card-review-score">{props.score.toFixed(1)}</p>
                <p className="card-review-count">({props.count})</p>
                <p>•</p> 
                <p className="card-country">{props.country}</p>
            </div>
            <p className="card-text">{props.text}</p>
            <div className="card-price-container">
                <p className="card-price">From {props.currency}{props.price}</p>
                <p className="card-unit">/ {props.unit}</p>
            </div>
        </div>
    )
}