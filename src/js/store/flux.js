const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeople: () => {
				fetch("https://swapi.dev/api/people/", {
					method: `GET`,
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok);
						if (!resp.ok) throw Error(resp.statusText);
						//console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ people: data.results });
					})
					.catch(error => {
						console.log(error);
					});
				/** https://swapi.dev/api/people/1/
					fetch("https://swapi.dev/api/people/1/").then().then(data => setStore({ "foo": data.bar }))
                */
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: `GET`,
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.ok);
						if (!resp.ok) throw Error(resp.statusText);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => {
						console.log(error);
					});
			},
			loadVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/", {
					method: `GET`,
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						console.log(resp.ok);
						if (!resp.ok) throw Error(resp.statusText);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ vehicles: data.results });
					})
					.catch(error => {
						console.log(error);
					});
			},
			addFavorites: (id, type) => {
				const store = getStore();
				const favorite = { id, type };
				setStore({ favorites: store.favorites.concat(favorite) });
			},
			loadSomeData: () => {
				/** 
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
