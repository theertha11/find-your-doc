import Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '../../supabase'

export default function UserHeader() {

    const router = useRouter()

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        !error && router.push('/')
    }

    return (
        <header className="fixed top-0 z-50 w-screen h-18 flex justify-between items-center px-6 bg-zinc-900" >
            <div className="text-white  pt-2">
                <h2>FIND YOUR DOC</h2>
            </div>
            <div className="flex space-x-10 text-white text-xl items-center"> 
                <Link href='/user/dashboard'>
                    <p className='cursor-pointer'>Home</p>
                </Link>
                <Link href='/user/contact'>
                    <p className='cursor-pointer'>Contact us</p>
                </Link>
                <Link href='/user/bookings'>
                    <p className='cursor-pointer'>Bookings</p>
                </Link>
                <button onClick={handleLogout} className='cursor-pointer border border-white rounded-md px-4 py-1
                    hover:text-zinc-900 hover:bg-white'>
                    Logout
                </button>
            </div>
        </header>
    )
  }
  