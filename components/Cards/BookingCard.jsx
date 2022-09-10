import dayjs from "dayjs"


export default function BookingCard({doctorData, appoinmentData}) {

    return (
        <div className="bg-white rounded-2xl">

            <div className="flex flex-col justify-center items-center border-b-2 border-zinc-900">
                <div className="flex flex-col justify-center items-center py-4">
                        <div className="bg-zinc-900 text-white rounded-full flex justify-center items-center w-32 h-32">
                            <h2 className="text-5xl">DO</h2>
                        </div>
                        <div className="flex flex-col text-center">
                            <h5 className="font-bold text-lg">Dr. {doctorData?.name}</h5>
                            <p>{doctorData?.specialisation}</p>
                        </div>
                </div>

                <div className="flex flex-col space-y-3 bg-white rounded-xl p-4 w-96">
                    {/* addrsss */}
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold">Address</h6>
                        <div className="flex">
                            <p className="font-medium">Street : &nbsp;</p>
                            <p>{doctorData?.street}</p>
                        </div>
                        <div className="flex">
                            <p className="font-medium">City : &nbsp;</p>
                            <p>{doctorData?.city}</p>
                        </div>
                        <div className="flex">
                            <p className="font-medium">District : &nbsp;</p>
                            <p >{doctorData?.district}</p>
                        </div>
                        <div className="flex">
                            <p className="font-medium">Pin : &nbsp;</p>
                            <p >{doctorData?.pin}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6 py-4 bg-zinc-900 text-white rounded-b-2xl">
                <div className="flex justify-between px-4 w-full">
                    <h6 className="text-lg font-bold">On {dayjs(appoinmentData?.section?.date).format('ddd, DD MMM')}</h6>
                    <h6 className="text-lg font-bold">At {dayjs('2022-10-10'+ appoinmentData?.time).format('h:mm A')}</h6>
                </div>
            </div>
        </div>
    )
}
