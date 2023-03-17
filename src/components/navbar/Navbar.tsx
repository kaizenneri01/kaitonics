import React from "react";
import "./navbarStyles.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  interface NavProps {
    id: number;
    title: string;
  }

  const navLink: NavProps[] = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "shop",
    },
    {
      id: 3,
      title: "about us",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="Nav__Container">
      <h3 className="Nav__Logo">kaitonics</h3>
      <div className="Nav__SubContainer">
        <ul className="Nav__List">
          {navLink.map(({ title, id }) => {
            return (
              <React.Fragment key={id}>
                <li className="Nav__Item">{title}</li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className="Nav__Div">
          <button className="Nav__Btn" onClick={() => navigate("/signIn")}>
            sign in
          </button>
          <p className="Nav__SignUp">sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
