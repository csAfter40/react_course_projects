export default function Info() {
    return (
        <div className="info-container">
            <img src="./images/profile-pic.jpg" alt="Image Here" />
            <h2 className="info-name">Laura Smith</h2>
            <p className="info-title">Frontend Developer</p>
            <p className="info-website">laurasmith.website</p>
            <div className="info-btn-container">
                <button className="info-email-btn"><img className="info-linkedin-logo" src="./images/mail.png" alt="image" />Email</button>
                <button className="info-linkedin-btn"><img src="./images/linkedin.png" alt="image" />LinkedIn</button>
            </div>
        </div>
    )
}