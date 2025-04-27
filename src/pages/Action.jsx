import { useTranslation } from "react-i18next"
import { ActionArray } from "../data/ActionArray"
import i18n from "i18next";

const Action = () => {

    const { t } = useTranslation();
    const lang = i18n.language


    return (
        <section>
            <div className="container">
                <h2 className="pb-6">{t('stock')}</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
                    {ActionArray.map((action, index) => {
                        return (
                            <div key={index} className='group shadow-action-cart rounded-xl'>
                                <img src={action.img} alt={action.title[lang]} className="w-full" />
                                <h3 className="font-bold text-20 pt-3 pb-2 px-5">{action.title[lang]}</h3>
                                <p className="px-5 pb-5 font-medium text-13 text-desc-color2">{action.description[lang]}</p>
                                <button className="mx-5 mb-4 action-btn !text-white duration-300 text-sm group-hover:!text-gray">Посмотреть</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Action