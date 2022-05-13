import React from 'react'

import PropTypes from 'prop-types'

const EventPageLeftImage = (props) => {
  return (
    <>
      <div
        className={`event-page-left-image-container ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="event-page-left-image-image"
        />
        <div className="event-page-left-image-container1">
          <h1 className="event-page-left-image-text headingOne">
            {props.heading}
          </h1>
          <span className="event-page-left-image-text1">{props.Time}</span>
          <span className="event-page-left-image-text2">
            {props.Description}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .event-page-left-image-container {
            width: 862px;
            height: 401px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .event-page-left-image-image {
            width: 346px;
            height: 317px;
            object-fit: cover;
          }
          .event-page-left-image-container1 {
            flex: 0 0 auto;
            width: 424px;
            height: 314px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .event-page-left-image-text {
            text-align: center;
            padding-left: var(--dl-space-space-unit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .event-page-left-image-text1 {
            padding-left: var(--dl-space-space-unit);
          }
          .event-page-left-image-text2 {
            padding-left: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

EventPageLeftImage.defaultProps = {
  Time: 'Event Time or day',
  image_alt: 'image',
  heading: 'Event Title',
  Description: 'Event Description',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

EventPageLeftImage.propTypes = {
  Time: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  Description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default EventPageLeftImage
