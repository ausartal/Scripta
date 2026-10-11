---
name: Scripta
description: An illustrated creative studio where education, creativity, and technology meet.
colors:
  studio-purple: "#8338ec"
  action-orange: "#fb5607"
  display-orange: "#e94b00"
  peach: "#ffd5bd"
  lavender: "#e8ddf9"
  paper: "#f0ede4"
  ink: "#212529"
  deep-ink: "#1a1d21"
  muted: "#62625b"
  line: "#d4d1c8"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(3rem, 6.2vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.97
  headline:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.125rem)"
    fontWeight: 400
    lineHeight: 1.13
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "8px"
  card: "14px"
  feature: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "48px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.action-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 25px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 25px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "13px 14px"
---

# Design System: Scripta

## Overview

**Creative North Star: "The Illustrated Launchpad"**

Scripta is a warm, high-energy creative studio built from the supplied Figma system. Editorial display type, original character illustrations, and saturated purple and orange surfaces make an unfinished idea feel active and possible. The layout alternates expressive illustrated moments with calm, readable sections so visitors can understand the offer and act without losing the studio's personality.

**Key Characteristics:**

- Original character illustration is the primary visual material.
- Anton headlines carry the voice; Inter keeps navigation, copy, and forms clear.
- Warm paper, deep ink, studio purple, action orange, peach, and lavender form the complete palette.
- Large asymmetric compositions lead; compact cards and restrained controls support them.
- Every claim distinguishes confirmed product truth from illustrative concepts.

## Colors

Purple and orange carry the energy of the supplied Figma identity. Paper and ink create readable intervals between saturated regions; peach and lavender soften supporting sections.

**The Surface Rule.** Purple, orange, paper, and ink own whole regions. Do not reduce the palette to tiny accents on a generic neutral page.

**The Contrast Rule.** Use the darker display-orange for large orange text on paper; retain action-orange for buttons, bands, and decorative surfaces.

## Typography

**Display Font:** Anton (sans-serif fallback)
**Body Font:** Inter (system UI fallback)

Anton is architectural and direct, used for uppercase hero statements, major section headings, and oversized footer lettering. Inter handles navigation, descriptions, labels, data, and form controls. Body copy stays within 75 characters where practical.

**The Two-Voice Rule.** Anton expresses the studio; Inter explains and operates it. Do not substitute a system bold face for display headlines.

## Layout

The desktop container is capped at 1312px with 64px page gutters and 100px section spacing. The homepage follows the Figma hierarchy: split illustrated hero, orange discipline band, dark studio statement, featured service composition, audience field, process, concept portfolio, commitments, collaborator stories, and closing invitation.

At 1000px the composition moves to two-column working grids. At 760px navigation collapses. At 600px the hero, services, audience, process, projects, pricing, form, and footer become a single-column reading flow with 24px gutters. Mobile preserves the original audience illustration and explicit hero line breaks.

## Elevation & Depth

Depth is structural and sparse: floating hero objects use soft offset shadows, while most sections separate through color fields and spacing. Cards generally use either a border or a shadow. Controls use short color and shadow transitions; reduced-motion preferences remove transition duration.

## Motion & Continuity

The hero is the single authored entrance: copy reveals first, the shared creator illustration follows, and supporting studio artifacts settle last. Routine interactions stay between 100–400ms and explain state changes rather than decorating every section. Route arrivals, portfolio results, package recommendations, and form steps use confident ease-out motion; `prefers-reduced-motion` keeps content and feedback visible without spatial movement.

Desktop, tablet, and mobile use the same `mobile-imgHeroCharacter` artwork so the first brand impression stays consistent across devices. Cropping changes with available space, but the character identity does not.

## Shapes

Controls use an 8px radius. Ordinary cards use 12–16px corners, feature cards use 18–20px, and pills are reserved for compact tags and filters. Large 64–160px asymmetric curves belong only to page-scale hero and invitation surfaces.

## Components

### Buttons

Primary actions use action orange, ink text, a 2px transparent border, and a directional line icon. Outline actions inherit the surrounding foreground and become white on purple sections. All interactive controls expose a 3px focus ring.

### Chips

Category filters are 44px-high pills. The selected state becomes solid ink with white text; unselected states stay transparent with a line border.

### Cards / Containers

Service cards use composition to express hierarchy: dark Web and orange App lead, Illustration spans the row, and remaining services are compact. Pricing uses three comparable cards with the central Build package on purple. Portfolio previews are authored interface scenes, always labeled as studio concepts.

### Inputs / Fields

Inputs use paper backgrounds, visible neutral borders, 48px minimum height, explicit labels, purple focus, and clear helper text. The contact form uses three short steps, saves a recoverable versioned draft in local browser storage, prepares a local brief, and states that no server submission occurs.

### Navigation

The owner-provided Scripta logo anchors a 72px header. Desktop shows Services, Portfolio, About Us, Pricing, FAQ, and a project CTA. Mobile keeps the CTA visible and moves links into an accessible menu that closes with Escape.

## Do's and Don'ts

### Do:

- Use the original Figma illustrations in their intended high-salience positions.
- Preserve the warm paper, ink, purple, orange, peach, and lavender rhythm.
- Label concepts, sample stories, pricing, and local-only form behavior honestly.
- Keep keyboard focus, 44px touch targets, URL-backed filters, and reduced-motion support.

### Don't:

- Replace illustrations with generic icons, gradients, or improvised SVG scenes.
- Flatten the page into identical SaaS cards.
- Invent clients, testimonials, prices, delivery timelines, or a working message backend.
- Let mobile remove a key illustrated story beat or join headline words.

