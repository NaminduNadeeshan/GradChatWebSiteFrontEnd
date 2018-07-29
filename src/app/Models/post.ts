export interface PostResponse {
    postId: number;
    title: string;
    abstractContent: string;
    content: string;
    coverPhoto: string;
    firstName: string;
    lastName: string;
    userId: number;
}

export interface PostRequest {
    postId: number;
    title: string;
    abstractContent: string;
    content: string;
    coverPhoto: string;
    userId: number;
}
