import React from 'react'
import ReactDOM from 'react-dom'
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
    return (<div style={{width: '300px', height: '100%', float: 'left'}}>
      {/* onMouseOver={/* underline and turn orange */} 
      <h4>{props.stats.total} customer reviews</h4>
      <span style={{width: '60%', height: '20%'}}>{span}</span>
      {/* onMouseOver={/* modal, underline text in orange */}
      <span >{props.stats.ave} out of 5 stars</span>
    </div>)
  } else {
    return <div></div>
  }
}

export default Statbar