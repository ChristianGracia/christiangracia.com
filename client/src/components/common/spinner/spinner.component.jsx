import React from "react";
import spinner from "../spinner.gif";

export default () => {
    return (
        <div height={200} style={{ backgroundColor: "#3993EC" }}>
            <img
                src={spinner}
                alt="Loading..."
                style={{ width: "200px", margin: "auto", display: "block" }}
            />
        </div>
    );
};