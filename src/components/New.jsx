/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import pizza from '../assets/images/icons/mini-pizza.svg'

const Card = ({ title, price }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex  items-center  space-x-3">
            <img src={pizza} alt={title} className="w-70 h-70 mb-2" />
            <h3 className="text-lg font-semibold">{title} <br />  <span className="text-yellow font-bold">от {price} ₽</span> </h3>

        </div>
    );
};

const New = () => {

    const { t } = useTranslation();

    const items = [
        { title: t('carbonara'), price: "120", imageUrl: pizza },
        { title: t('carbonara'), price: "120", imageUrl: pizza },
        { title: t('carbonara'), price: "120", imageUrl: pizza },
        { title: t('carbonara'), price: "120", imageUrl: pizza },
    ];


    return (
        <div className=" container px-6 py-2 mb-11">
            <h2 className="text-2xl font-bold mt-16 mb-8 text-[#231F20]">{t('new')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default New;
