import * as Avatar from '@radix-ui/react-avatar'

import { Component } from 'react'
import moment from 'moment'
import styles from './Reviews.module.css'

const getFirstLetters = str => {
  const firstLetters = str
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)

  return firstLetters
}

class Reviews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: props.reviews,
    }
  }

  componentDidMount() {
    if (window.location.hash.indexOf('#review') === -1) {
      this.setState({
        showAllButton: true,
        reviews: this.props.reviews.slice(0, 3),
      })
    }
  }

  showAll(e) {
    this.setState({
      showAllButton: false,
      reviews: this.props.reviews,
    })

    e.preventDefault()
  }

  renderSummary() {
    return (
      <div className={styles.summaryContainer}>
        <div className={styles.summary}>
          <div className={styles.data}>
            <p className={styles.avgRating}>4.9</p>
            <div>
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
            </div>
            <p>540 ratings</p>
          </div>
          <div className={styles.progressBars}>
            <div className={styles.progressBarContainer}>
              <div
                style={{ width: '96%' }}
                className={styles.progressBarContent}
              ></div>
            </div>
            <div className={styles.progressBarContainer}>
              <div
                style={{ width: '3%' }}
                className={styles.progressBarContent}
              ></div>
            </div>
            <div className={styles.progressBarContainer}>
              <div
                style={{ width: '1%' }}
                className={styles.progressBarContent}
              ></div>
            </div>
            <div className={styles.progressBarContainer}>
              <div
                style={{ width: 0 }}
                className={styles.progressBarContent}
              ></div>
            </div>
            <div className={styles.progressBarContainer}>
              <div
                style={{ width: 0 }}
                className={styles.progressBarContent}
              ></div>
            </div>
          </div>
          <div className={styles.percentageRatings}>
            <div className={styles.percentRating}>
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <span className={styles.percent}>96%</span>
            </div>
            <div className={styles.percentRating}>
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <span className={styles.percent}>3%</span>
            </div>
            <div className={styles.percentRating}>
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <span className={styles.percent}>1%</span>
            </div>
            <div className={styles.percentRating}>
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <span className={styles.percent}>0%</span>
            </div>
            <div className={styles.percentRating}>
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-filled.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <img
                className={styles.avgRatingStar}
                src="/static/img/pro/star-empty.svg"
                alt="Star"
              />
              <span className={styles.percent}>0%</span>
            </div>
          </div>
        </div>
        <a
          className={styles.leaveReview}
          href="https://form.typeform.com/to/WWQLq9"
          target="_blank"
        >
          Write a review
        </a>
      </div>
    )
  }

  renderReviews() {
    return (
      <div>
        {this.state.reviews.map(review => {
          return (
            <div
              id={`review-${review.github}`}
              key={review.id}
              className={styles.review}
            >
              <div className={styles.avatarContainer}>
                <a className={styles.anchor} href={`#review-${review.github}`}>
                  <svg
                    className={styles.anchorIcon}
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                </a>
                <Avatar.Root className={styles.avatar} width="70" height="70">
                  <Avatar.Image
                    src={`https://github.com/${review.github}.png?size=140`}
                    alt={review.name}
                  />
                  <Avatar.Fallback delayMs={600}>
                    {review.name ? (
                      getFirstLetters(review.name)
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    )}
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>
              <div>
                <div className={styles.name}>
                  {review.name}
                  <img
                    className={styles.country}
                    src={`/static/img/flags/${review.country}.svg`}
                    alt={review.country}
                    width="100"
                  />
                </div>
                <div className={styles.date}>
                  {moment(review.date).fromNow()}
                </div>
                <div
                  className={styles.body}
                  dangerouslySetInnerHTML={{ __html: review.body }}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div id="reviews" className={styles.reviews}>
        <div className={styles.container}>
          {this.renderSummary()}
          {this.renderReviews()}
          <div className={styles.ctaContainer}>
            <a
              style={{ display: this.state.showAllButton ? 'block' : 'none' }}
              className={styles.cta}
              onClick={this.showAll.bind(this)}
            >
              More Reviews
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Reviews
