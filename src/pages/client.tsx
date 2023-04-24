import React, {  } from 'react';
import Image from "next/image";
import qualitySeal from "../../public/qualitySeal.jpg";

 const Client = () => {
    return (
        <>
            <section>

                {/* Hero */}
                <div className="relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                            <div className="max-w-2xl text-center mx-auto">
                                {/* Title */}
                                <div className="mt-5 ">
                                    <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                                        Expert Intelligence Solutions for European Institutions, Industries, and Individuals

                                    </h1>
                                </div>
                                {/* End Title */}
                                <div className="mt-5 max-w-3xl">
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        Celtic Intelligence services an French and European client base including institutions,
                                        industrial companies, NGOs, international consultancies, consumer goods manufacturers, and high-net worth individuals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero */}

            </section>
            <section className={"bg-blue-50/30"}>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                <p>
                                    We assist our clients in challenging environments.
                                    Our team has experience undertaking projects in a wide-range of fields including energy,
                                    agriculture, infrastructure, naval, construction, security, as well as healthcare, Information Technology sectors.
                                </p>
                            </article>
                        </div>
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <Image
                            alt="Party"
                            src={qualitySeal}
                            className="absolute inset-0 h-full w-full object-cover rounded-xl"
                        />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Client;