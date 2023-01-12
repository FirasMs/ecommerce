import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "axios";
import Carosel from "./Carosel";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/getproduct")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="home">
      <img
        className="home_image"
        src="https://www.alizephyrcreations.com/wp-content/uploads/2020/10/restez-connect%C3%A9.jpg"
        alt="shopping"
      />
      <Product products={products} />
      <Carousel>
        <Carousel.Item>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/iPhone-12-PNG-Images.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://static.s-sfr.fr/media/catalogue/article/mobile/pw3iohmi/iPhone14Pro_VioletProfond_3-4-Side_Back_Left_400x540px.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              <b>Iphone 11</b>
            </h3>
            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/iphone-x-and-iphone-8-png-12.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Iphone X</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      ;
    </div>
  );
}
