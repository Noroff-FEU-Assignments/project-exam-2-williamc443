import { Link } from "react-router-dom";
import Heading from "../headings/Heading";
import DashboardPage from "../dashboard/DashboardPage";
import ArticleList from "./ArticleList";

export default function ArticlePage() {
	return (
		<DashboardPage>
			<Heading size="3" content="Article" />
			<p>
				<Link to="/minside/artikkels/add">Add post</Link>
			</p>
			<ArticleList />
		</DashboardPage>
	);
}