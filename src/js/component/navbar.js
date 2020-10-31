import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import swImage from "../img/starwars-logo.png";

export const Navbar = () => {
	const [shown, setShown] = useState(false);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={swImage} width="100px" height="50%" />
				</span>
			</Link>
			<div className="ml-auto pr-5">
				<div className={"dropdown " + (shown ? "show" : "")}>
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						data-display="static"
						aria-haspopup="true"
						onClick={() => setShown(!shown)}
						aria-expanded="false">
						Favorites <span className="badge badge-light text-right">0</span>
					</button>
					<div
						className={"dropdown-menu dropdown-menu-right " + (shown ? "show" : "")}
						aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
