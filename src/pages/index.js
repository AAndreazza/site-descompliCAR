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
      <Seo title='DescompliCAR' description='incluir descrição...' />
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
