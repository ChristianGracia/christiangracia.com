import React from "react";
import AppPicSlides from "./AppPicSlides";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

export default function CurrentProjects() {
  return (
    <div style={{ flex: 1, alignItems: "center", textAlign: "center" }}>
      <p
        style={{
          fontWeight: "bold",
          color: "#FEFF01",
          marginTop: 40,
          textAlign: "center",
          fontSize: 20
        }}
      >
        Some of my current projects
      </p>

      <div style={{ padding: 40 }}></div>

      <p style={{ textAlign: "center", color: "white", marginTop: 25 }}>
        iOS/Android App for{" "}
        <a
          style={{ color: "#FEFF01", fontWeight: "bold" }}
          href="http://adcofnorton.com"
        >
          adcofnorton.com
        </a>
        .
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        Over 11,000+ lines of React Native code.
      </p>
      <p style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
        code:{" "}
        <a
          href="https://github.com/ChristianGracia/Dental-iOSApp-React-Native"
          style={{ color: "#FEFF01", fontWeight: "bold" }}
        >
          Link
        </a>
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

      <i
        style={{
          textAlign: "center",
          color: "#FEFF01",
          fontSize: 25,
          marginTop: 25
        }}
        class="fas fa-code"
      ></i>

      <p style={{ textAlign: "center", color: "white", marginTop: 25 }}>
        Luxury Clothes website (takes a min or two for server to wake up)
        <a
          style={{ color: "#FEFF01", fontWeight: "bold" }}
          href="https://cuffy-inc.herokuapp.com/"
        >
          {" "}
          cuffy-inc.herokuapp.com
        </a>
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        In progess, enterprise level site with React, Redux, Sass, GraphQl and
        more. Working on this more later when I have time
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
        style={{
          textAlign: "center",
          color: "#FEFF01",
          fontSize: 25,
          marginTop: 25
        }}
        class="fas fa-code"
      ></i>

      <p style={{ textAlign: "center", color: "white", marginTop: 25 }}>
        Rewriting{" "}
        <a
          style={{ color: "#FEFF01", fontWeight: "bold" }}
          href="http://onabeat.com"
        >
          onabeat.com
        </a>
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        Currently redesigning, put a temp page up. Currently own and manage the
        server
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
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 23
          }}
        >
          <p>React Native Mobile App</p>
          <TwitterTweetEmbed
            options={{ width: 330 }}
            tweetId={"1173662545464451075"}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 23
          }}
        >
          <p>Java scraper with React/Redux Front end</p>
          <TwitterTweetEmbed
            options={{ width: 330 }}
            tweetId={"1198478865901015041"}
          />
        </div>
      </div>
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

      <div style={{ paddingBottom: 300 }}></div>
    </div>
  );
}
