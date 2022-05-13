import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import MissionaryPageLeftImage from '../components/missionary-page-left-image'
import MissionaryPageCenteredImage from '../components/missionary-page-centered-image'
import MissionaryPageRightImage from '../components/missionary-page-right-image'
import Footer from '../components/footer'

const Missionaries = (props) => {
  return (
    <>
      <div className="missionaries-container">
        <Head>
          <title>Missionaries - Grace Church Molalla</title>
          <meta name="description" content="Located at 901 N Molalla Ave" />
          <meta
            property="og:title"
            content="Missionaries - Grace Church Molalla"
          />
          <meta
            property="og:description"
            content="Located at 901 N Molalla Ave"
          />
        </Head>
        <Header></Header>
        <div className="missionaries-main">
          <MissionaryPageLeftImage
            image_src="/playground_assets/dsc03660_orig-400h.jpg"
            Description="Rod and Jackie Allen serve in Northwest Argentina. Jackie runs and maintains the Cerrillos Conference Centre - a popular place for picnics, baptisms, workshops, and seminars.  Rod is director of the Argentine Baptist Seminary in Salta, where he also teaches, writes curriculum and leads workshops for the students. In addition, Rod  serves on the board of the Baptist Union, counseling churches and pastors.\nThe Allen's worked last term with a small church  in a restoration program.  Rod took the leadership role of pastor, preached Sunday evening, and taught the adolescent Sunday School class on Sunday mornings. Jackie worked with the women of the church, teaching them the basic spiritual disciplines of the Christian life.  The Allens find the most exciting aspect of missions work is seeing the people they train put Biblical principles into practice.  They feel privileged to serve.  2 Timothy 2:2 describes their desire to serve by training Argentinians to reach the world for Christ."
            rootClassName="missionary-page-left-image-root-class-name"
            MissionaryName="Rod &amp; Jackie Allen"
          ></MissionaryPageLeftImage>
          <MissionaryPageCenteredImage
            Description='Indigenous Ministries seeks to reach nationals through nationals with the Gospel in difficult access countries.  With the Church as the central focus, Indigenous Ministries works through local nationals in Egypt, Iraq, India, and the Philippines using practical and effective ministry methods to draw hearts to a transformational life in Christ. Training is an important part of IM, and in 2003 Indigenous Ministries co-founded Grace Bible College in central India which now has a thriving student body on a two acre campus. Pastoral training in several countries is ongoing as well as church planting. \nJohn serves as the CEO of IM, overseeing national and international operations. Dee is the director of "Beautiful International Women’s Ministry," ministering to women in Hindu and Arabic communities overseas. They have been married and in full time ministry together for 42 years and have four grown children, seven wonderful grandchildren, and two dogs: Chase and Barstow. They enjoy reading, walking, hiking, biking, sailing and traveling together.  John is an accomplished beekeeper and Dee is a quilter and artist. \nIndigenous Ministries has three Child Sponsorship Programs, including a growing and very effective program in Iraq helping Iraqi and Syrian refugee families give their children the practical helps they so desperately need such as  food, backpacks, and school uniforms is wonderful. Local teams (all themselves refugees) bring the children together for regular meetings with songs, games, Bible lessons and healthy interaction, which aid the children in healing from the traumas they have experienced at the hands of ISIS, both in Iraq and Syria. To learn more about sponsoring a child or getting involved in the annual backpack/school supplies fundraiser, please visit IM’s website.\n \n     Link: www.IndigenousMinistries.org \nContact: Indigenous Ministries, 15455 Gleneagle Drive, Suite 130, Colorado Springs, CO 80921, 719-302-3028. \n \n“For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.”  Ephesians 2:10, ESV'
            rootClassName="missionary-page-centered-image-root-class-name"
            MissionaryName="John &amp; Dee Cook"
          ></MissionaryPageCenteredImage>
          <MissionaryPageRightImage
            image_src="/playground_assets/rod-angelika-ragsdale_orig-400h.jpg"
            Description="Rod and Angelika Ragsdale have served in Cote d'Ivoire, Africa for nearly 20 years. Rod helps with training and educating pastors at a Bible institute. Angelika teaches the ladies of future pastors in health and hygiene, as well as French and their walk with Jesus. Rod and Angelika are also trying to raise awareness among the people in North Africa to protect wild animals from extinction and limit the cutting of tropical forests around them."
            rootClassName="missionary-page-right-image-root-class-name"
            MissionaryName="Rod &amp; Angelika Ragsdale"
          ></MissionaryPageRightImage>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .missionaries-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .missionaries-main {
            width: 100%;
            height: 2978px;
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
          @media (max-width: 991px) {
            .missionaries-main {
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Missionaries
