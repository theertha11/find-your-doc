import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getDoctor, updateDoctorProfile } from '../../helper/supabase'
import { supabase } from '../../supabase'

export default function ProfileCard() {

    const router  = useRouter()

    const [loading, setloading] = useState(false)
    const [doctorData, setdoctorData] = useState(null)
    const [user, setuser] = useState(null)
    
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    useEffect(() => {
        reset({
            name: doctorData?.name,
            mobile: doctorData?.mobile,
            degree: doctorData?.degree,
            specialisation: doctorData?.specialisation,
            pin: doctorData?.pin,
            street: doctorData?.street,
            district: doctorData?.district,
            city: doctorData?.city,
            bio: doctorData?.bio
        })
      }, [doctorData])

      useEffect(() => {
        const u = supabase.auth.user()
        setuser(u)
        getDoctor({setdoctorData: setdoctorData, id: u?.id})
      }, [])
      

    const onSubmit = (newData) => { 
        console.log(newData);
        updateDoctorProfile({data: newData, setloading: setloading, doctorId: user?.id, setdoctorData: setdoctorData})
    }

    return (
        <div className="shadow-md rounded-2xl px-4 flex flex-col justify-center items-center space-y-4 mx-40" 
            style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            <h1 className="text-black text-3xl font-bold pt-4" style={{textAlign: 'center'}}>Profile</h1>

            <form className='flex flex-col justify-center items-center space-y-4 pb-4'onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-2 gap-x-40 gap-y-4'>
                        <div className="input-text-group ">
                            <label htmlFor="name">Name</label>
                            <input type="text"  className="input-text" placeholder="Name"
                            {...register('name',{required:  "This field is required"})}/>
                            {errors?.name && <p className='text-red-600'> {errors?.name.message} </p>}
                        </div>

                        <div className="input-text-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="text" className="input-text" required placeholder="Mobile number"
                            {...register("mobile", {required: "This field is required"})}/>
                            {errors?.mobile && <p className='text-red-600'> {errors?.mobile.message} </p>}
                        </div>

                        <div className="input-text-group">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" className="input-text" required placeholder="Degrees"
                            {...register("degree", {required: "This field is required"})}/>
                            {errors?.degree && <p className='text-red-600'> {errors?.degree.message} </p>}
                        </div>
                        
                        <div className="input-text-group">
                            <label htmlFor="specialisation">Specialization</label>
                            <select className="input-text"
                            {...register("specialisation", {required: "This field is required"})}>
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
                            <label htmlFor="specialisation">District</label>
                            <select className="input-text"
                            {...register("district", {required: "This field is required"})}>
                                <option>Kannur</option>
                                <option>Wayanad</option>
                                <option>Kozhikode</option>
                            </select>
                            {errors?.district && <p className='text-red-600'> {errors?.district.message} </p>}
                        </div>

                        <div className="input-text-group">
                            <label htmlFor="street">Street</label>
                            <input type="text" className="input-text" placeholder="1234 Main St"
                            {...register("street", {required: "This field is required"})}/>
                            {errors?.street && <p className='text-red-600'> {errors?.street.message} </p>}
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

                        <div className="input-text-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea className="input-text h-40"
                            {...register("bio", {required: "This field is required"})}/>
                            {errors?.bio && <p className='text-red-600'> {errors?.bio.message} </p>}
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button type="submit" className="submit w-60">
                            { loading ? "Loading..." : "Update"}
                        </button>
                    </div>                       
            </form>
        </div>
    )
}
