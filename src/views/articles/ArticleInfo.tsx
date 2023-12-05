import '../../styles/article.css';
import UserProfile from '../../components/UserProfile';
import CardDetail from '../../components/CardDetail';
import { useArticleDetail } from '../../hooks/articleHook';
import PageLoader from '../../components/PageLoader';
import { useParams } from 'react-router-dom';

const ArticleInfo = () => {
	const { id } = useParams();
	const articlesQuery = useArticleDetail(Number(id));

	if (articlesQuery.isLoading) {
		return <PageLoader />;
	}

	const article = articlesQuery.data;

	return (
		<div className="article-container">
				<UserProfile avatarUrl={article!.profileImage} name={article!.name} role={article!.role} place={article!.place}/>
				<div className="article-detail">
					<h3 className="article-title">Article</h3>
					<CardDetail imgUrl={article!.postImage} title={article!.postTitle} description={article!.postDetail}/>
				</div>
		</div>
	)
}

export default ArticleInfo;
