import Footer from "./components/Footer"
import Header from "./components/Header"
import Pasta from "./pages/Pasta"
import PizzaCards from "./pages/PizzaCard"
import { Route, Routes } from "react-router-dom"
import Action from "./pages/Action"
import Soup from "./pages/Soup"
import Salad from "./pages/Salad"
import Drinks from "./pages/Drinks"
import Location from "./pages/Location"
import Stock from "./pages/Stock"
import All from "./pages/All"
import Dessert from "./pages/Dessert"

import './i18n'
import Contact from "./pages/Contact"

import 'bootstrap-icons/font/bootstrap-icons.min.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/pasta" element={<Pasta />} />
          <Route exact path="/pizza" element={<PizzaCards />} />
          <Route exact path="/salads" element={<Salad />} />
          <Route exact path="/drinks" element={<Drinks />} />
          <Route exact path="/stock" element={<Action />} />
          <Route exast path="/soup" element={<Soup />} />
          <Route exast path="/location" element={<Location />} />
          <Route exast path="/stock" element={<Stock />} />
          <Route exast path="/dessert" element={<Dessert />} />
          <Route exast path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

    </>
  )
}

export default App