import React from 'react'
import Seo from '../components/seo'
import WhatsappIcon from '../components/whatsappIcon'
import Hero from '../components/hero'
import SobreDescompliCar from '../components/sobreDescompliCar'
import Instagram from '../components/instagram'
import SobreVinicius from '../components/sobreVinicius'
import CtaSection from '../components/ctaSection'
import Footer from '../components/footer'
import FaqSection from '../components/faqSection'


const Historia = () => {
    return (
        <div className='bg-fundoGeral'>
            <Seo title='DescompliCAR' description='incluir descrição...' />
            <WhatsappIcon />
            <Hero />
            <SobreDescompliCar />
            <SobreVinicius />
            <Instagram />
            <CtaSection />
            <FaqSection />
            <Footer />
        </div>
    )
}

export default Historia