import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function VehicleCard(props) {
	var idvehicles = props.id;
	// console.log(props.id);
	// console.log(Object.values(props));
	// console.log(props.url);
	//props.url.replace("http://swapi.dev/api/vehicles/", "").replace("/", "") - 1;
	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-left text-truncate">{props.name}</h5>
						<p className="card-text text-truncate">Manufacturer: {props.manufacturer}</p>
						<p className="card-text text-truncate">Model: {props.model}</p>
						<p className="card-text">Passengers: {props.passengers}</p>
						<Link to={"/detailvehicles/" + idvehicles}>
							<button type="button" className="btn btn-outline-primary">
								Learn more
							</button>
						</Link>
						<button type="button" className="btn btn-outline-danger ml-3">
							<i className="far fa-heart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

VehicleCard.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	vehicle_class: PropTypes.string,
	manufacturer: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string,
	crew: PropTypes.string,
	passengers: PropTypes.string,
	max_atmosphering_speed: PropTypes.string,
	cargo_capacity: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.any,
	consumables: PropTypes.string
};

export default VehicleCard;
