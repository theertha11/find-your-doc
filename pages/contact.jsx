import React from 'react'
import Header from '../components/Header'

export default function contactUser() {
  return (
    <div>
        <Header/>
        <section className="contactus" id="contactus-section">
            <div className="container">
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <h1 className="text-center">Contact us</h1>
                    <form id="gform" action="">
                        <div className="row pt-3">
                            <div className="col-md-12">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Name</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">Place</label>
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="Place"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">Mobile</label>
                                        <input type="tel" className="form-control" id="inputPassword4" placeholder="Mobile"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Message</label>
                                    <textarea className="form-control" cols="30" rows="10" placeholder="Write your messages..."></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                                </div>
                            </div>    
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>

  )
}
