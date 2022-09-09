import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import UserHeader from '../../components/Navigation/UserHeader'
import { supabase } from '../../supabase'

export default function Password() {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const [loading, setloading] = useState(false)
    const onSubmit = async(pass) => {
      setloading(true)
      const { data, error } = await supabase
      .from('cities')
      .update({ password: 'pass.new-password' })
      .match({ name: 'Auckland' })
      setloading(false)
    }

  return (
    <div className='relative flex flex-col h-screen justify-center items-center'>
      <UserHeader authenticated={true}/>
      <div className="shadow-md rounded-2xl  w-80 items-center justify-center space-y-6  " 
      style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
          <h2 className="text-black pt-4" style={{textAlign: 'center'}}>Forgot Password</h2>
            <div className='flex flex-col items-center  mb-4'>
                <form className='space-y-4 flex flex-col items-center' onSubmit = {handleSubmit(onSubmit)}>
                  <div className="input-text-group">                     
                      <input type="text" className="input-text w-72" placeholder="Enter your email address"
                      {...register("email", {required: "This field is required"})}/>
                      {errors?.email && <p className='text-red-600'> {errors?.email.message} </p>}
                  </div>
                  <div className="input-text-group">                      
                      <input type="password" className="input-text w-72" placeholder="New Password"
                      {...register("newpassword", {required: "This field is required"})}/>
                      {errors?.newpassword && <p className='text-red-600'> {errors?.newpassword.message} </p>}
                  </div>
                  <div className="input-text-group">                      
                      <input type="password" className="input-text w-72" placeholder="Confirm Password"
                      {...register("newpassword", {required: "This field is required"})}/>
                      {errors?.newpassword && <p className='text-red-600'> {errors?.newpassword.message} </p>}
                  </div>
                  <div className='flex justify-center items-center'>
                    <button type="submit" className="submit w-40">
                        {loading ? "Loading" : "Save"}
                    </button>
                  </div>
                </form>
            </div>
      </div>
    </div>
  )
}
