import React from "react";

//include images into your bundle
import NavBar from "./navBar";
import Container from "./container";
import Footer from "./footer";

//create your first component
const Home = () => {
  return (
    <div>
      <NavBar />
      <Container />
      <Footer />
    </div>
  );
};

export default Home;
