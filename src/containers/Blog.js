import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <h1>Aktualności</h1>
    <br />
    Wszystkie:
    <ul>
      {posts.map(post => (
        <li key={post.data.slug}>
          <Link to={`/aktualnosci/post/${post.data.slug}`}>{post.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
