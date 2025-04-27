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
                    <h1 className="font-bold text-3xl text-yellow relative">{t('basket')}</h1>
                </div>
                {card.length === 0 ? (
                    <div className="mx-auto text-center">
                        <img src={emptyGif} alt="Bo'sh korzina" className="w-32 mx-auto" />
                        <p>Hech narsa topilmadi!</p>
                    </div>
                ) : (
                    card.map((pizza, index) => (
                        <div
                            key={index}
                            className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out flex space-x-2 items-center"
                        >
                            <img
                                src={pizza.img}
                                alt={pizza.title[lang]}
                                className="w-20 h-20 hidden lg:block"
                            />
                            <div className="py-1 px-1">
                                <div className="flex space-x-16 lg:hidden">
                                    <img
                                        src={pizza.img}
                                        alt={pizza.title[lang]}
                                        className="w-20 h-20"
                                    />
                                    <div className="flex items-center space-x-3 bg-gray-100 rounded-md px-2 py-1 lg:hidden">
                                        <button disabled={pizza.count <= 1} onClick={() => decreaseCount(pizza.id)} className="text-gray font-bold text-lg">-</button>
                                        <span className="text-gray font-bold text-lg">{pizza.count}</span>
                                        <button onClick={() => updateCount(pizza.id)} className="text-gray font-bold text-lg">+</button>
                                    </div>
                                    <button onClick={() => deleteCard(pizza)} className="text-2xl text-gray">
                                        <i className="bi bi-x-circle"></i>
                                    </button>
                                </div>
                                <h3 className="text-2xl font-extrabold ">{pizza.title[lang]}</h3>
                                <p className="text-sm text-desc-color font-medium my-4 w-[600px]">{pizza.description[lang]}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl font-bold text-yellow hidden lg:block">{pizza.price * pizza.count} ₽</span>
                                <div className="hidden lg:flex items-center space-x-3 bg-gray-100 rounded-md px-2 py-1">
                                    <button disabled={pizza.count <= 1} onClick={() => decreaseCount(pizza.id)} className="text-gray font-bold text-lg">-</button>
                                    <span className="text-gray font-bold text-lg">{pizza.count}</span>
                                    <button onClick={() => updateCount(pizza.id)} className="text-gray font-bold text-lg">+</button>
                                </div>
                                <button onClick={() => deleteCard(pizza)} className="text-2xl text-gray hidden lg:block">
                                    <i className="bi bi-x-circle"></i>
                                </button>
                            </div>
                        </div>
                    ))
                )

                }

                <h3 className="text-2xl font-semibold absolute right-12">
                    All price: <span className="text-yellow">{total} ₽</span>
                </h3>
            </div>
        </section>
    )
}

export default CardPages