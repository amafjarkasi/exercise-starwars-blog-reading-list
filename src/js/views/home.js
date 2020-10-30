import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-horizon/src/bootstrap-horizon.css";
import Card from "./card";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<h1 className="text-danger">Characters</h1>
			<div className="container horizontal-scrollable">
				<div className="row row-horizon flex-nowrap py-3">
					{store.people.map((people, index) => {
						return (
							<Card
								name={people.name}
								age={people.birth_year}
								height={people.height}
								mass={people.mass}
								hair_color={people.hair_color}
								skin_color={people.skin_color}
								eye_color={people.eye_color}
								gender={people.gender}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
