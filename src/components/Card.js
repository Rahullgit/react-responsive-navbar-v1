import React from "react";
import "./Card.css";
import Q from "./photo/Q.png";
import W from "./photo/W.png";
import E from "./photo/E.png";
import R from "./photo/R.png";
import T from "./photo/T.png";
import Y from "./photo/Y.png";

function card() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img src={Q} />
          </div>
          <div className="contentbx">
            <h3>Mobile</h3>
          </div>
        </div>

        <div className="card">
          <div className="imgbx">
            <img src={W} />
          </div>
          <div className="contentbx">
            <h3>WEB</h3>
          </div>
        </div>

        <div className="card">
          <div className="imgbx">
            <img src={E} />
          </div>
          <div className="contentbx">
            <h3>SERVICE</h3>
          </div>
        </div>

        <div className="card">
          <div className="imgbx">
            <img src={R} />
          </div>
          <div className="contentbx">
            <h3>UI/UX</h3>
          </div>
        </div>

        <div className="card">
          <div className="imgbx">
            <img src={T} />
          </div>
          <div className="contentbx">
            <h3>COMMERCE</h3>
          </div>
        </div>

        <div className="card">
          <div className="imgbx">
            <img src={Y} />
          </div>
          <div className="contentbx">
            <h3>HOSTING</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
