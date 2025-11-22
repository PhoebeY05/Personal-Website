# Personal Portfolio [![wakatime](https://wakatime.com/badge/user/018e18e4-ea39-46c6-b3da-dcbf7a45a702/project/d4ba3e24-1005-49f9-b039-6d381cf6eb74.svg)](https://wakatime.com/badge/user/018e18e4-ea39-46c6-b3da-dcbf7a45a702/project/d4ba3e24-1005-49f9-b039-6d381cf6eb74)

An interactive, data-driven portfolio showcasing projects, skills, experiences, competitions, and growth through build–learn cycles.

## Features
- Animated landing (Aurora / Liquid background field)
- Skills grouped by category with progress visualization
- Timeline views (projects, experiences) with zig‑zag layout
- Filterable experiences (work / volunteering) with state persistence
- Competition filtering (hackathons / CTFs) + achievement highlighting
- Individual pages for skills, projects, experiences
- Media section: adaptive video / image layout
- Stack-style interactive image cards
- Theme toggle with view‑transition reveal
- Responsive design (mobile → desktop)
- Accessible semantic structure (headings, alt text, focus states)
- Data-driven: easy expansion via JSON-like arrays

## Tech Stack
| Layer | Tools |
|-------|-------|
| Framework | React + TypeScript + Vite |
| Styling | Tailwind CSS (v4 syntax), custom CSS variables (light/dark) |
| Animation | Framer Motion, Magic UI React Bits |
| Icons | Lucide React, Heroicons, Flaticoon |
| Routing | react-router-dom |
| Build / Deploy | Vite, GitHub Pages (BASE_URL aware asset paths) |

## Data Sources
- `src/data/projects.ts` – project metadata (name, month, tags, media)
- `src/data/skills.ts` – skill taxonomy (type, level, description)
- `src/data/experiences.ts` – experience records (duration parsing helper)
- `src/data/competitions.ts` – split into noteworthy + participation

All pages derive UI from these arrays—add or modify entries to update content.

## Architecture Overview
```
src/
  components/        # Reusable UI primitives (Tag, PillFilter, Stack, etc.)
  pages/             # Route-level screens (AboutMe, Projects, Experiences, Competitions, etc.)
  data/              # Structured data objects
  assets/            # Images / media referenced via imports
  components/ui/     # Visual effect + animated utility components
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
- Keyboard navigation supported (arrow keys for slider previously; simplified now)
- High contrast state in dark mode


## Future Improvements
- i18n support
- Lazy loading / code splitting
- Search across projects / experiences

## Learning Emphasis
Each section reflects iterative skill acquisition: rapid prototyping, animation integration, performance-aware structuring, and refinement of UI accessibility and responsiveness.

## License
MIT

