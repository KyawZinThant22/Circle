import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
      <>
      <div className="container mx-auto">
         <Navbar/>
      </div>

      <div className="container mx-auto">
          {children}
      </div>

      {/* <div className="footer container mx-auto">
        <Footer/>
      </div> */}
      
      </>
  )
}

export default Layout