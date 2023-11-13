import React from 'react'
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'

const CtaSection = () => {
    return(
    <div className='bg-fundoGeral' id='contato'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center sm:px-16'>
          <h2 className='mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          Lorem ipsum dolor sit amet lorem ipsum
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
              className='rounded-md bg-gray-100 px-3.5 py-2.5 text-xl font-bold text-gray-900 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              ENTRAR EM CONTATO
            </Link>
          </div>
        </div>
      </div>
    )
}

export default CtaSection