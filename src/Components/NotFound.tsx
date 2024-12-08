import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Header from "./Header"


function NotFound() {
    var squareStyle = {
        backgroundColor: "white",
        textAlign: "center",
        padding: 1,
        margin: 1,
        // height:"500px"


    };

    return (
        //   <div style={squareStyle}>
        <div>

            {/* <!-- Top Menu 1 --> */}
            <section className="w3l-contact-breadcrum">
                <div className="breadcrum-bg py-sm-5 py-4">
                    <div className="container py-lg-3">
                        <h2>Page Not Found</h2>
                        <p><Link to="/" >Home</Link> / NotFound</p>
                    </div>
                </div>
            </section>
            {/* <!-- contact --> */}
            <section className="w3l-contacts-12" id="contact">
                <div className="container py-md-1">
                    <div className="row cont-main-top">
                        <div className="" style={{ height: "300px", width: "600px", padding: "50px", margin: "50px" }}>
                            <h1>404</h1><br />
                            <h2>Oops! Page Not Found</h2><br />
                            <p>It seems the page you are looking for doesn't exist.</p><br />
                            <button type="button"><Link to="/">Go back</Link></button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound;