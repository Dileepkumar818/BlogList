// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, publishedDate, description} = item
  return (
    <li className="listItem">
      <div className="innerContainer">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
      <hr />
    </li>
  )
}

export default BlogItem
