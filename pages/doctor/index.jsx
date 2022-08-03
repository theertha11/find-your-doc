import DoctorHeader from "../../components/Navigation/DoctorHeader";


export default function DoctorHome() {
  return (
    <div>
        <DoctorHeader/>
        <section style={{paddingTop: '8em'}} id="middle">
            <div className="row">
                <div className="col-md-5" style={{paddingLeft:'8em', paddingTop: '6em'}}>
                    <div className="shadow p-3 mb-5 bg-white rounded" style={{paddingLeft: '10em'}}>
                    <h1 className="pt-4 text-primary" style={{textAlign: 'center'}} id="login">Doctor's Login</h1>
                    <form>
                        <div className="form-group" style={{alignItems: 'center'}}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Log In</button>
                        <div className="pt-3" style={{textAlign: 'center'}}>
                        <a href="">Forgotten password?</a>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

