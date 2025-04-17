import logo from '../assets/images/icons/logo.svg'
import Phone from '../assets/images/icons/phone.svg';
import Ss from '../assets/images/icons/ss.svg';
import Thunder from '../assets/images/icons/thunder.svg';
import Telegram from '../assets/images/icons/telegram.svg';
import Facebook from '../assets/images/icons/facebook.svg';
import Xlink from '../assets/images/icons/xlink.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className=" py-12">
      <div className=" container flex justify-between items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <img src={logo} alt="Fibo Pasta Bar Logo" className="h-16" />
          <div className="flex gap-12 mb-6">
            <a href="#" className="text-black font-bold text-lg">
              {t('caloric')}
            </a>
            <a href="#" className="text-black font-bold text-lg">
              {t('legal-info')}
            </a>
          </div>
          <div>
            <p className="text-lg font-bold mb-4">{t('social-network')}:</p>
            <div className="space-y-2 space-x-2 flex items-center">
              <div className="flex flex-wrap gap-5">
                <a href="#" className="text-gray">YouTube</a>
                <a href="#" className="text-gray">Instagram</a>
              </div>
              <div className="flex flex-wrap gap-5">
                <a href="#" className="text-gray">Facebook</a>
                <a href="#" className="text-gray">ВКонтакте</a>
              </div>
              <p className='font-semibold text-sm text-gray'>{t('street')}</p>
            </div>
            <p className='font-semibold text-sm mt-11 text-gray'>{t('reserved')}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-start space-y-6">
          <p className="text-sm font-bold">{t('any-questions')}:</p>
          <div className="grid grid-cols-4 text-center gap-5">
            <button className='border-btn'>
              <img src={Phone} alt="phone" />
            </button>
            <button className='border-btn'>
              <img src={Ss} alt="phone" />
            </button>
            <button className='border-btn'>
              <img src={Thunder} alt="phone" />
            </button>
            <button className='border-btn'>
              <img src={Telegram} alt="phone" />
            </button>
            <button className='border-btn'>
              <img src={Facebook} alt="phone" />
            </button>
            <button className='border-btn'>
              <img src={Xlink} alt="phone" />
            </button>
            <button className='border-btn col-span-2'>
              <h3>{t('write')}</h3>
            </button>
          </div>
          <p className="text-3xl font-bold text-yellow">8 499 391-84-49</p>
          <button className="btn-gray">
            {t('request-call')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
