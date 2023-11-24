import React from "react"
import { Disclosure } from '@headlessui/react'

const FaqSection = () => {
  return (
    <div className="pt-16">
      <div className="relative isolate overflow-hidden bg-gray-300 px-4 py-8 text-center sm:px-56">
        <h2 className='text-2xl text-center font-bold tracking-tight text-fundoGeral' id='instagram'>PERGUNTAS FREQUENTES</h2>
        {/*<h2 className='text-xl text-center font-normal mt-2 leading-8 tracking-tight text-gray-800'>Tem mais alguma pergunta? <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGeral)}>Nos chame no Whatsapp  <span aria-hidden='true'>&rarr;</span></Link></h2>*/}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full text-lg justify-between rounded-lg bg-gray-200 px-4 py-2 mt-6 text-center font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>What is your refund policy?</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                    } h-5 w-5 `} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-600">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full text-lg justify-between rounded-lg bg-gray-200 px-4 py-2 mt-4 text-center font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>What is your refund policy?</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                    } h-5 w-5 `} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-600">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full text-lg justify-between rounded-lg bg-gray-200 px-4 py-2 mt-4 text-center font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>What is your refund policy?</span>
                <svg xmlns="http://www.w3.org/2000/svg"
                  class={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                    } h-5 w-5 `} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-600">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
    </div>
  )
}

export default FaqSection