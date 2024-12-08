import React from 'react'
import { Link } from "react-router-dom"

// https://github.com/kimcoder/react-simple-image-slider

// const Slider: React.SFC = props => {
interface MyProps {
  name: 'slider';
}
class Slider extends React.Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      useGPURender: true,
      showNavs: true,
      showBullets: true,
      navStyle: 1,
      slideDuration: 0.5,
      bgColor: '#000000',
      slideIndexText: '',
    };
  }

  componentDidMount() {
    console.log('[App componentDidMount]');
  }

  nClick = (idx: any, event: any) => {
    console.log(`[App onClick] ${idx} ${event.target}`);
  };

  onClickNav = (toRight: any) => {
    console.log(`[App onClickNav] ${toRight}`);
  };

  onClickBullets = (idx: any) => {
    console.log(`[App onClickBullets] ${idx}`);
  };

  onStartSlide = (idx: any, length: number) => {
    console.log(`[App onStartSlide] ${idx}/${length}`);
    this.setState({ slideIndexText: `${idx} / ${length}` });
  };

  onCompleteSlide = (idx: any, length: number) => {
    console.log(`[App onCompleteSlide] ${idx}/${length}`);
    this.setState({ slideIndexText: `${idx} / ${length}` });
  };

  onClick = (idx: any, event: any) => {
    console.log(`[App onClick] ${idx} ${event.target}`);
  };

  render() {
    const images = [
      { url: '../deveshprojectwork/assets/images/2.jpg' },
      { url: '../deveshprojectwork/assets/images/3.jpg' },
      { url: '../deveshprojectwork/assets/images/4.jpg' },
    ];
    return (


        <section className="w3l-main-slider" id="home">
            <div>
                {/* <!-- main-slider --> */}
                <div className="companies20-content">
                    <div >
                        {/* <div className="item">
                                <li>
                                <div className="slider-info banner-view bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg mx-auto text-center">
                                        <h5>Better Education For A Better World</h5>
                                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">Read More</a>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </div>
                            <div className="item">
                                <li>
                                <div className="slider-info  banner-view banner-top1 bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg mx-auto text-center">
                                        <h5>Explore The World Of Our Graduates</h5>
                                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">Read More</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </div>
                            <div className="item">
                                <li>
                                <div className="slider-info banner-view banner-top2 bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg mx-auto text-center">
                                        <h5>Exceptional People, Exceptional Care</h5>
                                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">Read More</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </div> */}
                        <div className="item">
                            <li>
                                <div className="slider-info banner-view banner-top3 bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg mx-auto text-center">
                                                <h5>Explore The World Of Technology</h5>
                                                {/* <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">Read More</a> */}
                                                <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/" >Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <section className="w3l-feature-3" id="features" >
                            <div className="grid top-bottom mb-lg-5 pb-lg-5" >
                                <div className="container">

                                    <div className="middle-section grid-column text-center" style={{ zIndex: 4, position: "absolute", top: "190%", left: "50%", transform: "translate(-50%, -50%)", width: "90%" }}>
                                        <div className="three-grids-columns">
                                            <span className="fa fa-laptop"></span>
                                            <h4> Role Based Training</h4>
                                            <p>
                                                TechPledge Role Base Training is especially curated program where candidate will provide the training on Live Environment and all essential skills like hands on experience of various monitoring tool, helpdesk tool , automation tool which is mostly used by company.
                                            </p>
                                            {/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
                                            <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
                                        </div>
                                        <div className="three-grids-columns">
                                            <span className="fa fa-users"></span>
                                            <h4>
                                                Customized ​Learning
                                            </h4>
                                            <p>
                                                We are from industry , we know the requirements of Industry . Our Empanel Industry leaders Working with you to identify best suited career opportunities for you and Help you define your value proposition. We Lay out a Career Path and help you adhere to your timelines and goals.
                                            </p>
                                            {/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
                                            <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
                                        </div>
                                        <div className="three-grids-columns">
                                            <span className="fa fa-book"></span>
                                            <h4>Job Placements</h4>
                                            <p>
                                                TechPledge JobAssist Is the program which bridge between the companies who looking for right talent and the employee through TechPledge Training program and customer experience . Techpledge JobAssist  provides services for Permanent Staffing in  UK , USA , C anada , Middle East and India.
                                            </p>
                                            {/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
                                            {/* <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/" >Read More</Link> */}
                                            <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="./JobAssistance" >Read More	</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Slider;

// https://github.com/SinghDigamber/react-carousel-tutorial/blob/master/src/components/carousel.component.js
// Within TypeScript, React.Component is a generic type (aka
//     React.Component<PropType, StateType>)

//     source

//     Since you are defining state within that component, you will need to create an interface for your state for typechecking.

//     interface MyState {
//       profiles: IProfile[];
//     }
//     After creating that, you can supply that to your React.Component

//     class App extends React.Component<MyProps, MyState>  {

//       constructor(props: MyProps) {
//         super(props);
//         this.state = { profiles: props.profiles };
//       }

//       public render() {
//         return (<div>//ERROR HERE
//           {this.state.profiles.map((profile: IProfile) => <Card {...profile} />)}
//         </div>);
//       }
