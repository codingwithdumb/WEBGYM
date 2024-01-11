import React from 'react'
const Login = () => {
  return (
    <>
    <div className='section-form-data'>
      <div className='log-form'>
      <div className='header-log'>SIGN IN!</div>
        <form className='farm-log'>
         <label className='mt-2'>E MAIL :</label>
         <input type='text' placeholder='Enter The Full name'/><br/>
         <label className='mt-2'>Passwaord :</label>
         <input type='text' placeholder='Enter The Full name'/><br/>
         <label className='mt-2'>Confirm Passwaord :</label>
         <input type='text' placeholder='Enter The Full name'/><br/>
         <button className='mt-2'>LOG IN</button>
         <button>LOG OUT</button>
        </form>
      </div>
    </div>



 
    </>
  )
}

export default Login
