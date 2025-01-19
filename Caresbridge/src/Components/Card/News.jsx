import React from "react";
const News = () => {
    const newsItems = [
        {
            title: "Breakthrough in Breast Cancer Research",
            content: "Scientists have discovered a new biomarker that could help in early detection.",
        },
        {
            title: "Upcoming Awareness Campaign",
            content: "Join our walkathon event this October to spread awareness.",
        },
        {
            title: "Health Tips for Breast Cancer Prevention",
            content: "Regular check-ups, a healthy diet, and exercise can reduce risks.",
        },
    ];

    return (
        <section className="bg-gray-900 text-white p-10 rounded-lg mt-10">
        <h2 className="text-4xl font-extrabold text-center mb-8">News and Events</h2>
        <div className="flex flex-nowrap overflow-x-auto space-x-6 pb-4">
            {newsItems.map((item, index) => (
                <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-xl transition-all transform hover:scale-110 hover:rotate-3 hover:translate-y-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50 min-w-[300px] ease-in-out duration-500"
                >
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                </div>
            ))}
        </div>
    </section>
    

    );
};

export default News;