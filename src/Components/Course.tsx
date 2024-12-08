import React from 'react'
import {Link} from "react-router-dom"
function Course() {
    return (
        <div>
            <section className="services-12" id="course">
                <div className="form-12-content">
                    <div className="container">
                        <div className="grid grid-column-2 ">
                            
                            <div className="column1">
                                <div className="heading">
                                    <h3 className="head text-white">Book A Demo..</h3>
                                    {/* <h4>Fall 2019 applications are now open</h4> */}
                                    <p className="my-3 text-white"> 
                                            <b>Book </b>a Free Online <b>Demo</b> Today. Our Customer Success Team are here to help, providing customized demonstrations or 
                                            <b>training</b>, whenever it's needed. We are very flexible with <b>demo</b> times and will work around .
                                    </p>
                                </div>
                                </div>
                                <div className="column2">
                                <Link className="btn btn-secondary btn-theme2 mt-3" to="demo" >Apply Here</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Course
