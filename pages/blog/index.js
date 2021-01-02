import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import PostPreview from '../../components/post-preview'
import DateFormater from '../../components/date-formater'
import Link from 'next/link'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ allPosts }) {

  return (
    <Layout>
      <Head>
        <title>Blog - Khoa Pham</title>
      </Head>
      <section className="blog-list">
        {allPosts.map(post => {
          return (
            <p>
              <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                <a>
                  <h3>{post.title}</h3>
                  <DateFormater dateString={post.date} />
                </a>
              </Link>
            </p>
          )
        })}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
