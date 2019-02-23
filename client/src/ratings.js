import React from 'react'

const Ratings = (props) => {
  const stars = [1, 2, 3, 4, 5]
  if (props.stats) {
    return (
      <div>
        {stars.map((num) => {
          console.log('props.stats[num]', props.stats[num])
          console.log('total', props.stats.total)

          const percent = Math.round(props.stats[num] / props.stats.total * 100)
          console.log('percent', percent)
          return (
            <div>
              <span>{num} star</span>
              <div style={{width: '196px', position: 'relative', display: 'inline-block'}}>
                <div style={{backgroundColor: 'yellow', width: percent + '%', display: 'inline-block', }}>&nbsp;</div>
                <div style={{backgroundColor: 'silver', width: (100 - percent) + '%', display: 'inline-block'}}> &nbsp;</div>
              </div>
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