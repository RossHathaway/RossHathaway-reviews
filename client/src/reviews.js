import React from 'react'
import SingleReview from './singleReview'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedByRecent: false,
    }
  }

  render() {
    if (this.props.reviews) {
      return (
        <div>
          <h3>Showing 1-8 of {this.props.total} reviews</h3>
          <form onSubmit={function (e) {
            e.preventDefault()
            props.getReviews(this.state.sortedByRecent)}
          }>
            <select onChange={function (e) {
              console.log('select target value', e.target.value)
              // if (e.target) {

              // }
            }}>
              <option>Top Reviews</option>
              <option>Most recent</option>
            </select>
          </form>
          {this.props.reviews.map((rev, i) => (<SingleReview key={i} review={rev}/>))}
        </div>)
    } else {
      return <div></div>
    }
  }
}

export default Reviews