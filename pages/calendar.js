import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Calendar = (props) => {
  return (
    <>
      <div className="calendar-container">
        <Head>
          <title>Calendar - Grace Church Molalla</title>
          <meta name="description" content="Located at 901 N Molalla Ave" />
          <meta property="og:title" content="Calendar - Grace Church Molalla" />
          <meta
            property="og:description"
            content="Located at 901 N Molalla Ave"
          />
        </Head>
        <Header></Header>
        <div className="calendar-main">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=700&amp;amp;wkst=1&amp;amp;bgcolor=%23B39DDB&amp;amp;ctz=America%2FLos_Angeles&amp;amp;src=Z3JhY2VjaHVyY2htb2xhbGxhMzFAZ21haWwuY29t&amp;amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;amp;color=%23039BE5&amp;amp;color=%23616161&amp;amp;showDate=1&amp;amp;showNav=1&amp;amp;showTabs=0&amp;amp;showCalendars=0&amp;amp;showTitle=0"
            className="calendar-iframe"
          ></iframe>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .calendar-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .calendar-main {
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
          .calendar-iframe {
            width: 100%;
            height: 801px;
          }
          @media (max-width: 991px) {
            .calendar-main {
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Calendar
