import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { BaseUrl } from "../constants/Api";

export default function ArticleList() {

	const [article, setarticle] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get(BaseUrl);
				console.log("response", response);
				setarticle(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}

		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Loading article...</div>;

	if (error) return <div>{ }</div>;

	return (
		<ul className="article">
			{article.map((media) => {
				return (
					<li key={media.id}>
						<Link to={`/artikkels/edit/${media.id}`}>{media.title.rendered}</Link>
					</li>
				);
			})}
		</ul>

	);
}