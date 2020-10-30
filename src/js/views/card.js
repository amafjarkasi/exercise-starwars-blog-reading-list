import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function Card(props) {
	var idpeople = props.url.replace("http://swapi.dev/api/people/", "").replace("/", "") - 1;
	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt={props.name} />
					<div className="card-body">
						<h5 className="card-title text-left">{props.name}</h5>
						<p className="card-text">Gender: {props.gender}</p>
						<p className="card-text">Mass: {props.mass}</p>
						<p className="card-text">DOB: {props.age}</p>
						<Link to={"/detailpeople/" + idpeople}>
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

Card.propTypes = {
	name: PropTypes.string,
	age: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	url: PropTypes.string,
	key: PropTypes.number,
	gender: PropTypes.string
};

export default Card;
