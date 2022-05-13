import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'

const Sermons = (props) => {
  return (
    <>
      <div className="sermons-container">
        <Head>
          <title>Sermons - Grace Church Molalla</title>
          <meta name="description" content="Located at 901 N Molalla Ave" />
          <meta property="og:title" content="Sermons - Grace Church Molalla" />
          <meta
            property="og:description"
            content="Located at 901 N Molalla Ave"
          />
        </Head>
        <Header></Header>
        <div className="sermons-container1">
          <div className="sermons-main">
            <div className="sermons-container2">
              <h1 className="sermons-text headingOne">Coming Soon!</h1>
              <h1>Sermons are coming to the website soon!</h1>
              <span>
                For now, you can visit our Facebook page to catch up with the
                latest sermons
              </span>
              <a
                href="https://www.facebook.com/gracechurchmolalla"
                target="_blank"
                rel="noreferrer noopener"
                className="sermons-link"
              >
                <OutlineGrayButton
                  button="Facebook"
                  rootClassName="outline-gray-button-root-class-name"
                  className="sermons-component1"
                ></OutlineGrayButton>
              </a>
            </div>
          </div>
          <Footer rootClassName="footer-root-class-name1"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .sermons-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .sermons-container1 {
            width: 100%;
            height: 1253px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .sermons-main {
            width: 100%;
            height: 879px;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .sermons-container2 {
            width: 856px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sermons-text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .sermons-link {
            display: contents;
          }
          .sermons-component1 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .sermons-container1 {
              background-size: auto;
            }
            .sermons-main {
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Sermons
