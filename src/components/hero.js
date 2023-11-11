import React, { useState } from 'react'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'
import { Link } from 'gatsby'
import Logo from '../images/logoSemNome.png'
import FotoFundo from '../images/fotoHero.jpg'

const Hero = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <div className='bg-fundoGeral'>
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <Link to='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>DescompliCAR</span>
                <img className='h-10 w-10 rounded-full' src={Logo} alt='logo'/>
                </Link>
            </div>

            {/* Barra lateral - abrir */}
            <div className='flex lg:hidden'>
                <button 
                    type='button' 
                    className='-m-1.5 inline-flex items-center justify-between rounded-md p-2.5 text-white'
                    onClick={() => setIsSidebarOpen(true)} 
                >
                <span className='sr-only'>Abrir menu</span>
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
                </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
                <Link to='/#sobre' className='text-base font-semibold leading-6 text-white'>SOBRE</Link>
                <Link to='/#sobremim' className='text-base font-semibold leading-6 text-white'>SOBRE MIM</Link>
                <Link to='/#instagram' className='text-base font-semibold leading-6 text-white'>INSTAGRAM</Link>
                <Link to='/#contato' className='text-base font-semibold leading-6 text-white'>CONTATO</Link>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>

            {/* Barra lateral - opções e fechar */}
            <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
                <div className='fixed inset-0 z-50 bg-fundoGeral'></div>
                <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-fundoGeral px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                    {/* LOGO:  <Link to='/' className='-m-1.5 p-1.5'>
                        <button onClick={() => setIsSidebarOpen(false)}>
                        <span className='sr-only'>Psicóloga Jullia</span>
                        <StaticImage className='h-8 w-auto' src='' alt=''/>
                        </button>
                    </Link>*/}
                    <button 
                        type='button' 
                        className='-m-2.5 rounded-md p-2.5 text-white'
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <span className='sr-only'>Fechar menu</span>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                    </div>
                    <div className='mt-6 flow-root'>
                    <div className='-my-6 divide-y divide-gray-50/200'>
                        <div className='space-y-2 py-6'>
                        <Link to='#sobre' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-100 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>SOBRE</button></Link>
                        <Link to='#sobremim' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-100 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>SOBRE MIM</button></Link>
                        <Link to='#instagram' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-100 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>INSTAGRAM</button></Link>
                        <Link to='#contato' className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-100 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>CONTATO</button></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </nav>
        </header>
        
        <div className='relative isolate overflow-hidden pt-14'>
            <img src={FotoFundo} alt='' className='absolute inset-0 -z-10 h-full w-full object-cover'/>
            <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
            <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
            </div>
            <div className='mx-auto max-w-2xl -mt-8 py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
                <h1 className='pr-4 pl-4 text-4xl font-bold tracking-tight text-white sm:text-6xl'>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h1>
                {/*<p className='mt-6 text-lg leading-8 text-gray-300'>Com estratégias de marketing inteligentes, conecte-se com seu público-alvo, construa relacionamentos duradouros e maximize seus resultados de negócios.</p>*/}
                {/*<div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} className='rounded-md bg-sky-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'>Entre em contato</Link>
                <Link to='/#empresa' className='text-sm font-semibold leading-6 text-white'>Saiba mais <span aria-hidden='true'>→</span></Link>
                </div>*/}
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link to={URLS.instagram} className='text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </Link>
                <Link to={URLS.facebook} className='text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </Link>
                <Link to={URLS.tiktok} className='text-gray-500 hover:text-gray-400'>
                    <span className='sr-only'>Tiktok</span>
                    <svg  className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        fill="currentColor"
                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                </Link>
                </div>
            </div>
            </div>
            <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]' aria-hidden='true'>
            <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#000000] to-[#666666] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'></div>
            </div>
        </div>
        </div>
    )
}

export default Hero