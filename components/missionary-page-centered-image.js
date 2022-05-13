import React from 'react'

import PropTypes from 'prop-types'

const MissionaryPageCenteredImage = (props) => {
  return (
    <>
      <div
        className={`missionary-page-centered-image-container ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="missionary-page-centered-image-image"
        />
        <div className="missionary-page-centered-image-container1">
          <h1 className="missionary-page-centered-image-text headingOne">
            {props.MissionaryName}
          </h1>
          <span>{props.Description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .missionary-page-centered-image-container {
            width: 970px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .missionary-page-centered-image-image {
            width: 854px;
            height: 427px;
            margin-top: 11px;
            object-fit: cover;
          }
          .missionary-page-centered-image-container1 {
            width: 852px;
            height: 630px;
            display: flex;
            align-items: center;
            padding-top: 14px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .missionary-page-centered-image-text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </>
  )
}

MissionaryPageCenteredImage.defaultProps = {
  MissionaryName: 'John & Jane Doe',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  rootClassName: '',
  Description: 'Talk about the missionaries and what they are doing!',
}

MissionaryPageCenteredImage.propTypes = {
  MissionaryName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
}

export default MissionaryPageCenteredImage
