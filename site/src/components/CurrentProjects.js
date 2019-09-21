import React, { Component } from "react";

export default function CurrentProjects() {
  return (
    <div style={{ flex: 1, alignItems: "center" }}>
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
      <p style={{ textAlign: "center", color: "white" }}>
        Rewriting{" "}
        <a style={{ color: "#FEFF01" }} href="http://onabeat.com">
          {" "}
          onabeat.com
        </a>
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        Not live yet, due to launch in a month or two
      </p>

      <p style={{ textAlign: "center", color: "white" }}>
        Rewriting{" "}
        <a style={{ color: "#FEFF01" }} href="http://nflandscaping.com">
          nflandscaping.com
        </a>
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        Also not live. Waiting on domain access to post what I have written
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        code:{" "}
        <a
          href=" https://github.com/ChristianGracia/nflandscaping.com"
          style={{ color: "#FEFF01" }}
        >
          Code Link
        </a>
      </p>
    </div>
  );
}
