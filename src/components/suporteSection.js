import React from 'react';
import AnaliseDesgastePeca from '../images/AnaliseDesgastePeca.png';
import AnaliseOrcamento from '../images/AnaliseOrcamento.png';
import PlanoManutencao from '../images/PlanoManutencao.png';

const SuporteSection = () => {
  return (
    <div className="bg-[#13293e] py-24 sm:py-32 -mb-14 sm:-mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="-mt-10 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">Confira como funciona nosso suporte</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-400">Já foi na oficina e ficou desconfiado de algo? Com o descomplicar basta pedir um "help" que você vai saber tudo que precisa! </p>

        <div className="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div className="flex flex-col items-center justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-0 mr-4">
            <div className="flex items-center justify-between gap-x-4">
              <h3 id="tier-startup" className="text-xl text-center font-bold text-gray-900">Plano de manutenção</h3>
            </div>
            <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl lg:aspect-none group-hover:opacity-75'>
              <img src={PlanoManutencao} alt='' className='h-full w-full object-cover object-center' />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-0 mr-4">
            <div className="flex items-center justify-between gap-x-4">
              <h3 id="tier-startup" className="text-xl text-center font-bold text-gray-900">Análise de orçamentos</h3>
            </div>
            <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl lg:aspect-none group-hover:opacity-75'>
              <img src={AnaliseOrcamento} alt='' className='h-full w-full object-cover object-center' />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-0 mr-4">
            <div className="flex items-center justify-between gap-x-4">
              <h3 id="tier-startup" className="text-xl text-center font-bold text-gray-900">Avaliação de desgaste de peças</h3>
            </div>
            <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl lg:aspect-none group-hover:opacity-75'>
              <img src={AnaliseDesgastePeca} alt='' className='h-full w-full object-cover object-center' />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SuporteSection;
