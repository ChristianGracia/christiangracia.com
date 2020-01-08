import React from "react";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

const ProjectBox = ({ description, title, codeLink, tweet, siteLink }) => {
    return (<div>

        <p class="title">
            <a
                class="linkStyle"
                href={siteLink}
            >
                <span>{title}</span>
            </a>
        </p>
        <p class="description">
            {description}
        </p>
        <p class="title">
            code:{" "}
            <a
                class="linkStyle"
                href={codeLink}
            >Link </a>
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
                    tweetId={tweet}
                />
            </div>
        </div>
    </div>)
}
export default ProjectBox;