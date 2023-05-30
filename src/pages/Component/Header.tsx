import React, {Fragment, useState} from 'react';
import logo from '/public/logo-celtic.png';
import Link from 'next/link';
import Image from 'next/image'
import { Disclosure, } from '@headlessui/react';
import {
    Bars3Icon,
    BellIcon,

} from '@heroicons/react/24/solid';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Service', href: '/service', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Client', href: '/client', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
const Header = () => {
    return (
        <Disclosure as="nav" className="fixed w-full bg-white shadow shadow-lg z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <span className="block h-6 w-6" aria-hidden="true">
                                          Close
                                        </span>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={"/"}>
                                        <Image
                                            className="block h-8 w-auto lg:hidden"
                                            src={logo}
                                            alt="Logo Celtic Intemlligence"
                                        />
                                    </Link>
                                    <Link href={"/"}>
                                        <Image
                                            className="hidden h-8 w-auto lg:block"
                                            src={logo}
                                            alt="Logo Celtic Intemlligence"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? ' text-primary' : ' hover:text-primary hover:bg-gray-100',
                                                    'rounded-md px-3 py-2 text-sm text-center font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>

            )}

        </Disclosure>
    )
}





// <>
        //     <header className={"bg-white"}>
        //         <input
        //             type="checkbox"
        //             name="hbr"
        //             id="hbr"
        //             className="hbr peer"
        //             hidden
        //             aria-hidden="true"
        //         />  {/* shadow ici*/}
        //         <nav className="fixed z-20 w-full bg-white dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-white dark:shadow-none">
        //             <div className="xl:container m-auto px-6 md:px-12">
        //                 <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
        //                     <div className="w-full flex justify-between lg:w-auto">
        //                         <Link
        //                             href="/"
        //                             aria-label="logo"
        //                             className="flex space-x-2 items-center"
        //                         >
        //                             <div aria-hidden="true" className="flex space-x-1">
        //                                 <Image alt={"logo celtic-intelligence"} src={img} width={40} height={40} />
        //                             </div>
        //                             <span className="text-base font-bold text-gray-600 dark:text-white">
        //             Celtic intelligence
        //           </span>
        //                         </Link>
        //                         <label
        //                             htmlFor="hbr"
        //                             className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
        //                         >
        //                             <div
        //                                 aria-hidden="true"
        //                                 className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
        //                             ></div>
        //                             <div
        //                                 aria-hidden="true"
        //                                 className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
        //                             ></div>
        //                         </label>
        //                     </div>
        //                     <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
        //                         <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:flex">
        //                             <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
        //                                 <li>
        //                                     <Link
        //                                         href="/"
        //                                         className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
        //                                     >
        //                                         <span>Home</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li>
        //                                     <Link href="/service"
        //
        //                                         className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
        //                                     >
        //                                         Service
        //                                     </Link>
        //                                 </li>
        //                                 <li>
        //                                     <Link
        //                                         href="/case-studies"
        //                                         className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
        //                                     >
        //                                         <span>Case studies</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li>
        //                                     <Link
        //                                         href="/client"
        //                                         className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
        //                                     >
        //                                         <span>Client</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li>
        //                                     <Link
        //                                         href="/about"
        //                                         className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
        //                                     >
        //                                         <span>About</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li>
        //                                     <Link
        //                                         href="/blog"
        //                                         className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
        //                                     >
        //                                         <span>Blog</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li>
        //                                     <Link
        //                                         href="/contact"
        //                                         className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
        //                                     >
        //                                         <span>Contact</span>
        //                                     </Link>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //
        //                         <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
        //
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>
        //     </header>
        // </>

export default Header;