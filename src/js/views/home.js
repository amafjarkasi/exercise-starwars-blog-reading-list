import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-horizon/src/bootstrap-horizon.css";
import Card from "./card";
import PlanetCard from "./planetcard";
import VehicleCard from "./vehiclecard";
import DetailPeople from "./detailpeople";
import DetailPlanets from "./detailplanets";
import DetailVehicles from "./detailvehicles";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5">
			<h1 className="text-danger">Characters</h1>
			<div className="container horizontal-scrollable">
				<div className="row row-horizon flex-nowrap py-3">
					{store.people.map((people, index) => {
						let peopleid = `${index}`;
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
								url={people.url}
								key={index} // index
								id={peopleid}
							/>
						);
					})}
				</div>
			</div>
			&nbsp;
			<h1 className="text-danger pt-5">Planets</h1>
			<div className="container horizontal-scrollable">
				<div className="row row-horizon flex-nowrap py-3">
					{store.planets.map((planets, index) => {
						let planetid = `${index}`;
						return (
							<PlanetCard
								name={planets.name}
								diameter={planets.diameter}
								rotation_period={planets.rotation_period}
								orbital_period={planets.orbital_period}
								gravity={planets.gravity}
								population={planets.population}
								climate={planets.climate}
								terrain={planets.terrain}
								surface_water={planets.surface_water}
								url={planets.url}
								key={index}
								id={planetid}
							/>
						);
					})}
				</div>
			</div>
			&nbsp;
			<h1 className="text-danger pt-5">Vehicles</h1>
			<div className="container horizontal-scrollable">
				<div className="row row-horizon flex-nowrap py-3">
					{store.vehicles.map((vehicles, index) => {
						let vehicleid = `${index}`;
						return (
							<VehicleCard
								name={vehicles.name}
								model={vehicles.model}
								vehicle_class={vehicles.vehicle_class}
								manufacturer={vehicles.manufacturer}
								length={vehicles.length}
								cost_in_credits={vehicles.cost_in_credits}
								crew={vehicles.crew}
								passengers={vehicles.passengers}
								max_atmosphering_speed={vehicles.max_atmosphering_speed}
								cargo_capacity={vehicles.cargo_capacity}
								consumables={vehicles.consumables}
								url={vehicles.url}
								key={index}
								id={vehicleid}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
