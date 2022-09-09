import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DoctorHeader from '../../../components/Navigation/DoctorHeader'
import AppoinmentsTable from '../../../components/Tables/AppoinmentsTable'
import { getAppoinments } from '../../../helper/supabase'
import dayjs from "dayjs"


export default function Appoinments() {

    const router = useRouter()

    const [appoinments, setappoinments] = useState(null)

    useEffect(() => {
      router.isReady && getAppoinments({setappoinments: setappoinments, id: router.query?.id, booked: true})
    }, [router.isReady])

    
    return (
        <div className='relative'>
            <DoctorHeader/>

            <div className='flex flex-col space-y-4 mt-24 mx-40'>
                <div className='flex justify-between'>
                    <h3 className='text-3xl font-bold'>Appoinments </h3>
                </div>
                
                <AppoinmentsTable headData={['id','time', 'name', 'gender', 'phone', 'city']} 
                    bodyData={ appoinments?.map((item, index)=>({
                        id: index+1,
                        time: dayjs(item?.section?.date + item?.time).format('HH:mm A'),
                        name: item?.booked_by?.name,
                        gender: item?.booked_by?.gender,
                        phone: item?.booked_by?.mobile,
                        city: item?.booked_by?.city,
                    }))}
                />
            </div>
        </div>
    )
}
