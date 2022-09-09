import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DoctorHeader from '../../../components/Navigation/DoctorHeader'
import SectionsTable from '../../../components/Tables/SectionsTable'
import { getSections } from '../../../helper/supabase'
import { supabase } from '../../../supabase'
import dayjs from "dayjs"

export default function Sections() {

    const router = useRouter()

    const [sections, setsections] = useState(null)

    useEffect(() => {
        const user = supabase.auth.user()
        getSections({setsections: setsections, id: user?.id})
    }, [])

    

    return (
        <div className='relative'>
        <DoctorHeader/>

            <div className='flex flex-col space-y-4 mt-24 mx-40'>
                <div className='flex justify-between'>
                    <h3 className='text-3xl font-bold'>Sections </h3>
                    <button className='submit px-4' onClick={()=>router.push('/doctor/sections/add')}>
                        Add New Section
                    </button>
                </div>
                
                <SectionsTable bodyData={sections?.map((item, index)=>({
                    id: index+1,
                    date: dayjs(item?.date).format('ddd, DD MMM'),
                    time: dayjs(item?.date + item?.from).format('HH:mm A')  + ' to ' + dayjs(item?.date + item?.to).format('HH:mm A'),
                    view: <button className='submit px-10' onClick={()=>router.push('/doctor/sections/'+ item?.id)}>
                        View Appointments
                    </button>
                }))} headData={['id','date', 'time', 'view']}/>


            </div>
        </div>
    )
}
