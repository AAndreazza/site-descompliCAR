import React from 'react'
import { Link } from 'gatsby'
import { URLS } from '../utils/constants'
import fotoTeste from '../images/fotoInsta01.jpg'

const Instagram = () => {
    return (
        <div className='bg-fundoGeral'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-0 sm:py-14 lg:max-w-7xl lg:px-10'>
                <h2 className='text-4xl text-center font-bold tracking-tight text-gray-100' id='instagram'>INSTAGRAM</h2>
                <h2 className='text-2xl text-center font-light mt-8 leading-8 tracking-tight text-gray-100'>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h2>
                <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    <div className='group relative'>
                        <Link to={URLS.instagram}>
                            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                                <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center' />
                            </div>
                        </Link>
                    </div>

                    <div className='group relative'>
                        <Link to={URLS.instagram}>
                            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                                <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
                            </div>
                        </Link>
                    </div>

                    <div className='group relative'>
                        <Link to={URLS.instagram}>
                            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                                <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
                            </div>
                        </Link>
                    </div>

                    <div className='group relative'>
                        <Link to={URLS.instagram}>
                            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75'>
                                <img src={fotoTeste} alt='' className='h-full w-full object-cover object-center lg:h-full lg:w-full' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram