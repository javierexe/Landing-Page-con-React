import React from "react";
import "../../styles/index.css";
import Jumbotron from "./jumbotron";
import Card from "./card";
import rigoBaby from "../../img/rigo-baby.jpg";

const Container = () => {
  return (
    <div className="mainContainer m-0">
      <Jumbotron />
      <Card
        image={rigoBaby}
        title="First Card"
        text="This is the first card's content"
      />
      <Card
        image={rigoBaby}
        title="Second Card"
        text="This is the second card's content."
      />
      <Card
        image={rigoBaby}
        title="Third Card"
        text="This is the third card's content."
      />
      <Card
        image={rigoBaby}
        title="Fourth Card"
        text="This is the fourth card's content."
      />
      <Card
        image={rigoBaby}
        title="Fifth Card"
        text="This is the third card's content."
      />
    </div>
  );
};

export default Container;
