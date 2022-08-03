import React from 'react'

export default function adminHome() {
  return (
    <div>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="shadow p-3 mb-5 bg-white rounded" >
                        <h1 className="pt-4 text-primary" >Login</h1>
                        <form>
                            <div className="form-group" >
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password"  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary" >Log In</button>
                            <div className="pt-3" >
                            <a href="">Forgotten password?</a>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
