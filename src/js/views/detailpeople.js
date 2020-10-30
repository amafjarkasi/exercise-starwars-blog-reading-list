import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import voca from "voca";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailPeople = () => {
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
							<h5 className="mt-0">{store.people[params.theid].name}</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
							Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
							ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
				</div>
				<div className="col-4 bg-light pt-2">
					<ul className="list-unstyled font-weight-bold">
						<li>Birth Year: {store.people[params.theid].birth_year}</li>
						<li>Eye Color: {store.people[params.theid].eye_color}</li>
						<li>Gender: {store.people[params.theid].gender}</li>
						<li>Hair Color: {store.people[params.theid].hair_color}</li>
						<li>Mass: {store.people[params.theid].mass}</li>
						<li>Skin Color: {store.people[params.theid].skin_color}</li>
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

DetailPeople.propTypes = {
	name: PropTypes.string,
	age: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	url: PropTypes.string,
	key: PropTypes.number,
	gender: PropTypes.string,
	match: PropTypes.object
};
