import React from 'react'
import { ArrowRight } from 'lucide-react'

const Stax = () => {
  return (
    <div className="mt-12 px-4">
      <h2 className="text-center text-4xl md:text-6xl font-[roboto] font-medium mb-10">
        Stax In The News
      </h2>

      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
        
        <div className="p-2 rounded-lg shadow-lg flex flex-col">
          <img
            src="/images/imgi_6_kevin.png"
            alt="Kevin Wall CFO"
            className="w-full h-64 object-cover rounded-md"
          />
          <p className="py-6 px-2 text-xl md:text-2xl font-medium">
            Global Payments Appoints Kevin Wall as Chief Financial Officer
          </p>
          <span className="px-2 text-sm md:text-base font-medium font-[roboto] text-gray-600">
            Finance executive brings 35+ years of financial expertise to spearhead
            Global Payments’ next chapter of strategic expansion, building on the…
          </span>

          <ArrowRight size={72} className='mt-10 bg-indigo-950 p-5 text-white hover:bg-indigo-600 rounded-full' />
        </div>

        <div className="p-2 rounded-lg shadow-lg flex flex-col">
          <img
            src="/images/imgi_7_Stax.png"
            alt="Stax BlockChyp Acquisition"
            className="w-full h-64 object-cover rounded-md"
          />
          <p className="py-6 px-2 text-xl md:text-2xl font-medium">
            Stax Acquires BlockChyp, Adding Payment Gateway and Expanding
            End-to-End Capabilities
          </p>
          <span className="px-2 text-sm md:text-base font-medium font-[roboto] text-gray-600">
            Acquisition of BlockChyp brings new technology and industry expertise to
            Stax, furthering its evolution as a leading payment processor ORLANDO…
          </span>

          <ArrowRight size={72} className='mt-10 bg-indigo-950 p-5 text-white hover:bg-indigo-600 rounded-full' />
        </div>

        <div className="p-2 rounded-lg shadow-lg flex flex-col">
          <img
            src="/images/imgi_8_10-Year.png"
            alt="Stax 10 Years"
            className="w-full h-64 object-cover rounded-md"
          />
          <p className="py-6 px-2 text-xl md:text-2xl font-medium">
            Global Payments Celebrates 10 Years: Looking Back at a Decade of Growth and Payment
            Innovations
          </p>
          <span className="px-2 text-sm md:text-base font-medium font-[roboto] text-gray-600">
            To the incredible Global Payments community: allow us to take a moment to recognize
            a milestone that we are extraordinarily proud…
          </span>

          <ArrowRight size={72} className='mt-10 bg-indigo-950 p-5 text-white hover:bg-indigo-600 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Stax