import React from "react";
import Hero from "./Hero";
import Leftcomponent from "./Leftcomp";
import Rightcomponent from "./Rightcomp";
import Universe from "./Universe";
import Footer from "../Footer";
function ProductPage() {
  return (
    <>
      <Hero />
      <Leftcomponent
        productimage="media/images/products-kite.png"
        productname="Kite"
        productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo="Try demo"
        learnmore=" Learn more"
        googleplay="media/images/google-play.svg"
        appstore="media/images/appstore-badge.svg"
      />
      <Rightcomponent
        productimage="media/images/products-console.png"
        productname="Console"
        productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore={
          <>
            Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
          </>
        }
      />
      <Leftcomponent
        productimage="media/images/products-coin.png"
        productname="Coin"
        productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo={
          <>
            Coin <i className="fa-solid fa-arrow-right ms-2"></i>
          </>
        }
        googleplay="media/images/google-play.svg"
        appstore="media/images/appstore-badge.svg"
      />
      <Rightcomponent
        productimage="media/images/landing.svg"
        productname="Kite Connect API"
        productdescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore={
          <>
            Kite Connect <i className="fa-solid fa-arrow-right ms-2"></i>
          </>
        }
      />
      <Leftcomponent
        productimage="media/images/varsity-products.svg"
        productname="Varsity mobile"
        productdescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googleplay="media/images/google-play.svg"
        appstore="media/images/appstore-badge.svg"
      />

      <Universe />
    </>
  );
}

export default ProductPage;
