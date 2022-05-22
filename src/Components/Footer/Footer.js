import React from 'react'

const Footer = () => {
        const footer = ['Team' , 'Service' , 'About Us'];
        const footerData = ['Press' ,'Projects' , 'Privacy Policy'];
  return (
    <div className='p-6'>
        <div className=" grid md:grid-cols-2 space-y-5 md:space-y-0">
              
           <h4 className='text-2xl font-bold text-primary grid-cols-1 text-center md:text-left '>Circle</h4>


               <p className='md:hidden  text-paraColor w-56 text-center my-4 text-lg tracking-tight mx-auto'>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
           <div className='md:space-x-16  text-paraColor ml-0  md:gird-cols-1 w-100 space-x-20 md:ml-auto' >
                {footer.map((footer) => (
                    <span key={footer}>{footer}</span>
                    ))}
           </div>

           <div className="md:hidden grid-cols-1 md:space-x-16 text-paraColor md:ml-auto md:gird-cols-1 w-100 space-x-16 ">
               {footerData.map((data) => (
                   <span key={data}>{data}</span>
               ))}
           </div>
           

        </div>
        
           <div className='hidden md:flex justify-between items-center mt-6'>
               
            <p className=' text-paraColor w-56  font-medium my-4 text-lg tracking-tight '>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>

           <div className=" md:space-x-16 text-paraColor   ">
               {footerData.map((data) => (
                   <span key={data}>{data}</span>
               ))}
           </div>

           </div>

  
    </div>
  )
}

export default Footer