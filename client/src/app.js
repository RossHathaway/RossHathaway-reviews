import React from 'react'
import ReactDOM from 'react-dom'
// import ReactModal from 'react-modal';
import axios from 'axios'
import Statbar from './stats.js'

class ReviewComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {recent: false}
      this.getReviews = this.getReviews.bind(this)
      // {reviews: [reviews], pics: [pics], stats: ratingsByStars}
        // ratings by stars = {'1': #, '2': #, '3': #, '4': #, '5': #, total: #, ave: #}
    }
    
    componentDidMount() {
      axios.get(`/products/${prod_id || 100}`)
        .then(({data}) => {
          console.log(data)
          this.setState(data)
        })
    }

    getReviews() {
      axios.get(`/products`, {
        params: {
          prodId: prod_id || 100, 
          recent: this.state.recent
        }
      })
        .then(({data}) => {
          this.setState(data)
      })
    }

    render() {
    return (
      <div style={{border: }}>
        <Statbar stats={this.state.stats} style={{width: '400px', height: '100%'}}/>
        <Pictures pics={this.state.pics}/>
        <MentionedWords />
        <Reviews reviews={this.state.reviews} total={this.state.stats.total} getReviews={this.getReviews}/>
      </div>
    )
  }
}



ReactDOM.render(<ReviewComp />, document.getElementById('reviews'))