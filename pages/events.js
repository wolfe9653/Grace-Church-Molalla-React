import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import EventPageLeftImage from '../components/event-page-left-image'
import EventPageRightImage from '../components/event-page-right-image'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'

const Events = (props) => {
  return (
    <>
      <div className="events-container">
        <Head>
          <title>Events - Grace Church Molalla</title>
          <meta name="description" content="Located at 901 N Molalla Ave" />
          <meta property="og:title" content="Events - Grace Church Molalla" />
          <meta
            property="og:description"
            content="Located at 901 N Molalla Ave"
          />
        </Head>
        <Header></Header>
        <div className="events-main">
          <EventPageLeftImage
            Time="10:00 a.m. -11:30 p.m."
            heading="Sunday Service"
            image_alt="Sunday Service Image"
            image_src="/playground_assets/1000_f_306404290_zjuabscdnjq1fhrozczcadqna9wofwvv-400h.jpg"
            Description="Come Join us for church on Sunday morning for a refuge from the chaos of everyday life. The worship and teaching help us all to focus on God, be spiritually recharged, and  live closer to Him throughout the week."
            rootClassName="event-page-left-image-root-class-name"
          ></EventPageLeftImage>
          <EventPageRightImage
            Time="9:15a-10:15a"
            heading="Sunday School"
            image_alt="Sunday School Image"
            image_src="/playground_assets/1000_f_181792967_8g4srsm1whvzpe9akuyavkdxmg1hgvze-400h.jpg"
            Description="Sunday School is a great way to grow to as a Christian and educate yourself to create a deeper and more enriching faith."
            rootClassName="event-page-right-image-root-class-name"
          ></EventPageRightImage>
          <EventPageLeftImage
            Time="July 11-15"
            heading="Zoomerang VBS 2022"
            image_alt="10 Minute Men Image"
            image_src="/playground_assets/2105_zoomerang-open-graph-400h.webp"
            Description='This summer, 2022, we will be holding "Zoomerang," a sanctity of life VBS in the land down under! Be prepared to experience the jaw-dropping beauty of the Great Barrier Reef, the arid temperature of outback afternoons, the architectural marvels of Australia’s modern cities, and the fascinating eucalyptus forest, home of the koalas.'
            rootClassName="event-page-left-image-root-class-name1"
          ></EventPageLeftImage>
          <a
            href="https://gracechurchmolalla.myanswers.com/zoomerang/"
            target="_blank"
            rel="noreferrer noopener"
            className="events-link"
          >
            <PrimaryBlueButton
              rootClassName="primary-blue-button-root-class-name"
              button="Visit the VBS Site to sign up!"
              className="events-component1"
            ></PrimaryBlueButton>
          </a>
          <EventPageRightImage
            Time="Wednesday 7:00 - 9:00 p.m. September-May"
            heading="Fired Up! Youth"
            image_src="/playground_assets/fired%20up-400h.jpg"
            Description="Fired Up is a Christian non-denominational discipleship group for youth ages 12+. Worship, learning from the Word, small groups, Bible memorization and diving into really growing relationships with God and family are at our core. Parents are encouraged and welcome to attend, and for younger siblings who are able to sit through a message, there's an activity for them following it during the small group time. https://firedupyouth.weebly.com/about.html"
            rootClassName="event-page-right-image-root-class-name1"
          ></EventPageRightImage>
          <EventPageLeftImage
            Time="Monday 6 p.m. - 8:30 p.m."
            heading="Grace Youth"
            image_alt="Grace Youth"
            image_src="/playground_assets/grace%20youth-400h.jpg"
            Description="Grace Youth combines deep Bible study and tough questions to encourage spiritual growth through the first hour of meeting and allows free time to socialize, play games and have fun through the next. "
            rootClassName="event-page-left-image-root-class-name3"
          ></EventPageLeftImage>
          <EventPageRightImage
            Time="Wednesday, 6:30 - 8:30 p.m in the Fellowship Room"
            heading="Wednesday Bible Study &amp; Prayer Time"
            image_alt="Prayer Time Image"
            image_src="/playground_assets/bible%20study-400h.jpg"
            Description='Meet with fellow believers for in-depth Bible study and to share prayer requests and pray with and for one another. "Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by my Father in heaven. For where two or three are gathered in my name, there am I among them.” Matthew 18:19-20'
            rootClassName="event-page-right-image-root-class-name2"
          ></EventPageRightImage>
          <EventPageLeftImage
            Time="7:00 pm upstairs in the Gym School Room"
            heading="Women's Bible Study"
            image_alt="Ladies Bible Study Image"
            image_src="/playground_assets/women%20pray-400h.jpg"
            Description='After Grace Youth, mom meet to study the Bible, share prayer requests, and pray together. "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth." 2 Timothy 2:15'
            rootClassName="event-page-left-image-root-class-name2"
          ></EventPageLeftImage>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .events-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .events-main {
            width: 100%;
            height: 2736px;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .events-link {
            display: contents;
          }
          .events-component1 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .events-main {
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Events
