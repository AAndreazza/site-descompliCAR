import React from 'react';
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'

const Anuncio = () => {
    return(
        <div className='bg-fundoGeral'>
      <div className='mx-auto max-w-4xl p-6 sm:py-16 sm:px-8 lg:py-24 lg:px-16'>
        <div className='text-center'>
          <h1 className='mt-8 pr-4 pl-4 text-2xl font-bold tracking-tight text-white sm:mt-0 sm:text-4xl lg:text-6xl'>
            Lorem ipsum dolor sit amet lorem ipsum dolor
          </h1>
          <p className='max-w-4xl mt-4 mx-auto text-base font-normal tracking-tight text-white sm:text-lg lg:text-2xl'>
            Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          </p>
        </div>
        <div className='mt-16 text-center'>
          <iframe
            width='100%'
            height='350'
            src='https://www.youtube.com/embed/UqFWCoBDh7s?si=qi9Nk9fEzIvy46Ok'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='mx-auto mb-10'
          >
            Seu navegador não suporta a TAG video...
          </iframe>
        </div>
      </div>
        <div className='-mt-8 relative isolate overflow-hidden bg-fundoGeral px-6 py-24 text-center sm:px-16'>
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
              COMPRAR AGORA
            </Link>
          </div>
        </div>
        <div className='bg-fundoGeral h-10'></div>
      </div>
    )
}

export default Anuncio;