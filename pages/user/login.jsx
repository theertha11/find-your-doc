import Link from 'next/link'

import UserHeader from "../../components/Navigation/UserHeader";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <UserHeader/>  
          <div className="shadow-md w-96 rounded-2xl px-4"
            style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            <h1 className="pt-4 text-black text-center"  id="login">Login</h1>

            {/* login form */}
            <form className="flex flex-col space-y-4">
              <div className="input-text-group" >
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="input-text"  aria-describedby="emailHelp" placeholder="Enter email"/>
              </div>
              <div className="input-text-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"  className="input-text" placeholder="Password"/>
              </div>
              <button type="submit" className="submit" style={{width: '100%'}}>Log In</button>
              
              <div className='flex flex-col items-center justify-center'>
                <Link href='/forgot-password'>
                      <p className='cursor-pointer underline text-black'>Forgot Password</p>
                </Link>
                <Link href='/doctor/login'>
                      <p className='cursor-pointer underline'>Doctor Login</p>
                </Link>
              </div>
            </form>
      </div>
    </div>
  )
}
