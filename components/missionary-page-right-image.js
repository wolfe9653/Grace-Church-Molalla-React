import React from 'react'

import PropTypes from 'prop-types'

const MissionaryPageRightImage = (props) => {
  return (
    <>
      <div
        className={`missionary-page-right-image-container ${props.rootClassName} `}
      >
        <div className="missionary-page-right-image-container1">
          <h1 className="missionary-page-right-image-text headingOne">
            {props.MissionaryName}
          </h1>
          <span>{props.Description}</span>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="missionary-page-right-image-image"
        />
      </div>
      <style jsx>
        {`
          .missionary-page-right-image-container {
            width: 970px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .missionary-page-right-image-container1 {
            width: 512px;
            height: 630px;
            display: flex;
            align-items: center;
            padding-right: 15px;
            flex-direction: column;
            justify-content: center;
          }
          .missionary-page-right-image-text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .missionary-page-right-image-image {
            width: 452px;
            height: 309px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

MissionaryPageRightImage.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  MissionaryName: 'John & Jane Doe',
  Description: 'Talk about the missionaries and what they are doing!',
  rootClassName: '',
}

MissionaryPageRightImage.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  MissionaryName: PropTypes.string,
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MissionaryPageRightImage
