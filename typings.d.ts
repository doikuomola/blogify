interface PostType {
  id: string;
  title: string;
  image?: string;
  description: string;
  categorySlug: string;
  authorEmail: string;
  createdAt: string;
  author: Author;
  category: Category;
}

interface Category {
  id: string;
  title: string;
  slug: string;
}

interface Author {
  id: string;
  name: string;
  email: string;
  emailVerified?: any;
  image: string;
}

interface CommentType {
  id: string;
  userEmail: string;
  comment: string;
  postId: string;
  createdAt: string;
  user: User;
}

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: any;
  image: string;
}
