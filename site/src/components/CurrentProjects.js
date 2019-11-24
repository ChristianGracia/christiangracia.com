import React from "react";
import AppPicSlides from "./AppPicSlides";

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
          width: "200px",
          heigth: "200px",
          minWidth: 200,
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
        Luxury Clothes website
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
        more. Currently looks great on a computer, working on mobile.
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

      <p style={{ textAlign: "center", color: "white", marginTop: 25 }}>
        Rewriting{" "}
        <a
          style={{ color: "#FEFF01", fontWeight: "bold" }}
          href="http://nflandscaping.com"
        >
          nflandscaping.com
        </a>
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        Also not live. Waiting on domain access to post what I have written.
      </p>
      <p style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
        code:{" "}
        <a
          href="https://github.com/ChristianGracia/nflandscaping.com"
          style={{ color: "#FEFF01" }}
        >
          Link
        </a>
      </p>
    </div>
  );
}
