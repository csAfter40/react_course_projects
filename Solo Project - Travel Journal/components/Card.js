export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card-info">
                <div className="card-info-location">
                    <p><span><img src="./images/poi.png" alt="" /></span>{props.location}</p>
                    <a href="https://maps.google.com">View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <div className="card-info-dates">
                    <p>{props.startDate}</p>
                    <p> - </p>
                    <p>{props.endDate}</p>
                </div>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}