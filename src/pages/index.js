import React from 'react'
import Seo from '../components/seo'
import WhatsappIcon from '../components/whatsappIcon'
import HeroAnuncio from '../components/heroAnuncio'
import IconsSection from '../components/iconsSection'
import SuporteSection from '../components/suporteSection'
import FaqSection from '../components/faqSection'
import FooterAnuncio from '../components/footerAnuncio'

const Index = () => {
  return (
    <div className='bg-fundoGeral'>
      <Seo title='DescompliCAR - Nunca mais seja enganado por um mecânico' description='
Aprenda sobre o seu carro, economize muito e nunca mais seja enganado quando levar o carro na oficina. Conte com um suporte personalizado, foi numa oficina e ficou alguma dúvida, basta entrar em contato que a gente te esclarece tudo!' />
      <WhatsappIcon />
      <HeroAnuncio />
      <IconsSection />
      <SuporteSection />
      <FaqSection />
      <FooterAnuncio />
    </div>
  )
}

export default Index
