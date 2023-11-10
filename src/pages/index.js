import React from 'react'
import Seo from '../components/seo'
import WhatsappIcon from '../components/whatsappIcon'
import Hero from '../components/hero'
import SobreDescompliCar from '../components/sobreDescompliCar'
import Instagram from '../components/instagram'
import SobreVinicius from '../components/sobreVinicius'
import CtaSection from '../components/ctaSection'
import CtaSection2 from '../components/ctaSection2'
import Footer from '../components/footer'

const Index = () => {
    return(
        <div className='bg-fundoGeral'>
            <Seo title='DescompliCAR' description='incluir descrição...' />
            <WhatsappIcon />
            <Hero />
            <SobreDescompliCar />
            <SobreVinicius />
            <Instagram />
            <CtaSection />
            <Footer />           
        </div>
    )
}

export default Index