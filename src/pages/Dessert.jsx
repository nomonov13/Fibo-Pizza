import { useTranslation } from "react-i18next"
import { DessertsArray } from "../data/DessertsArray"
import i18n from "i18next";

const Dessert = () => {

    const { t } = useTranslation();

    const lang = i18n.language

    return (
        <section>
            <div className="container">
                <h1 className="text-3xl font-extrabold mb-6 text-yellow">{t('dessert')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-29 gap-y-48">
                    {DessertsArray.map((dessert, index) => (
                        <div
                            key={index}
                            className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <img
                                src={dessert.img}
                                alt={dessert.title[lang]}
                                className="w-253 h-253"
                            />
                            <div className="py-1 px-1">
                                <h3 className="text-2xl font-extrabold text-gray">{dessert.title[lang]}</h3>
                                <p className="text-sm text-desc-color font-medium my-4">{dessert.description[lang]}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold">от {dessert.price} ₽</span>
                                    <button className="cart-btn">
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

export default Dessert