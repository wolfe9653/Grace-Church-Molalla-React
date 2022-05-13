import React from 'react'

import PropTypes from 'prop-types'

const MissionaryPageLeftImage = (props) => {
  return (
    <>
      <div
        className={`missionary-page-left-image-container ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="missionary-page-left-image-image"
        />
        <div className="missionary-page-left-image-container1">
          <h1 className="missionary-page-left-image-text headingOne">
            {props.MissionaryName}
          </h1>
          <span>{props.Description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .missionary-page-left-image-container {
            width: 970px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .missionary-page-left-image-image {
            width: 408px;
            height: 345px;
            object-fit: cover;
          }
          .missionary-page-left-image-container1 {
            width: 512px;
            height: 630px;
            display: flex;
            align-items: center;
            padding-left: 15px;
            flex-direction: column;
            justify-content: center;
          }
          .missionary-page-left-image-text {
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

MissionaryPageLeftImage.defaultProps = {
  MissionaryName: 'John & Jane Doe',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  Description: 'Talk about the missionaries and what they are doing!',
}

MissionaryPageLeftImage.propTypes = {
  MissionaryName: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Description: PropTypes.string,
}

export default MissionaryPageLeftImage
