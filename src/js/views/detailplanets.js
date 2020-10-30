import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailPlanets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					<div className="media">
						<img
							className="mr-3"
							src="https://www.dummyimage.com/300x200"
							alt="Generic placeholder image"
						/>
						<div className="media-body">
							<h5 className="mt-0">{store.planets[params.theid].name}</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
							ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
				</div>
				<div className="col-4 bg-light pt-2">
					<ul className="list-unstyled font-weight-bold">
						<li>Diameter: {store.planets[params.theid].diameter}</li>
						<li>Rotation Period: {store.planets[params.theid].rotation_period}</li>
						<li>Orbital Period: {store.planets[params.theid].orbital_period}</li>
						<li>Gravity: {store.planets[params.theid].gravity}</li>
						<li>Population: {store.planets[params.theid].population}</li>
						<li>Climate: {store.planets[params.theid].climate}</li>
						<li>Terrain: {store.planets[params.theid].terrain}</li>
						<li>Surface Water: {store.planets[params.theid].surface_water}</li>
					</ul>
				</div>
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

DetailPlanets.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	gravity: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	surface_water: PropTypes.string,
	url: PropTypes.string,
	key: PropTypes.number,
	match: PropTypes.object
};
