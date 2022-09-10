import { useState } from "react"
import { useForm } from "react-hook-form"
import { addFeedback } from "../../helper/supabase"
import dayjs from 'dayjs'

export default function FeedbackCard({user, doctor, feedbacks, setfeedbacks}) {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const [loading, setloading] = useState(false)

    const onSubmit = async (data) => {
        data.user = user
        data.doctor = doctor
        await addFeedback({data: data, setloading: setloading, setfeedbacks: setfeedbacks})

    }

    console.log(feedbacks);

    return (
        <div className="bg-white shadow-md rounded-2xl flex flex-col  py-4 px-6 w-full">
            <h3 className="text-3xl font-bold">Feedbacks</h3>


            <div className="flex  w-full divide-x-2 divide-zinc-900 pt-4">
                <div className="flex flex-col w-8/12 space-y-4 pr-4">
                    {feedbacks?.map((item)=> 
                        <div className="flex flex-col space-y-3 border border-zinc-900 rounded-2xl py-2 px-4" key={item?.id}>
                            <div className="flex flex-col">
                                <h6 className="text-lg font-semibold">{item?.user?.name}</h6>
                                <p>{dayjs(item?.created_at).format('ddd, MMM D YY h:m A')}</p>
                            </div>
                            <p className="w-full break-words">{item.content}</p>
                        </div>
                    )}
                </div>


                <div className="flex flex-col w-4/12 pl-4">

                    <h5 className="text-xl font-semibold pb-4">Add your story</h5>

                    <form className='flex flex-col justify-center space-y-4 pb-4 w-full 'onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-text-group">
                            <textarea className="input-text border border-zinc-600 w-full h-40"
                            {...register("content", {required: "This field is required"})}/>
                            {errors?.content && <p className='text-red-600'> {errors?.content.message} </p>}
                        </div>

                        <button type="submit" className="submit px-16">
                            { loading ? "Loading..." : "Add"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
