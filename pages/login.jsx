import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { supabase } from '../supabase';



export default function Login() {

  const router = useRouter()

  const {register, handleSubmit, formState: {errors}} = useForm()

  const [loading, setloading] = useState(false)

  const onSubmit = async(data) =>{
    setloading(true)
    const { user, session, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    })
    setloading(false);
    (user?.user_metadata?.role == 'doctor' && !error)  ? router.push('/doctor') : router.push('/user')
    
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
          <div className="shadow-md w-90 rounded-2xl px-4 py-2"
            style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
            <h1 className="pt-4 text-black text-center"  id="login">Login</h1>

            {/* login form */}
            <form className="flex flex-col space-y-4" onSubmit ={handleSubmit(onSubmit)}>
              <div className="input-text-group" >
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" className="input-text"  aria-describedby="emailHelp" placeholder="Enter email"
                {...register('email', {required: "This field is required"})}/>
              </div>
              <div className="input-text-group">
                <label htmlFor="password">Password</label>
                <input type="password"  className="input-text" placeholder="Password"
                {...register('password', {required: "This field is required"})}/>
              </div>
              <div className='flex flex-col items-center justify-center space-y-3'>
                <Link href='/password'>
                      <p className='cursor-pointer underline text-black'>Forgot Password</p>
                </Link>
                <button type="submit" className="submit w-full">
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>

              {errors?.password && <p className='text-red-600'> {errors?.password.message} </p>}
              
              <div className='flex flex-col items-center justify-center space-y-2'>
                <p>Don't have an account yet?</p>
                <Link href='/user/register'>
                  <button type="submit" className="submit w-full">
                    User Registration
                  </button>
                </Link>
                <Link href='/doctor/register'>
                  <button type="submit" className="submit w-full">
                    Doctor Registration
                  </button>
                </Link>
              </div>
            </form>
      </div>
    </div>
  )
}
