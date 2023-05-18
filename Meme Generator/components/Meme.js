import { getRandomElement } from "../utils";
import memeData from "../memesData"

export default function Meme() {
    const allMemeImages = memeData.data.memes;
    const defaultImage = getRandomElement(allMemeImages);
    const [formData, setFormData] = React.useState(
        {
            topText: "",
            bottomText: "",
            image: defaultImage.url
        }
    );
    function handleButtonClick(event) {
        setFormData(prevData => ({
            topText: prevData.topText,
            bottomText: prevData.bottomText,
            image: getRandomElement(allMemeImages).url
        }))
    };
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevData => ({
            topText: prevData.topText,
            bottomText: prevData.bottomText,
            image: prevData.image,
            [name]: value
        }))
    }
    console.log(formData)

    return (
        <section className="form-container">
            <div>
                <div className="form-inputs">
                    <input 
                        id="upper-line-input" 
                        type="text" 
                        placeholder="Top Text" 
                        name="topText"
                        value={formData.topText}
                        onChange={handleChange}
                        />
                    <input 
                        id="lower-line-input" 
                        type="text" 
                        placeholder="Bottom"
                        name="bottomText"
                        value={formData.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleButtonClick} className="form-btn">Get a new meme image  🖼️</button>
            </div>
            <div id="picture-container">
                <img src={formData.image} alt="meme image" />
                <h2 className="meme-text top">{formData.topText}</h2>
                <h2 className="meme-text bottom">{formData.bottomText}</h2>
            </div>
        </section>
    )
}