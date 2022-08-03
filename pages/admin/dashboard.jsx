import React from 'react'

export default function adminDashboard() {
  return (
    <div>
        <section >
            <div className="row mr-5">
                <a href="add-doctor.html" className="btn btn-success ml-auto">Add Doctor</a>
            </div>
            <div className="row" >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>ABCD</td>
                            <td>abcd</td>
                            <td>12345678</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>ABCD</td>
                            <td>abcd</td>
                            <td>12345678</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>ABCD</td>
                            <td>abcd</td>
                            <td>12345678</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  )
}
