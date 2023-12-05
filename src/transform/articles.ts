import { IArticle } from "@/interfaces/IArticle";
import { IAuthor } from "../interfaces/iAuthor";
import { IPost } from "../interfaces/iPost";

export const mapArticles = (authors: Readonly<IAuthor[]>, posts: Readonly<IPost[]>): Readonly<IArticle[]> => {

	// Map posts to include author information
	const postsWithAuthors = posts.map(post => {
		const authorInfo = authors.find(author => author.id === post.author_id);

		return {
			postId: post.id,
			postTitle: post.title,
			postDetail: post.body,
			postImage: post.image_url,
			postOn: post.created_at,
			name: authorInfo?.name ?? '',
			role: authorInfo?.role ?? '',
			place: authorInfo?.place ?? '',
			profileImage: authorInfo?.avatar_url ?? '',
		};
	});

	return postsWithAuthors;

}


export const mapArticleDetail = (authors: Readonly<IAuthor[]>, posts: Readonly<IPost[]>, postId: number): Readonly<IArticle> => {

	  // Use filter to get an array of posts that match the condition
		const postsWithAuthors = posts
			.filter(post => post.id === postId)
			.map(post => {
				const authorInfo = authors.find(author => author.id === post.author_id);

				return {
					postId: post.id,
					postTitle: post.title,
					postDetail: post.body,
					postImage: post.image_url,
					postOn: post.created_at,
					name: authorInfo?.name ?? '',
					role: authorInfo?.role ?? '',
					place: authorInfo?.place ?? '',
					profileImage: authorInfo?.avatar_url ?? '',
				};
			});

		// Return the first element of the array (or undefined if the array is empty)
		return postsWithAuthors[0];
}