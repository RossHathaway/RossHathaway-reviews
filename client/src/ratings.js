import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Ratings = (props) => {
  const stars = [1, 2, 3, 4, 5]
  if (props.stats) {
    return (
      <div>
        {stars.map((num) => {
          const percent = Math.round(props.stats[num] / props.stats.total)
          return (
            <div>
              <span>{num} star</span>
              <ProgressBar now={percent} variant="warning"/>
              <span>{percent}%</span>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Ratings