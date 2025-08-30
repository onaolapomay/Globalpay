import React from 'react'
import { useState } from 'react'
import { ChevronDown} from 'lucide-react'
import {FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'



const Footer = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleRow = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const footerData = [
        {
            title: 'Solutions',
            links: ['For businesses', 'For SaaS Platforms', 'Global pay', 'Global Connect', 'CardX by Global', 'pricing'],
        },
        {
            title: 'Capabilities',
            links: ['Surcharge', 'Lending', 'Mobile Payments', 'E-commerce', 'In-person Payments'],
        },
        {
            title: 'Resources',
            links: ['Insights', 'Blog', 'API Documentation', 'Support Knowledgebase', 'CardX Login', 'APPSOS Login'],
        },
        {
            title: 'Company',
            links: ['About Us', 'Career', 'Leadershp', 'Contact Sales', 'Partner With Us', 'Media Inquiries']
        }
    ]
  return (
    <footer className='bg-gray-900 text-white py-10'>
        <div className='px-4'>
            <p className='text-2xl font-[roboto] tracking-wider'>Connect With Us</p>
            <div className='flex mt-4 space-x-3'>
            <FaTwitter size={44} className='bg-white fill-current text-black p-1' clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' />
            <FaYoutube size={44} className='bg-white fill-current text-black p-1' clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' />
            <FaFacebook size={44} className='bg-white fill-current text-black p-1' clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' />
            <FaInstagram size={44} className='bg-white fill-current text-black p-1' clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' />
            <FaLinkedinIn size={44} className='bg-white fill-current text-black p-1' clipPath='polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' />
            </div>
            
        </div>
        <div className='max-w-6xl mx-auto px-4 mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {footerData.map((section, index)=>(
                    <div key={index}>
                        <button onClick={() => toggleRow(index)}
                            className='flex items-center gap-3 w-full md:cursor-default'>
                                <h3 className='text-2xl font-semibold font-[roboto] text-white'>
                                    {section.title}
                                </h3>
                                <ChevronDown className={`w-5 h-5  transition-transform ${openIndex === index ? 'rotate-180' : ""}`} />
                        </button>

                        <ul className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-full' : 'max-h-0'}`}>
                            {section.links.map((link, i) =>
                            (<li key={i} ><a href='#' className='hover:text-gray-600 text-xl font-mono block'>
                                {link}</a>
                                </li>
                            ))}

                        </ul>
                    </div>
                ))}
            </div>

            <div className='mt-10 border-t border-gray-700 pt-6 text-center'>
                <p className=' text-lg text-white font-[roboto]'>&copy; {new Date().getFullYear()} Global Pay. All rights reserved.</p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer