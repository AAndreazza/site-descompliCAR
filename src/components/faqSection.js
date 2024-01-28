import React from "react"
import { Disclosure } from '@headlessui/react'

const FaqSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-300 px-4 py-8 text-center sm:px-56">
      <h2 className='text-2xl text-center font-bold tracking-tight text-fundoGeral' id='instagram'>PERGUNTAS FREQUENTES</h2>
      {/*<h2 className='text-xl text-center font-normal mt-2 leading-8 tracking-tight text-gray-800'>Tem mais alguma pergunta? <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGeral)}>Nos chame no Whatsapp  <span aria-hidden='true'>&rarr;</span></Link></h2>*/}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full text-lg justify-between rounded-lg bg-gray-200 px-4 py-2 mt-6 text-center font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
              <span>Não tenho noção nenhuma sobre como funciona meu carro, o descomplicar é pra mim?</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                  } h-5 w-5 `} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-600">
              Com toda certeza, o objetivo do descompliCAR é ensinar você como o carro funciona, assim você pode cuidar melhor do seu carro e economizar com a manutenção dele.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full text-lg justify-between rounded-lg bg-gray-200 px-4 py-2 mt-4 text-center font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
              <span>Me sinto inseguro de levar meu carro na oficina!</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                  } h-5 w-5 `} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-600">
              Garantimos que após o descompliCAR esse sentimento irá desaparecer, você chegará na oficina sabendo o que precisar ser feito e se ainda tiver qualquer duvida o nosso "help" tem como objetivo sanar todas elas!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full text-lg justify-between rounded-lg bg-gray-200 px-4 py-2 mt-4 text-center font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
              <span>Mecânico é tudo picareta, nenhum presta!</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                  } h-5 w-5 `} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-600">
              Certamente muitas oficinas estão ai só para fazer você rasgar seu dinheiro, mas com um checklist rápido o descompliCAR te mostra exatamente como identificar uma boa oficina mecânica.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full text-lg justify-between rounded-lg bg-gray-200 px-4 py-2 mt-4 text-center font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
              <span>Acabei de tirar minha carteira, o descomplicar vai me ajudar?</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                  } h-5 w-5 `} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-600">
              A auto escola mal ensina você a dirigir o carro, quem dera ensinar algo para você cuidar do seu carro! Então se você acabou de começar a dirigir é a hora certa de adquirir o descompliCAR, quanto antes começar a cuidar bem do seu carro mais economia no longo prazo! Além de ter um módulo destinado e ensinar tudo que a auto escola não ensina para você no quesito direção!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

    </div>
  )
}

export default FaqSection