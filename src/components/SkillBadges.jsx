const skills = [
    { name: "JavaScript", color: "F7DF1E", logo: "javascript", textColor: "black" },
    { name: "TypeScript", color: "3178C6", logo: "typescript", textColor: "white" },
    { name: "React", color: "61DAFB", logo: "react", textColor: "black" },
    { name: "Node.js", color: "339933", logo: "node.js", textColor: "white" },
    { name: "Python", color: "44bbe5", logo: "python", textColor: "white" },
    { name: "MongoDB", color: "47A248", logo: "mongodb", textColor: "white" },
    { name: "MySQL", color: "4479A1", logo: "mysql", textColor: "white" },
    { name: "NestJS", color: "E0234E", logo: "nestjs", textColor: "white" },
    { name: "Agile", color: "02569B", logo: "agile", textColor: "white" }, 
    { name: "Trello", color: "0052CC", logo: "trello", textColor: "white" },
    { name: "Git", color: "F05032", logo: "git", textColor: "white" },
    { name: "GitHub", color: "181717", logo: "github", textColor: "white" },
    { name: "Postman", color: "FF6C37", logo: "postman", textColor: "white" },
    { name: "Google Apps Script", color: "34A853", logo: "googleapps", textColor: "white" }
];
  
  const SkillBadges = () => {
    return (
      <div className="flex flex-wrap gap-2 justify-center p-4">
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.textColor}`}
            alt={skill.name}
            className="h-10"
          />
        ))}
      </div>
    );
  };
  
  export default SkillBadges;
  