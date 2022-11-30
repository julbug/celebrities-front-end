import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CelebrityList({
	celebrities,
	fetchCelebrities,
	selectCelebrity,
	theUser,
}) {
	const deleteCelebrity = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:3000/celebrities/remove", { id: theID })
			.then((response) => {
				console.log(response);
				fetchCelebrities();
			})
			.catch((err) => {
				console.log(err);
			});
	};

    const listOfCelebrities = celebrities.map((eachCelebrity) => {
		return (
			<div key={eachCelebrity._id} className="celebrity-list-item">
				<div
					onClick={() => {
						selectCelebrity(eachCelebrity);
					}}
				>
					<h3>{eachCelebrity.name}</h3>
					<p>
						{eachCelebrity.occupation}, {eachCelebrity.catchPhrase}
					</p>
				</div>
				<button
					onClick={() => {
						deleteCelebrity(eachCelebrity._id);
					}}
				>
					Delete This Celebrity
				</button>
			</div>
		);
	});

	return <div className="list-celebrities-container">{listOfCelebrities}</div>;
}
