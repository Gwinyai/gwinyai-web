import SkillBar from "react-skillbars";

const skills = [
  { type: "iOS Swift", level: 90 },
  { type: "NodeJS", level: 80 },
  { type: "MongoDB", level: 85 },
  { type: "SQL", level: 75 },
  { type: "Heroku", level: 90 },
  { type: "GraphQL", level: 90 },
  { type: "ReactJS", level: 80 },
  { type: "WatchOS", level: 70 },
  { type: "Android", level: 50 },
  { type: "Unity C#", level: 45 },
  { type: "HTML", level: 90 },
  { type: "CSS", level: 90 },
  { type: "PHP", level: 65 },
  { type: "Javascript", level: 85 },
  { type: "UI/UX", level: 80 },
];

export default function Skills() {
  return (
    <>
      <div className="section container">
        <h1 className="heading-primary">Skills</h1>
        <div className="section-skills">
          <SkillBar
            animationDuration="1100"
            animationDelay="250"
            skills={skills}
          />
        </div>
      </div>
    </>
  );
}
