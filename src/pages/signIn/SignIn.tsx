import React from "react";
import "./signInStyles.scss";

const SignIn = () => {
  return (
    <div className="SignIn__Container">
      <button className="SignIn__Backbtn">{"<<"}</button>
      <div className="SignIn__Form">
        <h2 className="SignIn__Title">kaitonics</h2>
        <div>
          <div className="SignIn__Div">
            <label className="SignIn__Label">Email address</label>
            <input className="SignIn__Input" type="text" />
          </div>
          <div className="SignIn__Div">
            <label className="SignIn__Label">Password</label>
            <input className="SignIn__Input" type="text" />
            <div>
              <button className="SignIn__btn">login</button>
              <h3 className="SignIn__Create">create account</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
