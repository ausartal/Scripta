# SCRIPTA — Visual Specifications & Component Examples

## QUICK REFERENCE

### Color Tokens Quick Lookup

**Light Mode Base**
```
Primary BG:    #F8FAFC
Card:          #FFFFFF
Primary:       #6366F1
Text:          #172033
Secondary:     #64748B
Border:        #E2E8F0
```

**Dark Mode Base**
```
Primary BG:    #0B1120
Card:          #172033
Primary:       #818CF8
Text:          #F8FAFC
Secondary:     #94A3B8
Border:        #263449
```

**Service Accent Colors**
| Service | Light | Dark |
|---------|-------|------|
| Technology (Web) | #38BDF8 | #7DD3FC |
| Education | #34D399 | #6EE7B7 |
| Creative (Design) | #F472B6 | #F9A8D4 |
| Entertainment (Game) | #FB923C | #FDBA74 |
| AI/Innovation | #A78BFA | #C4B5FD |
| Achievement | #FBBF24 | #FDE68A |

---

## SECTION 1: HERO SECTION SPECIFICATION

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                     NAVBAR (fixed)                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│  HERO CONTENT (Left side - 50-60%)                     │
│  ┌──────────────────────────────────┐                  │
│  │                                  │                  │
│  │  "Ideas deserve to become       │                  │
│  │   something real."              │                  │
│  │  (Instrument Serif, 56-64px)    │                  │
│  │                                  │                  │
│  │  Scripta membantu pelajar...    │                  │
│  │  (Plus Jakarta Sans, 18px)      │                  │
│  │                                  │                  │
│  │  [Start a Project] [Explore]    │                  │
│  │                                  │                  │
│  └──────────────────────────────────┘                  │
│                                      FLOATING VISUALS   │
│                                      (Right - 40-50%)   │
│                                      ┌───────┐          │
│                                      │ Card1 │          │
│                                      └───────┘          │
│                                          ┌───────┐      │
│                                          │ Card2 │      │
│                                          └───────┘      │
│                                      ┌───────┐          │
│                                      │ Card3 │          │
│                                      └───────┘          │
│                                                         │
└─────────────────────────────────────────────────────────┘

HEIGHT: 80vh (or min 600px)
PADDING: 80px top, 40px sides
BACKGROUND: Subtle gradient from #F8FAFC to #F1F5F9
```

### Hero Floating Cards

**Structure:**
```
┌────────────────────┐
│ CARD               │
│                    │
│  Browser window    │
│  with website UI   │
│  mockup            │
│                    │
│  Accent border     │
│  (top-left color)  │
└────────────────────┘

Dimensions: 280-320px wide
Border radius: 20-24px
Shadow: 0 12px 32px rgba(0,0,0,0.08)
Background: #FFFFFF
Border: 4-6px solid [accent-color]
Padding: 16px

Animated: Subtle floating motion
- Float up/down 4-8px
- Duration: 4-6s infinite
- Offset per card: staggered (1s apart)
```

**Content inside card:**
- Website/app screenshots (real or mockup)
- Icon + label (e.g., "Web Design")
- Small badge with accent color

### Hero CTA Buttons

**Primary Button (Start a Project)**
```
Shape:   Rounded pill (border-radius: 16px)
Padding: 14px 32px (height ~48px)
Text:    Plus Jakarta Sans, 16px, Semi-bold, #FFFFFF
Background: Linear gradient(135deg, #6366F1, #8B5CF6)
Shadow:  0 4px 12px rgba(99, 102, 241, 0.3)
Icon:    Arrow right (4px margin-left)

Hover state:
- Background: Gradient darker (#4F46E5, #7C3AED)
- Shadow: 0 8px 24px rgba(99, 102, 241, 0.4)
- Transform: translateY(-2px)
- Transition: 300ms ease-out
```

**Secondary Button (Explore Services)**
```
Shape:    Rounded (border-radius: 16px)
Padding:  14px 32px (height ~48px)
Text:     Plus Jakarta Sans, 16px, Semi-bold, #172033
Background: Transparent
Border:   2px solid #E2E8F0
Shadow:   None initially

Hover state:
- Background: #F1F5F9
- Border-color: #6366F1
- Transition: 200ms ease-out
```

---

## SECTION 2: SERVICES SECTION SPECIFICATION

### Section Layout

```
HEADLINE (Center)
"One Idea. Many Possibilities."
Instrument Serif, 48px, margin-bottom: 64px

8-CARD GRID (Responsive)
Desktop: 4 columns (2 rows)
Tablet: 3 columns 
Mobile: 2 columns (stack to 1 if space)

Each card staggered on hover
Individual scale + lift effect
```

### Service Card Anatomy

```
┌──────────────────────────────────────────┐
│                                          │
│ ▌ ACCENT COLOR BAR (6px wide, full height)
│   └─ Based on service type               │
│                                          │
│  ICON (48x48px, service color)          │
│  ┌────────┐                              │
│  │ 🌐     │                              │
│  └────────┘                              │
│                                          │
│  SERVICE NAME                            │
│  "Web Development"                       │
│  (Plus Jakarta Sans, 18px, Semi-bold)   │
│                                          │
│  Service description (14px, muted)      │
│  "Create stunning websites with..."     │
│                                          │
│  • Responsive design                     │
│  • Performance optimized                 │
│  • Modern stack                          │
│                                          │
│  Learn more →                            │
│  (Text link with arrow animation)       │
│                                          │
└──────────────────────────────────────────┘

Padding: 32px all around
Border-radius: 24px
Background: #FFFFFF
Border: None (shadow provides depth)
Shadow: 0 4px 12px rgba(0,0,0,0.08)
Min-height: 320px

HOVER STATE:
├─ Shadow: 0 12px 24px rgba(0,0,0,0.12)
├─ Transform: translateY(-8px)
├─ Arrow: Slide right +4px
├─ Accent bar: Glow effect (opacity increase)
└─ Transition: 300ms ease-out
```

### Service Card Color Mapping

```
🌐 WEB DEVELOPMENT
   Accent: #38BDF8 (Sky Blue)
   Icon BG: rgba(56, 189, 248, 0.1)

📱 APP DEVELOPMENT  
   Accent: #3B82F6 (Blue)
   Icon BG: rgba(59, 130, 246, 0.1)

🎮 GAME DEVELOPMENT
   Accent: #FB923C (Orange)
   Icon BG: rgba(251, 146, 60, 0.1)

🎨 ILLUSTRATION & VISUAL
   Accent: #F472B6 (Pink)
   Icon BG: rgba(244, 114, 182, 0.1)

📚 ONLINE TUTORING
   Accent: #34D399 (Mint)
   Icon BG: rgba(52, 211, 153, 0.1)

🧪 EDUCATION SOLUTIONS
   Accent: #06B6D4 (Cyan)
   Icon BG: rgba(6, 182, 212, 0.1)

🤖 AI & TECHNOLOGY
   Accent: #A78BFA (Purple)
   Icon BG: rgba(167, 139, 250, 0.1)

✍️ ACADEMIC ASSISTANCE
   Accent: #FBBF24 (Amber)
   Icon BG: rgba(251, 191, 36, 0.1)
```

---

## SECTION 3: HOW IT WORKS SPECIFICATION

### Process Flow Layout

```
HEADLINE (Center)
"Our Simple 4-Step Process"
Instrument Serif, 48px, margin-bottom: 64px

TIMELINE VISUALIZATION

01 ──────────────────────── 02
TELL US              WE PLAN
  │                    │
  └────────────────────┘
     (connecting line)

03 ──────────────────────── 04
WE CREATE           YOU GET IT
  │                    │
  └────────────────────┘
     (connecting line)

OR: Vertical staggered layout (more interesting)

   01                   02
TELL US ─────────► WE PLAN
                      
   03                   04
WE CREATE ◄───── YOU GET IT
```

### Process Card Anatomy

```
┌──────────────────────────────┐
│                              │
│      STEP NUMBER             │
│      "01"                    │
│  (Instrument Serif, 64px,   │
│   color: primary, opacity)  │
│                              │
│      STEP TITLE              │
│      "Tell Us"               │
│  (Plus Jakarta Sans, 24px,  │
│   semi-bold)                 │
│                              │
│      DESCRIPTION             │
│      "Share your idea,      │
│       goals, and vision      │
│       with our team."        │
│  (Plus Jakarta Sans, 16px)  │
│                              │
│      ICON                    │
│      💡 (48x48)              │
│                              │
│      CTA LINK                │
│      "Learn more →"          │
│                              │
└──────────────────────────────┘

Card dimensions: 320px square
Border-radius: 28px
Background: Soft gradient or solid + accent
Padding: 40px
Shadow: 0 8px 20px rgba(0,0,0,0.1)

Each step uses different accent color gradient
```

### Connecting Lines

```
Direction: 135° diagonal (top-left to bottom-right)
Color: Primary (#6366F1) with opacity 0.2
Width: 3px
Length: 240-320px (varies by layout)
Style: Solid line with arrowhead (optional)

Animation: Subtle dash animation on scroll
- Dash array: 10, 5
- Animation: 20s linear infinite
- On reveal: Grow from 0% to 100%
```

---

## SECTION 4: PORTFOLIO / CASE STUDIES SPECIFICATION

### Portfolio Grid Layout

```
HEADLINE (Left-aligned for asymmetry)
"Our Creative Playground"
Instruction Serif, 48px, margin-bottom: 48px

FEATURED PROJECTS (Asymmetric Masonry)

┌──────────────────────┐  ┌─────────────┐
│   CASE STUDY 1       │  │  CASE       │
│   Large 2x height    │  │  STUDY 2    │
│                      │  │             │
│   ┌───────────────┐  │  │             │
│   │   Image 16:9  │  │  │  ┌────────┐ │
│   │               │  │  │  │ Image  │ │
│   └───────────────┘  │  │  │ 16:9   │ │
│                      │  │  └────────┘ │
│   Title + tags       │  │             │
│   ↓ View Study       │  │  Title      │
│                      │  │  ↓ View     │
└──────────────────────┘  └─────────────┘

┌─────────────┐  ┌──────────────────────┐
│  CASE       │  │   CASE STUDY 4       │
│  STUDY 3    │  │   Large 2x width     │
│             │  │                      │
│  ┌────────┐ │  │   ┌───────────────┐  │
│  │ Image  │ │  │   │   Image 16:9  │  │
│  │ 16:9   │ │  │   │               │  │
│  └────────┘ │  │   └───────────────┘  │
│             │  │                      │
│  Title      │  │   Title + tags       │
│  ↓ View     │  │   ↓ View Study       │
│             │  │                      │
└─────────────┘  └──────────────────────┘

CTA: "View All Projects →" (full width, centered)
```

### Case Study Card Components

```
PROJECT IMAGE
├─ Aspect ratio: 16:9
├─ Border-radius: 20px
├─ Object-fit: cover
├─ Overlay on hover: rgba(0,0,0,0.3)
└─ Transition: 400ms ease-out

PROJECT TITLE
├─ Font: Instrument Serif, 28px, Bold
├─ Color: #172033
├─ Margin-top: 20px
└─ Max-width: Container width - padding

CATEGORY TAGS
├─ Font: Plus Jakarta Sans, 12px, Medium
├─ Background: Service accent color (opacity 0.15)
├─ Text-color: Accent color (darker)
├─ Padding: 6px 12px
├─ Border-radius: 20px (pill)
├─ Display: Inline-block with 8px gap
└─ Example: "Education", "Web", "Design"

DESCRIPTION TEXT
├─ Font: Plus Jakarta Sans, 16px, Regular
├─ Color: #64748B
├─ Max-width: 80% (for asymmetry)
├─ Margin: 16px top
└─ Line-height: 1.6

CTA LINK
├─ Text: "View Case Study →"
├─ Font: Plus Jakarta Sans, 14px, Medium
├─ Color: #6366F1
├─ Hover: Color + arrow slides right
├─ Transition: 200ms ease-out
└─ Margin-top: 16px
```

---

## SECTION 5: FORM & CTA SECTION SPECIFICATION

### Final CTA Section (Before Footer)

```
┌──────────────────────────────────────────────┐
│                                              │
│  BACKGROUND                                  │
│  Linear gradient(135deg, #6366F1, #8B5CF6) │
│  Or: Deep navy with gradient overlay        │
│                                              │
│  ┌────────────────────────────────────────┐ │
│  │  HEADLINE (Center, white text)         │ │
│  │  "Have an Idea?"                       │ │
│  │  (Instrument Serif, 48-56px)           │ │
│  │                                        │ │
│  │  SUBHEADING                            │ │
│  │  "Let's make it real."                 │ │
│  │  (Plus Jakarta Sans, 20px, light)      │ │
│  │                                        │ │
│  │  [Start a Project →]                   │ │
│  │  (Large white button with primary glow)│ │
│  │                                        │ │
│  └────────────────────────────────────────┘ │
│                                              │
│  DECORATIVE ELEMENTS                        │
│  Floating shapes + accent colors            │
│  (Background, low opacity)                  │
│                                              │
│  Shape 1: Circle, sky blue, opacity 0.1    │
│  Shape 2: Rounded square, pink, opacity 0.1│
│  Shape 3: Blob, purple, opacity 0.08       │
│                                              │
└──────────────────────────────────────────────┘

PADDING: 80-120px vertical, 40px horizontal
MARGIN: 80px top/bottom
MIN-HEIGHT: 400px
```

### Contact Form Specification

```
FORM CONTAINER
┌──────────────────────────────┐
│ GET IN TOUCH                 │
│ (H2, 32px)                   │
│                              │
│ NAME                         │
│ [___________________]        │
│                              │
│ EMAIL                        │
│ [___________________]        │
│                              │
│ PROJECT TYPE                 │
│ [Select dropdown ▼]          │
│                              │
│ MESSAGE                      │
│ [_____________________]      │
│ [___________________]        │
│ [___________________]        │
│                              │
│ [Send Message]               │
│                              │
└──────────────────────────────┘

Form-grid: 2 columns (desktop), 1 (mobile)
Field gap: 20px
Input height: 48px
Textarea min-height: 120px
Button width: 50% or full-width (mobile)
```

---

## SECTION 6: DARK MODE COMPONENT EXAMPLES

### Dark Mode Service Card

```
┌──────────────────────────────────────────┐
│                                          │
│ ▌ ACCENT COLOR (brighten in dark)       │
│   6px solid, full height                 │
│   Example: #7DD3FC (sky blue)            │
│                                          │
│  ICON (48x48)                            │
│  Background: rgba(129, 140, 248, 0.15)  │
│  (primary color with low opacity)        │
│                                          │
│  SERVICE NAME                            │
│  "Web Development"                       │
│  Color: #F8FAFC                          │
│                                          │
│  Description                             │
│  Color: #94A3B8 (muted text)             │
│  "Create stunning websites..."           │
│                                          │
│  • Responsive design                     │
│  • Performance optimized                 │
│  • Modern stack                          │
│                                          │
│  Learn more →                            │
│  Color: #7DD3FC (accent, lighter)       │
│                                          │
└──────────────────────────────────────────┘

Background: #172033 (level 2 surface)
Border: 1px solid #263449 (subtle)
Shadow: 0 4px 16px rgba(0, 0, 0, 0.3)

Hover:
├─ Background: #1F2937 (lift to level 3)
├─ Shadow: 0 12px 32px rgba(0, 0, 0, 0.4)
├─ Transform: translateY(-8px)
└─ Transition: 300ms ease-out
```

### Dark Mode Button

```
PRIMARY BUTTON (Dark mode)
Background: Linear gradient(135deg, #818CF8, #C4B5FD)
Text: #0B1120 (dark text on light gradient)
Shadow: 0 4px 12px rgba(129, 140, 248, 0.25)

Hover:
├─ Background: Gradient slightly more saturated
├─ Shadow: 0 8px 20px rgba(129, 140, 248, 0.3)
├─ Glow: Subtle box-shadow glow (outer)
└─ Transform: translateY(-2px)

SECONDARY BUTTON (Dark mode)
Background: Transparent
Border: 2px solid #263449
Text: #F8FAFC
Hover:
├─ Background: #263449
├─ Border-color: #818CF8
└─ Transition: 200ms ease-out
```

### Dark Mode Form Input

```
INPUT FIELD
Background: #111827 (level 1 surface)
Border: 1px solid #263449
Text: #F8FAFC
Placeholder: #64748B

Focus:
├─ Border-color: #818CF8
├─ Box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.15)
├─ Background: unchanged (subtle)
└─ Transition: 200ms ease-out

LABEL
Text: #F8FAFC
Font-size: 14px, semi-bold
```

---

## SECTION 7: ANIMATION & INTERACTION EXAMPLES

### Scroll Reveal Animation

```
INITIAL STATE
opacity: 0
transform: translateY(20px)

TRIGGERED STATE (on scroll)
animation: fade-in-up 600ms ease-out forwards

KEYFRAMES
0% {
  opacity: 0
  transform: translateY(20px)
}
100% {
  opacity: 1
  transform: translateY(0)
}

STAGGER (multiple elements)
Set animation-delay:
- Item 1: 0ms
- Item 2: 100ms
- Item 3: 200ms
- Item 4: 300ms
```

### Card Hover Animation

```
INITIAL
transform: translateY(0px)
box-shadow: 0 4px 12px rgba(0,0,0,0.08)

HOVER
transform: translateY(-8px)
box-shadow: 0 12px 24px rgba(0,0,0,0.15)
transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)

(cubic-bezier creates slight bounce on ease-out)
```

### Floating Animation (Decorative)

```
@keyframes float {
  0%, 100% {
    transform: translateY(0px)
  }
  50% {
    transform: translateY(-20px)
  }
}

animation: float 4s ease-in-out infinite

Stagger per element:
element-1: animation-delay: 0s
element-2: animation-delay: 1s
element-3: animation-delay: 2s
```

### Button Hover + Click Animation

```
HOVER
transform: translateY(-2px) scale(1.02)
box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4)

ACTIVE/CLICK
transform: translateY(0px) scale(0.98)
box-shadow: 0 4px 8px rgba(99, 102, 241, 0.2)

Transition: 150ms cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Loading State (Form Submission)

```
INITIAL
[Send Message]

LOADING
[Sending...]  (text changes)
Opacity: 0.6
Pointer-events: none (disable clicks)
Spinner: Subtle rotating border (soft colors)

SUCCESS
[Message Sent! ✓]
Color shift to green (#10B981)
Duration: Auto-dismiss after 3s

ERROR
[Try Again]
Color shift to red (#EF4444)
Shake animation: translateX(±4px) × 3
Duration: 400ms
```

---

## SECTION 8: RESPONSIVE EXAMPLES

### Mobile Service Card

```
Mobile (< 640px):
Card width: Full width - 32px padding
Padding: 24px (reduced)
Font sizes: Slightly smaller
Icon: 40x40px (instead of 48x48)

LAYOUT:
Icon - Title in horizontal (side by side)
Description below (full width)
Features stacked
Link at bottom

Touch target: Minimum 44x44px for interactive elements
```

### Mobile Form Layout

```
MOBILE FORM
Fields: 100% width, stacked vertically
Field height: 48px (touch-friendly)
Font-size: 16px minimum (prevents zoom)
Focus-ring: Visible, contrasting

Button:
├─ Full width
├─ Height: 54px (large touch target)
├─ Font: 16px, semi-bold
└─ Padding: 16px 24px
```

### Navbar Mobile

```
Desktop:
Horizontal layout with menu items visible

Mobile (< 768px):
├─ Logo: 32px
├─ Theme toggle: Visible
├─ Menu: Hamburger icon
├─ Menu drawer: Slide from left
│  - Full height
│  - Overlay backdrop
│  - Services list
│  - Contact CTA
│  - Close button
└─ Animation: Slide 300ms ease-out

Hamburger icon: 3 lines, 24x24px total
Color: Matches text color (toggles with dark mode)
```

---

## SECTION 9: ACCESSIBILITY SPECIFICATIONS

### Color Contrast Requirements

```
WCAG AA Standard (minimum):
Normal text: 4.5:1 contrast ratio
Large text: 3:1 contrast ratio
UI components: 3:1 contrast ratio

VERIFY:
Light mode:
- #172033 (text) on #FFFFFF (surface) = 12.6:1 ✓ High contrast
- #64748B (secondary) on #FFFFFF = 4.9:1 ✓ Passes AA
- #F8FAFC (soft bg) on #FFFFFF = 1.1:1 ✗ Use only for separation, not text

Dark mode:
- #F8FAFC (text) on #172033 (surface) = 12.8:1 ✓ High contrast
- #94A3B8 (secondary) on #172033 = 5.1:1 ✓ Passes AA
- #818CF8 (primary) on #0B1120 = 5.9:1 ✓ Passes AA
```

### Focus States

```
INPUT/BUTTON FOCUS
Outline: 3px solid #6366F1 (2px offset from element)
OR Box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5)
Visible: High contrast against background
Never removed (use outline instead of none)

Keyboard Navigation:
Tab order: Logical, top-to-bottom, left-to-right
Skip links: Present for main content
Focus visible: Always maintained

Dark mode focus:
Outline: 3px solid #818CF8 (lighter for contrast)
```

### Touch Targets

```
Minimum size: 44x44px (WCAG 2.1 Level AAA)
Minimum spacing: 8px between targets

Examples:
- Button: 48x48px minimum
- Input field: 48px height
- Link: 40x40px with padding
- Hamburger icon: 44x44px
```

### Motion Preferences

```
CSS:
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

Implementation:
- Remove all animations
- Keep transitions instant
- Preserve functionality
- Test with system accessibility settings
```

---

## SECTION 10: IMPLEMENTATION CHECKLIST

### Before Hand-off to Developers

**Design System**
- [ ] Color tokens defined (light + dark)
- [ ] Typography scale complete
- [ ] Spacing system (8px scale) documented
- [ ] Shadow system defined
- [ ] Border radius scale provided
- [ ] Transition/animation timings specified

**Components**
- [ ] Button variants (primary, secondary, text)
- [ ] Form inputs (text, email, textarea, select)
- [ ] Card layout (service, portfolio, testimonial)
- [ ] Notification/toast design
- [ ] Modal/dialog design
- [ ] Navbar / header design
- [ ] Footer design

**Pages**
- [ ] Homepage wireframe + specifications
- [ ] Service page template
- [ ] Portfolio / case study page
- [ ] Contact page
- [ ] Mobile responsive layouts

**Interactions**
- [ ] Hover states documented
- [ ] Focus states documented
- [ ] Loading states documented
- [ ] Error/success states documented
- [ ] Animation specifications (duration, easing)
- [ ] Transition specifications

**Dark Mode**
- [ ] All components tested
- [ ] Color adjustments specified
- [ ] Contrast verified
- [ ] Gradients adjusted for dark mode

**Accessibility**
- [ ] Contrast ratios verified (WCAG AA)
- [ ] Focus states visible
- [ ] Touch targets minimum 44x44px
- [ ] Motion preferences respected
- [ ] Form labels associated with inputs

**Responsive**
- [ ] Mobile breakpoints defined
- [ ] Tablet layout specified
- [ ] Desktop layout specified
- [ ] Touch-friendly interactions on mobile
- [ ] Image responsive sizes specified

---

**End of Scripta Visual Specifications Document**

This document provides concrete, implementable specifications for designers and developers to execute the Scripta brand vision consistently across all touchpoints.
