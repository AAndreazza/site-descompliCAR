import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import FooterAnuncio from '../components/footerAnuncio';
import LogoHero from '../images/logoDescompliCAR.png';
import Checklist from '../images/checklistTeste.jpg';
import Slider from 'react-slick'
import '../pages/main.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CheckIcon, EyeIcon, ChatBubbleOvalLeftEllipsisIcon, NoSymbolIcon } from '@heroicons/react/20/solid';

const depoimentos = [
    {
        texto: "“Segui o checklist e desisti de um carro que parecia ótimo. Depois descobri que ele já tinha sido batido feio. Valeu cada centavo!” — Rafael, SP",
    },
    {
        texto: '“Graças ao Descomplicar consegui comprar o meu carro dos sonhos tranquila, sabendo que não teria gastos não previstos posteriormenete” — Juliana, SC',
    },
]

const vantagens = [
    {
        label: 'O QUE OLHAR',
        icon: EyeIcon,
    },
    {
        label: 'O QUE PERGUNTAR',
        icon: ChatBubbleOvalLeftEllipsisIcon,
    },
    {
        label: 'O QUE EVITAR',
        icon: NoSymbolIcon,
    },
];

const HomePage = () => {

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-[#0f1e2e] text-white">
            <Seo
                title="DescompliCAR - Aprenda a comprar um carro usado com segurança"
                description="Evite golpes e prejuízos com o guia DescompliCAR: checklist + vídeo com dicas práticas."
            />

            {/* HERO SECTION */}
            <div className="relative isolate overflow-hidden">
                {/* LOGO */}
                <header className="flex justify-center p-6">
                    <Link to="/">
                        <img src={LogoHero} alt="Logo DescompliCAR" className="h-28 w-28 sm:h-36 sm:w-36" />
                    </Link>
                </header>
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-8">
                    <div className="mx-auto max-w-2xl shrink-0 lg:mx-0">
                        <h1 className="mt-20 text-4xl sm:text-6xl font-bold mb-4 text-white max-w-xl mx-auto md:mx-0">
                            Compre seu carro usado <span className="text-red-600">SEM MEDO</span> de cair em golpes!
                        </h1>
                        <p className="mt-8 text-xl sm:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-10">
                            Com o <b>DescompliCAR</b>, você aprende tudo o que precisa pra não cair em ciladas — mesmo que nunca tenha mexido com mecânica.
                        </p>

                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="/"
                                className="rounded-full bg-fundoGeral px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#4274a3]"
                            >
                                QUERO COMPRAR COM SEGURANÇA
                            </a>
                            <a href="/" className="text-lg font-semibold text-white">
                                SAIBA MAIS <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <img
                                alt="Capa checklist"
                                src={Checklist}
                                className="w-[44rem] rounded-md shadow-2xl ring-2 ring-white/80"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SOBRE O MATERIAL */}
            <section className="py-16 px-6">
                <div className="text-center mx-auto max-w-7xl">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">
                        Nunca mais caia no papo de vendedor!
                    </h1>
                    <p className='mt-4 mx-auto text-base text-white lg:text-xl'>
                        Um material direto ao ponto criado para quem <b>NÃO É MECÂNICO</b>, mas quer comprar um carro com segurança!
                    </p>

                    <hr className="max-w-7xl border-white/20 mt-10 mb-10" />

                    <h2 className="text-3xl sm:text-5xl font-bold text-white">Você terá acesso a:</h2>
                    <div className="mt-10 grid md:grid-cols-2 gap-10 text-center">
                        <div>
                            <h3 className="text-2xl text-white mb-4 font-semibold">Checklist Completo</h3>
                            <ul className="space-y-4 text-gray-300 text-xl ml-24">
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Passo a passo visual para analisar o carro
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Como identificar sinais de batidas
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Verificações essenciais de motor, pneus e documentos
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Documentação: o que checar e como conferir
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl text-white mb-4 font-semibold">Vídeo Explicativo</h3>
                            <ul className="space-y-4 text-gray-300 text-xl ml-24">
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Demonstração prática com carro real
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Dicas de perguntas para o vendedor
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Erros comuns de iniciantes
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Acompanhamento gratuito pós-compra
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOBRE O DESCOMPLICAR */}
            <main className="relative isolate text-gray-100 bg-fundoGeral">
                {/* Título */}
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl pt-24 text-center sm:pt-20">
                        <h1 className="text-3xl sm:text-6xl font-bold text-white">SOBRE O DESCOMPLICAR</h1>
                        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
                            O DescompliCAR nasceu da frustração de ver tantas pessoas caindo em golpes ou comprando carros com problemas escondidos.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-10 max-w-5xl px-6 lg:px-8">
                    <section className="space-y-4 text-lg text-gray-200">
                        <h2 className="text-xl text-center font-normal text-white">A gente sabe como é... O carro <span className='text-green-500'>parece perfeito</span>, o vendedor fala bonito, mas depois vem a bomba: <b className='text-orange-400'>problemas escondidos, documentação irregular e prejuízo financeiro.</b></h2>
                        <p className="text-xl text-center font-normal text-white">
                            Com o nosso checklist você vai saber exatamente:
                        </p>
                    </section>

                    {/* Vantagens */}
                    <dl className="mt-16 grid grid-cols-3 mx-28 gap-y-8 lg:mt-10 pb-10 lg:grid-cols-3">
                        {vantagens.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
                            >
                                <item.icon className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                                <dt className="text-lg text-white">{item.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </main>

            {/* DEPOIMENTOS */}
            <div className='bg-[#0f1e2e] text-white px-40 pt-20 pb-20 text-center'>
                <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem:</h2>
                <Slider {...settings} className='mt-10'>
                    {depoimentos.map((item) => (
                        <div className="max-w-3xl mx-auto">
                            <p className="italic text-xl">{item.texto}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            <hr className="my-2 border-2 border-white/50" />

            {/* BENEFÍCIOS */}
            <section className="bg-[#0f1e2e] px-6 py-16 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-3xl font-bold mb-10">A maioria dos carros à venda estão anqueados, com problemas escondidos e documentação irregular!</h2>
                    <ul className="grid sm:grid-cols-2 gap-6 text-left text-gray-300 text-xl">
                        <li className="flex"><CheckIcon className="h-6 w-6 text-green-400 mr-3" />Evite cair em golpes comuns ao comprar um usado</li>
                        <li className="flex"><CheckIcon className="h-6 w-6 text-green-400 mr-3" />Economize com revisões e consertos desnecessários</li>
                        <li className="flex"><CheckIcon className="h-6 w-6 text-green-400 mr-3" />Aumente sua confiança e poder de negociação</li>
                        <li className="flex"><CheckIcon className="h-6 w-6 text-green-400 mr-3" />Saiba o que olhar e o que perguntar</li>
                        <li className="flex"><CheckIcon className="h-6 w-6 text-green-400 mr-3" />Compre com segurança, mesmo sem experiência</li>
                        <li className="flex"><CheckIcon className="h-6 w-6 text-green-400 mr-3" />Compre com segurança, mesmo sem experiência</li>
                    </ul>

                    <h2 className="mt-10 text-3xl sm:text-2xl font-bold mb-10">Por apenas R$39,90 você vai ter a certeza de fechar um bom negócio!</h2>
                    <a
                        href="/"
                        className="rounded-full bg-[#335a7e] px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-[#4274a3]"
                    >
                        EU QUERO FECHAR UM BOM NEGÓCIO →
                    </a>
                </div>
            </section>

            {/* INVESTIMENTO */}
            <section className="bg-fundoGeral text-white text-center px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Comprar um carro é um investimento alto!</h2>
                    <p className="text-2xl font-semibold">R$39,90 é o seguro mais barato que você pode fazer.</p>
                    <a
                        href="/"
                        className="mt-10 inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg"
                    >
                        QUERO GARANTIR AGORA →
                    </a>
                </div>
            </section>

            <FooterAnuncio />
        </div>
    );
};

export default HomePage;