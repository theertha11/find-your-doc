import React from 'react'
import UserHeader from '../../components/Navigation/UserHeader'

export default function PasswordConfirm() {
  return (
    <div style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}
    className='relative flex flex-col justify-center items-center w-screen h-screen'>
    <UserHeader/>

    <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <h3>Your password has been saved.</h3>
        <h3>Click OK to continue... </h3>
        <button className='text-white rounded-2xl bg-black w-20'>OK</button>
    </div>
    </div>
  )
}
