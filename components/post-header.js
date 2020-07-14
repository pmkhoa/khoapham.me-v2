import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <h2>{title}</h2>
      <div>
        <DateFormater dateString={date} />
      </div>
    </>
  )
}
