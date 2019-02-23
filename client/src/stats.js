import React from 'react'
import Ratings from './ratings'

// stats: {'1': #, '2': #, '3': #, '4': #, '5': #, total: #, ave: #}
const Statbar = (props) => {
  if (props.stats) {
    let span = []
    for (let i = 1; i <= Math.round(props.stats.ave); i++) {
      // http://18.221.115.47/fullStar.png
      span.push(<img src={'http://localhost:3001/fullStar.png'} key={i}/>)
    }
    for (let i = 1; i <= (5 - Math.round(props.stats.ave)); i++) {
      // http://18.221.115.47/emptyStar.png
      span.push(<img src={'http://localhost:3001/emptyStar.png'}/>)
    }
    return (<div style={{width: '300px', maxWidth: '300px', minWidth: '300px', height: '100%', float: 'left', alignSelf: 'stretch'}}>
      {/* onMouseOver={/* underline and turn orange */} 
      <h2>{props.stats.total} customer reviews</h2>
      <span>{span}</span>
      {/* onMouseOver={/* modal, underline text in orange */}
      <span>{/* position relative */}
        <div>
          {/* tool tip uses refs position absolute */}
        </div>
        {props.stats.ave} out of 5 stars
      </span>
      {/* "Amazon calculates a product’s star ratings based on a machine learned model instead of a raw data average. The model takes into account factors including the age of a rating, whether the ratings are from verified purchasers, and factors that establish reviewer trustworthiness." */}
      <Ratings stats={props.stats}/>
    </div>)
  } else {
    return <div></div>
  }
}

export default Statbar