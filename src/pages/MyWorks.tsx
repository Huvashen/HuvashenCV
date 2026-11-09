import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const isInternalLink = Boolean(project.link?.startsWith("/"));
          const cardContent = (
            <>
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.summary}</p>
                <p>{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
                <p>{project.role} · {project.visibility}</p>
                <ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            </>
          );

          if (project.githubUrl && project.liveUrl) {
            return (
              <article className="myworks-card" key={project.id}>
                {cardContent}
                <div className="myworks-card-info portfolio-controls">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">View live</a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">View code</a>
                </div>
              </article>
            );
          }

          if (isInternalLink) {
            return (
              <Link
                className="myworks-card"
                key={project.id}
                data-cursor="disable"
                to={project.link}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <a
              className="myworks-card"
              key={project.id}
              data-cursor="disable"
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
