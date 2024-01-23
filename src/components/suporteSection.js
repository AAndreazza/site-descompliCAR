import React from 'react';
import fotoTeste from '../images/whatsapp.jpg';

const SuporteSection = () => {
  return (
    <div className="bg-[#13293e] py-24 sm:py-32 -mb-14 sm:-mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="-mt-10 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">Confira como funciona nosso suporte</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-400">Já foi na oficina e ficou desconfiado de algo? Com o descomplicar basta pedir um "help" que você vai saber tudo que precisa! </p>

        <div className="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-0 mr-4">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 id="tier-freelancer" className="text-xl text-center font-bold text-gray-900">Consulta do histórico de manutenção do veículo e <br /> próximos serviços</h3>
              </div>
              <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-0 mr-4">
            <div className="flex items-center justify-between gap-x-4">
              <h3 id="tier-startup" className="text-xl sm:mt-6 ml-12 text-center font-bold text-gray-900">Análise de orçamentos</h3>
            </div>
            <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
              <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-0 mr-4">
            <div className="flex items-center justify-between gap-x-4">
              <h3 id="tier-startup" className="text-xl sm:mt-6 ml-4 text-center font-bold text-gray-900">Avaliação de desgaste de peças</h3>
            </div>
            <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
              <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SuporteSection;
