import { Link } from "react-router-dom";
import Heading from "../headings/Heading";
import DashboardPage from "../dashboard/DashboardPage";
import ArticleList from "./ArticleList";
import ArticleStyles from "./Article.module.css";


export default function ArticlePage(children) {
	return (
		<DashboardPage>
			<Heading size="3" content="Article" />
			<p>
				<Link className={ArticleStyles.link} to="/minside/artikkels/add">Add post</Link>
			</p>
			<ArticleList />
		</DashboardPage>
	);
}