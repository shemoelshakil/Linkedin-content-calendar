# LinkedIn Content Calendar

An interactive React component that visualizes a LinkedIn content calendar for **April 15–30, 2026**. Each day is a card you can click to reveal the full post — hook, body/slide breakdown, audience, and CTA. Posts are filterable by tag (Tools, AI × Design, Industry, Vibe Coding, Agentic UX, Design Systems).

Built with React + Vite. Styled inline with DM Sans and Instrument Serif.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
.
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                    # React entry point
    └── april-content-calendar.jsx  # The calendar component + data
```

All post data lives in the `calendarData` array at the top of `src/april-content-calendar.jsx` — edit it there to change or extend the calendar.

## License

MIT — see [LICENSE](LICENSE).
