import React, {Component} from 'react';
import MapChart from "@/pages/Component/Map";
import woman from 'public/working-woman.jpg'
import risks from 'public/evaluate-risks.jpg'
import topViewTeam from 'public/top-view-team.jpg'
import qualitySeal from 'public/qualitySeal.jpg'
import Image from "next/image";
import Link from "next/link";

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
                <div className="relative flex py-5 items-center px-64">
                    <div className="flex-grow border-t border-gray-400/50"></div>
                    <span className="flex-shrink mx-4 text-gray-400">Continue</span>
                    <div className="flex-grow border-t border-gray-400/50"></div>
                </div>
            </section>
            <section
                className="relative isolate overflow-hidden bg-white px-3 py-24 sm:py-32 lg:overflow-visible lg:px-0">

                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Global Expertise in Corporate Investigations and Risk Assessment</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">We specialise in providing corporate investigations, competitive intelligence, political and economic risk assessments in Africa,
                                    the Middle East and Gulf area, Western & Central Europe and Latin America.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <MapChart/>
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>We have an expansive global network across multiple regions.</p>

                                <p className="mt-8">Celtic Intelligence's services are designed to meet our clients’ specific needs.
                                    We aim to mitigate their exposure to risk and enhance their financial and influence performance.</p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Extensive Local Network and Public Databases</h2>
                                <p className="mt-6">We have access to a trustworthy network of local contacts in our regions of expertise,
                                    as well as to extensive public record databases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <>
                    {/* Features */}
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Grid */}
                        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                            <div>
                                <Image
                                    className="rounded-xl"
                                    src={woman}
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
            <section>
                <div className="py-16">
                    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                        <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">

                            <div className="md:7/12 lg:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                    Integrity Due Diligence and Risk Assessment for Business Partners
                                </h2>
                                <p className="my-8 text-gray-600 dark:text-gray-300">
                                    Celtic Intelligence carries out in-depth investigations into the integrity and reputation of our clients’ potential business partners.
                                </p>
                                <p className="my-8 text-gray-600 dark:text-gray-300">
                                    We aim to assess the level of risk exposure for our clients, ensure that they make informed decisions and that their business operates to the highest standards of governance, including compliance with relevant legislation in EU countries.
                                </p>
                                <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-primary/80 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                                   href="/contact">
                                    Get in touch
                                    <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="md:5/12 lg:w-1/2">
                                <Image
                                    src={risks}
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
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-fit lg:grid-cols-2">
                        <div className="relative rounded-xl z-10 lg:py-16">
                            <div className="relative rounded-xl h-64 sm:h-80 lg:h-full">
                                <Image alt="" src={topViewTeam} className={"rounded-xl  "}/>
                            </div>
                        </div>
                        <div className="relative rounded-tr-xl rounded-br-xl flex items-center bg-gray-100">
                            <span className="hidden rounded-tl-xl rounded-bl-xl  lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100" />
                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Integrity Due Diligence and Risk Assessment
                                </h2>
                                <p className="mt-4 text-gray-600">
                                    Celtic Intelligence now has an agile team of experts in the field of integrity due diligence.
                                    This process of securing third parties requires mastering both the processing of information
                                    from open sources and the exploitation of local human sources,
                                    regardless of the country of intervention and the sector of activity.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Comprehensive Analysis and Quality Assurance
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <Image
                                alt="Party"
                                src={qualitySeal}
                                className="absolute inset-0 h-full w-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                <p>
                                    Celtic Intelligence guarantees the reliability and quality of its analysis as to the reputation
                                    and honorability of the target company and its key executives, the capital structure as well as the end beneficiaries,
                                    the relational networks of the persons concerned,
                                    the financial strength of the target and the existence of possible hidden litigation
                                    and/or liabilities, the potential risks of corruption or reputation,
                                    and finally the operational capacity of the company.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};