import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="NewLetter" />
      <h1 className="headtext__cormorant">Subscribe To Our NewsLetter</h1>
      <p className="p__opensans">Subscribe To Our NewsLetter</p>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your Email |Adress" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
