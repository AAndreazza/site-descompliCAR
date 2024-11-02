import React from "react"

const stats = [
    { id: 1, name: 'Clientes satisfeitos', value: '+3.000' },
    { id: 2, name: 'Serviços prestados', value: '+5.000' },
    { id: 3, name: 'De lucro para nossos clientes', value: '+1.000.000' },
  ]
  
  export default function Numeros() {
    return (
      <div className="bg-fundoGeral py-20 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-200 sm:text-6xl">
                Trusted by creators worldwide
              </h2>
              <p className="mt-4 text-lg/8 text-gray-300">Lorem ipsum dolor sit amet consect adipisicing possimus.</p>
            </div>
            <dl className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col p-8">
                  <dt className="text-base text-gray-300">{stat.name}</dt>
                  <dd className="order-first text-5xl font-bold tracking-tight text-gray-200">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  