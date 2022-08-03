import React from 'react'

export default function AddDoctor() {
  return (
    <div>
        <section>
            <div className="container">
                <div className="row max-auto">
                
                    <div className="col-md-8 align-self-center shadow p-3 mb-5 bg-white rounded" >
                        <div className="pt-5">
                            <div className="add_doctor">
                                <h1 className="text-primary">Add Doctor</h1>
                                <form>
                                    <div className="form-row ">
                                    <div className="form-group col-md-12 ">
                                        <label htmlFor="inputName">Name</label>
                                        <input type="text"  className="form-control" id="inputName" placeholder="Name"/>
                                    </div>
                                    </div>
                                    <div className="from-group">
                                        <label htmlFor="inputSpecialization">Departmnet</label>
                                        <input type="text" className="form-control" id="inputSpecialization" placeholder="Specialization"/>
                                    </div>
                                    <div className="form-group pt-3">
                                        <label htmlFor="inputNumber">Phone Number</label>
                                        <input type="text" className="form-control" required id="inputNumber" placeholder="Mobile number"/>
                                    </div>
                                    <div className="pt-2">
                                        <button type="submit" className="btn btn-success">Add Doctor</button>
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
