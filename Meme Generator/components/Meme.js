import { getRandomElement } from "../utils";
import memeData from "../memesData"

export default function Meme() {
    const defaultImg = getRandomElement(memeData.data.memes);
    const [memeImg, setMemeImg] = React.useState(<img src={defaultImg.url} alt="" />);
    function handleButtonClick(event) {
        let meme = getRandomElement(memeData.data.memes);
        setMemeImg(<img src={meme.url} alt="meme image" />);
    }

    return (
        <section className="form-container">
            <div>
                <div className="form-inputs">
                    <input id="upper-line-input" type="text" placeholder="Top Text" />
                    <input id="lower-line-input" type="text" placeholder="Bottom"/>
                </div>
                <button onClick={handleButtonClick} className="form-btn">Get a new meme image  🖼️</button>
            </div>
            <div id="picture-container">
                {memeImg}
            </div>
        </section>
    )
}