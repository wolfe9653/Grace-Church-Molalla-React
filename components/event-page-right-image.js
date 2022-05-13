import React from 'react'

import PropTypes from 'prop-types'

const EventPageRightImage = (props) => {
  return (
    <>
      <div
        className={`event-page-right-image-container ${props.rootClassName} `}
      >
        <div className="event-page-right-image-container1">
          <h1 className="event-page-right-image-text headingOne">
            {props.heading}
          </h1>
          <span className="event-page-right-image-text1">{props.Time}</span>
          <span className="event-page-right-image-text2">
            {props.Description}
          </span>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="event-page-right-image-image"
        />
      </div>
      <style jsx>
        {`
          .event-page-right-image-container {
            width: 862px;
            height: 401px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .event-page-right-image-container1 {
            flex: 0 0 auto;
            width: 424px;
            height: 314px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .event-page-right-image-text {
            text-align: center;
            padding-right: var(--dl-space-space-unit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .event-page-right-image-text1 {
            padding-right: var(--dl-space-space-unit);
          }
          .event-page-right-image-text2 {
            padding-right: var(--dl-space-space-unit);
          }
          .event-page-right-image-image {
            width: 346px;
            height: 317px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

EventPageRightImage.defaultProps = {
  image_alt: 'image',
  Description:
    "Fired Up is a Christian non-denominational discipleship group for youth ages 12+. Worship, learning from the Word, small groups, Bible memorization and diving into really growing relationships with God and family are at our core. Parents are encouraged and welcome to attend, and for younger siblings who are able to sit through a message, there's an activity for them following it during the small group time.",
  Time: 'Wednesdays, 7:00 pm at Grace Church',
  heading: 'Fired Up Youth',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

EventPageRightImage.propTypes = {
  image_alt: PropTypes.string,
  Description: PropTypes.string,
  Time: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default EventPageRightImage
