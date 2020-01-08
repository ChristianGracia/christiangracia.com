import React from "react";
import AppPicSlides from "../app-pic-caro/app-pic-carousel.component";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
import "./current-projects.styles.scss";
import ProjectBox from "../common/project-box/project-box.components"

export default function CurrentProjects() {
  return (
    <div
      style={{ flex: 1, alignItems: "center", textAlign: "center", padding: 5 }}
    >
      <p class="pageHeader">Recent Projects</p>

      <ProjectBox
        codeLink={"https://github.com/ChristianGracia/Java-Financial-Web-Scraper"}
        title={"Java Web Scraper with React/Redux Front-end"}
        description={"Webscraper written in Java that scrapes cryptocurrency data with Selenium, stores the data in a SQL db using MySql, and displays on the React front-end. The Java portion functions as an REST API endpoint that my front-end communicates with. Users can create accounts, request data scrapes, and view all data when logged in."}
        tweet={"1198478865901015041"}
        siteLink={""} />

      <i class="fas fa-code iconStyle"></i>

      <ProjectBox
        codeLink={"https://github.com/ChristianGracia/onabeat.com"}
        title={"onabeat.com"}
        description={"MERN stack site I wrote and host for my friends in On a Beat. Hosted on Heroku on a single server. React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in, add/delete videos and songs to front page, and more with a protected dashboard I built."}
        tweet={"1207152863434231808"}
        siteLink={"http://onabeat.com"} />

      <i class="fas fa-code iconStyle"></i>

      <ProjectBox
        codeLink={"https://github.com/ChristianGracia/Dental-iOSApp-React-Native"}
        title={"Dental iOS App React Native"}
        description={"Over 11,000+ lines of React Native code. Users can email the front desk, view detailed info and images about services offered, leave suggestions, and more!"}
        tweet={"1173662545464451075"}
        siteLink={"http://adcofnorton.com"} />

      <p style={{ marginTop: 30, marginBottom: 30, color: "white", fontWeight: "bold", fontSize: 20 }}>Pictures of App</p>

      <div
        className=""
        style={{
          width: "150px",
          heigth: "150px",
          minWidth: 150,
          margin: "0 auto",
          marginBottom: 60
        }}
      >
        <AppPicSlides />
      </div>


      <ProjectBox
        codeLink={"https://github.com/ChristianGracia/Cuffy-Professional-Store-Site"}
        title={"Enterprise Ecommerce Store"}
        description={"Luxury Clothes website (takes a min or two for server to wake up) In progess, enterprise level site with React, Redux, Sass, GraphQl, Firebase and more. Working on this more later when I have time."}
        tweet={"1173662545464451075"}
        siteLink={"https://cuffy-inc.herokuapp.com"} />

      <i class="fas fa-code iconStyle"></i>
      <div style={{ padding: 40 }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      ></div>
      <span
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: 40
        }}
      >
        Twitter Feed
      </span>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="CG_CODING"
        options={{ height: 100, width: 330 }}
        autoHeight="true"
      // onComplete={action}
      />

      <div style={{ paddingBottom: 300 }}> </div>
    </div >
  );
}
