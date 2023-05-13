import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import {cards} from "./cards";

export default function App() {
    console.log(cards)
    return (
        <div className="main">
            <Navbar />
            <Hero />
            <div className="cards-container">
                {cards.map(card => {
                    return (
                        <Card 
                            // img={card.img}
                            // score={card.score}
                            // count={card.count}
                            // country={card.country}
                            // text={card.text}
                            // currency={card.currency}
                            // price={card.price}
                            // unit={card.unit}
                            props={card}
                        />)
                })
                    }
            </div>
        </div>
    )
}