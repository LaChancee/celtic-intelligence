import React, {  } from 'react';
import img from '/public/logo-celtic.png';
import Link from 'next/link';
import Image from 'next/image'
const Header = () => {
    return (
        <>
            <header className={"bg-white"}>
                <input
                    type="checkbox"
                    name="hbr"
                    id="hbr"
                    className="hbr peer"
                    hidden
                    aria-hidden="true"
                />  {/* shadow ici*/}
                <nav className="fixed z-20 w-full bg-white dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-white dark:shadow-none">
                    <div className="xl:container m-auto px-6 md:px-12">
                        <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                            <div className="w-full flex justify-between lg:w-auto">
                                <Link
                                    href="/"
                                    aria-label="logo"
                                    className="flex space-x-2 items-center"
                                >
                                    <div aria-hidden="true" className="flex space-x-1">
                                        <Image alt={"logo celtic-intelligence"} src={img} width={40} height={40} />
                                    </div>
                                    <span className="text-base font-bold text-gray-600 dark:text-white">
                    Celtic-intelligence
                  </span>
                                </Link>
                                <label
                                    htmlFor="hbr"
                                    className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                                    ></div>
                                    <div
                                        aria-hidden="true"
                                        className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                                    ></div>
                                </label>
                            </div>
                            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                                        <li>
                                            <Link
                                                href="/"
                                                className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                                            >
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service"

                                                className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                                            >
                                                Service
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                                            >
                                                <span>Case studies</span>
                                            </a>
                                        </li>
                                        <li>
                                            <Link
                                                href="/about"
                                                className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                                            >
                                                <span>About us</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                                            >
                                                <span>Blog</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block md:px-4 hover:text-blue-600 transition hover:text-primary dark:hover:text-primaryLight"
                                            >
                                                <span>Contact</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
export default Header;