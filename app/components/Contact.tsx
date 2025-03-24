import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div
            data-name="contact"
            className="w-full py-28 md:h-screen bg-white text-black"
            id="contact"
        >
            <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6 text-gray-500">Let us get in touch 🙂 <span className='hidden md:block'>You can download my Resume by clicking the last icon on the left hand side.</span></p>

                    <Link href={'https://wa.me/+2349167624014'} target='_blank' className="text-white bg-gradient-to-b from-green-400 to-green-600 px-6 py-3 flex items-center w-52 rounded-md hover:scale-110 duration-300 gap-4">
                        <FaWhatsapp size={30} />
                        Message Me
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Contact;
