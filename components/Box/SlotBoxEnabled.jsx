import { useRouter } from "next/router"

export default function SlotBoxEnabled({id, time}) {
  const router = useRouter()

  return (
    <button className="flex justify-center items-center w-20 rounded-2xl h-20 bg-zinc-200 " onClick={()=>router.push(router.asPath + '/appoinment/' + id )}>
      {time}
    </button>
  )
}
