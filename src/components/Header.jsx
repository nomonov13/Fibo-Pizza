import logo from '../assets/images/icons/logo.svg'
import yandexEda from '../assets/images/icons/yandexEda.svg'
import starIcon from '../assets/images/icons/starIcon.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'


const Header = ({ card }) => {

    const [open, setOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const toggleMenu = () => {
        setOpen(!open);
    }

    const toCard = () => {
        navigate('./card')
    }

    const toFavourites = () => {
        navigate('./favorites')
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    const pageLinks = [
        {
            link: '/',
            title: t('home')
        },
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
        <header className={`${open ? 'bg-yellow' : 'bg-white'} sticky -top-24 z-50`}>
            <div className="container py-5 flex items-center justify-between ">
                <div className='flex space-x-14 items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className='hidden lg:flex flex-col space-y-1'>
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
                    <button className='hidden lg:flex btn-gray'>{t('call')}</button>
                    <select onChange={(e) => { changeLanguage(e.target.value) }} className='rounded-lg border-gray border-2 outline-0 py-1 px-3 lg:hidden'>
                        <option value="uz">Uz</option>
                        <option value="en">En</option>
                        <option value="ru">Ru</option>
                    </select>
                    <a className='text-yellow text-2xl font-bold hidden md:block' href="">998 93-917-07-31</a>
                    <button onClick={toCard} className='btn-yellow hidden md:block lg:hidden'>{t('basket')} | {card.length}</button>
                    <button aria-label='menu toggle' onClick={toggleMenu} className="lg:hidden flex flex-col justify-center items-center z-50 p-0 ml-5">
                        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                        </span>

                        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`} >
                        </span>

                        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                        </span>
                    </button>
                </div>


            </div>
            <div className='container flex justify-between items-center py-5'>
                <ul className='hidden lg:flex space-x-3.5 font-semibold text-[15px]'>
                    {pageLinks.map((i, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={i.link} activeClassName='active'>{i.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <div className='hidden lg:flex space-x-3'>
                    <button onClick={toFavourites} className='btn-transparent space-x-2'>
                        <span>{t('favorites')}</span>
                        <i className="bi bi-heart"></i>
                    </button>
                    <button onClick={toCard} className='btn-yellow'>{t('basket')} | {card.length}</button>
                    <select onChange={(e) => { changeLanguage(e.target.value) }} className='rounded-lg border-gray border-2 outline-0 py-1 px-3'>
                        <option value="uz">Uz</option>
                        <option value="en">En</option>
                        <option value="ru">Ru</option>
                    </select>
                </div>
            </div>

            {open && <ul className='container text-center lg:hidden flex flex-col space-y-3.5 pb-5 font-semibold items-center text-[15px]'>
                {pageLinks.map((i, index) => {
                    return (
                        <li key={index}>
                            <Link to={i.link} onClick={toggleMenu} activeClassName='active'>{i.title}</Link>
                        </li>
                    )
                })}
                <button className='text-black text-14 font-bold'>Войти</button>
                <a className='text-black text-2xl font-bold' href="">998 93-917-07-31</a>
                <button onClick={toCard} className='btn-yellow bg-white'>{t('basket')} | {card.length}</button>
            </ul>}
        </header>
    )
}

export default Header