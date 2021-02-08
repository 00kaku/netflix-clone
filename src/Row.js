import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https:/image.tmdb.org/t/p/original/";

function Row(props) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(props.fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [props.fetchUrl]);

	return (
		<div className="row">
			<h2>{props.title}</h2>

			<div className="row_posters">
				{movies.map((movie) => (
					<img
						className={`row_poster ${
							props.isLargeRow && "row_posterLarge"
						}`}
						key={movie.id}
						src={`${baseUrl}${
							props.isLargeRow
								? movie.poster_path
								: movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
