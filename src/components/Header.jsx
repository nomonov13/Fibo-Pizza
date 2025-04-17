import logo from '../assets/images/icons/logo.svg'
import yandexEda from '../assets/images/icons/yandexEda.svg'
import starIcon from '../assets/images/icons/starIcon.svg'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    const pageLinks = [
        {
            link: '/pizza',
            title: t('pizza')
        },
        {
            link: '/pasta',
            title: t('paste')
        },
        {
            link: '/soup',
            title: t('soup')
        },
        {
            link: '/salads',
            title: t('salad')
        },
        {
            link: '/drinks',
            title: t('drink')
        },
        {
            link: '/dessert',
            title: t('dessert')
        },
        {
            link: '/stock',
            title: t('stock')
        },
        {
            link: '/contact',
            title: t('contact')
        },
        {
            link: '/location',
            title: t('location')
        },
    ]

    return (
        <header className='sticky -top-24 z-50 bg-white'>
            <div className="container py-5 flex items-center justify-between ">
                <div className='flex space-x-14 items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className='flex flex-col space-y-1'>
                        <p className='font-semibold text-lg'>
                            {t('delivery')}
                            <span className='text-yellow ml-1'>{t('moscow')}</span>
                        </p>
                        <div className='flex items-center space-x-3 text-13 font-bold'>
                            <div className='flex space-x-2'>
                                <img src={yandexEda} alt="yandex eda" />
                                <span>{t('yandex-food')}</span>
                            </div>
                            <div className="circle"></div>

                            <div className="flex space-x-2">
                                <span>4.8</span>
                                <img src={starIcon} alt="star" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>{t('delivery-time')}</span>
                                <div className="circle"></div>
                                <span>{t('from-31')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex space-x-3 items-center'>
                    <button className='btn-gray'>{t('call')}</button>
                    <a className='text-yellow text-2xl font-bold' href="">8 499 391-84-49</a>
                </div>

            </div>
            <div className="container flex justify-between items-center py-5">
                <ul className='flex space-x-3.5 font-semibold text-[15px]'>
                    {pageLinks.map((i, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={i.link} activeClassName='active'>{i.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <div className='flex space-x-3'>
                    <button className='btn-transparent space-x-2'>
                        <span>{t('favorites')}</span>
                        <i className="bi bi-heart"></i>
                    </button>
                    <button className='btn-yellow'>{t('basket')} | 1</button>
                    <select onChange={(e) => { changeLanguage(e.target.value) }} className='outline-0 py-1 px-3'>
                        <option value="uz">Uz</option>
                        <option value="en">En</option>
                        <option value="ru">Ru</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header