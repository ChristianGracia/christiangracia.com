import React, { Component } from "react";
import SkillsAndEdu from "../../skills-and-edu/skills-and-edu.component";
import Sites from "../../sites/sites.components";

export default class About extends Component {
  render() {
    return (
      <div>
        <Sites />
        <SkillsAndEdu />
        <div style={{ padding: 40 }}></div>
      </div>
    );
  }
}
