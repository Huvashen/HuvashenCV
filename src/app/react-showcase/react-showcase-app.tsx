import { useEffect, useState, type CSSProperties } from 'react';

interface ShowcaseMode {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  accent: string;
  accentSoft: string;
  stat: string;
  chips: string[];
  cards: Array<{ label: string; value: string }>;
  bars: number[];
}

const modes: ShowcaseMode[] = [
  {
    id: 'motion',
    label: 'Interface',
    eyebrow: 'UI polish',
    headline: 'Responsive interfaces with purposeful motion',
    accent: '#2dbfaf',
    accentSoft: 'rgba(45, 191, 175, 0.18)',
    stat: 'Active',
    chips: ['Hierarchy', 'Motion', 'Responsive'],
    cards: [
      { label: 'Layout', value: 'structured' },
      { label: 'Interaction', value: 'refined' },
      { label: 'Detail', value: 'focused' }
    ],
    bars: [86, 62, 94]
  },
  {
    id: 'build',
    label: 'Systems',
    eyebrow: 'Full-stack logic',
    headline: 'APIs, data flow, and reliable feature delivery',
    accent: '#f0b35f',
    accentSoft: 'rgba(240, 179, 95, 0.18)',
    stat: 'Ready',
    chips: ['API', 'Data', 'C# / .NET'],
    cards: [
      { label: 'State', value: 'managed' },
      { label: 'Flow', value: 'structured' },
      { label: 'Delivery', value: 'stable' }
    ],
    bars: [78, 88, 67]
  },
  {
    id: 'launch',
    label: 'Delivery',
    eyebrow: 'Portfolio direction',
    headline: 'Component-led builds that stay scalable',
    accent: '#86a7ff',
    accentSoft: 'rgba(134, 167, 255, 0.18)',
    stat: 'Growing',
    chips: ['Angular', 'React', 'Tailwind'],
    cards: [
      { label: 'Focus', value: 'practical' },
      { label: 'Layout', value: 'responsive' },
      { label: 'Polish', value: 'consistent' }
    ],
    bars: [93, 71, 84]
  }
];

export function ReactShowcaseApp() {
  const [activeModeId, setActiveModeId] = useState(modes[0].id);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveModeId((currentId) => {
        const currentIndex = modes.findIndex((mode) => mode.id === currentId);
        return modes[(currentIndex + 1) % modes.length].id;
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const activeMode =
    modes.find((mode) => mode.id === activeModeId) ?? modes[0];

  const accentStyle = {
    '--react-accent': activeMode.accent,
    '--react-accent-soft': activeMode.accentSoft
  } as CSSProperties;

  return (
    <div className="react-island" style={accentStyle}>
      <div className="react-island__intro">
        <span className="react-island__eyebrow">React enabled</span>
        <h2 className="react-island__title">Full-stack interaction layer</h2>
        <p className="react-island__copy">
          A compact showcase for polished motion, structured UI, and scalable component thinking.
        </p>
      </div>

      <div className="react-island__controls">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            className={`react-island__control${
              mode.id === activeMode.id ? ' is-active' : ''
            }`}
            onClick={() => setActiveModeId(mode.id)}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div className="react-island__stage">
        <div className="react-island__screen">
          <div className="react-island__screen-bar">
            <div className="react-island__dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="react-island__screen-label">
              {activeMode.eyebrow}
            </span>
            <span className="react-island__screen-stat">{activeMode.stat}</span>
          </div>

          <div className="react-island__screen-grid">
            <div className="react-island__main-card">
              <div className="react-island__glint"></div>
              <div className="react-island__headline-row">
                <span className="react-island__mini-label">
                  {activeMode.label}
                </span>
                <span className="react-island__mini-stat">{activeMode.stat}</span>
              </div>

              <h3 className="react-island__headline">
                {activeMode.headline}
              </h3>

              <div className="react-island__chip-row">
                {activeMode.chips.map((chip) => (
                  <span key={chip} className="react-island__chip">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="react-island__bars">
                {activeMode.bars.map((bar, index) => (
                  <span
                    key={`${activeMode.id}-${bar}-${index}`}
                    className="react-island__bar"
                    style={{
                      width: `${bar}%`,
                      animationDelay: `${index * 140}ms`
                    }}
                  ></span>
                ))}
              </div>
            </div>

            <div className="react-island__stack">
              {activeMode.cards.map((card, index) => (
                <article
                  key={`${activeMode.id}-${card.label}`}
                  className="react-island__stack-card"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <span className="react-island__stack-label">
                    {card.label}
                  </span>
                  <span className="react-island__stack-value">
                    {card.value}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="react-island__float react-island__float--one">
          React component
        </div>
        <div className="react-island__float react-island__float--two">
          Angular shell
        </div>
        <div className="react-island__orbit react-island__orbit--one"></div>
        <div className="react-island__orbit react-island__orbit--two"></div>
      </div>
    </div>
  );
}
