export default function Contact() {
    return (
       <>
       <section className="bg-gray-100 text-gray-900 py-16 px-6 sm:px-12 lg:px-24">
    <h2 className="text-4xl font-extrabold text-center mb-12">Contact Us</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="space-y-8">
            {[
                { 
                    title: "Address", 
                    content: "123 Business Avenue, Tech City, NY 10001", 
                    iconBg: "bg-blue-500", 
                    icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21l-6-6 6-6M21 10v11" />
                    ) 
                },
                { 
                    title: "Phone", 
                    content: "(123) 456-7890", 
                    iconBg: "bg-green-500", 
                    icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11h14M9 19l-6-6 6-6M19 11v6m0-6h4" />
                    ) 
                },
                { 
                    title: "Email", 
                    content: "info@business.com", 
                    iconBg: "bg-yellow-500", 
                    icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11h16M16 21l-8-8 8-8M23 11v8m0-8H2" />
                    ) 
                }
            ].map(({ title, content, iconBg, icon }, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                >
                    <div className={`${iconBg} p-4 rounded-full`}>
                        <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {icon}
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-gray-600">{content}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Map Section */}
        <div>
            <iframe
                className="w-full h-80 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28067.17662474589!2d77.00452996656209!3d28.43744421097111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d186ef43b9d0f%3A0x879a00332a2794ea!2sSector%2038%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1737114002262!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    </div>
</section>


       </>
    );
}
