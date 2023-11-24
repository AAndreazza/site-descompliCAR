import React from 'react';
import CompraSegura from '../images/iconCompraSegura.png'
import SuporteTecnico from '../images/iconSuporteTecnico.png'
import Garantia from '../images/iconGarantia.png'

const IconsSection = () => {
  return (
      <div class="bg-fundoGeral py-14 -mt-4 sm:-mt-20">
        <div class="mx-auto max-w-3xl px-3 lg:px-8 text-center">
          <div class="grid grid-cols-3 gap-x-6">
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
              <img className='h-12 w-12 sm:h-24 sm:w-24' src={CompraSegura} alt='icone de compra segura' />
              <p class="text-base sm:text-lg font-bold text-gray-300">Compra Segura</p>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
              <img className='h-12 w-12 sm:h-24 sm:w-24' src={SuporteTecnico} alt='icone de suporte' />
              <p class="text-base sm:text-lg font-bold text-gray-300">Suporte personalizado</p>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
              <img className='h-12 w-12 sm:h-24 sm:w-24' src={Garantia} alt='icone de garantia' />
              <p class="text-base sm:text-lg font-bold text-gray-300">Garantia de 15 dias</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default IconsSection;
