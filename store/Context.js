import { createContext, useContext, useState, useEffect } from "react"

import { supabase } from "../supabase"


const AuthContext = createContext()
export function useAuthContext() {
    return useContext(AuthContext)
}
const DoctorContext = createContext()
export function useDoctorContext() {
    return useContext(DoctorContext)
}

export default function Context({children}) {

    //auth context
    const [user, setuser] = useState(null)

    useEffect(() => {
      const authListner = supabase.auth.onAuthStateChange((event, session) => {
        if(event === 'SIGNED_IN'){
          setuser(session?.user)
        }
        else if(event === 'SIGNED_OUT') 
          setuser(false)
      })
      return () => {
        authListner.data.unsubscribe()
      }
    }, [])
    
    useEffect(() => {
        // const u = supabase.auth.user()
        // u == null && setuser(u)
        console.log('running context', user);
    }, [])    

    // doctor context
    const [searchData, setsearchData] = useState(null)



    return (
        <AuthContext.Provider value={{
            user, setuser,
        }}>
            <DoctorContext.Provider value={{
                searchData, setsearchData
            }}>
                {children}
            </DoctorContext.Provider>
        </AuthContext.Provider>
    )
}
