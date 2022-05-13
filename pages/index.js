import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'

const Index = (props) => {
  return (
    <>
      <div className="index-container">
        <Head>
          <title>Grace Church Molalla</title>
          <meta name="description" content="Located at 901 N Molalla Ave" />
          <meta property="og:title" content="Grace Church Molalla" />
          <meta
            property="og:description"
            content="Located at 901 N Molalla Ave"
          />
        </Head>
        <Header></Header>
        <div className="index-hero">
          <div className="index-container01">
            <div className="index-card">
              <h1 className="index-text headingOne">
                Welcome to Grace Church!
              </h1>
              <h1 className="index-text01 headingOne">
                <span>
                  Helping Others Find &amp;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Follow Jesus</span>
              </h1>
              <span className="index-text05 lead">
                <span>
                  For over 50 years Grace Church, located and ministering in
                  Molalla, Oregon has remained a Lighthouse in our community for
                  the Gospel of Christ. Our congregation is dedicated to helping
                  mature all believers in Christ no matter what age, station, or
                  place one is in life.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Weekly we hold Sunday worship services, Sunday school classes,
                  prayer meetings, youth meetings, Bible teachings and support
                  meetings. For those unable to attend Sunday services in person
                  we broadcast on Facebook Live at “Grace Church Molalla.”
                  Wednesday night prayer and Bible Study is also available at
                  home via Zoom.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>&amp;#8203;</span>
                <br></br>
                <span></span>
              </span>
              <div className="index-container02">
                <div className="index-container03">
                  <a
                    href="https://www.facebook.com/gracechurchmolalla"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="index-link"
                  >
                    <PrimaryPinkButton
                      button="Sermons"
                      className="index-component1"
                    ></PrimaryPinkButton>
                  </a>
                </div>
                <Link href="/about-us">
                  <a className="index-link1">
                    <OutlineGrayButton
                      button="Contact Us"
                      className="index-component2"
                    ></OutlineGrayButton>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/240857464_398925811753455_7847219736672386807_n-1500h.jpg"
          loading="eager"
          className="index-image"
        />
        <section className="index-testimonials">
          <div id="contact-us" className="index-container04">
            <div className="index-container05">
              <div className="index-container06">
                <h2 className="index-text12 headingOne">Information</h2>
                <p className="index-text13 lead">
                  <span>Sunday School: 8:45- 9:30 a.m.</span>
                  <br></br>
                  <span>Sunday Service: 10:00- 11:30 a.m.</span>
                  <br></br>
                  <span>Fired Up Wednesdays: 6:00- 9:00 p.m.</span>
                  <br></br>
                  <span className="index-text20">
                    Office Hours: Tuesday - Saturday 9:00- 3:00 p.m.
                  </span>
                </p>
                <p className="index-text21 body">
                  <span className="index-text22">Contact Us:</span>
                  <br></br>
                  <span>
                    Phone:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="tel:5038295568">
                    <span className="index-text25">(503) 829-5568</span>
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
                  <a href="mailto:info@gracechurchmolalla.net?subject=">
                    <span className="index-text28">
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
                  <span className="index-text31">@gracechurchmolalla</span>
                </p>
              </div>
              <img
                alt="image"
                src="/playground_assets/bible_png18-400h.png"
                className="index-image1"
              />
            </div>
            <div className="index-container07"></div>
          </div>
          <img
            alt="image"
            src="/playground_assets/bottom.svg"
            className="index-bottom-wave-image"
          />
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="index-image2"
          />
          <img
            alt="image"
            src="/playground_assets/top.svg"
            className="index-top-wave-image"
          />
        </section>
        <section className="index-contaier">
          <img
            alt="image"
            src="/playground_assets/di8od5l7t-200w.png"
            className="index-image3"
          />
          <div className="index-container08">
            <h2 className="index-text32 headingTwo">
              <span className="index-text33">Need Help?</span>
            </h2>
            <span className="index-text34">
              <span className="index-text35">
                Are you looking for a personal relationship with Jesus?
              </span>
            </span>
          </div>
          <span>It&apos;s as easy as ABC!</span>
          <div className="index-container09">
            <div className="index-container10"></div>
            <div className="index-container11">
              <div className="index-container12">
                <h2 className="index-text37 headingTwo">
                  <span className="index-text38">A. Acknowledge</span>
                </h2>
                <span className="index-text39">
                  Acknowledge that you&apos;re a sinner and in need of
                  redemption
                </span>
              </div>
              <div className="index-container13">
                <h2 className="index-text40 headingTwo">
                  <span className="index-text41">B. Believe</span>
                </h2>
                <span className="index-text42">
                  Believe that Christ rose from the dead and that&apos;s enough
                  to save you
                </span>
              </div>
              <div className="index-container14">
                <h2 className="index-text43 headingTwo">
                  <span className="index-text44">C. Commit</span>
                </h2>
                <span className="index-text45">
                  Commit to submit yourself to His leading, His plan, His rules
                </span>
              </div>
              <div className="index-container15">
                <h2 className="index-text46 headingTwo">Contact Us</h2>
                <span className="index-text47">
                  <span>
                    We want to see you succeed in your walk with your Lord and
                    Savior! Reach out to us at
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://mailto:info@gracechurchmolalla.net"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="index-text49">
                      info@gracechurchmolalla.net
                    </span>
                  </a>
                  <span className="index-text50"></span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .index-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .index-hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .index-container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .index-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .index-text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .index-text01 {
            color: var(--dl-color-secondary-700);
            text-align: left;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .index-text05 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .index-container02 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .index-container03 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .index-link {
            display: contents;
          }
          .index-component1 {
            text-decoration: none;
          }
          .index-link1 {
            display: contents;
          }
          .index-component2 {
            text-decoration: none;
          }
          .index-image {
            left: auto;
            right: 0px;
            width: 50%;
            height: 80vh;
            margin: auto;
            position: absolute;
            object-fit: cover;
            border-color: var(--dl-color-secondary-400);
            border-width: 1px;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .index-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .index-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: 15rem;
            justify-content: flex-start;
          }
          .index-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .index-container06 {
            width: 459px;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .index-text12 {
            color: var(--dl-color-gray-white);
          }
          .index-text13 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .index-text20 {
            font-weight: 400;
          }
          .index-text21 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .index-text22 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .index-text25 {
            text-decoration: underline;
          }
          .index-text28 {
            text-decoration: underline;
          }
          .index-text31 {
            color: var(--dl-color-gray-white);
          }
          .index-image1 {
            width: 382px;
            height: 100%;
            object-fit: cover;
            padding-left: 0px;
            list-style-type: disc;
            list-style-image: none;
            list-style-position: outside;
          }
          .index-container07 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .index-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .index-image2 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .index-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .index-contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .index-image3 {
            width: 100px;
            object-fit: cover;
          }
          .index-container08 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .index-text32 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .index-text33 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .index-text34 {
            align-self: center;
          }
          .index-text35 {
            color: rgb(103, 116, 142);
            display: inline;
            text-align: center;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .index-container09 {
            width: 100%;
            height: 575px;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .index-container10 {
            width: 504px;
            height: 360px;
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/pray_oracion_hdv-400h.jpg');
            background-position: center;
          }
          .index-container10:hover {
            transform: scale(1.04);
          }
          .index-container11 {
            width: 450px;
            height: 461px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .index-container12 {
            flex: 0 0 auto;
            width: 465px;
            height: 125px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .index-text37 {
            width: 369px;
            height: 45px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .index-text38 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .index-text39 {
            align-self: flex-start;
          }
          .index-container13 {
            flex: 0 0 auto;
            width: 465px;
            height: 125px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .index-text40 {
            width: 369px;
            height: 45px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .index-text41 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .index-text42 {
            align-self: flex-start;
          }
          .index-container14 {
            flex: 0 0 auto;
            width: 465px;
            height: 125px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .index-text43 {
            width: 369px;
            height: 45px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .index-text44 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .index-text45 {
            align-self: flex-start;
          }
          .index-container15 {
            flex: 0 0 auto;
            width: 465px;
            height: 125px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .index-text46 {
            width: 369px;
            height: 45px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .index-text47 {
            align-self: flex-start;
          }
          .index-text49 {
            text-decoration: underline;
          }
          .index-text50 {
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .index-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .index-container01 {
              max-width: 960px;
            }
            .index-card {
              width: 100%;
            }
            .index-container04 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .index-container06 {
              margin-right: 0px;
            }
            .index-contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .index-container11 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .index-card {
              align-items: center;
            }
            .index-text05 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .index-image {
              display: none;
            }
            .index-container04 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .index-container08 {
              width: 80%;
            }
            .index-text34 {
              text-align: center;
            }
            .index-container09 {
              flex-direction: column;
            }
            .index-container11 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .index-card {
              padding: var(--dl-space-space-unit);
            }
            .index-container02 {
              align-items: center;
              flex-direction: column;
            }
            .index-container03 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .index-container04 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .index-image1 {
              display: none;
            }
            .index-text34 {
              text-align: center;
            }
            .index-container09 {
              height: 905px;
            }
            .index-container10 {
              width: 398px;
              height: 225px;
            }
            .index-container12 {
              width: 100%;
            }
            .index-container13 {
              width: 100%;
            }
            .index-container14 {
              width: 100%;
            }
            .index-container15 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Index
