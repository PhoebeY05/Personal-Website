# Personal Portfolio [![wakatime](https://wakatime.com/badge/user/018e18e4-ea39-46c6-b3da-dcbf7a45a702/project/d4ba3e24-1005-49f9-b039-6d381cf6eb74.svg)](https://wakatime.com/badge/user/018e18e4-ea39-46c6-b3da-dcbf7a45a702/project/d4ba3e24-1005-49f9-b039-6d381cf6eb74)

An interactive, data-driven portfolio showcasing projects, skills, experiences, competitions, and growth through build–learn cycles.

## Features

- Dynamic sections: Projects, Skills, Experiences, Competitions
- Interactive filtering and timelines
- Adaptive media (images + video) and stacked gallery
- Animated theme + subtle motion enhancements
- Fully responsive and data-driven

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS (v4 syntax), custom CSS variables (light/dark) |
| Animation | Framer Motion, Magic UI, React Bits |
| Icons | Lucide React, Heroicons, Flaticoon |
| Routing | react-router-dom |
| Build / Deploy | Vite, GitHub Pages |

## Data Sources

- `src/data/projects.ts` – project metadata (name, month, tags, media)
- `src/data/skills.ts` – skill taxonomy (type, level, description)
- `src/data/experiences.ts` – experience records
- `src/data/competitions.ts` – split into noteworthy + participation

All pages derive UI from these arrays—add or modify entries to update content.

## Architecture Overview

```
src/
  components/        # Reusable UI primitives (Tag, PillFilter, Stack, etc.)
  pages/             # Route-level screens (AboutMe, Projects, Experiences, Competitions, etc.)
  data/              # Structured data objects
  assets/            # Images / media referenced via imports
  components/       # Reusable components
```

## Animation & Motion

- Framer Motion for entrance + hover micro-interactions
- LiquidEther background
- Magic UI theme toggler

## Theming

Light/Dark controlled by `document.documentElement.classList.toggle('dark')`.  
CSS variables mapped to Tailwind theme tokens for consistent design.

## Accessibility

- Alt text on media
- High contrast state in dark mode

## Future Improvements

- i18n support (translation)
- Lazy loading / code splitting
- Search across projects / experiences / competitions
- Blog section
- Education section

## Learning Emphasis

Each section reflects iterative skill acquisition: rapid prototyping, animation integration, performance-aware structuring, and refinement of UI accessibility and responsiveness.
