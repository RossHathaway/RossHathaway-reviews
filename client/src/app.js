import React from 'react'
import ReactDOM from 'react-dom'
// import ReactModal from 'react-modal';
import axios from 'axios'
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Statbar from './stats.js'
import Pictures from './pictures.js'
import Reviews from './reviews.js'

// import stylecomponents from 'stylecomponents'
/*
const reviewbody = stylecomponents.div`styles`
<reviewbody>

import icons from 'styled-icons' at styled-icons.js.com
installing as dependency is faster to load because loaded once at the beginnning
*/

class ReviewComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        prodId: this.props.match.params.id
      }
      this.getReviews = this.getReviews.bind(this)
      // {reviews: [reviews], pics: [pics], stats: ratingsByStars}
        // ratings by stars = {'1': #, '2': #, '3': #, '4': #, '5': #, total: #, ave: #}
    }
    
    componentDidMount() {
      this.getReviews('false')
    }

    getReviews(sortedByRecent) {
      // another way to get id: window.location.href.split('/')
      // axios.get(`http://18.221.115.47/${this.state.prodId}/${sortedByRecent}`)
      // console.log('getting reviews with ', sortedByRecent)
      axios.get(`http://localhost:3001/${this.state.prodId}/${sortedByRecent}`)
        .then(({data}) => {
          this.setState(data)
        })
    }

    showModal() {
      this.simpleDialog.show()
    }

    render() {
    return this.state.reviews ? (
        <div style={{borderTop: '1px solid silver', flex: 1, display: 'flex', padding: 18}}>
          <Statbar stats={this.state.stats} style={{flex: 1}}/>
          <div style={{flexFlow: 'row wrap'}}>
            <Pictures pics={this.state.pics} showModal={this.showModal} style={{flex: 1}}/>
              {/*<MentionedWords />*/}
            <Reviews reviews={this.state.reviews} total={this.state.stats.total} getReviews={this.getReviews}/>
          </div>
        </div>
    ) : <div></div>
  }
}

ReactDOM.render(<ReviewComp />, document.getElementById('reviews'))
// ReactDOM.render(<Router><Route path="/:id" component={ReviewComp}/></Router>, document.getElementById('reviews'))