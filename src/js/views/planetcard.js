import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function PlanetCard(props) {
	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-left">{props.name}</h5>
						<p className="card-text">Population: {props.population}</p>
						<p className="card-text">Climate: {props.climate}</p>
						<p className="card-text">Terrain: {props.terrain}</p>
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

PlanetCard.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	gravity: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	surface_water: PropTypes.string,
	residents: PropTypes.string
};

export default PlanetCard;
