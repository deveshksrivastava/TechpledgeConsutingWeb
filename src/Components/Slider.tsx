import { truncate } from 'fs';
import React from 'react'
import ReactDOM from "react-dom";
import AwesomeSlider from 'react-awesome-slider';
import SimpleImageSlider from "react-simple-image-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// https://github.com/kimcoder/react-simple-image-slider

// const Slider: React.SFC = props => {
interface MyProps {
    name: "slider"
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
            bgColor: "#000000",
            slideIndexText: "",
        };
    }

    componentDidMount() {
        console.log("[App componentDidMount]");
    }

    nClick = (idx: any, event: any) => {
        console.log(`[App onClick] ${idx} ${event.target}`);
    }

    onClickNav = (toRight: any) => {
        console.log(`[App onClickNav] ${toRight}`);
    }

    onClickBullets = (idx: any) => {
        console.log(`[App onClickBullets] ${idx}`);
    }

    onStartSlide = (idx: any, length: number) => {
        console.log(`[App onStartSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}` });
    }

    onCompleteSlide = (idx: any, length: number) => {
        console.log(`[App onCompleteSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}` });
    }

    onClick = (idx: any, event: any) => {
        console.log(`[App onClick] ${idx} ${event.target}`);
    }

    render() {
        const images = [
            { url: "../assets/images/2.jpg" },
            { url: "../assets/images/3.jpg" },
            { url: "../assets/images/4.jpg" },
        ];
        return (
            <div className="carousel-wrapper">
                <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} >

                    <div style={{ margin: "0 auto", marginTop: "50px", height: "504px" }}>
                        <img src="../assets/images/2.jpg" />
                    </div>
                    <div style={{ margin: "0 auto", marginTop: "50px", height: "504px" }}>
                        <img src="../assets/images/3.jpg" />
                    </div>
                    <div style={{ margin: "0 auto", marginTop: "50px", height: "504px" }}>
                        <img src="../assets/images/4.jpg" />
                    </div>
                    {/* useGPURender: true,
                        showNavs: true,
                        showBullets: true,
                        navStyle: 1,
                        slideDuration: 0.5,
                        bgColor: "#000000",
                        slideIndexText: "", */}
                    {/* < SimpleImageSlider
                        style={{ margin: "0 auto", marginTop: "50px" }}
                        width={1240}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        useGPURender={true}
                        navStyle={1}
                        slideDuration={0.1}
                        onClick={this.onClick}
                        onClickNav={this.onClickNav}
                        onClickBullets={this.onClickBullets}
                        onStartSlide={this.onStartSlide}
                        onCompleteSlide={this.onCompleteSlide}
                    // onClickNav={this.onClickNav}
                    // onClickBullets={this.onClickBullets}
                    // onStartSlide={this.onStartSlide}
                    // onCompleteSlide={this.onCompleteSlide}
                    /> */}

                    {/* <div style={{ margin: "10px" }}>
                            {"slideText"}
                        </div> */}

                </Carousel>
            </div>
        )
    }
}

export default Slider

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
