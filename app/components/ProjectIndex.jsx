import Link from "next/link"

function PageIndex({ posts }) {
  return (
    <section>
      {
        posts.map(post => (
          <article key={post.slug}>
            <Link href={`blog/${post.replace('.md', '')}`}>
              {post.title}
            </Link>
          </article>
        ))
      }
    </section>
  )
}

export default BlogIndex