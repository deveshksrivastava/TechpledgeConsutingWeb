import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Header from "./Header"


function NotFound() {
    var squareStyle = {
        backgroundColor: "white",
        textAlign: "center",
        padding: 1,
        margin:1,
        // height:"500px"
   

    };

    return (
    //   <div style={squareStyle}>
    <div>
                
                {/* <Header bannerCSS="banner inner-banner" />
                <div style={squareStyle}></div> */}
                <h1 className="title">404</h1>
                {/* <button type="button"><Link to="/">Go back</Link></button> */}
                         <div className="copyright">
                            <p>© 2020 Stamp 404 Page Widget. All rights reserved | Design by <a href="#">IOT</a></p>
                        </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        </div>
    )
}

export default NotFound;