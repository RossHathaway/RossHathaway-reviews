import React from 'react'
import SingleReview from './singleReview'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (props.reviews) {
      return (
        <div>
          <h3>Showing 1-8 of {props.total} reviews</h3>
          <form>
            <select>
              <option>Top Reviews</option>
              <option>Most recent</option>
            </select>
          </form>
          {props.Reviews.map((rev, i) => (<SingleReview key={i} review={rev}/>))}
        </div>)
    } else {
      return <div></div>
    }
  }
}

export default Reviews