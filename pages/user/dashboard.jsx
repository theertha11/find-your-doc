import React from 'react'
import UserHeader from '../../components/Navigation/UserHeader'

export default function dashboard() {
  return (
    <div>
        <UserHeader/>
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
    <section>
        <div className="col-md-3">
            <div className="sidenav shadow-lg p-3 mb-5 bg-white">
                <a href="#">Profile</a>
                <a href="#">Change Password</a>
                <a href="#">About Doctors</a>
                <a href="#">Log Out</a>
            </div>
        </div>
        <div className="col-md-10" style={{paddingTop: '10em', paddingLeft: '22em'}}>
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>Kerala</option>
            </select>
        </div>
        <div className="col-md-10" style={{paddingTop: '2em', paddingLeft: '22em'}}>
            <label htmlFor="inputState">District</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>Wayanad</option>
            </select>
        </div>
        <div className="col-md-10" style={{paddingTop: '2em', paddingLeft: '22em'}}>
            <label htmlFor="inputState">Panchayath</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>Mananthavady</option>
            </select>
        </div>
        <div className="col-md-10" style={{paddingTop: '2em', paddingLeft: '22em'}}>
            <label htmlFor="inputState">Department</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option></option>
            </select>
        </div>
        <div className="col-md-10" style={{paddingTop: '2em', paddingLeft: '22em'}}>
            <label htmlFor="inputState">Doctor</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option></option>
            </select>
        </div>
        <div className="col-md-10" style={{paddingTop: '2em', paddingLeft: '22em'}}>
            <label htmlFor="datepicker">Date</label>
            <input type='date' id="datepicker"  placeholder="Choose your date..." />
        </div>
        <div className="col-md-10" style={{paddingTop: '2em', paddingLeft: '22em'}}>
            <button type="submit" className="btn btn-primary" style={{textAlign: 'center', width: '100%'}}>Submit</button>
        </div>
    </section>
    </div>
  )
}
