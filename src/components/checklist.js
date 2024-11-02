import React from "react"
import { CheckIcon } from '@heroicons/react/20/solid'

const Checklist = () => {
    return (
        <div className="relative isolate bg-fundoGeral px-6 py-24 sm:py-30 lg:px-8">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#000000] to-[#9089fc] opacity-30"
                />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-indigo-400">CHECKLIST</h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-200 sm:text-6xl">
                    Choose the right plan for you
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8">
                Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
                loyalty, and driving sales.
            </p>

            <div className="mx-auto mt-8 max-w-lg">
                <ul role="list" className="space-y-3 text-gray-300 sm:mt-10">
                    <li className="flex items-center gap-x-3 text-xl">
                        <CheckIcon
                            aria-hidden="true"
                            className="h-8 w-8 flex-none text-indigo-400"
                        />
                        Lorem ipsum dolor sit amet consectetur adipiscing 
                    </li>
                    <li className="flex items-center gap-x-3 text-xl">
                        <CheckIcon
                            aria-hidden="true"
                            className="h-8 w-8 flex-none text-indigo-400"
                        />
                        Lorem ipsum dolor sit amet consectetur adipiscing 
                    </li>
                    <li className="flex items-center gap-x-3 text-xl">
                        <CheckIcon
                            aria-hidden="true"
                            className="h-8 w-8 flex-none text-indigo-400"
                        />
                        Lorem ipsum dolor sit amet consectetur adipiscing 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Checklist