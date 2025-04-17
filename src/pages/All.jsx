import Hero from "../components/Hero"
import New from "../components/New"
import Location from "./Location"
import PizzaCards from "./PizzaCard"
import Stock from "./Stock"

const All = () => {
    return (
        <>
            <Hero />
            <New />
            <PizzaCards/>
            <Stock />
            <Location />
        </>
    )
}

export default All