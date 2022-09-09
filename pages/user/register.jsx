import {useForm} from 'react-hook-form'
import { supabase } from "../../supabase"
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

    // TODO
    // District option add
export default function Register() {

    const router = useRouter()

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        setloading(true)
        const { user, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        },{
            data: {
                name: data.name,
                dob: data.dob,
                gender: data.gender,
                email: data.email,
                mobile: data.mobile,
                street: data.street,
                district: data.district,
                pin: data.pin
            }
        })
        data.id = user?.id
        delete data.password
        if(!error){
            const res = await supabase
            .from('users')
            .insert([
              data
            ])
            !res.error && router.push('/user/dashboard')
        }
        setloading(false)
        
    }


  return (
    <div className='relative flex flex-col justify-center items-center'>
        <Header/>
        <div className="shadow-md rounded-2xl px-4 mt-24 space-y-4" 
            style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            <h1 className="text-black pt-4" style={{textAlign: 'center'}}>Sign Up</h1>


            <form className='flex flex-col justify-center items-center space-y-4 pb-4'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
                    <div className="input-text-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"  className="input-text" placeholder="Name"
                        {...register("name", {required: "This field is required"})}/>
                        {errors?.name && <p className='text-red-600'> {errors?.name.message} </p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="gender">Gender</label>
                        <select className="input-text"
                        {...register("gender", {required: "This field is required"})}>
                            <option selected>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" className="input-text"placeholder="DOB"
                        {...register("dob", {required: "This field is required"})}/>
                        {errors?.dob && <p className='text-red-600'> {errors?.dob.message} </p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="input-text" placeholder="abcd@gmail.com"
                        {...register("email", {required: "This field is required"})}/>
                        {errors?.email && <p className='text-red-600'> {errors?.email.message} </p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="mobile">Phone Number</label>
                        <input type="text" className="input-text" placeholder="Mobile number"
                        {...register("mobile", {required: "This field is required"})}/>
                        {errors?.mobile && <p className='text-red-600'> {errors?.mobile.message} </p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="input-text" placeholder="Password"
                        {...register("password", {
                            required: "This field is required",
                        })}/>
                        
                        {errors?.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="street">Street</label>
                        <input type="text" className="input-text"  placeholder="Street"
                        {...register("street", {required: "This field is required"})}/>
                        {errors?.street && <p className='text-red-600'>{errors.street.message}</p>}
                    </div>
                    
                    <div className="input-text-group">
                        <label htmlFor="city" >City</label>
                        <input type="text" className="input-text" placeholder='City'
                        {...register("city", {required: "This field is required"})}/>
                        {errors?.city && <p className='text-red-600'> {errors?.city.message} </p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="district">District</label>
                        <select className="input-text"
                        {...register("district", {required: "This field is required"})}>
                            <option selected>Choose...</option>
                            <option>Wayanad</option>
                        </select>
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="pin">Pin</label>
                        <input type="text" className="input-text" placeholder="Pin"
                        {...register("pin", {required: "This field is required"})}/>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button type="submit" className="submit w-60" >
                        {loading ? 'Loading...' : 'Register'}
                    </button>
                </div>
            </form>
        </div>  
    </div>
  )
}
