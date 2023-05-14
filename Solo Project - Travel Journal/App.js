import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    function createCard(cardData, isLastIteration) {
        return (
            <div key={cardData.id}>
                <Card 
                    location={cardData.location.toUpperCase()}
                    img={cardData.img}
                    startDate={cardData.startDate}
                    endDate={cardData.endDate}
                    title={cardData.title}
                    text={cardData.text}                
                />
                {!isLastIteration && <hr/>} 
            </div>
        )
    }
    return (
        <div className="main">
            <Navbar />
            <section>
                {data.map((cardData, index) => {
                    // no hr after last card
                    let isLastIteration = index + 1 == data.length;
                    return createCard(cardData, isLastIteration);
                })}
            </section>
        </div>
    )
}