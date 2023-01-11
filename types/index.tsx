export interface AuthorProps {
  name: string
  picture: any
}

export interface PostProps {
  video?: any
  title: string
  coverImage: any
  date: string
  excerpt?: string
  author: AuthorProps
  slug?: string
  content?: any
  vimeoUrl?: string
}
export interface VideoPreviewProps {
  title: string
  coverImage: any
  video?: any
  author: AuthorProps
  post: PostProps
}
