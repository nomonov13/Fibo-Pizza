import logo from '../assets/images/icons/logo.svg'
import Phone from '../assets/images/icons/phone.svg';
import Ss from '../assets/images/icons/ss.svg';
import Thunder from '../assets/images/icons/thunder.svg';
import Telegram from '../assets/images/icons/telegram.svg';
import Facebook from '../assets/images/icons/facebook.svg';
import Xlink from '../assets/images/icons/xlink.svg';
import { useTranslation } from 'react-i18next';

import visa from '../assets/images/icons/visa.svg'
import paypal from '../assets/images/icons/paypal.svg'
import master from '../assets/images/icons/master.svg'

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className=" py-12">
      <div className="container py-20 grid lg:grid-cols-5 gap-10">
        <div className='space-y-4 lg:col-span-3 '>
          <div className='flex items-center justify-between'>
            <a href="#"><img src={logo} alt="logo" /></a>
            <div className='space-y-1 block md:hidden text-end'>
              <a className='text-yellow text-2xl font-bold block ' href="tel">998 93-917-07-31</a>
              <button className='btn-gray !py-2'>{t('request-call')}</button>
            </div>
          </div>
          <div className='font-bold flex space-x-10 text-10 md:text-base'>
            <p >{t('caloric')}</p>
            <p>{t('legal-info')}</p>
          </div>
          <p className='font-bold text-xs md:text-base'>{t('social-network')}</p>
          <ul className='grid grid-cols-3 text-10 md:text-sm gap-y-3'>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">{t('moscow_address')}</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">ВКонтакте</a></li>
            <li><a href="#">{t('street')}</a></li>
          </ul>
          <div className='hidden md:flex justify-between items-center'>
            <p>{t('reserved')}</p>
            <ul className='flex space-x-3 items-center'>
              <li>
                <a href="#">
                  <img src={visa} alt="visa" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={paypal} alt="visa" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={master} alt="visa" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='space-y-6 lg:col-span-2'>
          <p className='font-bold text-sm'>{t('any-questions')}</p>
          <ul className='grid grid-cols-6 md:grid-cols-4 gap-4 '>
            <li className='border-btn'>
              <a href="#">
                <img src={Phone} alt="icon" />
              </a>
            </li>
            <li className='border-btn'>
              <a href="#">
                <img src={Ss} alt="icon" />
              </a>
            </li>
            <li className='border-btn'>
              <a href="#">
                <img src={Thunder} alt="icon" />
              </a>
            </li>
            <li className='border-btn'>
              <a target='_blank' href="">
                <img src={Telegram} alt="icon" />
              </a>
            </li>
            <li className='border-btn'>
              <a href="#">
                <img src={Facebook} alt="icon" />
              </a>
            </li>
            <li className='border-btn'>
              <a href="#">
                <img src={Xlink} alt="icon" />
              </a>
            </li>
            <li className='border-btn col-span-6 md:col-span-2'>
              <a target='_blank' href="" >{t('write')}</a>
            </li>
          </ul>
          <div className='space-y-3 hidden md:block'>
            <a className='text-yellow text-2xl font-bold block' href="tel:+998939170731">998 93-917-07-31</a>
            <button className='btn-gray'>{t('request-call')}</button>
          </div>
          <div className='flex md:hidden justify-between items-center '>
            <p className='text-10'>{t('reserved')}</p>
            <ul className='flex space-x-3 items-center'>
              <li>
                <a href="">
                  <img src={visa} alt="visa" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={paypal} alt="paypal" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={master} alt="master" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
