import { GetStaticProps } from 'next';
import axios from 'axios';
import React from "react";
import Image from "next/image";

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
    };
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

interface Props {
    articles: Article[];
}

const LatestArticles = ({ articles }: Props) => {
    return (
        <div className={"space-y-6"}>

            {articles.map((article) => (
                <div key={article.id}>
                    {/* Media */}
                    <a className="group flex items-center gap-x-6" href="#">
                        <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      {article.attributes.title}
                    </span>
                        </div>
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                            <Image className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                        </div>
                    </a>
                    {/* End Media */}
                </div>
            ))}
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get<Articles>(
        'http://127.0.0.1:1337/api/articles',
        {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`,
            },
            params: {
                _sort: 'publishedAt:DESC',
                _limit: '5',
            },
        }
    );

    return {
        props: {
            articles: response.data.data,
        },
    };
};

export default LatestArticles;
