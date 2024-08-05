import React from 'react'
import { Helmet } from 'react-helmet'
import Seo from '../components/seo'
import Formulario from '../components/formulario'
import SliderSection from '../components/sliderSection'
import FaqSection from '../components/faqSection'
import FaqSection2 from '../components/faqSection2'
import FooterAnuncio from '../components/footerAnuncio'

import img1 from '../images/banner.png'

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

      <Formulario />

      {/*

      COR DE FUNDO ESCURA: [#13293e]
*/}
      <div className='bg-[#4676a3] py-2 whitespace-pre'>
        <p className='text-[#13293e] font-semibold text-center hidden lg:block'>DESCOMPLICAR     DESCOMPLICAR     DESCOMPLICAR     DESCOMPLICAR     DESCOMPLICAR</p>
        <p className='text-[#13293e] font-semibold text-center block lg:hidden'>DESCOMPLICAR     DESCOMPLICAR</p>
      </div>


      <SliderSection />

      <section className="isolate overflow-hidden px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24 sm:py-24 lg:max-w-4xl">
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
              <h3 className='text-2xl text-center sm:text-left font-semibold leading-8 text-gray-100 sm:text-3xl sm:leading-9'>
                Lorem ipsum dolor sit ame?
              </h3>
              <p className='mt-4 text-base text-center sm:text-left leading-8 text-gray-200 sm:text-lg sm:leading-9'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-center lg:col-end-1 lg:row-span-4 lg:w-80">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80"
                className="rounded-md w-full max-w-xs lg:max-w-full"
              />
            </div>
          </figure>
        </div>
      </section>

      
      <FaqSection2 />
      <FooterAnuncio />
    </div>
  )
}

export default Index
