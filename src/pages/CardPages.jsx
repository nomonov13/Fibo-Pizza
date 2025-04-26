/* eslint-disable react/prop-types */
import i18n from "i18next"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emptyGif from '../assets/gif/empty-gif.gif'

const CardPages = ({ card, deleteCard, updateCount, decreaseCount }) => {

    const { t } = useTranslation();

    const lang = i18n.language;

    const total = card.reduce((a, b) => a + b.count * b.price, 0)


    return (
        <section>
            <div className="cardContainer space-y-6">
                <div>
                    <h1 className="font-bold text-3xl text-yellow">{t('basket')}</h1>
                    {/* <img src={emptyGif} alt="" /> */}
                </div>
                {card.map((pizza, index) => (
                    <div
                        key={index}
                        className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out flex space-x-2 items-center"
                    >
                        <img
                            src={pizza.img}
                            alt={pizza.title[lang]}
                            className="w-20 h-20"
                        />
                        <div className="py-1 px-1">
                            <h3 className="text-2xl font-extrabold ">{pizza.title[lang]}</h3>
                            <p className="text-sm text-desc-color font-medium my-4 w-[600px]">{pizza.description[lang]}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold text-yellow">{pizza.price * pizza.count} ₽</span>
                            <div className="flex items-center space-x-4 bg-light-gray py-2 px-3 rounded-lg">
                                <button disabled={pizza.count <= 1} onClick={() => decreaseCount(pizza.id)} className="text-gray font-bold text-xl">-</button>
                                <span className="text-gray font-bold text-xl">{pizza.count}</span>
                                <button onClick={() => updateCount(pizza.id)} className="text-gray font-bold text-xl">+</button>
                            </div>
                            <button onClick={() => deleteCard(pizza)} className="text-2xl text-gray">
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardPages