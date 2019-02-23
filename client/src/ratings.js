import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Ratings = (props) => {
  const stars = [1, 2, 3, 4, 5]
  if (props.stats) {
    return (
      <div>
        <ProgressBar now={50} variant="warning" style={{width: '100%', height: '20px'}}/>
        {stars.map((num) => {
          console.log('props.stats[num]', props.stats[num])
          console.log('total', props.stats.total)

          const percent = Math.ceil(props.stats[num] / props.stats.total) * 100
          console.log('percent', percent)
          return (
            <div>
              <span>{num} star</span>
              <ProgressBar now={50} variant="warning"/>
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