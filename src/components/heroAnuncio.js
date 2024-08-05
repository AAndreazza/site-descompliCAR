import React from 'react';
import { Link } from 'gatsby'
import LogoHero from '../images/logoDescompliCAR.png'

const HeroAnuncio = () => {
  return (
    <div>
      {/* HEADER COM VIDEO E BOTAO */}
      <header className='absolute inset-x-20 sm:inset-x-10 top-8 z-50 flex justify-center'>
        <Link to='/' className='cursor-pointer -m-1.5 p-1.5'>
          <span className='sr-only'>DescompliCAR</span>
          <img className='h-36 w-36 sm:h-40 sm:w-40 -mt-6 sm:-mt-8' src={LogoHero} alt='logo descompliCAR' />
        </Link>
      </header>

      <div className='mx-auto max-w-6xl p-6 sm:py-16 sm:px-8 lg:py-24 lg:px-16 text-center lg:pr-10 lg:pl-10'>
        <h1 className='mt-32 pr-4 pl-4 text-2xl font-bold tracking-tight text-white sm:mt-20 sm:text-4xl lg:text-4xl'>
          Os mecânicos querem complicar o seu carro, mas <br/>nós estamos aqui para <a className='text-[#f77a28]'>descomplicar</a>
        </h1>
        <p className='mt-10 mx-auto text-base font-normal tracking-tight text-white sm:text-lg lg:text-2xl'>
          Assista essa breve aula para nunca mais ser enganado em uma oficina
        </p>
        <div className='mt-6 text-center sm:mx-36'>
          <iframe
            src="https://www.youtube.com/embed/TewaD89TPHo?si=NH_Xjfm2wPUqvcwY"
            title="Como descompliCAR o seu carro!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="allowfullscreen"
            className='w-full aspect-video mx-auto max-w-[22rem] lg:max-w-[53.25rem] mb-10'
          >
            Seu navegador não suporta a TAG video...
          </iframe>
        </div>

        <div className='mt-16 flex items-center justify-center gap-x-6'>
          <Link
            to='https://pay.kirvano.com/414355e3-a41b-4777-bfeb-545fb2fa205a'
            className='animate-bounce motion-reduce rounded-md bg-[#2B9C29] px-4 py-4 text-xl sm:text-xl text-center font-bold text-gray-200 shadow-2xl shadow-[#111c24] hover:bg-[#54a853] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            target='_blank'
          >
            EU QUERO DESCOMPLICAR MEU CARRO
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroAnuncio;
