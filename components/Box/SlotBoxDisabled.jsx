import { useRouter } from "next/router"

export default function SlotBoxDisabled({time}) {
  const router = useRouter()

  return (
    <button className="flex justify-center items-center w-20 rounded-2xl h-20 bg-red-200 cursor-not-allowed" disabled={true}>
      {time}
    </button>
  )
}
