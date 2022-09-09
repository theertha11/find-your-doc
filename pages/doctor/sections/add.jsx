import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DoctorHeader from '../../../components/Navigation/DoctorHeader'
import SectionsTable from '../../../components/Tables/SectionsTable';
import { addSections, getSections } from '../../../helper/supabase';
import { supabase } from '../../../supabase';
import dayjs from "dayjs"


export default function AddSection() {


    const {register, handleSubmit, formState: {errors}} = useForm()

    const [sections, setsections] = useState(null)
    const [loading, setloading] = useState(false)
    const [user, setuser] = useState(null)

    useEffect(() => {
        const user = supabase.auth.user()
        setuser(user)
        getSections({setsections: setsections, id: user?.id})
    }, [])
    
  
    const onSubmit = (data) =>{
        data.doctor = user?.id
        addSections({data: data, setsections: setsections, setloading: setloading})
    }
    
    return (
        <div className='relative'>
            <DoctorHeader/>

            <div className='flex flex-col space-y-4 mt-24 mx-40'>
                <div className='flex justify-between'>
                    <h3 className='text-3xl font-bold'>Create New Section </h3>
                </div>

                <form className='flex justify-between rounded-2xl px-6 py-4 ' 
                    style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}
                    onSubmit={handleSubmit(onSubmit)}>

                    <div className="input-text-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="input-text"  placeholder="Section Date"
                        {...register("date")}/>
                        {errors?.date && <p className='text-red-600'>{errors.date.message}</p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="from">Starting at</label>
                        <input type="time" className="input-text"  placeholder="Starting at"
                        {...register("from")}/>
                        {errors?.from && <p className='text-red-600'>{errors.from.message}</p>}
                    </div>

                    <div className="input-text-group">
                        <label htmlFor="to">Ending at</label>
                        <input type="time" className="input-text"  placeholder="Ending at"
                        {...register("to")}/>
                        {errors?.to && <p className='text-red-600'>{errors.to.message}</p>}
                    </div>

                    <button type="submit" className="submit w-40 mt-6">
                        { loading ? 'Loading...' : 'Create' }
                    </button>

                </form>

                <SectionsTable bodyData={sections?.map((item, index)=>({
                    id: index+1,
                    date: dayjs(item?.date).format('ddd, DD MMM'),
                    time: dayjs(item?.date + item?.from).format('HH:mm A')  + ' to ' + dayjs(item?.date + item?.to).format('HH:mm A')
                }))} add={true} headData={['id','date', 'time']}/>


            </div>
        </div>
    )
}
