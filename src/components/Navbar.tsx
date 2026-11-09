import { config } from "../config";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scroll = new Lenis({
      lerp: 0.16,
      smoothWheel: !reducedMotion.matches,
    });
    lenis = scroll;
    scroll.stop();
    const listeners = new AbortController();
    let frameId = 0;

    function raf(time: number) {
      scroll.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    document.querySelectorAll<HTMLAnchorElement>(".header ul a").forEach(link => {
      link.addEventListener("click", event => {
        if (window.innerWidth <= 1024 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const section = link.dataset.href;
        const target = section && document.querySelector<HTMLElement>(section);
        if (!target) return;

        event.preventDefault();
        scroll.scrollTo(target, { immediate: reducedMotion.matches });
      }, { signal: listeners.signal });
    });

    return () => {
      listeners.abort();
      cancelAnimationFrame(frameId);
      scroll.destroy();
      lenis = null;
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href={import.meta.env.BASE_URL} className="navbar-title" data-cursor="disable">
          HG
        </a>
        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
