import React from 'react'
import { Link } from 'gatsby'
import LogoHero from '../images/logoDescompliCAR.png'
import Checklist from '../images/checklistTeste.jpg'
import Seo from '../components/seo'
import FooterAnuncio from '../components/footerAnuncio'
import { CheckIcon } from '@heroicons/react/20/solid'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { BoltIcon, EyeIcon, ScaleIcon } from '@heroicons/react/24/outline'

const vantagens = [
    {
        label: 'Rapidez no serviço',
        icon: 'https://img.icons8.com/?size=100&id=113106&format=png&color=FFFFFF',
    },
    {
        label: 'Aumento da produção',
        icon: 'https://img.icons8.com/?size=100&id=7721&format=png&color=FFFFFF',
    },
    {
        label: 'Qualidade de serviço',
        icon: 'https://img.icons8.com/?size=100&id=m0MLdyiIdOfm&format=png&color=FFFFFF',
    },
    {
        label: 'Redução de custos',
        icon: 'https://img.icons8.com/?size=100&id=83743&format=png&color=FFFFFF',
    },
];

const cards = [
    {
        name: 'MISSÃO',
        description: 'Desenvolver produtos com tecnologia e qualidade e que beneficiem a mão-de-obra de seus usuários.',
        icon: BoltIcon,
    },
    {
        name: 'VISÃO',
        description: 'Ser uma empresa que se adapte às necessidades do cliente e do mercado, sendo dinâmica e comprometida com resultados.',
        icon: EyeIcon,
    },
    {
        name: 'VALORES',
        description: 'A Plásticos Indaial é sinônimo de comprometimento, satisfação e de bons negócios.',
        icon: ScaleIcon,
    },
]

/*const cards = [
    {
        name: 'Sales',
        description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
        icon: PhoneIcon,
    },
    {
        name: 'Technical Support',
        description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Media Inquiries',
        description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
        icon: NewspaperIcon,
    },
]*/

const Instrucoes = () => {
    return (
        <div className="bg-[#13293e]">
            <Seo
                title="DescompliCAR - Compre seu carro usado com segurança"
                description="Checklist + vídeo para te ensinar a avaliar um carro antes de comprar. Evite prejuízos e dores de cabeça!"
            />

            {/* HEADER */}
            <header className="inset-x-0 top-5 z-50 flex justify-center">
                <Link to="/" className="cursor-pointer">
                    <span className="sr-only">DescompliCAR</span>
                    <img className="h-28 w-28 sm:h-36 sm:w-36" src={LogoHero} alt="logo descompliCAR" />
                </Link>
            </header>

            {/* HERO SECTION */}
            <section className="mx-auto px-6 pt-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Texto */}
                    <div className="md:w-2/3 text-center">
                        <h1 className="text-4xl font-bold text-white sm:text-6xl">
                            Vai comprar um carro usado?
                        </h1>
                        <h2 className="mt-4 text-4xl font-bold text-red-500 sm:text-6xl">
                            CUIDADO!
                        </h2>
                        <p className="mt-10 text-lg text-gray-200 sm:text-2xl">
                            Você pode estar prestes a jogar MILHARES DE REAIS NO LIXO!
                        </p>
                        <p className="mt-6 text-lg text-gray-300 sm:text-2xl">
                            Evite um prejuízo enorme com esse checklist.
                        </p>

                        <div className="mt-14">
                            <a
                                href="../curso"
                                className="animate-bounce rounded-full bg-[#4274a3] px-8 py-4 text-2xl font-bold text-white shadow-lg hover:bg-[#1c3b58]"
                            >
                                QUERO COMPRAR COM SEGURANÇA →
                            </a>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="md:w-1/3 flex justify-center">
                        <img src={Checklist} alt="Checklist" className="rounded-lg shadow-lg w-full max-w-md" />
                    </div>
                </div>
            </section>


            {/* SOBRE O MATERIAL */}
            <section className="mt-20 bg-fundoGeral py-16 px-6">
                <div className="text-center mx-auto max-w-4xl">
                    <h1 className="text-4xl font-bold text-[#091520] sm:text-4xl">
                        Nunca mais caia no papo de vendedor!
                    </h1>
                    <p className='mt-4 mx-auto text-base font-medium tracking-tight text-[#091520] lg:text-2xl'>
                        Um material direto ao ponto criado para quem <b>NÃO É MECÂNICO</b>, mas quer comprar um carro com segurança!
                    </p>
                    <h2 className="mt-12 text-3xl font-bold text-white mb-8">O que você vai receber:</h2>
                    <div className="grid md:grid-cols-2 gap-10 text-left">
                        <div>
                            <h3 className="text-2xl text-white mb-4 font-semibold">Checklist Completo</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Passos para analisar o carro externamente
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
                                    Checklist para testar durante o test-drive
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl text-white mb-4 font-semibold">Vídeo Explicativo</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Análise prática de um carro real
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Dicas de perguntas para o vendedor
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Erros comuns que você deve evitar
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-400 mr-3" />
                                    Acompanhamento gratuito para dúvidas!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFÍCIOS 
            <section className="mx-auto max-w-6xl p-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Por que confiar no DescompliCAR?</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-[#1c3b58] rounded-lg p-6">
                        <h3 className="text-xl text-white mb-4">Proteção contra prejuízos</h3>
                        <p className="text-gray-300">
                            Saiba detectar carros com problemas ocultos, evitando custos de reparos futuros.
                        </p>
                    </div>
                    <div className="bg-[#1c3b58] rounded-lg p-6">
                        <h3 className="text-xl text-white mb-4">Economia e Segurança</h3>
                        <p className="text-gray-300">
                            Gaste muito menos do que com laudos, advogados ou problemas pós-compra.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <a
                        href="../curso"
                        className="rounded-full bg-[#4274a3] px-10 py-4 text-xl font-bold text-white shadow-lg hover:bg-[#1c3b58]"
                    >
                        EU QUERO ME PROTEGER →
                    </a>
                </div>
            </section>*/}

            {/* BENEFÍCIOS */}
            <section className="mt-10 max-w-4xl mx-auto p-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">A maioria dos carros à venda estão anqueados, com problemas escondidos e documentação irregular!</h2>
                <div className="grid gap-y-4 text-left">
                    <div className="bg-[#1c3b58] rounded-lg flex">
                        <CheckIcon className="h-6 w-6 text-green-400 m-4" /> <h3 className="text-xl text-white pl-0 p-4">Evite prejuízos</h3>
                    </div>
                    <div className="bg-[#1c3b58] rounded-lg flex">
                        <CheckIcon className="h-6 w-6 text-green-400 m-4" /> <h3 className="text-xl text-white pl-0 p-4">Evite dor de cabeça</h3>
                    </div>
                    <div className="bg-[#1c3b58] rounded-lg flex">
                        <CheckIcon className="h-6 w-6 text-green-400 m-4" /> <h3 className="text-xl text-white pl-0 p-4">Funciona para todos os carros</h3>
                    </div>
                    <div className="bg-[#1c3b58] rounded-lg flex">
                        <CheckIcon className="h-6 w-6 text-green-400 m-4" /> <h3 className="text-xl text-white pl-0 p-4">Infinitamente mais barato que um laudo, mecânico ou advogado</h3>
                    </div>
                </div>
                <h2 className="mt-10 text-2xl font-bold text-white mb-8">Por R$39,90 você vai ter a certeza de fechar um bom negócio!</h2>
                <div className="mt-10">
                    <a
                        href="../curso"
                        className="rounded-full bg-[#4274a3] px-10 py-4 text-xl font-bold text-white shadow-lg hover:bg-[#1c3b58]"
                    >
                        EU QUERO O MELHOR →
                    </a>
                </div>
            </section>

            {/* CALL TO ACTION FINAL */}
            <section className="mt-20 bg-[#215377] py-12">
                <div className="text-center px-6 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-white">Comprar um carro é um investimento alto!</h2>
                    <h2 className="mt-2 text-3xl font-semibold text-white">R$39,90 é o seguro mais barato que você pode fazer.</h2>

                    <div className="mt-10">
                        <a
                            href="../curso"
                            className="animate-bounce rounded-full bg-green-500 px-6 py-3 text-lg font-bold text-white hover:bg-green-600"
                        >
                            QUERO COMPRAR →
                        </a>
                    </div>
                </div>
            </section>

            {/* SOBRE O DESCOMPLICAR - OPCAO 02 */}
            <main className="relative isolate text-gray-100">
                {/* Título */}
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl pt-24 text-center sm:pt-20">
                        <h1 className="text-3xl sm:text-6xl font-bold text-white">SOBRE O DESCOMPLICAR</h1>
                        <p className="mt-4 text-lg sm:text-lg max-w-2xl mx-auto">
                            Desde 1993, somos especialistas na fabricação de espaçadores, distanciadores plásticos e peças voltadas para a construção civil.
                        </p>
                    </div>
                </div>

                {/* Quem Somos */}
                <div className="mx-auto mt-14 max-w-5xl px-6 lg:px-8">
                    <section className="space-y-4 text-lg text-gray-200">
                        <h2 className="text-2xl font-semibold text-white">QUEM SOMOS</h2>
                        <p>
                            A Plásticos Indaial desenvolve e comercializa diversos modelos de espaçadores e distanciadores, também conhecidos como centralizadores de ferragem, além de peças plásticas relacionadas a concreto e construção civil.
                            O distanciador é uma ferramenta utilizada na construção civil, indústria de pré-moldados e artefatos de cimento em geral.
                        </p>
                        <p>
                            Nosso compromisso é com a qualidade e a eficiência, oferecendo soluções que atendem diretamente às necessidades de nossos clientes.
                        </p>
                    </section>

                    {/* Vantagens */}
                    <dl className="mt-16 grid grid-cols-2 gap-x-2 gap-y-12 lg:mt-20 lg:grid-cols-4">
                        {vantagens.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
                            >
                                <img src={item.icon} alt={`Ícone de ${item.label}`} className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                                <dt className="text-lg text-white">{item.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>

                <hr className="my-16 border-white/20" />

                {/* Missão, Visão e Valores */}
                <div className="mx-6 pb-10 grid max-w-2xl grid-cols-1 gap-6 sm:mx-auto lg:mx-6 xl:mx-auto sm:mt-20 sm:pb-20 sm:max-w-7xl lg:grid-cols-3 lg:gap-6">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/50">
                            <card.icon aria-hidden="true" className="h-7 w-7 flex-none text-slate-100" />
                            <div>
                                <h3 className="font-bold text-slate-100 text-xl">{card.name}</h3>
                                <p className="mt-2 text-slate-200 text-lg">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <hr className="border-white/20" />

            <FooterAnuncio />
        </div>
    )
}

export default Instrucoes
