import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';




interface Case {
    id: number;
    attributes: {
        Title: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }

}

interface Cases {
    data: Case[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get<Cases>('https://obscure-refuge-04080.herokuapp.com/api/case-studies', {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
    });
    console.log(response.data.data)

    return {
        props: {
            cases: response.data.data,
        },
    };
};

const CaseStudies = ({ cases }: { cases: Case[] }) => {
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
                                        Case Studies: Real-Life Examples of Celtic Intelligence in Action
                                    </h1>
                                </div>
                                {/* End Title */}
                                <div className="mt-5 max-w-3xl">
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        Exploring the intricacies of human behavior and the social world
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero */}
            </section>
            <section>
                {/* Card Blog */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Grid */}
                    <div className="grid sm:grid-cols-2  gap-12">

                        {/* Card */}
                        {cases.map((post: Case) => (


                        <div key={post.id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">

                            <div className="p-6 md:p-8 ">

                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                    {post.attributes.Title}
                                </h3>
                                <p className="mt-3 text-gray-500">
                                    {post.attributes.description}
                                </p>
                            </div>
                            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                                    En savoir plus
                                </a>

                            </div>
                        </div>
                        ))}
                        {/* End Card */}

                    </div>
                    {/* End Grid */}

                </div>
                {/* End Card Blog */}

            </section>
        </>
    );
};

export default CaseStudies;


