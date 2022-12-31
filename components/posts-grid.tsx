import { PostProps } from '../types'
import PostPreview from './post-preview'

export default function PostsGrid({ posts }: { posts: PostProps[] }) {
  console.log('allposts', posts)
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl"></h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-8 md:gap-y-32 lg:gap-x-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            video={post.video}
          />
        ))}
      </div>
    </section>
  )
}
