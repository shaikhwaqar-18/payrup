import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div className="mt-3">
      <Carousel >
        <Carousel.Item interval={2000}>
          <div className="main_container d-flex">
            <div className="header_container">
              <h1>Best mobile recharge offers & discounts on PayRup</h1>
              <span>
                16 Aug 2022 <span style={{ color: "yellow" }}>|</span> <span style={{ color: "blue" }}> Postpaid </span>
                <span style={{ color: "yellow" }}>|</span><span style={{ color: "blue" }}> Postpaid</span>
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                distinctio consequuntur, quaerat nemo porro debitis commodi
                ratione perferendis consequatur fugiat libero iusto itaque
                aliquam. Reprehenderit explicabo perferendis labore
                necessitatibus quasi!
              </p>
              <Button variant="primary">Read More</Button>
            </div>
            <img
              className="header_img  img-fluid"
              src="https://www.bankit.in/uploads/category/3014BankitRechargeImage.png"
              width={"500px"}
              alt="first img"
            />
        
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <div className="main_container d-flex">
            <div className="header_container">
              <h1>Best mobile recharge offers & discounts on PayRup</h1>
              <span>
                16 Aug 2022 <span style={{ color: "yellow" }}>|</span> <span style={{ color: "blue" }}> Postpaid </span>
                <span style={{ color: "yellow" }}>|</span><span style={{ color: "blue" }}> Postpaid</span>
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                distinctio consequuntur, quaerat nemo porro debitis commodi
                ratione perferendis consequatur fugiat libero iusto itaque
                aliquam. Reprehenderit explicabo perferendis labore
                necessitatibus quasi!
              </p>
              <Button variant="primary">Read More</Button>
            </div>
            <img
              className="header_img img-fluid"
              src="https://www.bankit.in/uploads/category/3014BankitRechargeImage.png"
              width={"500px"}
              alt="sec img"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="main_container d-flex">
            <div className="header_container">
              <h1>Best mobile recharge offers & discounts on PayRup</h1>
              <span>
                16 Aug 2022 <span style={{ color: "yellow" }}>|</span> <span style={{ color: "blue" }}> Postpaid </span>
                <span style={{ color: "yellow" }}>|</span><span style={{ color: "blue" }}> Postpaid</span>
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                distinctio consequuntur, quaerat nemo porro debitis commodi
                ratione perferendis consequatur fugiat libero iusto itaque
                aliquam. Reprehenderit explicabo perferendis labore
                necessitatibus quasi!
              </p>
              <Button variant="primary">Read More</Button>
            </div>
            <img
              className="header_img  img-fluid mt"
              src="https://www.bankit.in/uploads/category/3014BankitRechargeImage.png"
              width={"500px"}
              alt="third img"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Header