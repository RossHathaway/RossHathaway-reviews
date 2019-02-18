import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      // {reviews: reviews, pics: pics, stats: ratingsByStars}
    }
    

    render() {
    return (
      <div>
        <div>
          Stats Bar

        </div>
        <div>
          pics, review component
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))