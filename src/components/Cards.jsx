import React from 'react'
import { motion } from 'framer-motion'

const Cards = () => {
  return (
    <motion.section 
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.5, delay: 0.15}}
    className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-lg shadow-2xl p-8 border-b-12 border-green-900 flex flex-col">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 font-[Kanit]">
              Global<span className="font-[roboto] text-green-900">connect</span>
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Expand the value of your SaaS platform with integrated payments
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-8 border-b-12 border-purple-800 flex flex-col">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 font-[Kanit]">
              Global<span className="font-[roboto] text-purple-800">pay</span>
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Quick and easy payment acceptance for your business
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-8 border-b-12 border-green-900 flex flex-col">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 font-[Kanit]">
              Global<span className="font-[roboto] text-green-900">bill</span>
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Drive efficiency through automated billing and payments
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-8 border-b-12 border-indigo-950 flex flex-col">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 font-[Kanit] text-indigo-950">
              Cardx
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Seamless surcharging with industry-leading compliance
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Cards