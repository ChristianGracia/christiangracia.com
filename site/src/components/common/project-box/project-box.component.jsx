import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import "./project-box.styles.css"
import { Button } from "react-bootstrap";

const ProjectBox = ({ description, title, codeLink, tweet, siteLink }) => {
    return (<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>

        <p className="title">
            <a
                className="linkStyle"
                href={siteLink}
            >
                <span>{title}</span>
            </a>
        </p>
        <p className="description" style={{ maxWidth: 900 }}>
            {description}
        </p>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
            <Button onClick={() => window.location.href = codeLink} variant="danger">Link to Code</Button>
        </div>

        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div style={{ minWidth: 290, maxWidth: 700 }}>
                {tweet === "" ? null :
                    <TwitterTweetEmbed
                        options={{ width: 300 }}
                        tweetId={tweet}
                    />}
            </div>
        </div>
    </div>)
}
export default ProjectBox;