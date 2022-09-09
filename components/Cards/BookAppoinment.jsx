import { useState } from "react";
import { useForm } from "react-hook-form"
import { getSlot } from "../../helper/supabase";
import dayjs from "dayjs"

export default function BookAppoinment({slotDate, doctorId}) {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [slot, setslot] = useState([])

    const onSubmit = async (data) =>{
        setslot([])
        await getSlot({setslot: setslot, id: doctorId, date: data.date})
    }

    console.log(slot);

    return (
        <div className=" text-slate-600 shadow-md rounded-2xl flex flex-col  py-4 px-6 bg-white w-4/12 space-y-2">
            <h3 className="text-2xl font-bold">Book Appoinment</h3>

                {/* select date */}
            <form className='flex justify-center items-start space-x-8 pb-4 '
            onSubmit={handleSubmit(onSubmit)}>
                <div className="input-text-group ">
                        <select className="input-text border-zinc-600"
                        {...register("date", {required: "This field is required"})}>
                            <option selected> choose Date</option>
                            {slotDate?.map((item)=>
                                <option value={item.value} key={item.alias}>{item.alias}</option>
                            )}
                        </select>
                        {errors?.date && <p className='text-red-600'> {errors?.date.message} </p>}
                </div>
                <button type="submit" className="submit px-10">
                    Select
                </button>
            </form>

            <div className="grid grid-cols-6">
                { slot

                }                   
            </div>
        </div>
    )
}
