import { Mail, Phone } from 'lucide-react';
import React from 'react'

const Information = () => {
  return (
    <div className='w-full h-10 flex justify-between items-center px-6 md:px-16 bg-gray-950 text-white text-sm'>
      <div>
         <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="text-brand-orange"/>
                <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
                <Mail size={18} className="text-brand-orange"/>
                <span>help@shaheed-e-azam.org</span>
            </div>
      </div>
      <div> hello</div>
    </div>
  )
}

export default Information;
