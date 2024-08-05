import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'

const faqs = [
    {
        pergunta: "Não tenho noção nenhuma sobre como funciona meu carro, o descomplicar é pra mim?",
        resposta: "Com toda certeza, o objetivo do descompliCAR é ensinar você como o carro funciona, assim você pode cuidar melhor do seu carro e economizar com a manutenção dele.",
    },
    {
        pergunta: "Me sinto inseguro de levar meu carro na oficina!",
        resposta:
            "Garantimos que após o descompliCAR esse sentimento irá desaparecer, você chegará na oficina sabendo o que precisar ser feito e se ainda tiver qualquer duvida o nosso 'help' tem como objetivo sanar todas elas!",
    },
    {
        pergunta:
            "Mecânico é tudo picareta, nenhum presta!",
        resposta:
            "Certamente muitas oficinas estão ai só para fazer você rasgar seu dinheiro, mas com um checklist rápido o descompliCAR te mostra exatamente como identificar uma boa oficina mecânica.",
    },
    {
        pergunta:
            "Acabei de tirar minha carteira, o descomplicar vai me ajudar?",
        resposta:
            "A auto escola mal ensina você a dirigir o carro, quem dera ensinar algo para você cuidar do seu carro! Então se você acabou de começar a dirigir é a hora certa de adquirir o descompliCAR, quanto antes começar a cuidar bem do seu carro mais economia no longo prazo! Além de ter um módulo destinado e ensinar tudo que a auto escola não ensina para você no quesito direção!",
    }
];

const Faq = () => {
    return (
        <div className="bg-fundoGeral">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-6 lg:px-8 lg:py-12">
                <div className="mx-auto max-w-4xl divide-y divide-gray-100/40">
                    <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-100">
                        Perguntas Frequentes
                        <h4 className='font-normal text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9 hover:text-gray-100 block'><Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGeral)}>Tem mais alguma pergunta? Estamos aqui para te ajudar <span aria-hidden="true">&rarr;</span></Link></h4>
                    </h2>

                    <dl className="mt-10 space-y-6 divide-y divide-gray-100/40">
                        {faqs.map((faq) => (
                            <Disclosure
                                as="div"
                                key={faq.pergunta}
                                className="pt-6 text-justify"
                            >
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-300">
                                                <span className="text-lg font-semibold leading-7">
                                                    {faq.pergunta}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center text-gray-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                                                            } h-5 w-5`} viewBox="0 0 16 16"
                                                            fill="currentColor">
                                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-lg leading-7 text-[#0d1c2b] font-semibold">
                                                {faq.resposta}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Faq;