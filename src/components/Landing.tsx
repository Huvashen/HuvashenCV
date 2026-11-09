import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { assetUrl, config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <span id="home-section" className="portfolio-anchor" />
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h2>
              <span className="landing-role-accent">Junior Developer</span>
              <span className="landing-role-main">Full-Stack Developer</span>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img
              src={assetUrl(config.developer.photo)}
              alt={config.developer.fullName}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
