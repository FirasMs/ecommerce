import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import Home from "./Home";
import Carosel from "./Carosel";

export default function Navbar() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <nav
        className="navbar"
        style={{
          backgroundImage: `url("https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundColor: "transparent",
          borderRadius: "5px",
        }}
      >
        <Link to="/">
          <img
            style={{
              borderRadius: "80px",
              height: 60,
              width: 60,
              padding: 4,
              "margin-right": 10,
              backgroundImage: `url("https://img.freepik.com/free-vector/gradient-background-vector-spring-colors_53876-117271.jpg?fit=crop&w=240&h=130?auto=format&fit=crop&w=480&h=260")`,
            }}
            className="navbar_logo"
            src="https://img.freepik.com/vecteurs-libre/meilleure-offre-inscription-paint-blot_1262-7445.jpg?size=338&ext=jpg&ga=GA1.2.937210705.1673559356&semt=sph"
            alt="logo"
          />
        </Link>

        <div className="searchbar" style={{ "margin-right": 15 }}>
          <input
            className="navbar_search"
            style={{ width: 500, "margin-left": 300, borderRadius: "60px" }}
          />
          <Search2Icon style={{ "margin-left": 8 }} />
        </div>

        <div className="header_nav">
          <Link to="./login" className="header_link">
            <div className="header_option">
              <span className="option2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="50"
                  fill="currentColor"
                  class="bi bi-person-badge-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                </svg>
              </span>
            </div>
          </Link>
          <Link to="./Contact" className="header_link">
            <div className="header_option">
              <span className="option1" style={{ "margin-top": 15 }}>
                <b>Contact</b>
              </span>
            </div>
          </Link>
          <Link to="./checkout" className="header_link">
            <div
              className="header_optionbag"
              style={{ "margin-top": 10, padding: 3 }}
            >
              <br></br>
              <ShoppingCartIcon />
              <br />
              <span className="option2 basketcount">{basket.length}</span>
            </div>
          </Link>
        </div>
      </nav>
      <Home />
    </>
  );
}
