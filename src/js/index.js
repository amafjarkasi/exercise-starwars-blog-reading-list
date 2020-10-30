//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-horizon/src/bootstrap-horizon.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
