import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <p>
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <a>
          <h3>
            {title}
          </h3>
          <DateFormater dateString={date} />
        </a>
      </Link>
    </p>
  )
}
