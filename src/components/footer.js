import React from 'react'
import { Link } from 'gatsby'
import { URLS } from '../utils/constants'
import Logo from '../images/logoSimples.png'

const Footer = () => {
    return(
        <footer class="bg-fundoGeral" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-24 lg:px-8 lg:pt-8">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                <div class="md:gap-8">
                <div className='space-y-8'>
                <Link to='/'>
                <span className='sr-only'>DescompliCAR</span>
                <img className='h-12 w-12 rounded-full' src={Logo} alt='logo'/>
                </Link>
                <p className='text-sm leading-6 text-gray-200'>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                <div className='flex space-x-6'>
                <Link to={URLS.instagram} className='text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </Link>
                <Link to={URLS.tiktok} className='text-gray-500 hover:text-gray-400'>
                    <span className='sr-only'>Tiktok</span>
                    <svg  className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        fill="currentColor"
                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                </Link>
                <Link to={URLS.youtube} className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Youtube</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                </Link>
                
                </div>
                </div>
                
                </div> 
            </div>
            {/* EMAIL SECTION */}
            <div class="mt-10 xl:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-200">Insira seu email para saber mais</h3>
                <p class="mt-2 text-sm leading-6 text-gray-300">Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
                <form action="https://formsubmit.co/nome@gmail.com" method="POST" class="mt-6 sm:flex sm:max-w-md">
                    <input type="hidden" name="_next" value="http://localhost:8000"/>
                    {/* Tirar captcha: */} <input type="hidden" name="_captcha" value="false"/>
                    <label for="email-address" class="sr-only">Email</label>
                    <input type="email" name="email-address" id="email-address" autocomplete="email" required class="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="Digite seu email"/>
                    <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                        <button type="submit" class="flex w-full items-center justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">Increva-se</button>
                    </div>
                </form>
            </div>
            <div className='mt-2 border-t border-gray-900/10 pt-4 sm:mt-2 lg:mt-2'>
            <p className='text-xs leading-5 text-gray-300'>&copy; Nome. Todos os direitos reservados.</p>
            </div>
            </div>
            
        </div>
        </footer>

    )
}

export default Footer