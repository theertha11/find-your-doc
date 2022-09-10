import { useRouter } from "next/router"
import { useEffect } from "react";
import { supabase } from "../supabase";

export default function Home() {

    const router = useRouter()

    useEffect(() => {
      const user = supabase.auth.user()
      user ? router.push('/'+ user?.user_metadata?.role) : router.push('/login')
    }, [])
     

    return (
        <div>
            
        </div>
    )
}
