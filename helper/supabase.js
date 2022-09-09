import { supabase } from "../supabase"
import dayjs from "dayjs"



// ------------------------------------------------------------------ Doctor -----------------------------------------------------------------------------------------
export const getDoctor = async ({setdoctorData, id}) => {
    const doctor = await supabase.from('doctor').select().match({id: id})
    if(!doctor?.error) setdoctorData(doctor?.data[0])
}

export const searchDoctor = async ({setdoctorsData, setloading, search}) => {
    setloading(true)
    if(search.city == '') delete search.city
    const doctors = await supabase.from('doctor').select().match(search)
    if(!doctors?.error) setdoctorsData(doctors?.data)
    setloading(false)
}

// ------------------------------------------------------------------- Appoinment ----------------------------------------------------------------------------------------
export const addSections = async ({data, setsections, setloading}) => {
    setloading(true)
    const section = await supabase.from('sections').insert([data])
    if(!section?.error){
        //update sections table
        setsections((prev)=> [...prev, section?.data[0]]) 
        // add data to appoinment table
        const dif = dayjs( data.date + data.to).diff( data.date + data.from, 'm')
        let slot = dayjs(data.date + data.from)
        let a = []
        for (let i = 0; i < (dif/15); i++) {
            a.push({
                time: dayjs(slot).format('HH:mm'),
                section: section?.data[0]?.id
            })
            slot = dayjs(slot).add((15), 'm')
        }
        const slots = await supabase.from('appoinments').insert(a)
    }
    setloading(false)
}


export const getSlots = async ({setavailableSlots, id}) => {
    const slots = await supabase.from('sections').select().match({doctor: id}).gt('date', dayjs().format('YYYY-MM-DD')).order('date', { ascending: true })
    if(!slots?.error){
        const data = [...new Set(slots?.data?.map((item)=>(item?.date)))]
        setavailableSlots(data?.map((item)=>({value: item, alias: dayjs(item).format('ddd, DD MMM')})))
    }
}
export const getSections = async ({setsections, id}) => {
    const sections = await supabase.from('sections').select().match({doctor: id}).gt('date', dayjs().subtract(1, 'day').format('YYYY-MM-DD')).order('date', { ascending: true })
    if(!sections?.error){
        setsections(sections?.data)
    }
}

export const getSlot = async ({setslot, id, date}) => {
    const slots = await supabase.from('sections').select().match({doctor: id, date: date})
    if(!slots?.error){
        let b = []
        for (let i = 0; i < slots?.data?.length; i++) {
            b.push([])
            const section = slots?.data[i];
            const dif = dayjs( section?.date + section?.to).diff( section?.date + section?.from, 'm')
            let slot = dayjs(section?.date + section?.from)
            let a = []
            for (let j = 0; j < (dif/15); j++) {
                a.push(dayjs(slot).format('h:mm A'))
                slot = dayjs(slot).add((15), 'm')
            }
            b[i].push(a)
        }
        setslot(b)
        // setslot((prev)=> [...prev, dayjs(slot).format('h:mm A')])
    }
}

export const getAppoinments = async ({setappoinments, id, booked}) => {
    const appoinments = await supabase.from('appoinments').select(`*,booked_by(*),section(*)`).match({section: id}).order('time', { ascending: true })
    if(!appoinments?.error){
        if(booked){
            const data = appoinments?.data?.filter((item)=> item?.booked_by != null)
            setappoinments(data)
        }else
            setappoinments(appoinments?.data)
    }
}


//.format('YYYY-MM-DD')