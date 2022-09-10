import { supabase } from "../supabase"
import dayjs from "dayjs"


// -----------------------------------------------------------------------Profile -------------------------------------------------------------------------------------
export const updateDoctorProfile = async ({data, setloading, doctorId, setdoctorData}) => {
    setloading(true)
    const doctor = await supabase.from('doctor').update(data).match({id: doctorId})
    if(!doctor?.error) { 
        const { user, error } = await supabase.auth.update({
            data: data,
          })
        !error && setdoctorData(doctor?.data[0])
    }
    setloading(false)
}


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
        // adding slots to appoinment table
        await supabase.from('appoinments').insert(a)
    }
    setloading(false)
}


export const getSlots = async ({setavailableSlots, id}) => {
    const slots = await supabase.from('sections').select().match({doctor: id}).gte('date', dayjs().format('YYYY-MM-DD')).order('date', { ascending: true })
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

export const getAppoinmentBydate = async ({setappoinments, date, doctorId, setloading}) => {
    setloading(true)
    const sections = await supabase.from('sections').select().match({date: date, doctor: doctorId})
    if(!sections?.error){
        let a =[]
        for (let i = 0; i < sections?.data?.length; i++) {
            const sectionId = sections?.data[i]?.id
            const appoinments = await supabase.from('appoinments').select().match({section: sectionId}).order('time', { ascending: true })
            if(!appoinments?.error){
                a.push(appoinments?.data)
            }
        }
        setappoinments(a)
    }
    setloading(false)
}
export const getAppoinmentById = async ({setappoinment, id}) => {
    const appoinment = await supabase.from('appoinments').select(`*,section(*)`).match({id: id})
    if(!appoinment?.error){
        setappoinment(appoinment?.data[0])
    }
}

export const getAppoinmentByUserId = async ({setappoinments, userId}) => {
    const appoinments = await supabase.from('appoinments').select(`*,section(*, doctor(*))`).match({booked_by: userId})
    console.log(appoinments);
    if(!appoinments?.error){
        setappoinments(appoinments?.data)
    }
}

export const addAppoinment= async ({data, id, setloading, router}) => {
    setloading(true)
    const appoinment = await supabase.from('appoinments').update({ booked_by: data }).match({ id: id })
    if(!appoinment?.error){
        router.push('/user/bookings')
    }
    setloading(false)
}



// ----------------------------------------------------------------------- Feedbacks -----------------------------------------------
export const addFeedback = async ({data, setloading, setfeedbacks}) => {
    setloading(true)
    const feedback = await supabase.from('feedback').insert([data])
    if(!feedback?.error){
        setfeedbacks((prev)=> [feedback?.data[0], ...prev])
    }
    setloading(false)
}
export const getFeedbacksByDoctor = async ({setfeedbacks, doctor}) => {
    const feedbacks = await supabase.from('feedback').select(`*, user(*)`).match({doctor: doctor})
    if(!feedbacks?.error){
        setfeedbacks(feedbacks?.data)
    }
}