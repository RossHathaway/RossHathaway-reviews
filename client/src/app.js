import React from 'react'
import ReactDOM from 'react-dom'
// import ReactModal from 'react-modal';
import axios from 'axios'
import Statbar from './stats.js'
// import stylecomponents from 'stylecomponents'
/*
const reviewbody = stylecomponents.div`styles`
<reviewbody>

import icons from 'styled-icons' at styled-icons.js.com
installing as dependency is faster to load because loaded once at the beginnning
*/

const reviews = [
  {username: 'Jim Popsi', stars: 3, title: 'I like this', verifiedPurchase: 0, helpfulCount: 20, body: 'This was nice. \nI give it three stars', avatarLink: 'placeCorgi.com', revDate: '2010-04-03T04:45:46.436Z'},
  {username: 'Jim Popsi', stars: 3, title: 'I like this', verifiedPurchase: 0, helpfulCount: 20, body: 'This was nice. \nI give it three stars', avatarLink: 'placeCorgi.com', revDate: '2010-04-03T04:45:46.436Z'},
  {username: 'Jim Popsi', stars: 3, title: 'I like this', verifiedPurchase: 0, helpfulCount: 20, body: 'This was nice. \nI give it three stars', avatarLink: 'placeCorgi.com', revDate: '2010-04-03T04:45:46.436Z'}
]

const pics = [
  'placeCorgi.com',
  'placeCorgi.com',
  'placeCorgi.com',
  'placeCorgi.com'
]

const ratingsByStars = {
  '1': 50, '2': 20, '3': 100, '4': 70, '5': 60, total: 300, ave: 3
}

class ReviewComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {recent: false, reviews: reviews, pics: pics, stats: ratingsByStars}
      this.getReviews = this.getReviews.bind(this)
      // {reviews: [reviews], pics: [pics], stats: ratingsByStars}
        // ratings by stars = {'1': #, '2': #, '3': #, '4': #, '5': #, total: #, ave: #}
    }
    
    componentDidMount() {
      axios.get(`/products/100/false`)
        .then(({data}) => {
          console.log(data)
          this.setState(data)
        })
    }

    getReviews() {
      axios.get(`/products`, {
        params: {
          prodId: (prod_id || 100), 
          recent: this.state.recent
        }
      })
        .then(({data}) => {
          this.setState(data)
      })
    }

    render() {
    return (
      <div style={{'borderTop': '3px solid silver'}}>
        <Statbar stats={this.state.stats} style={{width: '600px', height: '100%'}}/>
        {/*<Pictures pics={this.state.pics}/>*/}
        {/*<MentionedWords />*/}
        {/*<Reviews reviews={this.state.reviews} total={this.state.stats.total} getReviews={this.getReviews}/>*/}
      </div>
    )
  }
}



ReactDOM.render(<ReviewComp />, document.getElementById('reviews'))