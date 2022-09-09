import React from 'react'
import UserHeader from '../../../components/Navigation/UserHeader'

export default function DocList() {
  return (
    <div className='pt-28 '>   
            <UserHeader/>
        
        <div className='w-20 h-20 rounded-full bg-black'>
            <image/>            
        </div>
        <div className='flex flex-col'>
            <h5>Name</h5>
            <h5>Specialization</h5>
            <p>Hospital Address</p>
        </div>
        <div>
            <h5>fee</h5>
            <h5>rating</h5>
            <button>Book Now</button>
        </div>
    </div>
    
  )
}
