import React from 'react'
import { Link } from 'gatsby'
import LogoHero from '../images/logoDescompliCAR.png'
import { Helmet } from 'react-helmet'
import Seo from '../components/seo'
import FooterAnuncio from '../components/footerAnuncio'

const Instrucoes = () => {
    return (
        <div className='bg-[#13293e]'>
            <Helmet>
                <meta name="facebook-domain-verification" content="4rg6xya5qydln0sq1d8mfzj1zgk7pw" />
            </Helmet>
            <Seo
                title='DescompliCAR - Nunca mais seja enganado por um mecânico'
                description='Aprenda sobre o seu carro, economize muito e nunca mais seja enganado quando levar o carro na oficina. Conte com um suporte personalizado, foi numa oficina e ficou alguma dúvida, basta entrar em contato que a gente te esclarece tudo!'
            />

            <div className='bg-[#13293e]'>
                {/* HEADER COM VIDEO E BOTAO */}
                <header className='absolute inset-x-20 sm:inset-x-10 top-8 z-50 flex justify-center'>
                    <Link to='/' className='cursor-pointer -m-1.5 p-1.5'>
                        <span className='sr-only'>DescompliCAR</span>
                        <img className='h-36 w-36 sm:h-40 sm:w-40 -mt-6 sm:-mt-8' src={LogoHero} alt='logo descompliCAR' />
                    </Link>
                </header>

                <div className='mx-auto max-w-6xl p-6 sm:pt-16 sm:px-8 lg:pt-24 lg:px-16 text-center lg:pr-10 lg:pl-10'>
                    <h1 className='mt-32 pr-4 pl-4 text-2xl font-bold tracking-tight text-white sm:mt-20 sm:text-4xl'>
                        Lorem ipsum dolor sit amet consectetur
                    </h1>
                    <p className='mt-4 mx-auto text-base font-normal tracking-tight text-white lg:text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
                </div>

                <div className="relative isolate overflow-hidden bg-fundoGeral">
                    <div className="px-6 py-10 sm:px-6 sm:py-14 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                                Carro é um investimento alto!
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-xl leading-8 text-gray-300 font-semibold tracking-tight sm:text-2xl">
                                E do que adianta você investir no carro se você não sabe como cuidar dele e continua sendo <span className='text-gray-900'>enganado na oficina?</span>
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="../curso"
                                    className="animate-bounce motion-reduce cursor-pointer rounded-md bg-[#13293e] px-5 py-2.5 text-lg font-semibold text-gray-100 shadow-sm hover:bg-[#1c3b58] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    QUERO SABER MAIS <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                                <stop stopColor="#13293e" />
                                <stop offset={1} stopColor="#fffff" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                <FooterAnuncio />
            </div>

        </div>
    )
}

export default Instrucoes
