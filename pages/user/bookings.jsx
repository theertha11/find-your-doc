import UserHeader from "../../components/Navigation/UserHeader";
import { getAppoinmentByUserId } from "../../helper/supabase";
import BookingCard from "../../components/Cards/BookingCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

export default function Bookings() {

    const router = useRouter()

    const [appoinments, setappoinments] = useState(null)

    useEffect(() => {
        const user = supabase.auth.user()
        if(router.isReady) { 
            getAppoinmentByUserId({setappoinments: setappoinments, userId: user?.id})
        }
    }, [router.isReady])

    return (
        <div className='relative min-h-screen' style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            <UserHeader />
            
            <div className='flex justify-center items-center space-x-10 px-12 pt-24 w-full'>
                { appoinments?.map((item)=>
                    <BookingCard key={item?.section?.date} doctorData={item?.section?.doctor} appoinmentData={item} />
                )}
            </div>
        
    </div>
    )
}
