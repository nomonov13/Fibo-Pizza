import { useTranslation } from "react-i18next"
import { DessertsArray } from "../data/DessertsArray"
import i18n from "i18next";

const Dessert = ({ addToCard, addToFavorites, isFavourite }) => {

    const { t } = useTranslation();

    const lang = i18n.language

    return (
        <section>
            <div className="container">
                <h1 className="text-3xl font-extrabold mb-6 text-yellow">{t('dessert')}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-29 gap-y-48">
                    {DessertsArray.map((dessert, index) => (
                        <li key={index} data-aos-duration="1000" data-aos="fade-up" className='p-4 relative hover:shadow-lg group cursor-pointer duration-300 border border-[#F3F3F7] rounded-14 flex flex-col' >

                            <div className="relative">
                                <img
                                    src={dessert.img}
                                    alt={dessert.title[lang]}
                                    className="w-64 mx-auto"
                                />
                                <button onClick={() => addToFavorites(dessert)} className="absolute top-0 right-5">
                                    <i className={`bi ${isFavourite(dessert.id) ? 'bi-heart-fill text-red-500' : 'bi-heart'}`}></i>
                                </button>
                            </div>
                            <div className="py-1 px-1">
                                <h3 className="text-2xl font-extrabold text-gray">{dessert.title[lang]}</h3>
                                <p className="text-sm text-desc-color font-medium my-4">{dessert.description[lang]}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold">от {dessert.price} ₽</span>
                                    <button onClick={() => addToCard(dessert)} className="cart-btn !py-1.5 !text-white duration-300 text-sm group-hover:!text-gray">
                                        {t('basket-2')}
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Dessert