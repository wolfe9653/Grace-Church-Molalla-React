import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-container1">
            <span className="footer-text">Grace Church Molalla</span>
            <span>Copyright © 2022 Grace Church Molalla</span>
          </div>
          <div className="footer-container2">
            <div className="footer-container3">
              <span className="footer-text2 large">Site Tree</span>
              <Link href="/">
                <a className="footer-link large">Home</a>
              </Link>
              <a
                href="https://www.myegiving.com/App/Giving/grac901264"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1 large"
              >
                Give
              </a>
              <Link href="/about-us">
                <a className="footer-link2 large">Contact Us</a>
              </Link>
              <Link href="/sermons">
                <a className="footer-link3 large">Sermons</a>
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="footer-image"
        />
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .footer-container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-container2 {
            width: 420px;
            display: flex;
            justify-content: flex-start;
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text2 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-link {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link1 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link1:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link2 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link2:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-link3 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-link3:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }

          @media (max-width: 991px) {
            .footer-container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              flex-direction: column;
            }
            .footer-container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
