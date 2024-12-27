import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
  return (
    <div class=" d-inline-flex">
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={props.image} class="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
