import React from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <>
      <div className="watford-main" style={{ height: "85vh" }}>
        <Carousel
          nextIcon=""
          nextLabel=""
          prevIcon=""
          prevLabel=""
          indicators={false}
          pause={false}
          fade
        >
          <Carousel.Item interval={5000}>
            <img
            
              className="watford_banner_img d-block"
              src={process.env.PUBLIC_URL + "/Images/img2.jpg"}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
            
              className="watford_banner_img d-block"
              src={process.env.PUBLIC_URL + "/Images/img3.jpg"}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img 
              className="watford_banner_img d-block"
              src={process.env.PUBLIC_URL + "/Images/img4.jpg"}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="watford-img_content">
          <p className="fs-1">We are Watford Community</p>
          <span className="fs-3 mt-4">Please Subscribe Us!</span>
          <button
            className=" w-auto fs-4 btn btn-danger"
            style={{ marginTop: "-20px", marginLeft: "3vh" }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
