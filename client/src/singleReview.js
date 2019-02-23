import React from 'react'

const SingleReview = ({review}) => (
  <div>
    {review ? (
      <div>
        <div>
          <img src={review.avatarLink} style={{borderRadius: '50%'}}></img>
          <div>{review.username}</div>
        </div>
        <div>
          <span>{review.stars}</span>
          <h4>{review.title}</h4>
          <section>{review.revDate}</section>
          {review.verifiedPurchase ? <section style={{color: 'orange'}}>Verified Purchase</section> : null}
          <p>{review.body}</p>
          <section style={{color: 'silver'}}>{review.helpfulCount} people found this helpful</section>
          <div>
            <button>Helpful</button>
            <a>Comment</a>
            <a>Report abuse</a>
          </div>
        </div>
      </div>
    ) : null}
  </div>
)

export default SingleReview