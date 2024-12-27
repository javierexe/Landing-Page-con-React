import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron m-2">
      <div className="bg-light p-5 rounded-lg m-1">
        <h1 className="display-4">¡Bienvenido!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          mollitia molestiae exercitationem provident ipsa, maiores explicabo a
          doloremque commodi. Dicta iste obcaecati unde amet deleniti placeat
          nisi ad, aut soluta?
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Aprender más
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
