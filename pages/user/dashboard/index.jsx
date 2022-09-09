import React from 'react'
import { useForm } from 'react-hook-form'
import UserHeader from '../../../components/Navigation/UserHeader'

export default function Dashboard() {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data) =>{


  }

  return (
    <div className='relative flex flex-col justify-center items-center'>
        <UserHeader authenticated={true}/>
        <style jsx>{`
                  .sidenav {
                    height: 100%;
                    width: 200px;
                    position: fixed;
                    z-index: 1;
                    top: 6.8em;
                    left: 0;
                    overflow-x: hidden;
                    padding-top: 20px;
                  }
                  
                  .sidenav a {
                    padding: 6px 6px 6px 32px;
                    text-decoration: none;
                    font-size: 22px;
                    color: #818181;
                    display: block;
                  }
                  
                  .sidenav a:hover {
                    color:black;
                  }
                  
                  .main {
                    margin-left: 200px; /* Same as the width of the sidenav */
                  }
                  
                  @media screen and (max-height: 450px) {
                    .sidenav {padding-top: 15px;}
                    .sidenav a {font-size: 18px;}
                  }
        `}</style>

      <div className="shadow-md rounded-2xl px-4 mt-24 space-y-4" 
          style={{backgroundImage : `url(https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000)`}}>
          <h2 className="text-black pt-4" style={{textAlign: 'center'}}>Find your doc here...</h2>
            <form className='flex flex-col justify-center items-center space-y-4 pb-4'
              onSubmit={handleSubmit(onSubmit)}>
                <div className=' grid grid-cols-2 gap-x-6 gap-y-4'>
          
                  <div className="input-text-group">
                      <label htmlFor="district">District</label>
                      <select className="input-text"
                      {...register("district", {required: "This field is required"})}>
                          <option selected>Choose...</option>
                          <option>Wayanad</option>
                      </select>
                  </div>
                  <div className="input-text-group">
                      <label htmlFor="street">Street</label>
                      <input type="text" className="input-text"  placeholder="Street"
                      {...register("street", {required: "This field is required"})}/>
                      {errors?.street && <p className='text-red-600'>{errors.street.message}</p>}
                  </div>
                  <div className="input-text-group">
                        <label htmlFor="specialisation">Specialization</label>
                        <select className="input-text"
                        {...register("specialisation", {required: "This field is required"})}>
                            <option selected> choose...</option>
                            <option>Cardiology</option>
                            <option>Dentist</option>
                            <option>Neurology</option>
                            <option>Gastrology</option>
                            <option>Orthopedics</option>
                            <option>Gynecology</option>
                            <option>Dermatology</option>
                            <option>Pediatrics</option>
                            <option>Ophthalmology</option>
                        </select>
                        {errors?.specialisation && <p className='text-red-600'> {errors?.specialisation.message} </p>}
                  </div>
                  <div className="input-text-group">
                      <label htmlFor="date">Date</label>
                      <input type="date" className="input-text" placeholder="DOB"
                      {...register('date',{required: "This field is required"})}/>
                      {errors?.date && <p className='text-red-600'> {errors?.date.message} </p>}
                  </div>
                  <div style={{paddingTop: '2em', paddingLeft: '28em'}}>
                            <button type="submit" className="submit w-60">
                                Search
                            </button>
                        </div>
                </div>
            </form>
      </div>
    </div>
  )
}
