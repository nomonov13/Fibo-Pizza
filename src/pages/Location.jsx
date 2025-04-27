import { useTranslation } from 'react-i18next'
import delivery1 from '../assets/images/icons/delivery1.svg'
import delivery2 from '../assets/images/icons/delivery2.svg'
import delivery3 from '../assets/images/icons/delivery3.svg'
import delivery4 from '../assets/images/icons/delivery4.svg'


const Location = () => {

    const { t } = useTranslation();

    const deliveryCart = [
        {
            image: delivery1,
            title: t('card-1')
        },
        {
            image: delivery2,
            title: t('card-2')
        },
        {
            image: delivery3,
            title: t('card-3')
        },
        {
            image: delivery4,
            title: t('card-4')
        },
    ]
    return (
        <section className="bg-light-blue">
            <div className="container">
                <h2 className="text-center pt-14 pb-16">{t('payment')}</h2>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {deliveryCart.map((i, index) => {
                        return (
                            <div key={index} className='flex flex-col text-center px-4 mb-8 bg-[#FFFFFF] rounded-2xl items-center'>
                                <div className='px-4 pt-4 bg-[#FFFFFF] w-77 rounded-full relative bottom-7'>
                                    <img className='w-44 h-44' src={i.image} alt="svg" />
                                </div>
                                <div>
                                    <h3 className='text-[#473E43] text-sm font-bold pb-7'>{i.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0148105380226!2d69.59864317555004!3d40.849598629181266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2dd0a7182d4b%3A0x4cbfcb1de9db07fc!2siTech!5e0!3m2!1suz!2s!4v1724665012350!5m2!1suz!2s" className='w-full h-80 mt-8 rounded-14 pb-4' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Location