import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/WhatIDo.css";
import { config } from "../config";

const WhatIDo = () => (
  <div className="whatIDO">
    <div className="what-box">
      <h2 className="title">
        W<span className="hat-h2">HAT</span>
        <span className="what-title-line">I<span className="do-h2"> DO</span></span>
      </h2>
    </div>
    <div className="what-box">
      <div className="what-box-in">
        {config.skills.map(skill => (
          <article key={skill.title} className="what-content">
            <span className="what-corner" aria-hidden="true" />
            <h3>{skill.title}</h3>
            <h4>{skill.description}</h4>
            <p>{skill.details}</p>
            <details onToggle={() => ScrollTrigger.refresh(true)}>
              <summary>
                Skillset &amp; tools
                <span className="what-arrow" aria-hidden="true" />
              </summary>
              <ul className="what-content-flex">
                {skill.tools.map(tool => <li key={tool} className="what-tags">{tool}</li>)}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default WhatIDo;
