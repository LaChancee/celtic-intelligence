import React, {Component} from 'react';
import MapChart from "@/pages/Component/Map";
export default function service() {
    return(
        <>
            <section>

                {/* Hero */}
                <div className="relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                            <div className="max-w-2xl text-center mx-auto">
                                {/* Title */}
                                <div className="mt-5 max-w-4xl">
                                    <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                                        Tailored Solutions for Complex Environments: Celtic Intelligence
                                    </h1>
                                </div>
                                {/* End Title */}
                                <div className="mt-5 max-w-3xl">
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        Celtic intelligence provides tailored solutions to complex issues in challenging business and political environments.

                                    </p>
                                </div>
                                <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                                    <a className="inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-primary/80 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                                       href="">
                                        Know more
                                        <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero */}
                <div className="relative flex py-5 items-center px-32">
                    <div className="flex-grow border-t border-gray-400/50"></div>
                    <span className="flex-shrink mx-4 text-gray-400">Continue</span>
                    <div className="flex-grow border-t border-gray-400/50"></div>
                </div>
            </section>
            <section>
                <div className={"grid place-content-center"}>
                    <div className={"max-w-4xl "}>
                        <h1 className={"mt-2 text-3xl font-bold place-self-center text-center tracking-tight text-gray-900 sm:text-4xl"}>Global Expertise in Corporate Investigations and Risk Assessment</h1>
                        <p className={"mt-6 text-lg leading-8  place-self-center text-center text-gray-600"}>We specialise in providing corporate investigations, competitive intelligence, political and economic risk assessments in Africa,
                            *the Middle East and Gulf area, Western & Central Europe and Latin America.</p>
                    </div>
                </div>


            {/*    Carte du monde qui prend toute la lmargeur */}
                <div className={"w-full h-1/2 px-64"}>
                    <MapChart/>
                </div>
            </section>

            <section>
                <>
                    {/* Features */}
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Grid */}
                        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                            <div>
                                <img
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                                    alt="Image Description"
                                />
                            </div>
                            {/* End Col */}
                            <div className="mt-5 sm:mt-10 lg:mt-0">
                                <div className="space-y-6 sm:space-y-8">
                                    {/* Title */}
                                    <div className="space-y-2 md:space-y-4">
                                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                            Tailored Services for Risk Mitigation and Business Enhancement
                                        </h2>
                                        <p className="text-gray-500">
                                            Celtic Intelligence's bespoke services include:
                                        </p>
                                    </div>
                                    {/* End Title */}
                                    {/* List */}
                                    <ul role="list" className="space-y-2 sm:space-y-4">
                                        <li className="flex space-x-3">
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
                                            <span className="text-sm sm:text-base text-gray-500">
                <span className="font-bold">Reputational </span> due diligence investigations
              </span>
                                        </li>
                                        <li className="flex space-x-3">
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
                                            <span className="text-sm sm:text-base text-gray-500">
                Political and economic risk  <span className="font-bold">analysis</span>
              </span>
                                        </li>
                                        <li className="flex space-x-3">
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
                                            <span className="text-sm sm:text-base text-gray-500">
                Market entry studies
              </span>
                                        </li>
                                        <li className="flex space-x-3">
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
                                            <span className="text-sm sm:text-base text-gray-500">
                Asset tracing
              </span>
                                        </li>
                                        <li className="flex space-x-3">
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
                                            <span className="text-sm sm:text-base text-gray-500">
                On-site visits
              </span>
                                        </li>
                                    </ul>
                                    {/* End List */}
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}
                    </div>
                    {/* End Features */}
                </>

            </section>
        </>
    )
};