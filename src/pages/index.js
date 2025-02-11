import React from 'react'
import { Helmet } from 'react-helmet'
import Seo from '../components/seo'
import Formulario from '../components/formulario'
import SliderSection from '../components/sliderSection'
import FaqSection2 from '../components/faqSection2'
import FooterAnuncio from '../components/footerAnuncio'
import img1 from '../images/banner2.png'
import Checklist from '../components/checklist'
import Numeros from '../components/numeros'
import Banner from '../images/banner.png'

const Index = () => {
  return (
    <div className='bg-[#13293e]'>
      <Helmet>
        <meta name="facebook-domain-verification" content="4rg6xya5qydln0sq1d8mfzj1zgk7pw" />
      </Helmet>
      <Seo
        title='DescompliCAR - Nunca mais seja enganado por um mecânico'
        description='Aprenda sobre o seu carro, economize muito e nunca mais seja enganado quando levar o carro na oficina. Conte com um suporte personalizado, foi numa oficina e ficou alguma dúvida, basta entrar em contato que a gente te esclarece tudo!'
      />

      {/* FORMULARIO + VIDEO */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-34">
        <img
          alt=""
          src={Banner}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/*<div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Vai comprar um carro novo e não sabe nem por onde começar?</h2>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                Eu preparei uma aula explicando passo a passo, desde a pesquisa até avalição do carro e fechamento do negócio!
                </p>
                <p className="mt-2 text-xl leading-8 text-gray-300">
                Preencha o formulário para ter <b className="text-[#dd814b]">acesso exclusivo</b> a <b className="text-[#6da8df]">aula</b> e mais um <b className="text-[#6da8df]">checklist para avaliação do carro!</b>
                </p>
              </div>*/}

          <h2 className="text-4xl max-w-4xl mx-auto text-center font-bold tracking-tight text-white sm:text-5xl">Vai comprar um carro novo e não sabe nem por onde começar?</h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <iframe
              width="540"
              height="500"
              className="sm:mt-20 w-full sm:w-96 lg:w-[540px] h-[500px]"
              src="https://1b87e9c0.sibforms.com/serve/MUIFAHtanbODO-Q_nJJjccj-uMj8BZXm_zBzLF-OYCscl8LYZ-PZU2PryJqs3KGW8z27xVQQ_rZwcIK0-e0bR56qrP0mgd2I7gC2HTdIRPEt7MJx05n5zf6jIE7Rjbi67-WDN_X1TBaIsRP81GVirUPfFhftfGHo2eHBxNEeeMYBILGGN-JsS3eNiO63yQullIC4yI_dyw2gcAkg"
              frameborder="0"
              allowfullscreen
            ></iframe>

            <iframe
              src="https://www.youtube.com/embed/TewaD89TPHo?si=NH_Xjfm2wPUqvcwY"
              title="Como descompliCAR o seu carro!"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="allowfullscreen"
              className='w-full aspect-video mx-auto max-w-[22rem] lg:max-w-[40rem]'
            >
              Seu navegador não suporta a TAG video...
            </iframe>
          </div>
        </div>
      </div>

      <Checklist />

      {/* COR DE FUNDO ESCURA: [#13293e] */}
      <div className='bg-[#4676a3] py-2 whitespace-pre'>
        <p className='text-[#13293e] font-semibold text-center hidden lg:block'>DESCOMPLICAR     DESCOMPLICAR     DESCOMPLICAR     DESCOMPLICAR     DESCOMPLICAR</p>
        <p className='text-[#13293e] font-semibold text-center block lg:hidden'>DESCOMPLICAR     DESCOMPLICAR</p>
      </div>

      <Numeros />

      {/* DUAS IMAGENS LADO A LADO */}
      <h3 className='flex items-center justify-center mt-10 lg:mt-20 text-2xl text-center sm:text-left font-semibold leading-8 text-gray-200 sm:text-4xl sm:leading-9'>
        Lorem ipsum dolor sit ame
      </h3>
      <div className="flex items-center justify-center mt-10 mb-20 mx-auto max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-2">
        <ul className="grid max-w-2xl grid-cols-1 mx-4 gap-x-0 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-4xl lg:gap-x-24 xl:col-span-2">
          <li>
            <img alt='' src={img1} className="aspect-[3/2] w-full object-cover" />
            <p className="mx-1 mt-3 text-center text-base leading-7 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
          </li>
          <li>
            <img alt='' src={img1} className="aspect-[3/2] w-full object-cover" />
            <p className="mx-1 mt-3 text-center text-base leading-7 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
          </li>
        </ul>
      </div>

      <SliderSection />

      <FooterAnuncio />
    </div>
  )
}

export default Index
