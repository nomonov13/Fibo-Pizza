import Hero from "../components/Hero"
import New from "../components/New"
import Location from "./Location"
import PizzaCards from "./PizzaCard"
import Stock from "./Stock"

const All = ({ addToCard, addToFavorites , isFavourite }) => {
    return (
        <>
            <Hero />
            <New />
            <PizzaCards addToCard={addToCard} addToFavorites={addToFavorites}  isFavourite={isFavourite} />
            <Stock />
            <Location />
        </>
    )
}

export default All