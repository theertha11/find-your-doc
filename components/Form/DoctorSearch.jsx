import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDoctorContext } from '../../store/Context'

export default function DoctorSearch({ loading }) {

    const { searchData, setsearchData } = useDoctorContext()

    const router = useRouter()
  
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
  
    const onSubmit = (data) =>{
        setsearchData(data)
    }

    useEffect(() => {
      reset({
        district: searchData?.district,
        city: searchData?.city,
        specialisation : searchData?.specialisation
      })
    }, [router])
    

    return (
        <div className="shadow-md rounded-2xl px-4 " 
            style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>

                <h3 className="text-black pt-4 text-3xl font-bold text-center">Doctor Search</h3>

                <form className='flex justify-center items-start space-x-8 pb-4 '
                onSubmit={handleSubmit(onSubmit)}>

                    <div className="input-text-group ">
                        <label htmlFor="district">District *</label>
                        <select className="input-text"
                        {...register("district", {required: "This field is required"})}>
                            <option selected>Choose...</option>
                            <option>Wayanad</option>
                        </select>
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="input-text"  placeholder="City"
                        {...register("city")}/>
                        <p className='text-zinc-500'> Leave blank for searching all the doctors in district</p>
                        {errors?.city && <p className='text-red-600'>{errors.city.message}</p>}
                    </div>
                    
                    <div className="input-text-group">
                            <label htmlFor="specialisation">Specialization *</label>
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

                    <button type="submit" className="submit w-40 mt-6">
                        { loading ? 'Searching' : 'Search' }
                    </button>
                    
                </form>
        </div>
    ) 
}
