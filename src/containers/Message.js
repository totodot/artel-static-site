import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//

export default withRouteData(({ message }) => (
  <div className="blog-message">
    <Link to="/aktualnosci/">{'<'} Back</Link>
    <br />
    <h3>{message.data.title}</h3>
    <Moment format="MMMM Do, YYYY">{message.data.date}</Moment>
    <img className="image" src={message.data.thumbnail} alt="" />
    <Markdown source={message.content} escapeHtml={false} />
  </div>
))
