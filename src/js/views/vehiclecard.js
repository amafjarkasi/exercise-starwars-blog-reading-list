import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function VehicleCard(props) {
	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-left">{props.name}</h5>
						<p className="card-text">Manufacturer: {props.manufacturer}</p>
						<p className="card-text">Model: {props.model}</p>
						<p className="card-text">Passengers: {props.passengers}</p>
						<button
							type="button"
							className="btn btn-outline-primary"
							data-toggle="modal"
							data-target=".bd-example-modal-lg">
							Learn more
						</button>
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
	consumables: PropTypes.string
};

export default VehicleCard;
