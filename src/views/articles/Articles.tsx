import { useEffect } from "react"
import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import CardDetail from '../../components/CardDetail';
import { useArticleList } from "../../hooks/articleHook";
import '../../styles/article.css';
import PageLoader from "../../components/PageLoader";
import { IArticle } from "../../interfaces/IArticle";
import { Article } from "@/types/article";
import { useNavigate } from "react-router-dom";

const Articles = () => {
	const articlesQuery = useArticleList();



	if (articlesQuery.isLoading) {
		return <PageLoader />;
	}

	const articleList = articlesQuery.data?.map((value, index) => <ArticleCard key={index} article={value}/>);

	return (
		<div className="article-container">
			<h1>MAQE Forum</h1>
			<label className="article-timezone">Your current timezone is:</label>
			{articleList}
		</div>
	);
}

const ArticleCard = ({article}: Article) => {
	const navigate = useNavigate();

	return (
		<Card onClick={() => navigate(`/${article.postId}`)}>
				<CardTitle imgUrl={article.profileImage} authorName={article.name} postedOn={article.postOn} />
				<CardDetail imgUrl={article.postImage} title={article.postTitle} description={article.postDetail}/>
		</Card>
	);
}

export default Articles;
