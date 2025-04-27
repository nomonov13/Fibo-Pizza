import { useTranslation } from 'react-i18next';
import zakaz from '../assets/images/zakaz.jpg'

const Stock = () => {

  const { t } = useTranslation();

  return (
    <div className=" container  py-10 ">
      <h2 className="text-3xl font-bold text-center mb-10"><span className='text-black'>{t('our')}</span> {t('stock2')}</h2>

      <div className='grid md:grid-cols-2 gap-3 md:gap-8 py-10'>
        <img data-aos="zoom-in" className='w-full h-full rounded-20' src={zakaz} alt="stock" />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-8'>
          <img data-aos="zoom-in" className='rounded-20 h-full' src={zakaz} alt="stock" />
          <img data-aos="zoom-in" className='rounded-20 h-full' src={zakaz} alt="stock" />
          <img data-aos="zoom-in" className='rounded-20 h-full' src={zakaz} alt="stock" />
          <img data-aos="zoom-in" className='rounded-20 h-full' src={zakaz} alt="stock" />
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="btn-rounded">
          {t('all-stock')}
        </button>
      </div>
    </div >
  );
};

export default Stock;
