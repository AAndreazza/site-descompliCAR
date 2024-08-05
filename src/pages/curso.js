import React from 'react'
import { Helmet } from 'react-helmet'
import Seo from '../components/seo'
import HeroAnuncio from '../components/heroAnuncio'
import FaqSection2 from '../components/faqSection2'
import FooterAnuncio from '../components/footerAnuncio'
import IconsSection from '../components/IconsSection'
import SuporteSection from '../components/SuporteSection'

const Curso = () => {
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
                <HeroAnuncio />
                <IconsSection />
                <SuporteSection />
                <FaqSection2 />
                <FooterAnuncio />

            </div>

        </div>
    )
}

export default Curso
