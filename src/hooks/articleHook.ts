import { IArticle } from '@/interfaces/IArticle';
import { useQuery } from 'react-query';
import { getAuthors, getPosts} from '../apis/articleApi';
import { mapArticleDetail, mapArticles } from '../transform/articles';

export const getArticleList = async (): Promise<Readonly<IArticle[]>> => {
	const getAuthorsApi = await getAuthors();
	const getPostsApi = await getPosts();

	return mapArticles(getAuthorsApi, getPostsApi);
}

export const useArticleList = () => {
		return useQuery({
			queryKey: ['articles'],
			queryFn: async () => await getArticleList(),
		});
}


export const getArticleDetail = async (postId: number): Promise<Readonly<IArticle>> => {
	const getAuthorsApi = await getAuthors();
	const getPostsApi = await getPosts();

	return mapArticleDetail(getAuthorsApi, getPostsApi, postId);
}

export const useArticleDetail = (postId: number) => {
		return useQuery({
			queryKey: ['article', postId],
			queryFn: async () => await getArticleDetail(postId),
		});
}