import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
    return (
        <div className="main">
            <Navbar />
            <Hero />
            <div className="cards-container">
                <Card 
                    img="./images/card-picture.png"
                    score="5.0"
                    count="6"
                    country="USA"
                    text="Life lessons with Katie Zaferes"
                    price="$136"
                    unit="person"
                />
                <Card 
                    img="./images/card-picture.png"
                    score="5.0"
                    count="6"
                    country="USA"
                    text="Life lessons with Katie Zaferes"
                    price="$136"
                    unit="person"
                />
            </div>
        </div>
    )
}