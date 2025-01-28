import React from "react";

const News = () => {
    const newsItems = [
        {
            title: "Cancer, my unexpected guru: Thriving with metastatic breast cancer",
            content: "How I embraced life, love, and joy through the challenges of breast cancer.",
            link: "https://www.lbbc.org/blog/cancer-my-unexpected-guru-thriving-with-metastatic-breast-cancer",
        },
        {
            title: "Janette’s Courageous Uterine Cancer Journey",
            content: "Janette had always been vigilant about her health, regularly visiting her gynecologic oncologist to monitor her fibroids.",
            link: "https://foundationforwomenscancer.org/janettes-courageous-uterine-cancer-journey/",
        },
        {
            title: "Heart Disease",
            content: "I was only a kid when doctors sent my grandmother home in a wheelchair to die at age 65. Diagnosed with end-stage heart disease, she had already had so many bypass operations the surgeons essentially ran out of plumbing—the scarring from each open-heart surgery had made the next more difficult until they finally ran out of options.",
            link: "https://nutritionfacts.org/topics/heart-disease/",
        },
        {
            title: "A Deep Dive into Awareness and Perceptions of Potential Benefits and Harms of Multi-Cancer Detection Tests",
            content: "More than half of cancer deaths involve cancers that have no recommended screening tests, including highly deadly cancers like ovarian and pancreatic cancer.",
            link: "https://prevention.cancer.gov/news-and-events/blog/deep-dive-awareness-and-perceptions-potential-benefits-and-harms-multi-cancer",
        },
    ];

    return (
        <section className="bg-black text-white p-6 md:p-10 rounded-lg mt-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-8">
                BLOGS
            </h2>
            <div className="flex flex-nowrap overflow-x-auto space-x-4 md:space-x-6 pb-4">
                {newsItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 p-4 md:p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:rotate-2 hover:translate-y-2 hover:bg-gradient-to-r hover:from-black hover:to-pink-200 hover:shadow-2xl hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50 min-w-[250px] sm:min-w-[280px] md:min-w-[300px] ease-in-out duration-500"
                    >
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base">
                            {item.content}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default News;
