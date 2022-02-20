import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";
// import useAxios from "../../hooks/useAxios";
import { BaseUrl, ImageUrl } from "../constants/Api";
import ArticleStyles from "./Article.module.css";
import Card from 'react-bootstrap/Card'
import { Container } from "react-bootstrap";

function ArticleList() {

	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await fetch(BaseUrl);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setArticles(json.data);
				} else {
					setError("An error occured");
				}
				console.log("response", response);
				// setArticles(response.json);
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

	if (loading) {

		return <div>Loading article...{loading}</div>;

	}

	if (error) {
		return <div> An errror ocurred: {error}</div>;
	}
	return (

		<>
			{articles.map(function (article) {
				return <>
					<Container>
						<Card key={article.id} className={ArticleStyles.card}>

							<Card.Body>

								<Container className={ArticleStyles.imgContainer}>
									<Card.Img className={ArticleStyles.img} variant="top" src={ImageUrl + article.id} witdth={150} height={150} />
									{/* src="http://localhost:1337/uploads/escortarch_934f28478c.jpg" */}
									<Card.Text className={ArticleStyles.text}>
										<Card.Title>{article.attributes.Tittel}</Card.Title>
										<p>{article.attributes.Introduksjon}</p>
										<p>{article.attributes.Innhold}</p>
									</Card.Text>
								</Container>
							</Card.Body>
						</Card>
					</Container>
				</>

			})}

		</>

	);
}
export default ArticleList;