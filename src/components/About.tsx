import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { MdArrowOutward } from "react-icons/md";
import "./styles/About.css";
import { assetUrl, config } from "../config";

gsap.registerPlugin(ScrambleTextPlugin);

const About = () => {
  const approachDialog = useRef<HTMLDialogElement>(null);
  const pressedBackdrop = useRef(false);
  const closing = useRef(false);
  const pillarContent = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState(0);
  const pillar = config.workPillars[activePillar];
  useLayoutEffect(() => {
    const content = pillarContent.current;
    if (!content || !approachDialog.current?.open || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = gsap.to(content.querySelectorAll("[data-scramble]"), {
      scrambleText: { text: "{original}", chars: "upperAndLowerCase", speed: 0.65 },
      duration: 0.55,
      ease: "none",
      stagger: 0.035,
    });
    return () => {
      animation.kill();
    };
  }, [activePillar]);

  const openApproach = () => {
    const dialog = approachDialog.current;
    if (!dialog || dialog.open) return;

    pressedBackdrop.current = false;
    dialog.showModal();
    dialog.scrollTop = 0;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(dialog, { opacity: 0, y: 24, scale: 0.98, "--approach-backdrop": 0 }, {
        opacity: 1, y: 0, scale: 1, "--approach-backdrop": 0.72, duration: 0.36, ease: "power3.out",
        clearProps: "opacity,transform,--approach-backdrop", overwrite: true,
      });
    }
  };

  const closeApproach = () => {
    const dialog = approachDialog.current;
    if (!dialog?.open || closing.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.close();
      return;
    }

    closing.current = true;
    gsap.to(dialog, {
      opacity: 0, y: 16, scale: 0.98, "--approach-backdrop": 0,
      duration: 0.24, ease: "power2.in", overwrite: true,
      onComplete: () => {
        dialog.close();
        gsap.set(dialog, { clearProps: "opacity,transform,--approach-backdrop" });
        closing.current = false;
      },
    });
  };

  return (
    <>
      <div className="about-section" id="about">
        <span id="about-section" className="portfolio-anchor" />
        <div className="about-me">
          <h3 className="title">{config.about.title}</h3>
          <p className="para">
            {config.about.description}
          </p>
          <button
            type="button"
            className="cta-btn cta-btn-hire about-approach-trigger"
            aria-haspopup="dialog"
            data-cursor="disable"
            onClick={openApproach}
          >
            How I work <MdArrowOutward aria-hidden="true" />
          </button>
        </div>
      </div>
      <dialog
        ref={approachDialog}
        className="about-approach-dialog"
        aria-labelledby="approach-title"
        data-lenis-prevent
        onPointerDown={event => {
          pressedBackdrop.current = event.target === event.currentTarget;
        }}
        onClick={event => {
          if (pressedBackdrop.current && event.target === event.currentTarget) closeApproach();
          pressedBackdrop.current = false;
        }}
        onCancel={event => {
          event.preventDefault();
          closeApproach();
        }}
      >
        <div className="about-approach-header">
          <h3 id="approach-title">How I work</h3>
        </div>
        <div className="about-approach-body">
          <img
            className="about-banner"
            src={assetUrl("assets/images/developer-banner.png")}
            alt="Huvashen Gramani, Software Developer. HTML, CSS, JavaScript, Java, C++, and C#."
            width={1584}
            height={396}
            loading="lazy"
            decoding="async"
          />
          <div className="about-approach-topics" role="group" aria-label="Working style">
            {config.workPillars.map((item, index) => (
              <button
                type="button"
                className="cta-btn cta-btn-play about-approach-button"
                key={item.id}
                aria-pressed={activePillar === index}
                data-cursor="disable"
                onClick={() => setActivePillar(index)}
              >
                {item.kicker}
              </button>
            ))}
          </div>
          <div className="about-approach-pillar" aria-live="polite">
            <div key={pillar.id} ref={pillarContent}>
              <h4>
                <span className="about-approach-sr-text">{pillar.title}</span>
                <span aria-hidden="true" data-scramble>{pillar.title}</span>
              </h4>
              <p>
                <span className="about-approach-sr-text">{pillar.description}</span>
                <span aria-hidden="true" data-scramble>{pillar.description}</span>
              </p>
              <ul>
                {pillar.outcomes.map(outcome => (
                  <li key={outcome}>
                    <span className="about-approach-sr-text">{outcome}</span>
                    <span aria-hidden="true" data-scramble>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-approach-highlights">
            {config.aboutHighlights.slice(2).map(highlight => (
              <div key={highlight.title}>
                <h4>{highlight.title}</h4>
                <p>{highlight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default About;
