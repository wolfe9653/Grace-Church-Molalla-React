import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - Grace Church Molalla</title>
          <meta name="description" content="Located at 901 N Molalla Ave" />
          <meta property="og:title" content="About-Us - Grace Church Molalla" />
          <meta
            property="og:description"
            content="Located at 901 N Molalla Ave"
          />
        </Head>
        <Header></Header>
        <div className="about-us-main">
          <section className="about-us-container01">
            <div className="about-us-container02">
              <h1 className="about-us-text headingOne">
                <span className="about-us-text01">Meet Our Pastor</span>
              </h1>
              <span className="about-us-text02">
                <span className="about-us-text03">Scripture maybe?</span>
              </span>
            </div>
            <div className="about-us-container03">
              <div className="about-us-container04">
                <div className="about-us-container05">
                  <img
                    alt="image"
                    src="/playground_assets/pastor-lee_orig%20%5B1%5D-600h.jpg"
                    className="about-us-image"
                  />
                </div>
              </div>
              <div className="about-us-container06">
                <div className="about-us-container07">
                  <h3 className="headingTwo">
                    <span className="about-us-text05">Pastor</span>
                    <br></br>
                    <span className="about-us-text07">Lee Throne</span>
                  </h3>
                  <p>
                    <span>
                      Pastor Lee Throne pastors at Grace Church Molalla.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="about-us-container08">
            <h1 className="about-us-text10 headingOne">Contact Us!</h1>
            <div className="about-us-container09">
              <div className="about-us-container10">
                <span>
                  <span>
                    Phone:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="tel:5038295568">
                    <span className="about-us-text13">(503) 829-5568</span>
                  </a>
                  <br></br>
                  <span>
                    Email:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="mailto:Office@GraceChurchMolalla.net?subject=">
                    <span className="about-us-text15">
                      info@gracechurchmolalla.net
                    </span>
                  </a>
                  <br></br>
                  <span>
                    Facebook:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.facebook.com/gracechurchmolalla"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="about-us-text17">@gracechurchmolalla</span>
                  </a>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Visit us at:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>901 N. Molalla Ave</span>
                  <br></br>
                  <span>Molalla, OR 97038</span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/bible_png18-300h.png"
                className="about-us-image1"
              />
            </div>
          </div>
          <div className="about-us-container11">
            <h1 className="about-us-text27 headingOne">Contact Form:</h1>
            <span>Coming soon</span>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-main {
            width: 100%;
            height: 1531px;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-container01 {
            width: 100%;
            height: 867px;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .about-us-container02 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .about-us-text {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .about-us-text01 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .about-us-text02 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text03 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .about-us-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .about-us-container04 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-container05 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-image {
            top: 0px;
            left: auto;
            width: 295px;
            bottom: auto;
            height: 539px;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .about-us-container06 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .about-us-container07 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text05 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .about-us-text07 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            background-color: rgb(255, 255, 255);
          }
          .about-us-container08 {
            width: 856px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-text10 {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .about-us-container09 {
            width: 100%;
            height: 241px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .about-us-container10 {
            flex: 0 0 auto;
            width: 487px;
            height: 225px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-text13 {
            text-decoration: underline;
          }
          .about-us-text15 {
            text-decoration: underline;
          }
          .about-us-text17 {
            text-decoration: underline;
          }
          .about-us-image1 {
            width: 241px;
            height: 201px;
            object-fit: cover;
          }
          .about-us-container11 {
            flex: 0 0 auto;
            width: 930px;
            height: 345px;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-text27 {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          @media (max-width: 991px) {
            .about-us-main {
              justify-content: flex-start;
            }
            .about-us-container01 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .about-us-container02 {
              max-width: 80%;
            }
            .about-us-text02 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .about-us-container01 {
              max-width: 720px;
            }
            .about-us-container03 {
              align-items: center;
              flex-direction: column;
            }
            .about-us-container04 {
              width: 80%;
            }
            .about-us-image {
              display: none;
            }
            .about-us-container06 {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
