import React from 'react'
import Ratings from './ratings'

// stats: {'1': #, '2': #, '3': #, '4': #, '5': #, total: #, ave: #}
const Statbar = (props) => {
  if (props.stats) {
    let span = []
    for (let i = 1; i <= Math.round(props.stats.ave); i++) {
      span.push(<img src={'./fullStar.png'} key={i}/>)
    }
    for (let i = 1; i <= (5 - Math.round(props.ave)); i++) {
      span.push(<img src={'./emptyStar.png'} key={i}/>)
    }
    console.log(span)
    return (<div style={{width: '300px', maxWidth: '300px', minWidth: '300px', height: '100%', float: 'left', alignSelf: 'stretch'}}>
      {/* onMouseOver={/* underline and turn orange */} 
      <h2>{props.stats.total} customer reviews</h2>
      <span style={{width: '60%', height: '20%'}}>{span}</span>
      {/* onMouseOver={/* modal, underline text in orange */}
      <a title="Amazon calculates a product’s star ratings based on a machine learned model instead of a raw data average. The model takes into account factors including the age of a rating, whether the ratings are from verified purchasers, and factors that establish reviewer trustworthiness.">{props.stats.ave} out of 5 stars</a>
      <Ratings stats={props.stats}/>
    </div>)
  } else {
    return <div></div>
  }
}

export default Statbar