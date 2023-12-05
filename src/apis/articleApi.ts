import { axios } from '../middleware/network_interceptor';
import { IAuthor } from '../interfaces/iAuthor';
import { IPost } from '../interfaces/iPost';


export const getAuthors = (): Promise<Readonly<IAuthor[]>> => axios.get('/authors.json');
export const getPosts = (): Promise<Readonly<IPost[]>> => axios.get('/posts.json');