import React from 'react'
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'

const CtaSection2 = () => {
    return (
        <div className='bg-gray-900 py-8' id='contato'>
        <div className='px-4 text-center sm:px-4 sm:text-center'>
            <h3 className='text-3xl lg:text-4xl font-semibold leading-9 text-gray-200'>Lorem ipsum dolor sit amet lorem ipsum!?</h3>
        </div>
        <div className='mt-8 flex justify-center'>
            <Link
            to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
            className='rounded-md bg-sky-800 px-3.5 py-2.5 text-xl font-bold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500'
            >
            ENTRAR EM CONTATO
            </Link>
        </div>
        </div>
    )
}

export default CtaSection2