import React from 'react';
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'
import Logo from '../images/logoSemNome.png'

const Index = () => {
  return (
    <div className='bg-fundoGeral'>
      <header className='absolute inset-x-6 sm:inset-x-10 top-8 z-50 flex justify-center'>

        <Link to='/' className='cursor-pointer -m-1.5 p-1.5'>
        <span className='sr-only'>DescompliCAR</span>
        <img className='h-12 w-12 sm:h-18 sm:w-18 rounded-full' src={Logo} alt='logo'/>
        </Link>
            
      </header>
      <div className='mx-auto max-w-6xl p-6 sm:py-16 sm:px-8 lg:py-24 lg:px-16'>
        <div className='text-center'>
          <h1 className='mt-20 pr-4 pl-4 text-2xl font-bold tracking-tight text-white sm:mt-8 sm:text-4xl lg:text-6xl'>
              Os mecânicos querem complicar o seu carro, mas nós estamos aqui para descomplicar
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
        <div className='mt-10 flex items-center justify-center gap-x-6'>
        {/*<Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}><button
              className='transition ease-in-out delay-150 rounded-md bg-[#2B9C29] px-3.5 py-2.5 text-xl sm:text-2xl font-bold text-gray-200 shadow-sm 
              hover:-translate-y-1 hover:scale-110 hover:bg-[#2B9C29] duration-300'
            >
              EU QUERO DESCOMPLICAR MEU CARRO
  </button></Link> */}
        <Link
          to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
          className='animate-bounce motion-reduce rounded-md bg-[#2B9C29] px-3.5 py-2.5 text-xl sm:text-2xl text-center font-bold text-gray-200 shadow-2xl hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
        >
          EU QUERO DESCOMPLICAR MEU CARRO
        </Link>
        </div>
      </div>

        <div className='mt-8 relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center sm:px-16'>
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
              className='rounded-md bg-[#2B9C29] px-3.5 py-2.5 text-xl font-bold text-gray-200 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              EU QUERO DESCOMPLICAR MEU CARRO
            </Link>
          </div>
        </div>

      <footer class="bg-fundoGeral" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-24 lg:px-8 lg:pt-8">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
              <div class="md:gap-8">
              <div className='space-y-8'>
              <Link to='/'>
              <span className='sr-only'>DescompliCAR</span>
              <img className='h-12 w-12 rounded-full' src={Logo} alt='logo'/>
              </Link>
              <p className='text-sm leading-6 text-gray-200'>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
              
              </div>
              <div className='mt-4 border-t border-gray-900/10 pt-4'>
              <p className='text-xs leading-5 text-gray-300'>&copy; Nome. Todos os direitos reservados.</p>
              </div>
              </div> 
              
          </div>
          </div>
          
      </div>
      </footer>
      </div>

      
  );
};

export default Index;
