import React from 'react'
import DoctorHeader from '../../components/Navigation/DoctorHeader'

export default function DoctorDashboard() {
  return (
    <div>
        <DoctorHeader/>
        <section>
            <div className="col-md-3">
                
            
                
                <div className="sidenav shadow-lg p-3 mb-5 bg-white">
                    <a href="#">Profile</a>
                    <a href="#">Change Password</a>
                    <a href="#">About Hospitals</a>
                    <a href="#">Log Out</a>
                </div>
            </div>
            <div className="col-md-10">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>Kerala</option>
                </select>
            </div>
            <div className="col-md-10">
                <label for="inputState">District</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>Wayanad</option>
                </select>
            </div>
            <div className="col-md-10">
                <label for="inputState">Select hospital</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>Mananthavady</option>
                </select>
            </div>
            <div className="col-md-10">
                <label for="inputState">Department</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>Wayanad</option>
                </select>
            </div>
            <div className="col-md-10">
                <label for="datepicker">Date</label>
                <input type='date' id="datepicker"  placeholder="Choose your date..." />

            </div>
            <div className="col-md-10">
                <label for="inputState">Time</label>
                <input type="text" className="form-control" id="inputTime" placeholder="Time slot"/>
            </div>
            
            <div className="col-md-10">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </section>
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
            }`
        } </style>
     </div>
  )
}
