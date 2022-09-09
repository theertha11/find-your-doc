import { useRouter } from "next/router"

export default function DoctorCard({data}) {

    const router = useRouter()

    return (
        <div className=" text-slate-600 shadow-md rounded-2xl flex space-x-10 py-4 px-6 "
        style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            
            <div className="flex flex-col justify-center items-center w-40 py-4">
                <div className="bg-white rounded-full flex justify-center items-center w-32 h-32">
                    <h2 className="text-5xl">DO</h2>
                </div>
                <div className="flex flex-col text-center">
                    <h5 className="font-bold text-lg">Dr. {data?.name}</h5>
                    <p>{data?.specialisation}</p>
                </div>
            </div>

            <div className="flex flex-col space-y-3 bg-white rounded-xl p-4 w-96">
                {/* addrsss */}
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold">Address</h6>
                    <div className="flex">
                        <p className="font-medium">Street : &nbsp;</p>
                        <p>{data?.street}</p>
                    </div>
                    <div className="flex">
                        <p className="font-medium">City : &nbsp;</p>
                        <p>{data?.city}</p>
                    </div>
                    <div className="flex">
                        <p className="font-medium">District : &nbsp;</p>
                        <p >{data?.district}</p>
                    </div>
                    <div className="flex">
                        <p className="font-medium">Pin : &nbsp;</p>
                        <p >{data?.pin}</p>
                    </div>
                </div>

                {/* contact */}
                <div className="flex flex-col">
                    <h6 className="text-lg font-bold">Contact</h6>
                    <div className="flex">
                        <p className="font-medium">Phone : &nbsp;</p>
                        <p>{data?.mobile}</p>
                    </div>
                    <div className="flex">
                        <p className="font-medium">Email : &nbsp;</p>
                        <p >{data?.email}</p>
                    </div>
                </div>
                {/* book slot */}
                <button className="submit px-4 " onClick={()=> router.push('/user/doctors/' + data?.id)}>
                    Book Slot
                </button>
            </div>
        </div>
    )
}
