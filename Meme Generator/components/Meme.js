export default function Meme() {
    return (
        <section className="form-container">
            <div action="">
                <div className="form-inputs">
                    <input id="upper-line-input" type="text" placeholder="Top Text" />
                    <input id="lower-line-input" type="text" placeholder="Bottom"/>
                </div>
                <button className="form-btn">Get a new meme image  🖼️</button>
            </div>
        </section>
    )
}