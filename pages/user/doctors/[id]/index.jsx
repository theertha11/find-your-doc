import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookAppoinment from "../../../../components/Cards/BookAppoinment";
import DoctorCardFull from "../../../../components/Cards/DoctorCardFull";
import FeedbackCard from "../../../../components/Cards/FeedbackCard";
import UserHeader from "../../../../components/Navigation/UserHeader";
import { getDoctor, getFeedbacksByDoctor, getSlots } from "../../../../helper/supabase";
import { supabase } from "../../../../supabase";

export default function DoctorId() {

    const router = useRouter()

    const [doctorData, setdoctorData] = useState(null)
    const [availableSlots, setavailableSlots] = useState(null)
    const [feedbacks, setfeedbacks] = useState(null)
    const [user, setuser] = useState(null)

    useEffect(() => {
      const user = supabase.auth.user()
      setuser(user?.id)
      if(router.isReady) { 
        getDoctor({setdoctorData: setdoctorData, id: router.query?.id})
        getSlots({setavailableSlots: setavailableSlots, id: router.query?.id})
        getFeedbacksByDoctor({setfeedbacks: setfeedbacks, doctor: router.query?.id})
      }
    }, [router.isReady])
    
    console.log(feedbacks);

    return (
        <div className='relative min-h-screen' style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            <UserHeader />
             
            <div className="flex flex-col w-full px-12 pt-24 space-y-10 pb-10">
              <div className='flex justify-between space-x-10  w-full'>
                  <DoctorCardFull data={doctorData} />
                  <BookAppoinment slotDate={availableSlots} doctorId={router.query?.id}/>
              </div>
              <FeedbackCard user={user} doctor={router.query?.id} feedbacks={feedbacks} setfeedbacks={setfeedbacks}/>
            </div>
        </div>
    )
}
