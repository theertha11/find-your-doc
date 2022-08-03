import Link from 'next/link'

export default function UserHeader({}) {
    return (
        <header className="fixed top-0 z-50 w-screen h-18 flex justify-between items-center px-6 bg-zinc-900" >
            <div className="text-white  pt-2">
                <h2>FIND YOUR DOC</h2>
            </div>
            <div className="flex space-x-10 text-white text-xl items-center"> 
                <Link href='/user'>
                    <p className='cursor-pointer'>Home</p>
                </Link>
                <Link href='/contact'>
                    <p className='cursor-pointer'>Contact us</p>
                </Link>
                <Link href='/user/register'>
                    <p className='cursor-pointer border border-white rounded-md px-4 py-1
                        hover:text-zinc-900 hover:bg-white'>
                        Register
                    </p>
                </Link>
            </div>
        </header>
    )
  }
  