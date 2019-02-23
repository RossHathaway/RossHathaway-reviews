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
              {/*style={{width: '196px', position: 'relative'}}*/}
              <span style={{width: '196px', position: 'relative', display: 'inline-block'}}>
                {/*style={{-backgroundColor: 'yellow', width: `50%`}}*/}
                <span style={{backgroundColor: 'yellow', width: percent + '%', display: 'inline-block', }}>&nbsp;</span>
                <span style={{backgroundColor: 'silver', width: (100 - percent) + '%', display: 'inline-block'}}> &nbsp;</span>
              </span>
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