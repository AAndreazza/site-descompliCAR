import React from "react"
import Banner from '../images/banner.png'

const Formulario = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-34">
      <img
        alt=""
        src={Banner}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*<div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Vai comprar um carro novo e não sabe nem por onde começar?</h2>
          <p className="mt-6 text-xl leading-8 text-gray-300">
          Eu preparei uma aula explicando passo a passo, desde a pesquisa até avalição do carro e fechamento do negócio!
          </p>
          <p className="mt-2 text-xl leading-8 text-gray-300">
          Preencha o formulário para ter <b className="text-[#dd814b]">acesso exclusivo</b> a <b className="text-[#6da8df]">aula</b> e mais um <b className="text-[#6da8df]">checklist para avaliação do carro!</b>
          </p>
        </div>*/}

        <h2 className="text-4xl max-w-4xl mx-auto text-center font-bold tracking-tight text-white sm:text-5xl">Vai comprar um carro novo e não sabe nem por onde começar?</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <iframe 
            width="540" 
            height="500" 
            className="sm:mt-20 w-full sm:w-96 lg:w-[540px] h-[500px]" 
            src="https://1b87e9c0.sibforms.com/serve/MUIFAHtanbODO-Q_nJJjccj-uMj8BZXm_zBzLF-OYCscl8LYZ-PZU2PryJqs3KGW8z27xVQQ_rZwcIK0-e0bR56qrP0mgd2I7gC2HTdIRPEt7MJx05n5zf6jIE7Rjbi67-WDN_X1TBaIsRP81GVirUPfFhftfGHo2eHBxNEeeMYBILGGN-JsS3eNiO63yQullIC4yI_dyw2gcAkg" 
            frameborder="0" 
            allowfullscreen
          ></iframe>

            <iframe
              src="https://www.youtube.com/embed/TewaD89TPHo?si=NH_Xjfm2wPUqvcwY"
              title="Como descompliCAR o seu carro!"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen="allowfullscreen"
              className='w-full aspect-video mx-auto max-w-[22rem] lg:max-w-[40rem]'
            >
              Seu navegador não suporta a TAG video...
            </iframe>

        </div>
      </div>
    </div>
  )
}

export default Formulario