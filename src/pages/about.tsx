import React, {  } from 'react';
import team from '/public/team.png';

import Image from 'next/image'
const About = () => {
    return (
        <>
            <section>

                {/* Hero */}
                <div className="relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                            <div className="max-w-2xl text-center mx-auto">
                                {/* Title */}
                                <div className="mt-8 ">
                                    <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                                        Building a Trusted Network: Celtic Intelligence&apos;s 10-Year Journey


                                    </h1>
                                </div>
                                {/* End Title */}
                                <div className="mt-5 max-w-3xl">
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        Celtic Intelligence has for 10 years built up a vast network of trusted relationships of highly qualified members, with backgrounds in the private and public sectors, in large consulting firms, government and financial institutions, NGO leaders, journalists in investigation, private investigators and engineering companies.


                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero */}

            </section>
            <section>
                <div className="py-16">
                    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                        <div className="lg:bg-blue-50/30 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">

                            <div className="md:7/12 lg:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                    Professionals dedicated to your success
                                </h2>
                                <p className="my-8 text-gray-600 dark:text-gray-300">

                                    Our team has extensive practical and field experience in the countries in which it operates.
                                    We support our clients by providing in-depth investigations, advisory services and strategic analysis on sensitive and confidential matters.

                                </p>


                            </div>
                            <div className="md:5/12 lg:w-1/2">
                                <Image
                                    src={team}
                                    alt="People evaluating risks"
                                    loading="lazy"
                                    className={"rounded-xl"}
                                    width={500}


                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <>
                    {/* Icon Blocks */}
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="max-w-2xl mx-auto">
                            {/* Grid */}
                            <div className="grid gap-2">
                                <div>
                                    <h2 className="text-3xl text-center text-gray-800 font-bold lg:text-4xl dark:text-white">
                                        Our vision
                                    </h2>
                                    <p className="mt-3 text-center text-gray-800 dark:text-gray-400">
                                        Celtic Intelligence operates at a high standard and undertakes projects
                                    </p>
                                </div>
                                    {/* Icon Blocks */}
                                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                        <div className="max-w-4xl mx-auto">
                                            {/* Grid */}
                                            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                                                <div className="space-y-6 lg:space-y-10">
                                                    <div className="flex">
                                                        {/* Solid Check */}
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                                fill="currentColor"
                                                                fillOpacity="0.1"
                                                            />
                                                            <path
                                                                d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {/* End Solid Check */}
                                                        <div className="ml-5 sm:ml-8">
                                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                                In English
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* End Icon Block */}
                                                    {/* Icon Block */}
                                                    <div className="flex">
                                                        {/* Solid Check */}
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                                fill="currentColor"
                                                                fillOpacity="0.1"
                                                            />
                                                            <path
                                                                d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {/* End Solid Check */}
                                                        <div className="ml-5 sm:ml-8">
                                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                                In Portuguese
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* End Icon Block */}
                                                    <div className="flex">
                                                        {/* Solid Check */}
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                                fill="currentColor"
                                                                fillOpacity="0.1"
                                                            />
                                                            <path
                                                                d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {/* End Solid Check */}
                                                        <div className="ml-5 sm:ml-8">
                                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                                In Arabic
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* End Icon Block */}
                                                </div>
                                                {/* End Col */}
                                                <div className="space-y-6 lg:space-y-10">
                                                    <div className="flex">
                                                        {/* Solid Check */}
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                                fill="currentColor"
                                                                fillOpacity="0.1"
                                                            />
                                                            <path
                                                                d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {/* End Solid Check */}
                                                        <div className="ml-5 sm:ml-8">
                                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                                In Persian
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* End Icon Block */}
                                                    {/* Icon Block */}
                                                    <div className="flex">
                                                        {/* Solid Check */}
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                                fill="currentColor"
                                                                fillOpacity="0.1"
                                                            />
                                                            <path
                                                                d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {/* End Solid Check */}
                                                        <div className="ml-5 sm:ml-8">
                                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                                In Hebrew
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* End Icon Block */}
                                                    {/* Icon Block */}
                                                    <div className="flex">
                                                        {/* Solid Check */}
                                                        <svg
                                                            className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                                                                fill="currentColor"
                                                                fillOpacity="0.1"
                                                            />
                                                            <path
                                                                d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        {/* End Solid Check */}
                                                        <div className="ml-5 sm:ml-8">
                                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                                In French & Spanish
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* End Icon Block */}
                                                </div>
                                                {/* End Col */}
                                            </div>
                                            {/* End Grid */}
                                        </div>
                                    </div>
                                    {/* End Icon Blocks */}
                            </div>
                            {/* End Grid */}
                        </div>
                    </div>
                    {/* End Icon Blocks */}
                </>

            </section>
            <section className={"py-4 flex justify-center bg-blue-50/30"}>
                <div className="flex flex-col justify-center bg-white w-fit border border-lightPrimary/30 shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="p-4 md:p-5">

                        <p className="mt-2 text-gray-800 dark:text-gray-400">
                            For more information on what we can do for you, please contact us at
                        </p>
                        <a
                            className="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
                            href="mailto:contact@celtic-intelligence.com" aria-label="send mail"
                        >

                            contact@celtic-intelligence.com

                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About