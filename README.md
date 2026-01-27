# Zaid Haroon - Wealth Architecture

A highly bespoke, premium real estate portfolio management landing page built for High-Net-Worth Individuals (HNWI) in Singapore. This project emphasizes a "dark luxury" aesthetic with advanced animations and interactive financial visualizations.

![Zaid Haroon Profile](public/zaid-profile-gold.png)

## Tech Stack
*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

The codebase follows a modular component architecture:

```
app/
├── page.tsx                 # Main page (imports all components)
├── layout.tsx               # Root layout
├── globals.css              # Global styles
└── components/
    ├── utils.ts             # Utility functions (cn, constants)
    ├── shared/              # Reusable UI components
    │   ├── NoiseOverlay.tsx
    │   ├── GridBackground.tsx
    │   ├── RevealText.tsx
    │   ├── PremiumButton.tsx
    │   ├── Section.tsx
    │   └── index.ts
    ├── modals/              # Modal components
    │   ├── VideoModal.tsx
    │   ├── ContactModal.tsx
    │   ├── CaseStudyModal.tsx
    │   ├── MenuOverlay.tsx
    │   └── index.ts
    └── sections/            # Page sections
        ├── Hero.tsx
        ├── Credentials.tsx
        ├── RealityCheck.tsx
        ├── Methodology.tsx
        ├── CaseStudies.tsx
        ├── Profile.tsx
        ├── Honours.tsx
        ├── FreeResource.tsx
        ├── CTA.tsx
        ├── Footer.tsx
        └── index.ts
```

## Key Features

### 1. The Blueprint Visualizer
An interactive, animated SVG projection graph that simulates live market tracking and wealth projection.
*   **Fluctuating Graph**: Simulates organic market movement.
*   **Scanner Effect**: Vertical scan line for a technical/auditing feel.
*   **Live Data HUD**: Floating data points and coordinates.

### 2. Confidential Dossier (3D Book)
A CSS-3D transformed book component.
*   **True Depth**: Features realistic spine, covers, and page thickness.
*   **Interactive**: Responds to mouse movement with parallax rotation.

### 3. UI Refinements
*   **Centered Layouts**: Key sections like the Contact CTA are centered for maximum impact.
*   **Navigation**: "Back to Top" button positioned for easy access without obstructing content.
*   **Optimized Spacing**: Refined vertical rhythm for a tighter, more cohesive reading experience, specifically improving the flow between Bio, Awards, and Call-to-Action sections.

### 4. Case Studies Marquee
A full-width, infinite scrolling ticker of success stories.
*   **Modal Interaction**: Clicking any case study opens a detailed "Declassified" mission file.

### 4. Beast Mode Branding
*   **Golden Gradient**: Custom processed profile imagery.
*   **Signature**: Bespoke signature watermark.
*   **Architectural Grid**: Subtle animated backdrops.

### 5. WhatsApp & Call Command Center
A unified communication widget inspired by luxury concierge services.
*   **Direct Access**: One-tap WhatsApp and Call integration.
*   **Intelligent Greeting**: Simulated typing and automated welcome message.
*   **Multi-Channel**: Supports Voice Call, FaceTime, and WhatsApp.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Asset Credits
*   **Images**: Unsplash (Premium Real Estate)
*   **Fonts**: Inter (Sans), Playfair Display (Serif), JetBrains Mono (Code), Great Vibes (Signature).
