import React, {useEffect, useState} from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import Image from "next/image";
import compliance from "public/operationnal.svg"
import Link from "next/link";



interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        category: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        coverPicture: string;
    }

}

interface Articles {
    data: Article[];
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
    const response = await axios.get<Articles>('https://obscure-refuge-04080.herokuapp.com/api/articles', {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
    });
    console.log(response.data.data)

    return {
        props: {
            articles: response.data.data,
        },
    };
};

const Blog = ({ articles }: { articles : Article[] }) => {
    return (
        <>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Blog
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                        See how game-changing companies are making the most of every engagement
                        with Celtic intelligence.
                    </p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles?.map((article: Article) => (

                        <Link
                            key={article.id}
                            className="group grid content-between  hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
                            href={{
                                pathname: '/articles/[articleId]',
                                query: {
                                    articleId: article.id,
                                    title: article.attributes.title,
                                    content: article.attributes.content,
                                    description: article.attributes.description,
                                    category: article.attributes.category,
                                    publishedAt: article.attributes.publishedAt,
                                    coverPictureUrl: article.attributes.coverPicture,
                                    }
                        }}
                        >

                        <div className="aspect-w-14 aspect-h-10">
                            <Image
                                className="w-1/2 h-1/2 object-cover rounded-xl"
                                src={compliance}
                                alt="Image Description"
                            />
                        </div>
                        <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                            {article.attributes.title}
                        </h3>
                        <p className="mt-5 text-sm text-gray-600 dark:text-gray-250 dark:group-hover:text-white">
                            {article.attributes.description}
                        </p>
                        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Learn more
                            <svg
                                className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </p>
                    </Link>

                    ))}

                </div>
                {/* End Grid */}
            </div>
            {/* End Card Blog */}
        </>
    )

}
export default Blog