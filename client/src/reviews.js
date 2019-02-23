import React from 'react'
import SingleReview from './singleReview'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedByRecent: false,
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    console.log('select target value', e.target.value)
    if (e.target.value === 'Most recent') {
      this.props.getReviews('true')
    } else {
      this.props.getReviews('false')
    }
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('form submitted')
    
  }

  render() {
    if (this.props.reviews) {
      return (
        <div>
          <h3>Showing 1-8 of {this.props.total} reviews</h3>
          <form onSubmit={this.onSubmit}>
            <select onChange={this.onChange}>
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