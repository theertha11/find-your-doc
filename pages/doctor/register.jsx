import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../../components/Header'
import { supabase } from '../../supabase'

export default function Register() {

    const [loading, setloading] = useState(false)

    const router = useRouter()
    
    const {register, handleSubmit, formState: {errors}} = useForm()
    
    const onSubmit = async(data) =>{
        setloading(true)
        const { user, session, error } = await supabase.auth.signUp(
    
            {
            email: data.email,
            password: data.password,
            },
            {
            data: { 
                name : data.name, 
                email : data.email,
                dob: data.dob,
                mobile: data.mobile,
                gender: data.gender,
                address: data.address,
                specialisation: data.specialisation,
                city: data.city,
                pin: data.pin,
            }
            }
        )
        data.id = user?.id
        delete data.password  
        if(!error){
            const res = await supabase
            .from("doctor")
            .insert([
                data
            ])
            !res.error && router.push("/doctor/dashboard")
        }
        setloading(false)    
}

// console.log(errors)
  return (
    
    <div className='relative flex flex-col justify-center items-center'>
    <Header/>
    <div className="shadow-md rounded-2xl px-4 mt-24 space-y-4" 
        style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
        <h1 className="text-black pt-4" style={{textAlign: 'center'}}>Sign Up</h1>


            <form className='flex flex-col justify-center items-center space-y-4 pb-4'
                onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
                        <div className="input-text-group ">
                            <label htmlFor="name">Name</label>
                            <input type="text"  className="input-text" placeholder="Name"
                            {...register('name',{required:  "This field is required"})}/>
                            {errors?.name && <p className='text-red-600'> {errors?.name.message} </p>}
                        </div>
                    
                        <div className="input-text-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" className="input-text" placeholder="DOB"
                            {...register('dob',{required: "This field is required"})}/>
                            {errors?.dob && <p className='text-red-600'> {errors?.dob.message} </p>}
                        </div>
                        <div className="input-text-group ">
                            <label htmlFor="gender">Gender</label>
                            <select className="input-text"
                            {...register("gender",{required: "This field is required"})}>
                                <option selected>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            {errors?.gender && <p className='text-red-600'> {errors?.gender.message} </p>}
                        </div>
                        <div className="input-text-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="input-text" placeholder="abcd@gmail.com"
                            {...register("email", {required: "This field is required"})}/>
                            {errors?.email && <p className='text-red-600'> {errors?.email.message} </p>}
                        </div>
                        <div className="input-text-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="text" className="input-text" required placeholder="Mobile number"
                            {...register("mobile", {required: "This field is required"})}/>
                            {errors?.mobile && <p className='text-red-600'> {errors?.mobile.message} </p>}
                        </div>
                        <div className="input-text-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="input-text" placeholder="Password"
                            {...register("password", {required: "This field is required"})}/>
                            {errors?.password && <p className='text-red-600'> {errors?.password.message} </p>}
                        </div>
                        <div className="input-text-group">
                            <label htmlFor="specialisation">Specialization</label>
                            <select className="input-text"
                            {...register("specialisation", {required: "This field is required"})}>
                                <option selected> choose...</option>
                                <option>Cardiology</option>
                                <option>Dentist</option>
                                <option>Neurology</option>
                                <option>Gastrology</option>
                                <option>Orthopedics</option>
                                <option>Gynecology</option>
                                <option>Dermatology</option>
                                <option>Pediatrics</option>
                                <option>Ophthalmology</option>
                            </select>
                            {errors?.specialisation && <p className='text-red-600'> {errors?.specialisation.message} </p>}
                        </div>
                        <div className="input-text-group">
                            <label htmlFor="address">Hospital Address</label>
                            <input type="text" className="input-text" placeholder="1234 Main St"
                            {...register("address", {required: "This field is required"})}/>
                            {errors?.address && <p className='text-red-600'> {errors?.address.message} </p>}
                        </div>
                        
                            <div className="input-text-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="input-text" placeholder="city"
                                {...register("city", {required: "This field is required"})}/>
                                {errors?.city && <p className='text-red-600'> {errors?.city.message} </p>}
                            </div>
                            <div className="input-text-group">
                                <label htmlFor="pin">Pin</label>
                                <input type="text" className="input-text" placeholder="Pin"
                                {...register("pin", {required: "This field is required"})}/>
                                {errors?.pin && <p className='text-red-600'> {errors?.pin.message} </p>}
                            </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type="submit" className="submit w-60">
                            { loading ? "Loading..." : "Register"}
                        </button>
                    </div>                       
            </form>
        </div>
    </div>
  )
}
