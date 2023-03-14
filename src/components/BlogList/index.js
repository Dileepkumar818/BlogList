// Write your JS code here
import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {item} = props

  return (
    <ul>
      {item.map(each => (
        <BlogItem item={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
