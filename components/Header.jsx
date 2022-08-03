
export default function Header() {
  return (
    <header className="bg-info" 
        style={{
            position: 'fixed',
            width: '100%',
            Zindex: 1
            }}>
        <div className="row">
            <div className="col-md-6 col-8 text-white p-3 pl-5 my-auto">
                <h2>FIND YOUR DOC</h2>
            </div>
            <div className="col-md-6 col-4 my-auto">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto my-auto">
                            <li className="nav-item active">
                            <a className="nav-link text-white" href="index.html">Home </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="contact.html">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="signup.html">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}
