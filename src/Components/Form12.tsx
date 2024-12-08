import React from 'react'

function Form12() {
    return (
        <div>
           
            <section className="w3l-form-12">
                    <div className="form-12-content py-5" id="services">
                        <div className="container py-md-3">
                            <div className="grid grid-column-2 py-md-5">
                                    
                                <div className="column1">
                                    <h4 className="tagline">Find your course</h4>
                                    <p>Fill in below form to find your courses</p>
                                        <form action="/" method="Get">
                                            <div className="">
                                                <input type="text" name="name" className="form-input" placeholder="Course Name"/>
                                            </div>
                                            <div className="">
                                                <select id="sel1">
                                                    <option>Category</option>
                                                    <option>Computer</option>
                                                    <option>Science</option>
                                                    <option>History</option>
                                                    <option>Economics</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-secondary btn-theme2">Submit</button>
                                        </form>
                                    </div>
                                    <div className="column2">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6 col-6">
                                            <a href="services.html"><div className="courses-item">
                                                {/* <span className="fa fa-male"></span> */}
                                                <p>Azure </p>
                                            </div></a>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6">
                                            <a href="services.html"><div className="courses-item">
                                                {/* <span className="fa fa-suitcase"></span> */}
                                                <p>AWS</p>
                                            </div></a>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 mt-md-0 mt-4">
                                            <a href="services.html"><div className="courses-item">
                                                {/* <span className="fa fa-code"></span> */}
                                                <p>GCP</p>
                                            </div></a>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 mt-md-0 mt-4">
                                            <a href="services.html"><div className="courses-item">
                                                {/* <span className="fa fa-flask"></span> */}
                                                <p>DevOps</p>
                                            </div></a>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                                            <a href="services.html"><div className="courses-item mt-2">
                                                {/* <span className="fa fa-money"></span> */}
                                                <p>MCSE</p>
                                            </div></a>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                                            <a href="services.html"><div className="courses-item mt-2">
                                                {/* <span className="fa fa-gg"></span> */}
                                                <p>RHCE</p>
                                            </div></a>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                                            <a href="services.html"><div className="courses-item mt-2">
                                                {/* <span className="fa fa-desktop"></span> */}
                                                <p>DBA</p>
                                            </div></a>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                                            <a href="services.html"><div className="courses-item mt-2">
                                                {/* <span className="fa fa-mouse-pointer"></span> */}
                                                <p>Java</p>
                                            </div></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Form12
