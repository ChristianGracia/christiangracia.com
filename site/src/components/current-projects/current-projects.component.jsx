import React from "react";
import AppPicSlides from "../app-pic-caro/app-pic-carousel.component";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
import "./current-projects.styles.scss"

export default function CurrentProjects() {
  return (
    <div
      style={{ flex: 1, alignItems: "center", textAlign: "center", padding: 5 }}
    >
      <p class="pageHeader">
        Recent Projects
      </p>

      <p class="title">
        <a
          style={{ color: "#FEFF01", fontWeight: "bold", fontSize: 30 }}
          href="https://github.com/ChristianGracia/Java-Financial-Web-Scraper"
        >
          Java Web Scraper with React/Redux Front-end
        </a>
      </p>
      <p class="description">
        Webscraper written in Java that scrapes cryptocurrency data with
        Selenium, stores the data in a SQL db using MySql, and displays on the React
        front-end. The Java portion functions as an REST API endpoint that my
        front-end communicates with. Users can create accounts, request data
        scrapes, and view all data when logged in.
      </p>
      <p style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
        code:{" "}
        <a
          style={{ color: "#FEFF01", fontWeight: "bold" }}
          href="https://github.com/ChristianGracia/Java-Financial-Web-Scraper"
        >
          Link
        </a>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ minWidth: 290, maxWidth: 700 }}>
          <TwitterTweetEmbed
            options={{ width: 300 }}
            tweetId={"1198478865901015041"}
          />
        </div>
      </div>
      <i
        style={{
          textAlign: "center",
          color: "#FEFF01",
          fontSize: 25,
          marginTop: 25
        }}
        class="fas fa-code"
      ></i>

      <p class="title">
        <a
          style={{ color: "#FEFF01", fontWeight: "bold", fontSize: 30 }}
          href="http://onabeat.com"
        >
          onabeat.com
        </a>
      </p>
      <p class="description">
        MERN stack site I wrote and host for my friends in On a Beat. Hosted on
        Heroku on a single server. React/Redux front-end with a Node Js back-end
        and a MongoDB database{" "}
      </p>

      <p class="description">
        Users can make accounts, sign in, add/delete videos and songs to front
        page, and more with a protected dashboard I built.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ minWidth: 290, maxWidth: 700 }}>
          {" "}
          <TwitterTweetEmbed
            options={{ width: 300 }}
            tweetId={"1207152863434231808"}
          />
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          marginTop: 15
        }}
      >
        code:{" "}
        <a
          href="https://github.com/ChristianGracia/onabeat.com"
          style={{ color: "#FEFF01", fontWeight: "bold" }}
        >
          Link
        </a>
      </p>

      <i
        style={{
          textAlign: "center",
          color: "#FEFF01",
          fontSize: 25,
          marginTop: 25
        }}
        class="fas fa-code"
      ></i>
      <p class="title">
        Dental iOS App React Native
      </p>

      <p class="description">
        iOS/Android App for{" "}
        <a
          style={{ color: "#FEFF01", fontWeight: "bold" }}
          href="http://adcofnorton.com"
        >
          adcofnorton.com
        </a>
        .
      </p>
      <p class="description">
        Over 11,000+ lines of React Native code.
      </p>
      <p class="description">
        Users can email the front desk, view detailed info and images about
        services offered, leave suggestions, and more!
      </p>

      <div
        className=""
        style={{
          width: "150px",
          heigth: "150px",
          minWidth: 150,
          margin: "0 auto"
        }}
      >
        <AppPicSlides />
      </div>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          marginTop: 15
        }}
      >
        code:{" "}
        <a
          href="https://github.com/ChristianGracia/Dental-iOSApp-React-Native"
          style={{ color: "#FEFF01", fontWeight: "bold" }}
        >
          Link
        </a>
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ minWidth: 290, maxWidth: 700 }}>
          {" "}
          <TwitterTweetEmbed
            options={{ width: 300 }}
            tweetId={"1173662545464451075"}
          />
        </div>
      </div>

      <p class="title">
        <a
          style={{ color: "#FEFF01", fontWeight: "bold", fontSize: 30 }}
          href="https://cuffy-inc.herokuapp.com/"
        >
          cuffy-inc.herokuapp.com
        </a>
      </p>
      <p class="description">
        {" "}
        Luxury Clothes website (takes a min or two for server to wake up)
      </p>
      <p class="description">
        In progess, enterprise level site with React, Redux, Sass, GraphQl, Firebase and
        more. Working on this more later when I have time.
      </p>

      <p style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
        code:{" "}
        <a
          href="https://github.com/ChristianGracia/Cuffy-Professional-Store-Site"
          style={{ color: "#FEFF01" }}
        >
          Link
        </a>
      </p>

      <i
        style={{ textAlign: "center", color: "#FEFF01", fontSize: 25 }}
        class="fas fa-code"
      ></i>
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
    </div>
  );
}
