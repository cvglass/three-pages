import React from 'react';
import { Link } from 'react-router-dom'


const Entry = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h3>{props.entry.month}/{props.entry.day}/{props.entry.year}</h3>
          <p>{props.entry.text}</p>
          <div className="btn-group btn-group-xs" role="group" aria-label="...">
            <button type="button" className="btn btn-default"><Link to={`${props.entry.id}/edit`}>edit</Link></button>
            <button type="button" className="btn btn-default"><a href={`/api/entries/${props.entry.id}/delete`}>delete</a></button>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Overall, you're feeling <em>{props.entry.sentiment}</em> today,</h3>
        <h5>because you used the following words: {props.entry.topWords}</h5>
      </div>
    </div>
  )
}

export default Entry;
