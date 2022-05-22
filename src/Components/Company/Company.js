import React from 'react'
import airbnb from "../../image/Assets/Logos/Airbnb.svg"
import Amazon from "../../image/Assets/Logos/Amazon.svg"
import Circle from "../../image/Assets/Logos/Circle.svg"
import FedEx from "../../image/Assets/Logos/FedEx.svg"
import Google from "../../image/Assets/Logos/Google.svg"
import Microsoft from "../../image/Assets/Logos/Microsoft.svg"

const Company = () => {
  return (
    <div className='p-6 mt-20 md:mt-36'>
        <div className="flex flex-col md:flex-row align-middle  space-y-16 md:space-y-0 space-x-20  ">
            <img src = {airbnb}  className ="  sepia w-40 hover:sepia-0 mx-auto "  />
            <img src = {Google}  className =" w-40 sepia hover:sepia-0  "  />
            <img src = {Microsoft}  className =" w-40 sepia hover:sepia-0  "  />
            <img src = {Amazon}  className =" w-40 sepia hover:sepia-0  "  />
            <img src = {FedEx} className =" w-40 sepia hover:sepia-0  "   />
        </div>
    </div>
  )
}

export default Company