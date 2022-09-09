import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookAppoinment from "../../../components/Cards/BookAppoinment";
import DoctorCardFull from "../../../components/Cards/DoctorCardFull";
import UserHeader from "../../../components/Navigation/UserHeader";
import { getDoctor, getSlots } from "../../../helper/supabase";

export default function DoctorId() {

    const router = useRouter()

    const [doctorData, setdoctorData] = useState(null)
    const [availableSlots, setavailableSlots] = useState(null)

    useEffect(() => {
      if(router.isReady) { 
        getDoctor({setdoctorData: setdoctorData, id: router.query?.id})
        getSlots({setavailableSlots: setavailableSlots, id: router.query?.id})
      }
    }, [router.isReady])
    

    return (
        <div className='relative min-h-screen' style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            <UserHeader />
            
            <div className='flex justify-between space-x-10 px-20  pt-24 w-full'>
                <DoctorCardFull data={doctorData} />
                <BookAppoinment slotDate={availableSlots} doctorId={router.query?.id}/>
            </div>
        </div>
    )
}
