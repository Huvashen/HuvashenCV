import { useState } from "react";
import { assetUrl, config } from "../config";
import "./styles/TechStackNew.css";

const TechStackNew = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const groups = config.skillGroups.filter(group => !activeGroup || group.id === activeGroup);
  const techStack = groups.flatMap(group => [group.skills.slice(0, 5), group.skills.slice(5)]);
  const activeSummary = activeGroup ? groups[0]?.summary : null;
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src={assetUrl("video/video.webm")} type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        <div className="portfolio-controls" role="group" aria-label="Experience categories">
          <button type="button" aria-pressed={activeGroup === null} onClick={() => setActiveGroup(null)}>All</button>
          {config.skillGroups.map(group => (
            <button key={group.id} type="button" aria-pressed={activeGroup === group.id} onClick={() => setActiveGroup(group.id)}>
              {group.tabLabel} {group.skills.length}
            </button>
          ))}
        </div>
        {activeSummary && <p>{activeSummary}</p>}
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <div key={techIndex} className="techstack-item" title={tech.name}>
                  {"logoUrl" in tech && tech.logoUrl && <img src={assetUrl(tech.logoUrl)} alt="" loading="lazy" decoding="async" />}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
