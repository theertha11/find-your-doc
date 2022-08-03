import React from 'react'

export default function Password() {
  return (
    <div className='flex flex-col items-center '>
        <input type='email' placeholder='enter email'/>
        <input type="password" placeholder='enter new password' />
        <input type='password' placeholder="confirm password" />
        <button>Save</button>
    </div>
  )
}
