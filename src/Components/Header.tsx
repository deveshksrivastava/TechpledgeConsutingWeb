import React from 'react'
import {Link} from "react-router-dom"
function Header() {
    return (
        <div>
            {/* <!-- //Top Menu 1 --> */}
            <section className="w3l-bootstrap-header">
            <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
                <div className="container">
                    
                <a className="navbar-brand" href="/"><span className="fa fa-pencil-square-o "></span> 
                <img src="./assets/images/Logo.jpg" height="50px"  width="150px" /></a>
                {/* <!-- if logo is image enable this   
                <a className="navbar-brand" href="#index.html">
                    <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                    
                </a> --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa fa-bars"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                         <Link className="nav-link" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" >About</Link>
                    </li>
                    {/* <li className="nav-item">
                   
                          <a href="#">Training</a> 
                        <ul className="dropdown-menu">
                            <li><Link className="nav-link" to="/desplayregisteruser" >Cloud Administrator Role</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >Azure Cloud Architect</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >Cloud Data Analyst</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >DevOps Consulting Role</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >Server Administrator Role</Link></li>
                        </ul>  
                    </li> */}
                    <li id="nav-item">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#google.com">Training</a>
                        <ul className="dropdown-menu" >
                            <li><Link className="nav-link" to="/desplayregisteruser" >Cloud Administrator Role</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >Azure Cloud Architect</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >Cloud Data Analyst</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >DevOps Consulting Role</Link></li>
                            <li><Link className="nav-link" to="/desplayregisteruser" >Server Administrator Role</Link></li>
                        </ul>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link"  to="/Training" >Training</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/CardCertificate" >Certification</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Placements" >Placements</Link>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.techpledgeconsulting.uk/">Services </a> 
                        {/* <Link className="nav-link" to="/services" >Services</Link> */}
                    </li>
                    
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" >Contact</Link>
                    </li>
                    </ul>
                    <form action="search-results.html" className="form-inline position-relative my-2 my-lg-0">
                    <input className="form-control search" type="search" placeholder="Search here..." aria-label="Search" />
                    <button className="btn btn-search position-absolute" type="submit">
                    <span className="fa fa-search" aria-hidden="true"></span>
                    </button>
                    </form>
                </div>
                </div>
            </nav>
            </section>
        </div>
    )
}

export default Header
