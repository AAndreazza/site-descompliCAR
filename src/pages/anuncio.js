import React from 'react';
import { Link } from 'gatsby'
import LogoHero from '../images/logoDescompliCAR.png'
import LogoFooter from '../images/logoSimples.png'
import fotoTeste from '../images/whatsapp.jpg'
import CompraSegura from '../images/iconCompraSegura.png'
import SuporteTecnico from '../images/iconSuporteTecnico.png'
import Garantia from '../images/iconGarantia.png'

const Anuncio = () => {
  return (
    <div className='bg-fundoGeral'>
      {/* HEADER COM VIDEO E BOTAO */}
      <header className='absolute inset-x-6 sm:inset-x-10 top-8 z-50 flex justify-center'>

        <Link to='/' className='cursor-pointer -m-1.5 p-1.5'>
          <span className='sr-only'>DescompliCAR</span>
          <img className='h-20 w-20 sm:h-24 sm:w-24 -mt-2 sm:mt-0' src={LogoHero} alt='logo' />
        </Link>

      </header>
      <div className='mx-auto max-w-6xl p-6 sm:py-16 sm:px-8 lg:py-24 lg:px-16'>
        <div className='text-center'>
          <h1 className='mt-20 pr-4 pl-4 text-2xl font-bold tracking-tight text-white sm:mt-8 sm:text-4xl lg:text-6xl'>
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
      {/* ICONS DE SUPORTE, GARANTIA E COMPRA */}
      <div class="bg-fundoGeral py-14 -mt-4 sm:-mt-20">
        <div class="mx-auto max-w-3xl px-3 lg:px-8 text-center">
          <div class="grid grid-cols-3 gap-x-6">
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
              <img className='h-12 w-12 sm:h-24 sm:w-24' src={CompraSegura} alt='logo' />
              <p class="text-base sm:text-lg font-bold text-gray-300">Compra Segura</p>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
              <img className='h-12 w-12 sm:h-24 sm:w-24' src={SuporteTecnico} alt='logo' />
              <p class="text-base sm:text-lg font-bold text-gray-300">Suporte personalizado</p>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
              <img className='h-12 w-12 sm:h-24 sm:w-24' src={Garantia} alt='logo' />
              <p class="text-base sm:text-lg font-bold text-gray-300">Garantia de 15 dias</p>
            </div>
          </div>
        </div>
      </div>

      {/* SUPORTE SECTION */}
      <div class="bg-[#13293e] py-24 sm:py-32 -mb-14 sm:-mb-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-base -mt-14 font-semibold leading-7 text-[#a1b2ec]">SUPORTE</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">Confira como funciona nosso suporte</p>
          </div>
          <p class="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-400">Já foi na oficina e ficou desconfiado de algo? Com o descomplicar basta pedir um "help" que você vai saber tudo que precisa! </p>

          <div class="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-8 lg:rounded-r-none">
              <div>
                <div class="flex items-center justify-between gap-x-4">
                  <h3 id="tier-freelancer" class="text-xl text-center font-bold text-gray-900">Consulta do histórico de manutenção do veiculo e <br /> próximos serviços</h3>
                </div>
                {/*<p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for your company.</p>*/}
                <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                  <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
                </div>

              </div>
            </div>

            <div class="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:z-10 lg:rounded-b-none">
              <div>
                <div class="flex items-center justify-between gap-x-4">
                  <h3 id="tier-startup" class="text-xl text-center font-bold text-gray-900">Análise de orçamentos</h3>
                  <p class="-mt-12 text-center font-bold sm:ml-0 rounded-full bg-indigo-900/10 px-2.5 py-1 text-xs leading-5 text-gray-800">Mais popular</p>
                </div>
                {/*<p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for your company.</p>*/}
                <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                  <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-8 lg:rounded-l-none">
              <div class="flex items-center justify-between gap-x-4">
                <h3 id="tier-startup" class="text-xl sm:mt-6 ml-4 text-center font-bold text-gray-900">Avaliação de desgaste de peças</h3>
              </div>
              {/*<p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for your company.</p>*/}
              <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
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
    </div>


  );
};

export default Anuncio;
