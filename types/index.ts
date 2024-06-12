export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface PostType {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  createdAt: string;
  userId: number;
  likes: number;
  isLiked: boolean;
  userFirstName: string;
  userLastName: string;
}

export interface LikeType {
  userId: number;
  postId: number;
}
