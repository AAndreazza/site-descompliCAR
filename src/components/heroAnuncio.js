import React from 'react';
import { Link } from 'gatsby'
import LogoHero from '../images/logoDescompliCAR.png'

const HeroAnuncio = () => {
  return (
    <div className='bg-fundoGeral'>
      {/* HEADER COM VIDEO E BOTAO */}
      <header className='absolute inset-x-6 sm:inset-x-10 top-8 z-50 flex justify-center'>
        <Link to='/' className='cursor-pointer -m-1.5 p-1.5'>
          <span className='sr-only'>DescompliCAR</span>
          <img className='h-20 w-20 sm:h-24 sm:w-24 -mt-2 sm:mt-0' src={LogoHero} alt='logo descompliCAR' />
        </Link>
      </header>

      <div className='mx-auto max-w-6xl p-6 sm:py-16 sm:px-8 lg:py-24 lg:px-16'>
        <div className='text-center'>
          <h1 className='mt-20 pr-4 pl-4 text-2xl font-bold tracking-tight text-white sm:mt-8 sm:text-4xl lg:text-4xl'>
            Os mecânicos querem complicar o seu carro, mas nós estamos aqui para <a className='text-[#f77a28]'>descomplicar</a>
          </h1>
          <p className='mt-10 mx-auto text-base font-normal tracking-tight text-white sm:text-lg lg:text-2xl'>
            Assista essa breve aula para nunca mais ser enganado em uma oficina
          </p>
        </div>
        <div className='mt-6 text-center sm:mx-36'>
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

        <div className='mt-16 flex items-center justify-center gap-x-6'>
          {/*<Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}><button
              className='transition ease-in-out delay-150 rounded-md bg-[#2B9C29] px-3.5 py-2.5 text-xl sm:text-2xl font-bold text-gray-200 shadow-sm 
              hover:-translate-y-1 hover:scale-110 hover:bg-[#2B9C29] duration-300'
            >
              EU QUERO DESCOMPLICAR MEU CARRO
        </button></Link> */}
          <Link
            to=''
            className='animate-bounce motion-reduce rounded-md bg-[#2B9C29] px-3.5 py-2.5 text-xl sm:text-2xl text-center font-bold text-gray-200 shadow-2xl shadow-[#111c24] hover:bg-[#54a853] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            EU QUERO DESCOMPLICAR MEU CARRO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroAnuncio;
