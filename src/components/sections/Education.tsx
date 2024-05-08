import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { educations } from "../../constants"; // Assuming educations is an array of type Education
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TEducation } from "../../types";


const EducationCard: React.FC<TEducation> = ( educations ) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={educations.date}
      iconStyle={{ background: educations.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={educations.icon}
            alt={educations.institute_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{educations.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {educations.institute_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {educations.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education: React.FC = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} {...education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
