import { useTranslation } from 'react-i18next';
import zakaz from '../assets/images/zakaz.jpg'

const Stock = () => {

  const { t } = useTranslation();

  return (
    <div className=" container  py-10 ">
      <h2 className="text-3xl font-bold text-center mb-10"><span className='text-black'>{t('our')}</span> {t('stock2')}</h2>
      <div className='flex space-x-7 max-h-[430px]'>
        <div className=" p-2 rounded-lg w-[500px] h-[390px]">
          <img
            src={zakaz}
            alt="Cake Offer"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">

          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative">
              <div className=" p-2 rounded-lg  w-64 h-[189px]">
                <img
                  src={zakaz}
                  alt={`Small Cake Offer ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="btn-rounded">
         {t('all-stock')}
        </button>
      </div>
    </div>
  );
};

export default Stock;
