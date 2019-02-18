import React from 'react'
import ReactDOM from 'react-dom'
// stats: {'1': #, '2': #, '3': #, '4': #, '5': #, total: #, ave: #}
const Statbar = (props) => (
  <div>
    <h4>{props.stats.total} customer reviews</h4>
  </div>
)

export default Statbar