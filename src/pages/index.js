import React from 'react';
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'
import Logo from '../images/logoSemNome.png'
import { URLS } from '../utils/constants'

const Index = () => {
  return (
    <div className='bg-fundoGeral'>
      <header className='absolute inset-x-6 sm:inset-x-10 top-6 z-50'>
            <div className='flex lg:flex-1'>
                <Link to='/' className='cursor-pointer -m-1.5 p-1.5'>
                <span className='sr-only'>DescompliCAR</span>
                <img className='h-10 w-10 sm:h-12 sm:w-12 rounded-full' src={Logo} alt='logo'/>
                </Link>
            </div>
      </header>
      <div className='mx-auto max-w-4xl p-6 sm:py-16 sm:px-8 lg:py-24 lg:px-16'>
        <div className='text-center'>
          <h1 className='mt-14 pr-4 pl-4 text-2xl font-bold tracking-tight text-white sm:mt-12 sm:text-4xl lg:text-6xl'>
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
        <div className='-mt-8 relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center sm:px-16'>
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
              COMPRAR AGORA
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
