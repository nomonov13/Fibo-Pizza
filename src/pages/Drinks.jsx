import { useTranslation } from "react-i18next"
import { DrinksArray } from "../data/DrinksArray"
import i18n from "i18next";

const Drinks = ({ addToCard, addToFavorites, isFavourite }) => {

    const { t } = useTranslation();

    const lang = i18n.language

    return (
        <section>
            <div className="container">
                <h1 className="text-3xl font-extrabold mb-6 text-yellow">{t('drink')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-29 gap-y-48">
                    {DrinksArray.map((drink, index) => (
                        <div
                            key={index}
                            className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <div className="relative">
                                <img
                                    src={drink.img}
                                    alt={drink.title[lang]}
                                    className="w-253 h-253"
                                />
                                <button onClick={() => addToFavorites(drink)} className="absolute top-0 right-5">
                                    <i className={`bi ${isFavourite(drink.id) ? 'bi-heart-fill text-red-500' : 'bi-heart'}`}></i>
                                </button>
                            </div>
                            <div className="py-1 px-1">
                                <h3 className="text-2xl font-extrabold text-gray">{drink.title[lang]}</h3>
                                <p className="text-sm text-desc-color font-medium my-4">{drink.description[lang]}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold">от {drink.price} ₽</span>
                                    <button onClick={() => addToCard(drink)} className="cart-btn">
                                        {t('basket-2')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Drinks