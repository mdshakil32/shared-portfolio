import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PhoneSVG from "./SVG/PhoneSVG";

const AboutMe2 = () => {
  const education = [
    {
      title: "B.Sc in Computer Science & Engineering",
      institution: "Dhaka International University: DIU",
      description:
        'I have completed my "Diploma in computer engineering" course from Kurigram Polytechnic Institute.',
      duration: "Sep 2022 - present",
      link: "",
    },
    {
      title: "B.Sc in Computer Science & Engineering",
      institution: "Dhaka International University: DIU",
      description:
        'I have completed my "Diploma in computer engineering" course from Kurigram Polytechnic Institute.',
      duration: "Sep 2022 - present",
      link: "",
    },
    {
      title: "B.Sc in Computer Science & Engineering",
      institution: "Dhaka International University: DIU",
      description:
        'I have completed my "Diploma in computer engineering" course from Kurigram Polytechnic Institute.',
      duration: "Sep 2022 - present",
      link: "",
    },
  ];

  const experience = [
    {
      company: "B.Sc in Computer Science & Engineering",
      designation: "Dhaka International University: DIU",
      description:
        'I have completed my "Diploma in computer engineering" course from Kurigram Polytechnic Institute.',
      duration: "Sep 2022 - present",
      link: "",
    },
    {
      company: "B.Sc in Computer Science & Engineering",
      designation: "Dhaka International University: DIU",
      description:
        'I have completed my "Diploma in computer engineering" course from Kurigram Polytechnic Institute.',
      duration: "Sep 2022 - present",
      link: "",
    },
    {
      company: "B.Sc in Computer Science & Engineering",
      designation: "Dhaka International University: DIU",
      description:
        'I have completed my "Diploma in computer engineering" course from Kurigram Polytechnic Institute.',
      duration: "Sep 2022 - present",
      link: "",
    },
  ];
  return (
    <div className="bg-gray-200 grid grid-cols-2">
      <VerticalTimeline layout="1-column-right">
        {education.map((item, index) => (
          <div className="pb-10">
            <VerticalTimelineElement
              position="left"
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              iconStyle={{ background: "rgb(33, 150, 243)" }}
            >
              <h3 className="">{item.title}</h3>
              <h4 className="">{item.institution}</h4>
              <p>{item.description}</p>
              <p>Link:{item.link}</p>
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>

      <div className="">
        <VerticalTimeline layout="1-column-right" lineColor="blue">
          {experience.map((item, index) => (
            <div className="pb-10">
              <VerticalTimelineElement
                position="right"
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  borderRight: "0px",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="">{item.title}</h3>
                <h4 className="">{item.institution}</h4>
                <p>{item.description}</p>
                <p>Link:{item.link}</p>
              </VerticalTimelineElement>
            </div>
          ))}
        </VerticalTimeline>
      </div>
      {/* <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline> */}
    </div>
  );
};

export default AboutMe2;
