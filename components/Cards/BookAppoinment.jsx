import { useState } from "react";
import { useForm } from "react-hook-form"
import { getAppoinmentBydate } from "../../helper/supabase";
import SlotBoxEnabled from "../Box/SlotBoxEnabled"
import dayjs from "dayjs"
import SlotBoxDisabled from "../Box/SlotBoxDisabled";


export default function BookAppoinment({slotDate, doctorId}) {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [loading, setloading] = useState(false)
    const [appoinments, setappoinments] = useState(null)

    const onSubmit = async (data) => {
        await getAppoinmentBydate({setappoinments: setappoinments, date: data.date, doctorId: doctorId, setloading: setloading })
    }

    // console.log(appoinments);


    return (
        <div className=" shadow-md rounded-2xl flex flex-col  py-4 px-6 bg-white w-4/12 space-y-2">
            <h3 className="text-2xl font-bold">Book Appoinment</h3>

            {/* select date */}
            <form className='flex flex-col justify-center items-center space-y-4 pb-4'
            onSubmit={handleSubmit(onSubmit)}>
                <div className="input-text-group w-full">
                        <select className="input-text w-full border-zinc-600"
                        {...register("date", {required: "This field is required"})}>
                            <option selected> choose Date</option>
                            {slotDate?.map((item)=>
                                <option value={item.value} key={item.alias}>{item.alias}</option>
                            )}
                        </select>
                        {errors?.date && <p className='text-red-600'> {errors?.date.message} </p>}
                </div>
                <button type="submit" className="submit px-10">
                    {loading ? 'Loading...' : 'Select'}
                </button>
            </form>

            <div className="flex flex-col space-y-4">
                { appoinments?.map((item, index)=> 
                    <div className="flex flex-col space-y-2 " key={item?.id}>
                        <h5 className="text-lg font-semibold">Secion - {index + 1}</h5>
                        <div className="grid grid-cols-3  gap-2 place-content-center justify-items-center">
                            {item?.map((slot)=> slot?.booked_by == null ?
                                    <SlotBoxEnabled key={slot?.id} time={dayjs('2022-10-10'+ slot?.time).format('h:mm A')} id={slot?.id}/> :
                                    <SlotBoxDisabled key={slot?.id} time={dayjs('2022-10-10'+ slot?.time).format('h:mm A')} /> 
                                )}
                        </div>
                    </div>
                )

                }                   
            </div>
        </div>
    )
}
