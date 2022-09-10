import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppoinmentCard from "../../../../../components/Cards/AppoinmentCard";
import UserHeader from "../../../../../components/Navigation/UserHeader";
import { getAppoinmentById, getDoctor } from "../../../../../helper/supabase";
import { supabase } from "../../../../../supabase";

export default function AppoinmentId() {

  const router = useRouter()

  const [doctorData, setdoctorData] = useState(null)
  const [appoinment, setappoinment] = useState(null)
  const [user, setuser] = useState(null)

  useEffect(() => {
    const user = supabase.auth.user()
    setuser(user?.id)
    if(router.isReady) { 
      getDoctor({setdoctorData: setdoctorData, id: router.query?.id})
      getAppoinmentById({setappoinment: setappoinment, id: router.query?.appoinmentId})
    }
  }, [router.isReady])


  return (
    <div className='relative min-h-screen' style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
      <UserHeader />
      
      <div className='flex justify-center items-center space-x-10 px-12 pt-24 w-full'>
        <AppoinmentCard doctorData={doctorData} appoinmentData={appoinment} user={user} />
      </div>
        
    </div>
  )
}
