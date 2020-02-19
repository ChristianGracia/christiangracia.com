import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TweetsComponent = ({ showTwitter }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 1000, width: "90vw", margin: "0 auto", marginTop: 60 }}>

            {showTwitter ? <TwitterTimelineEmbed
                sourceType="profile"
                screenName="CG_CODING"
                options={{ height: 800, width: 330 }}
                autoHeight="true"
            // onComplete={action}
            /> : null}


        </div>)
}

export default TweetsComponent;