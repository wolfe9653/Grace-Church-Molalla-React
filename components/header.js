import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'

const Header = (props) => {
  return (
    <>
      <div data-role="Header" className="header-header">
        <nav className="header-nav">
          <div className="header-container">
            <Link href="/">
              <a className="header-link">{props.heading}</a>
            </Link>
            <div className="header-menu">
              <Link href="/">
                <a className="header-link01 large">Home</a>
              </Link>
              <Link href="/events">
                <a className="header-link02 large">Events</a>
              </Link>
              <Link href="/calendar">
                <a className="header-link03 large">
                  <span>Calendar</span>
                </a>
              </Link>
              <a
                href={props.link_text}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.text}
              </a>
              <a
                href="https://www.facebook.com/gracechurchmolalla"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link05 large"
              >
                Sermons
              </a>
              <a
                href="https://www.myegiving.com/App/Giving/grac901264"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link06 large"
              >
                <span>Give</span>
              </a>
              <Link href="/missionaries">
                <a className="header-link07 large">
                  <span>Missionaries</span>
                </a>
              </Link>
              <Link href="/about-us">
                <a className="header-link08 large">
                  <span>About Us</span>
                </a>
              </Link>
            </div>
            <div className="header-container1">
              <div className="header-container2">
                <div data-type="BurgerMenu" className="header-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="header-icon">
                    <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                  </svg>
                </div>
              </div>
              <div className="header-container3">
                <a
                  href="https://www.facebook.com/gracechurchmolalla"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="header-link09"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="header-icon2"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div data-type="MobileMenu" className="header-mobile-menu">
          <div className="header-top">
            <Link href="/">
              <a className="header-link10 large">Soft UI Design System</a>
            </Link>
            <div data-type="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon4">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu1">
              <Link href="/">
                <a className="header-link11 large">Home</a>
              </Link>
              <span className="header-text4 large">Profile</span>
              <Link href="/sermons">
                <a className="header-link12 large">Coming Soon</a>
              </Link>
            </div>
          </div>
          <div className="header-bot">
            <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius40);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .header-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link {
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Open Sans;
            font-weight: 700;
            line-height: 1.4;
            border-color: var(--dl-color-secondary-400);
            border-style: hidden;
            border-width: 1px;
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .header-menu {
            width: 686px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .header-link01 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link01:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link02 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link02:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link03 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link03:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link05 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link05:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link06 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link06:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link07 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link07:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link08 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link08:hover {
            color: var(--dl-color-gray-500);
          }
          .header-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header-container3 {
            width: 159px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .header-link09 {
            display: contents;
          }
          .header-icon2 {
            width: 30px;
            height: 29px;
            margin-left: var(--dl-space-space-halfunit);
            list-style-type: disc;
            text-decoration: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .header-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-unitandahalfunit);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .header-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link10 {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            text-decoration: none;
          }
          .header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-icon4 {
            width: 24px;
            height: 24px;
          }
          .header-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-link11 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link11:hover {
            color: var(--dl-color-gray-500);
          }
          .header-text4 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-text4:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link12 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link12:hover {
            color: var(--dl-color-gray-500);
          }
          .header-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .header-nav {
              max-width: 960px;
            }
            .header-menu {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-container3 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  text: '',
  link_text: 'https://example.com',
  heading: 'Grace Church Molalla',
}

Header.propTypes = {
  text: PropTypes.string,
  link_text: PropTypes.string,
  heading: PropTypes.string,
}

export default Header
