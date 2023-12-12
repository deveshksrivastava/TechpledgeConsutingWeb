import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      {/* <!-- //Top Menu 1 --> */}
      <section className="w3l-bootstrap-header">
        <nav className="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
          <div className="container">
            <a className="navbar-brand" href="/">
              <span className="fa fa-pencil-square-o "></span>
              <img
                src="deveshprojectwork/assets/images/Logo.jpg"
                height="50px"
                width="150px"
              />
            </a>
            {/* <!-- if logo is image enable this   
                <a className="navbar-brand" href="#index.html">
                    <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                    
                </a> --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa fa-bars"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">&nbsp;&nbsp;&nbsp;About</Link>
                </li>

                <li id="nav-item">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#google.com"
                  >
                    &nbsp;&nbsp;&nbsp;Training{' '}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="nav-link" to="/CloudAdministratorRole">
                        Cloud Administrator Role
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/CloudArchitectRole">
                        Cloud Architect Role
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/CloudDataAnalystRole">
                        Cloud Data Analyst Role
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/DevOpsConsultingRole">
                        DevOps Consulting Role
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/ServerAdministratorRole">
                        Server Administrator Role
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/SoftwareProgramerRole">
                        Software Programer Role
                      </Link>
                    </li>
                  </ul>
                </li>
                <li id="nav-item">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#google.com"
                  >
                    {' '}
                    &nbsp;&nbsp;&nbsp;Certification
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="nav-link"
                        to="/MicrosoftCertificationsCard"
                      >
                        Microsoft Certifications
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/AWSCertificationsCard">
                        AWS Certifications
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/DevOpsCertificationsCard">
                        DevOps Certifications
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/GoogleCertificationsCard">
                        Google Certifications
                      </Link>
                    </li>
                  </ul>
                </li>

                <li id="nav-item">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#google.com"
                  >
                    {' '}
                    &nbsp;&nbsp;&nbsp;Placements
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="nav-link" to="/JobAssistance">
                        TechPledge Job Assist
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-link"
                        to="/PermanentPositionPlacements"
                      >
                        Permanent Position – Placements
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-link"
                        to="/ContractPositionPlacements"
                      >
                        Contract Position – Placements{' '}
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/OffshoreHiringPlacements">
                        Offshore Hiring – Placements{' '}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li id="nav-item">
                  <li>
                    <Link to="/Services">&nbsp;&nbsp;&nbsp;Services</Link>
                  </li>
                  {/* <a  href="https://www.techpledgeconsulting.uk/"  > &nbsp;&nbsp;&nbsp;Services</a>                    */}
                </li>

                <li id="nav-item">
                  {/* <a  href="https://www.techpledgeconsulting.uk/"  > &nbsp;&nbsp;&nbsp;Services</a>   */}
                  <Link to="/contact">&nbsp;&nbsp;&nbsp;Contact</Link>
                </li>
              </ul>
              <form
                action="search-results.html"
                className="form-inline position-relative my-2 my-lg-0"
              >
                <input
                  className="form-control search"
                  type="search"
                  placeholder="Search here..."
                  aria-label="Search"
                />
                <button
                  className="btn btn-search position-absolute"
                  type="submit"
                >
                  <span className="fa fa-search" aria-hidden="true"></span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
