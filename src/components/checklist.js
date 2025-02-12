import React from "react"
import { CheckIcon } from '@heroicons/react/20/solid'

const Checklist = () => {
    return (
        <div className="relative isolate px-6 lg:px-8 -mt-20 mb-20 flex flex-col items-center text-center">
            <div className="mx-auto text-center">
                <h2 className="text-base/7 font-semibold text-indigo-300">BENEFÍCIOS</h2>
                <p className="mt-2 text-balance font-semibold tracking-tight text-gray-200 sm:text-5xl">
                    O Guia Completo para escolher o carro certo!
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-4xl text-center text-lg font-medium text-gray-300 sm:text-xl">
                Tenha em mãos tudo o que precisa para comprar seu carro com segurança e confiança!
            </p>

            <div className="mx-auto mt-4 max-w-4xl">
                <ul role="list" className="space-y-6 text-gray-300 sm:mt-10">
                    <li className="flex items-center gap-x-4 text-xl">
                        <CheckIcon
                            aria-hidden="true"
                            className="h-8 w-8 flex-none text-indigo-400"
                        />
                        <b>Checklist Completo</b> - Saiba exatamente o que inspecionar antes da compra
                    </li>
                    <li className="flex items-center gap-x-3 text-xl">
                        <CheckIcon
                            aria-hidden="true"
                            className="h-8 w-8 flex-none text-indigo-400"
                        />
                        <b>Aula Explicativa</b> - Aprenda de forma prática e visual
                    </li>
                    <li className="flex items-center gap-x-3 text-xl">
                        <CheckIcon
                            aria-hidden="true"
                            className="h-8 w-8 flex-none text-indigo-400"
                        />
                        <b>Passo a Passo Detalhado</b> - Do primeiro olhar ao fechamento do negócio
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Checklist