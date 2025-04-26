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
import { useState } from "react"
import CardPages from "./pages/CardPages"

import { toast, ToastContainer, } from 'react-toastify';
import Favorites from "./pages/Favorites"


const App = () => {


  const [card, setCart] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const addToCard = (item) => {
    const found = card.some(i => i.id == item.id)
    if (!found) {
      setCart([...card, item])
      toast.success(`Muvaffaqiyatli qo'shildi!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info(`Bu mahsulot oldin qo'shilgan!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const deleteCard = (item) => {
    setCart(card => card.filter(i => i.id !== item.id))
  }
  const addToFavorites = (item) => {
    const found = favorites.some(i => i.id == item.id)
    if (!found) {
      setFavorites([...favorites, item])
      toast.success(`Muvaffaqiyatli qo'shildi!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setFavorites(favorites => favorites.filter(i => i.id !== item.id))
    }
  }

  const updateCount = (id) => {
    setCart(card => card.map(item => {
      if (item.id == id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    }))
  }

  const decreaseCount = (id) => {
    setCart(card => card.map(item => {
      if (item.id == id) {
        return { ...item, count: item.count - 1 }
      }
      return item
    }))
  }


  const isFavourite = (id) => {
    return favorites.find(item => item.id == id)
  }


  return (
    <>
      <Header card={card} />
      <main>
        <Routes>
          <Route exact path="/" element={<All addToCard={addToCard} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
          <Route exact path="/pasta" element={<Pasta addToCard={addToCard} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
          <Route exact path="/pizza" element={<PizzaCards addToCard={addToCard} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
          <Route exact path="/salads" element={<Salad addToCard={addToCard} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
          <Route exact path="/drinks" element={<Drinks addToCard={addToCard} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
          <Route exact path="/stock" element={<Action />} />
          <Route exast path="/soup" element={<Soup addToCard={addToCard} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
          <Route exast path="/location" element={<Location />} />
          <Route exast path="/stock" element={<Stock />} />
          <Route exast path="/dessert" element={<Dessert addToCard={addToCard} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
          <Route exast path="/contact" element={<Contact />} />
          <Route exast path="/card" element={<CardPages decreaseCount={decreaseCount} updateCount={updateCount} card={card} deleteCard={deleteCard} />} />
          <Route exast path="/favorites" element={<Favorites favorites={favorites} addToFavorites={addToFavorites} isFavourite={isFavourite} />} />
        </Routes>
      </main>
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App