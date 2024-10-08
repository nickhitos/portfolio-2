import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#f5f5f5",
				color: "#333333",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #f5f5f5" }}
			date={experience.date}
			iconStyle={{
				background: experience.iconBg,
				boxShadow:
					"0 0 0 4px #333333, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 4px 0 2px rgba(0, 0, 0, 0.05)",
			}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-secondary text-[24px] font-bold">
					{experience.title}
				</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-secondary text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					What I have done so far
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Work Experience.
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="#333333">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
