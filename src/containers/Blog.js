import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ news }) => (
  <div>
    <h1>Aktualności</h1>
    <br />
    Wszystkie:
    <ul>
      {news.map(message => (
        <li key={message.data.slug}>
          <Link to={`/aktualnosci/${message.data.slug}`}>{message.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
