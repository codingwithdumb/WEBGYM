import React from 'react'

const CardForMap = () => {
  return (
    <div>
      <div className='finding-gym'>
       <div className='findGym-head mt-5'>
       Find a Gym with All the Right Benefits
       </div>
       <ul>
        <li>Open 24 hours</li>
        <li>Personalized Plan</li>
        <li>Access to 5,000+ gyms</li>
        <li>Personal & group training</li>
        <li>Free access to Apple Fitness+*</li>
       </ul>
       <input type='text' className='mb-4' placeholder='Find your Gym Today'/>
      </div>
    </div>
  )
}

export default CardForMap
