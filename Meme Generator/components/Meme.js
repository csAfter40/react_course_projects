import { getRandomElement } from "../utils";
import memeData from "../memesData"

export default function Meme() {
    const [allMemeImages, setAllMemeImages] = React.useState(memeData.data.memes);
    const defaultImg = getRandomElement(allMemeImages);
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: defaultImg.url
        }
    );
    function handleButtonClick(event) {
        setMeme(prevMeme => ({
            topText: prevMeme.topText,
            bottomText: prevMeme.bottomText,
            randomImage: getRandomElement(allMemeImages).url
        }))
    };

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
                <img src={meme.randomImage} alt="meme image" />
            </div>
        </section>
    )
}