import React from 'react'
import DoctorHeader from '../../components/Navigation/DoctorHeader'

export default function Register() {
  return (
    <div>
        <DoctorHeader/>
        <section>
            <div className="container">
                <div className="row max-auto">
                    <div className="col-md-8 align-self-center shadow p-3 mb-5 bg-white rounded" >
                        <div className="pt-3">
                            <div className="signup">
                                <h1 className="text-primary" >Sign Up</h1>
                                <form>
                                    <div className="form-row ">
                                        <div className="form-group col-md-12 ">
                                            <label htmlFor="inputName">Name</label>
                                            <input type="text"  className="form-control" id="inputName" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="im=nputAge">Age</label>
                                        <input type="text" className="form-control" id="inputAge" placeholder="Age"/>
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="inputState">Gender</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="text" className="form-control" required id="exampleInputEmail1"placeholder="abcd@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputNumber">Number</label>
                                        <input type="text" className="form-control" required id="inputNumber" placeholder="Mobile number"/>
                                    </div>
                                    <div className="from-group">
                                        <label htmlFor="inputPassword">Password</label>
                                        <input type="text" className="form-control" id="inputPassword" placeholder="Password"/>
                                    </div>
                                    <div className="from-group pt-3">
                                        <label htmlFor="inputSpecialization">Specialization</label>
                                        <input type="text" className="form-control" id="inputSpecialization" placeholder="Specialization"/>
                                    </div>
                                    <div className="form-group pt-3">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity"/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">State</label>
                                            <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>Kerala</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputPin">Pin</label>
                                            <input type="text" className="form-control" id="inputPin" placeholder="Pin"/>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <button type="submit" className="btn btn-primary" >Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    </div>
  )
}
