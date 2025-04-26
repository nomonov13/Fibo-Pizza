import { useTranslation } from "react-i18next";
import { PizzaArray } from "../data/PizzaArray";
import i18n from 'i18next';
const PizzaCards = ({ addToCard, addToFavorites, isFavourite }) => {

    const { t } = useTranslation();

    const lang = i18n.language;


    return (
        <div className="container bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-yellow">{t('pizza')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-29 gap-y-48">
                {PizzaArray.map((pizza, index) => (
                    <div
                        key={index}
                        className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <div className="relative">
                            <img
                                src={pizza.img}
                                alt={pizza.title[lang]}
                                className="w-253 h-253"
                            />
                            <button onClick={() => addToFavorites(pizza)} className="absolute top-0 right-5">
                                <i className={`bi ${isFavourite(pizza.id) ? 'bi-heart-fill text-red-500' : 'bi-heart'}`}></i>
                            </button>
                        </div>
                        <div className="py-1 px-1">
                            <h3 className="text-2xl font-extrabold text-gray">{pizza.title[lang]}</h3>
                            <p className="text-sm text-desc-color font-medium my-4">{pizza.description[lang]}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold">от {pizza.price} ₽</span>
                                <button onClick={() => addToCard(pizza)} className="cart-btn">
                                    {t('basket-2')}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PizzaCards;
