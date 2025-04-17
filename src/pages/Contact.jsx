import { useTranslation } from "react-i18next"

const Contact = () => {

    const { t } = useTranslation();

    return (
        <section>
            <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0148105380226!2d69.59864317555004!3d40.849598629181266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2dd0a7182d4b%3A0x4cbfcb1de9db07fc!2siTech!5e0!3m2!1suz!2s!4v1724665012350!5m2!1suz!2s" className='w-full h-80 mt-8 rounded-14' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='mt-5 space-y-3'>
                    <a className='text-4xl font-bold text-yellow block ' href="tel:+998939170731">998 93-917-07-31</a>
                    <p className='text-26 font-bold'>{t('address')}</p>
                    <p className='text-sm font-semibold'>{t('delivery_info')}</p>
                </div>
            </div>
        </section>
    )
}

export default Contact