import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cards from "./cards";

export default function App() {
    const cardDeck = cards.map(card => {
        return (
            <Card 
                key={card.id}
                img={card.img}
                reviewScore={card.score}
                reviewCount={card.count}
                location={card.location}
                text={card.text}
                currency={card.currency}
                price={card.price}
                unit={card.unit}
                isNotAvailable={card.openSpots==0}
            />
        )
    })
    return (
        <div className="main">
            <Navbar />
            <Hero />
            <div className="cards-container">
                {cardDeck}
            </div>
        </div>
    )
}