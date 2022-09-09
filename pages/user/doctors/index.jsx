import { useEffect, useState } from "react";
import DoctorCard from "../../../components/Cards/DoctorCard";
import DoctorSearch from "../../../components/Form/DoctorSearch";
import UserHeader from "../../../components/Navigation/UserHeader";
import { searchDoctor } from "../../../helper/supabase";
import { useDoctorContext } from "../../../store/Context";


export default function DoctorsPage() {

    const { searchData } = useDoctorContext()

    const [doctorsData, setdoctorsData] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        searchData && searchDoctor({setdoctorsData: setdoctorsData, setloading: setloading, search: searchData})
    }, [searchData])

    return (
        <div className='relative '>
        <UserHeader />
        
        <div className='flex flex-col justify-center items-center mt-24'>
            
            <DoctorSearch loading={loading}/>

            <div className="grid grid-cols-2 gap-20 pt-12 ">
                {
                    doctorsData?.map((item)=> 
                        <DoctorCard key={item?.id} data={item}/>)
                }
            </div>
            
            { doctorsData?.length == 0 && 
                <div className="flex justify-center items-center">
                    <p className="text-3xl">No matching result found</p>
                </div>
            }
        </div>

        </div>
  )
}
