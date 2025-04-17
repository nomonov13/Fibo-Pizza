import { useTranslation } from "react-i18next"
import { PastaArray } from "../data/PastaArray"
import i18n from 'i18next';

const Pasta = () => {

    const { t } = useTranslation();

    const lang = i18n.language

    return (
        <section>
            <div className="container">
                <h1 className="text-3xl font-extrabold mb-6 text-yellow">{t('paste')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-29 gap-y-48">
                    {PastaArray.map((pasta, index) => (
                        <div
                            key={index}
                            className="rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <img
                                src={pasta.img}
                                alt={pasta.title[lang]}
                                className="w-253 h-253"
                            />
                            <div className="py-1 px-1">
                                <h3 className="text-2xl font-extrabold text-gray">{pasta.title[lang]}</h3>
                                <p className="text-sm text-desc-color font-medium my-4">{pasta.description[lang]}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold">от {pasta.price} ₽</span>
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

export default Pasta