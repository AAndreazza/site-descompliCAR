import React, { useState } from "react"
import Banner from '../images/banner.png'

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};
        if (!nome) newErrors.nome = 'Preencha este campo.';
        if (!email) newErrors.email = 'Preencha este campo.';
        if (!telefone) newErrors.telefone = 'Preencha este campo.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        if (!validateFields()) {
            event.preventDefault();
        }
    };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-34">
      <img
        alt=""
        src={Banner}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/*<div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>*/}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Vai comprar um carro novo e não sabe nem por onde começar?</h2>
          <p className="mt-6 text-xl leading-8 text-gray-300">
          Eu preparei uma aula explicando passo a passo, desde a pesquisa até avalição do carro e fechamento do negócio!
          </p>
          <p className="mt-2 text-xl leading-8 text-gray-300">
          Preencha o formulário para ter <b className="text-[#dd814b]">acesso exclusivo</b> a <b className="text-[#6da8df]">aula</b> e mais um <b className="text-[#6da8df]">checklist para avaliação do carro!</b>
          </p>
        </div>
        
        <form
                action='/sucesso/'
                name='FORMULARIO-DESCOMPLICAR'
                method='post'
                netlify-honeypot='bot-field'
                data-netlify='true'
                className='max-w-md mt-6'
                onSubmit={handleSubmit}
            >
                <input type='hidden' name='form-name' value='FORMULARIO-DESCOMPLICAR' />
                <div>
                    <input
                        type='text'
                        name='nome'
                        id='nome'
                        autoComplete='given-name'
                        placeholder='Nome'
                        className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        onChange={(event) => setNome(event.target.value)}
                    />
                    {errors.nome && <span className='text-red-300 text-sm'>{errors.nome}</span>}
                </div>
                <div>
                    <input
                        type='tel'
                        name='telefone'
                        id='telefone'
                        autoComplete='tel'
                        placeholder='Whatsapp'
                        className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        onChange={(event) => setTelefone(event.target.value)}
                    />
                    {errors.telefone && <span className='text-red-300 text-sm'>{errors.telefone}</span>}
                </div>
                <div>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        placeholder='E-mail'
                        className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.email && <span className='text-red-300 text-sm'>{errors.email}</span>}
                </div>
                

                <div className='mt-6 sm:mt-6 mb-5 text-center'>
                    <button
                        type='submit'
                        className={`rounded-md border-0 px-12 py-2.5 text-gray-100 font-semibold text-base shadow-sm ring-1 ring-inset sm:leading-6
                        ${nome && email && telefone
                                ? 'bg-[#4676a3] ring-[#4676a3] hover:bg-[#5d8ab4] cursor-pointer'
                                : 'bg-[#23486b] ring-[#23486b] hover:bg-[#23486b] cursor-not-allowed'
                            }`}
                    >
                        ENVIAR
                    </button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Formulario