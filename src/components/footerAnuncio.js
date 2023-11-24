import React from 'react';
import { Link } from 'gatsby'
import LogoFooter from '../images/logoSimples.png'

const FooterAnuncio = () => {
  return (
      <footer class="bg-fundoGeral" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-24 lg:px-8 lg:pt-8">

          <div class="md:gap-8">
            <div className='space-y-8'>
              <Link to='/'>
                <span className='sr-only'>DescompliCAR</span>
                <img className='h-12 w-12 rounded-full' src={LogoFooter} alt='logo' />
              </Link>
              <p className='text-sm leading-6 text-gray-200'>Lorem ipsum dolor sit amet lorem ipsum dolor</p>

            </div>
            <div className='mt-4 border-t border-gray-900/10 pt-4'>
              <p className='text-xs leading-5 text-gray-300'>&copy; Nome. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default FooterAnuncio;
