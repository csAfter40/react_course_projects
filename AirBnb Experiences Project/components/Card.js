export default function Card() {
    return (
        <div className="card">
            <img src="./images/card-picture.png" alt="" />
            <div className="card-stats">
                <img className="card-star" src="./images/star.png" alt="star" />
                <p className="card-review-score">5.0</p>
                <p className="card-review-count">(6)</p>
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1" cy="1" r="0.5" fill="#918E9B"/>
                    <circle cx="1" cy="1" r="0.5" stroke="black"/>
                    <circle cx="1" cy="1" r="0.5" stroke="black" stroke-opacity="0.2"/>
                </svg>
                <p className="card-country">USA</p>
            </div>
            <p className="card-text">Life lessons with Katie Zaferes</p>
            <div className="card-price-container">
                <p className="card-price">From $136</p>
                <p className="card-unit">/ Person</p>
            </div>
        </div>
    )
}