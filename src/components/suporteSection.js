import React from 'react';
import fotoTeste from '../images/whatsapp.jpg'

const SuporteSection = () => {
  return (
      <div class="bg-[#13293e] py-24 sm:py-32 -mb-14 sm:-mb-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-base -mt-14 font-semibold leading-7 text-[#a1b2ec]">SUPORTE</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">Confira como funciona nosso suporte</p>
          </div>
          <p class="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-400">Já foi na oficina e ficou desconfiado de algo? Com o descomplicar basta pedir um "help" que você vai saber tudo que precisa! </p>

          <div class="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-8 lg:rounded-r-none">
              <div>
                <div class="flex items-center justify-between gap-x-4">
                  <h3 id="tier-freelancer" class="text-xl text-center font-bold text-gray-900">Consulta do histórico de manutenção do veiculo e <br /> próximos serviços</h3>
                </div>
                {/*<p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for your company.</p>*/}
                <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                  <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
                </div>

              </div>
            </div>

            <div class="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:z-10 lg:rounded-b-none">
              <div>
                <div class="flex items-center justify-between gap-x-4">
                  <h3 id="tier-startup" class="text-xl text-center font-bold text-gray-900">Análise de orçamentos</h3>
                  <p class="-mt-12 text-center font-bold sm:ml-0 rounded-full bg-indigo-900/10 px-2.5 py-1 text-xs leading-5 text-gray-800">Mais popular</p>
                </div>
                {/*<p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for your company.</p>*/}
                <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                  <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-between rounded-3xl bg-gray-300 p-8 ring-1 ring-gray-600 xl:p-10 lg:mt-8 lg:rounded-l-none">
              <div class="flex items-center justify-between gap-x-4">
                <h3 id="tier-startup" class="text-xl sm:mt-6 ml-4 text-center font-bold text-gray-900">Avaliação de desgaste de peças</h3>
              </div>
              {/*<p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for your company.</p>*/}
              <div className='mt-6 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default SuporteSection;
