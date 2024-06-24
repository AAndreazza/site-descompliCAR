import React from 'react'
import Seo from '../components/seo'
import WhatsappIcon from '../components/whatsappIcon'
import HeroAnuncio from '../components/heroAnuncio'
import { Link } from 'gatsby'
import LogoHero from '../images/logoDescompliCAR.png'
import IconsSection from '../components/iconsSection'
import SuporteSection from '../components/suporteSection'
import FaqSection from '../components/faqSection'
import FooterAnuncio from '../components/footerAnuncio'
import { Helmet } from 'react-helmet'

const Index = () => {
  return (
    <div className='bg-fundoGeral'>
      <Helmet>
        <meta name="facebook-domain-verification" content="4rg6xya5qydln0sq1d8mfzj1zgk7pw" />
      </Helmet>
      <Seo title='DescompliCAR - Nunca mais seja enganado por um mecânico' description='
Aprenda sobre o seu carro, economize muito e nunca mais seja enganado quando levar o carro na oficina. Conte com um suporte personalizado, foi numa oficina e ficou alguma dúvida, basta entrar em contato que a gente te esclarece tudo!' />
      <WhatsappIcon />
      <div className='bg-[#13293e]'>
        <header className='inset-x-20 sm:inset-x-10 top-8 z-50 flex justify-center bg-[#13293e]'>
          <Link to='/' className='cursor-pointer -m-1.5 p-1.5'>
            <span className='sr-only'>DescompliCAR</span>
            <img className='h-36 w-36 sm:h-40 sm:w-40 mt-6' src={LogoHero} alt='logo descompliCAR' />
          </Link>
        </header>
      </div>
      <SuporteSection />
      <FaqSection />
      <FooterAnuncio />
    </div>
  )
}

export default Index
