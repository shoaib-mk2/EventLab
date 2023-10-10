import { BsFillPinMapFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className="container mx-auto p-8 min-h-screen">
            <div className="flex flex-col items-center justify-center shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg mb-6">Have questions or inquiries? Reach out to us using the contact details below.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                <div>
                    <h2 className="text-2xl font-bold mb-10 shadow-lg shadow-[#007aff] bg-[#007aff] text-white p-4 rounded-lg">Contact Information</h2>
                    <ul className="text-lg mb-4">
                        <li className="flex items-center mb-2 gap-4">
                            <MdEmail></MdEmail>
                            info@eventmanagement.com
                        </li>
                        <li className="flex items-center mb-2 gap-4">
                            <BsTelephoneFill></BsTelephoneFill>
                            +1 123-456-7890
                        </li>
                        <li className="flex items-center mb-2 gap-4">
                            <BsFillPinMapFill></BsFillPinMapFill>
                            123 Event Plaza, City, Country
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 shadow-lg shadow-[#007aff] bg-[#007aff] text-white rounded-xl p-4">Contact Form</h2>
                    <form className="flex flex-col shadow-xl shadow-[#007aff] border p-4 rounded-xl">
                        <label htmlFor="name" className="text-sm mb-1">Name</label>
                        <input type="text" id="name" className="p-2 mb-4 input input-bordered" placeholder="Your Name" />

                        <label htmlFor="email" className="text-sm mb-1">Email</label>
                        <input type="email" id="email" className="p-2 mb-4 input input-bordered" placeholder="Your Email" />

                        <label htmlFor="message" className="text-sm mb-1">Message</label>
                        <textarea id="message" rows="5" className="p-2 mb-4 textarea textarea-bordered" placeholder="Your Message"></textarea>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;