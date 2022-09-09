import { useRouter } from "next/router"

export default function DoctorCardFull({data}) {

    const router = useRouter()

    return (
        <div className=" text-slate-600 shadow-md rounded-2xl flex flex-col  py-4 px-6 bg-white w-8/12">
            
            <div className="flex   items-center  py-4">
                <div className="bg-zinc-900 text-white rounded-full flex justify-center items-center w-32 h-32">
                    <h2 className="text-5xl">{data?.name?.toUpperCase()?.slice(0,2)}</h2>
                </div>
                <div className="flex flex-col pl-6">
                    <h5 className="font-bold text-lg">Dr. {data?.name}</h5>
                    <p>{data?.degree}</p>
                    <p>{data?.specialisation}</p>
                </div>
            </div>

            <div className="flex flex-col space-y-3 border-t-2 border-zinc-400 p-4 ">
                {/* about */}
                <div className="flex flex-col">
                    <h5 className="font-bold text-lg">About</h5>
                    <p>{`${data?.bio}`}</p>
                </div>
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
            </div>
        </div>
    )
}
