# Emotion Explorer Adventure Game - PRD Part 5: Implementation Roadmap & Prompt

## Document Information
- **Project Name**: Emotion Explorer Adventure Game
- **Version**: 1.0 MVP
- **Date**: 2025-01-22
- **Document Type**: Product Requirements Document (Part 5 of 5)
- **Dependencies**: Read Parts 1-4 first

---

## Table of Contents
1. MVP Scope Definition
2. Development Phases
3. Sprint Breakdown
4. Testing & Quality Assurance
5. Deployment Strategy
6. Post-MVP Roadmap
7. Risk Mitigation
8. **THE COMPREHENSIVE IMPLEMENTATION PROMPT**

---

## 1. MVP Scope Definition

### 1.1 MVP Goals

**What We're Building:**
A fully functional web-based emotional exploration game where players aged 12-20 can:
- Create a personalized avatar
- Choose from 16 emotions to explore
- Complete all 9 therapeutic modules in linear sequence
- Interact with an LLM-powered companion
- Unlock emotion-based powers
- Save/load progress locally
- Experience beautiful Fantasy/Magical Realism art

**What We're NOT Building (Post-MVP):**
- ❌ Cloud storage / user accounts
- ❌ Multiplayer or social features
- ❌ Analytics dashboard
- ❌ Mobile native apps
- ❌ Advanced combat system
- ❌ Open-world exploration
- ❌ Side quests or NPCs
- ❌ Parent/educator portals
- ❌ Desktop application

### 1.2 MVP Feature List

**✅ MUST HAVE (MVP):**

**Core Gameplay:**
- [x] Character creation (avatar customization)
- [x] Age selection (12-20, 4 age brackets)
- [x] Companion introduction and naming
- [x] Emotion selection interface (16 emotions)
- [x] All 9 modules fully implemented and playable
- [x] Linear progression through modules
- [x] Module completion tracking
- [x] Save/load system (IndexedDB)
- [x] Session auto-save

**Companion System:**
- [x] LLM-powered chat (Claude API)
- [x] Context-aware responses
- [x] Crisis keyword detection
- [x] Companion avatar animations
- [x] Bond level system (visual evolution)

**Art & Audio:**
- [x] All 9 environment backgrounds
- [x] Player avatar with customization options
- [x] Companion creature (4 bond levels)
- [x] UI elements (menus, HUD, text inputs)
- [x] Basic particle effects
- [x] Background music (hub + 3-5 emotion themes minimum)
- [x] Essential sound effects

**Technical:**
- [x] Phaser 3 game engine integration
- [x] React UI layer
- [x] Zustand state management
- [x] IndexedDB persistence
- [x] Claude API integration
- [x] Responsive design (desktop browsers)
- [x] Settings (volume, text size)

**⭐ NICE TO HAVE (If Time Allows):**
- [ ] All 16 emotion domain themes (music)
- [ ] Full avatar animation states
- [ ] Advanced particle systems
- [ ] Voice selection for companion
- [ ] Achievements/badges display
- [ ] Export journey as PDF
- [ ] Accessibility features (screen reader, high contrast)

**🚀 POST-MVP:**
- [ ] Cloud save via Supabase/Firebase
- [ ] User authentication
- [ ] Analytics tracking
- [ ] Parent/educator dashboard
- [ ] Mobile responsive design
- [ ] Touch controls
- [ ] Additional companion creatures
- [ ] Open-world exploration mode
- [ ] Side quests and NPCs

---

## 2. Development Phases

### Phase 0: Foundation (Week 1-2)

**Goal:** Set up development environment and core architecture

**Tasks:**
1. **Project Setup**
   - Initialize Vite + React + TypeScript project
   - Configure ESLint, Prettier, Husky
   - Set up folder structure (see Part 3)
   - Install dependencies (Phaser, Zustand, Dexie, etc.)

2. **Core Architecture**
   - Create Phaser game initialization
   - Set up React-Phaser bridge
   - Implement Zustand stores (player, progress, companion)
   - Set up IndexedDB schema with Dexie
   - Create base scene class

3. **Basic UI**
   - Main menu screen
   - Settings panel
   - HUD layout

**Deliverable:** Running application with main menu and basic scene loading

---

### Phase 1: Character Creation & Onboarding (Week 3)

**Goal:** Players can create avatars and meet companion

**Tasks:**
1. **Age Selection Screen**
   - UI implementation
   - Data storage

2. **Avatar Customization**
   - Character creator interface
   - Real-time preview
   - 8 body types (sprites)
   - 6-8 skin tones
   - 5-8 hair styles (MVP subset)
   - 3 outfit options (MVP subset)
   - Save to player profile

3. **Tutorial/Onboarding**
   - Intro cinematic (simple)
   - Portal entry sequence
   - Hub arrival
   - Companion introduction
   - Name companion interface

4. **Companion Setup**
   - Companion sprite (Level 1 variant)
   - Basic animations (idle, walk)
   - Dialogue box component

**Deliverable:** Complete character creation flow, functional companion

**Testing Checkpoints:**
- [ ] Can create and customize avatar
- [ ] Avatar appears correctly in game
- [ ] Can name companion
- [ ] Companion displays dialogue

---

### Phase 2: Hub & Emotion Selection (Week 4)

**Goal:** Implement emotion selection mechanics

**Tasks:**
1. **Hub Environment**
   - Heart of Realm background art
   - 16 emotion pedestals layout
   - Emotion crystals (visual assets)
   - Player navigation in hub

2. **Emotion Selection Interface**
   - Clickable emotion crystals
   - Hover effects
   - Companion descriptions for each emotion
   - Selection confirmation

3. **State Management**
   - Start emotion journey flow
   - Store selected emotion
   - Initialize session state

**Deliverable:** Functional hub with emotion selection

**Testing Checkpoints:**
- [ ] Can navigate hub
- [ ] Can click and examine emotions
- [ ] Companion provides dialogue for each
- [ ] Can select emotion and proceed

---

### Phase 3: Module 1-3 Implementation (Week 5-6)

**Goal:** First three modules playable

**Module 1: Mood Meter (Week 5.1)**
- Awakening Circle scene
- Intensity slider UI
- Text input component
- Save module data
- Power unlock animation

**Module 2: Memory Constellation (Week 5.2)**
- Star Chamber scene
- Memory orb creation
- 5 text inputs
- Constellation visual
- Light connections

**Module 3: Body Language (Week 6)**
- Temple of Embodiment scene
- Body scan animation
- Interactive body diagram
- 5-step guided process
- Statue animations

**Deliverable:** Modules 1-3 fully playable

**Testing Checkpoints:**
- [ ] Can complete each module
- [ ] Data saves correctly
- [ ] Transitions work smoothly
- [ ] Visual feedback is clear

---

### Phase 4: Module 4-6 Implementation (Week 7-8)

**Goal:** Writing-focused modules complete

**Module 4: Letter Writing (Week 7.1)**
- Speaking Stone scene
- Letter template UI
- Rich text input
- Letter sealing animation

**Module 5: Reverse Letter Writing (Week 7.2)**
- Mirror Portal scene
- Perspective selection
- Portal transition effect
- Letter receipt animation

**Module 6: Feelings Journal (Week 8)**
- Cathartic Falls scene
- Full-screen journal interface
- Waterfall particle system
- Release animation

**Deliverable:** Modules 4-6 fully playable

**Testing Checkpoints:**
- [ ] Writing interfaces intuitive
- [ ] Auto-save works
- [ ] Animations enhance experience
- [ ] Text stored correctly

---

### Phase 5: Module 7-9 Implementation (Week 9-10)

**Goal:** Final integration modules complete

**Module 7: Emotional Compass (Week 9)**
- Peak of Balance scene
- Three landscape states
- Environment transitions
- Compass navigation
- 3-state documentation

**Module 8: Wisdom Tree (Week 10.1)**
- Wisdom Tree scene
- Fruit interaction
- Multiple lesson inputs
- Constellation creation
- Elevation camera effect

**Module 9: Ripple Pool (Week 10.2)**
- Ripple Pool scene
- Synthesis interface
- Intention setting
- Ripple animation
- Journey completion sequence

**Deliverable:** All 9 modules playable, full journey completable

**Testing Checkpoints:**
- [ ] Complete emotional journey start-to-finish
- [ ] All data persists
- [ ] Completion celebrated appropriately
- [ ] Can start new journey

---

### Phase 6: Companion LLM Integration (Week 11)

**Goal:** Functional AI companion chat

**Tasks:**
1. **Claude API Integration**
   - Set up Anthropic SDK
   - Build prompt system
   - Implement context builder
   - Add crisis detection

2. **Chat UI**
   - Companion chat interface
   - Message bubbles
   - Typing indicator
   - Chat history

3. **Companion Logic**
   - Context-aware responses
   - Module-specific guidance
   - Stuck player hints
   - Bond level dialogue variations

**Deliverable:** Fully functional LLM companion

**Testing Checkpoints:**
- [ ] Companion responds appropriately
- [ ] Context awareness works
- [ ] Crisis keywords trigger resources
- [ ] Responses are age-appropriate

---

### Phase 7: Polish & Core Art (Week 12-13)

**Goal:** Visual and audio polish

**Tasks:**
1. **Environment Art**
   - All 9 module backgrounds (high quality)
   - Hub environment polished
   - Parallax layers

2. **Character Art**
   - Player avatar sprites finalized
   - Companion evolution variants (4 levels)
   - Animations polished

3. **UI Polish**
   - All UI elements refined
   - Consistent visual style
   - Smooth transitions
   - Loading states

4. **Particle Effects**
   - Emotional wisps
   - Power effects
   - Module-specific VFX
   - Ambient particles

5. **Audio Implementation**
   - Background music (hub + 3-5 themes)
   - Essential SFX
   - Audio manager
   - Volume controls

**Deliverable:** Visually polished game

**Testing Checkpoints:**
- [ ] Art assets are high quality
- [ ] Animations are smooth
- [ ] Audio enhances experience
- [ ] Performance is acceptable

---

### Phase 8: Testing & Bug Fixes (Week 14-15)

**Goal:** Stable, bug-free MVP

**Tasks:**
1. **Comprehensive Testing**
   - Unit tests (critical functions)
   - Integration tests (module flows)
   - E2E tests (full journeys)
   - Cross-browser testing
   - Performance testing

2. **Bug Fixing**
   - Fix all critical bugs
   - Address major usability issues
   - Optimize performance bottlenecks

3. **User Testing**
   - 5-10 beta testers (age 12-20)
   - Gather feedback
   - Iterate based on findings

**Deliverable:** Polished, tested MVP

**Testing Checkpoints:**
- [ ] All critical paths work
- [ ] No game-breaking bugs
- [ ] Performance meets targets
- [ ] User feedback positive

---

### Phase 9: Deployment (Week 16)

**Goal:** Live, accessible game

**Tasks:**
1. **Production Build**
   - Optimize assets
   - Minify code
   - Configure environment variables
   - Test production build locally

2. **Deployment**
   - Deploy to Vercel/Netlify
   - Configure custom domain (if applicable)
   - Set up SSL
   - Test live deployment

3. **Documentation**
   - User guide
   - README
   - Known issues
   - Contact/support info

**Deliverable:** Live, publicly accessible game

---

## 3. Sprint Breakdown

### Sprint Structure (2-week sprints)

**Sprint 1 (Weeks 1-2): Foundation**
- Setup + Core Architecture

**Sprint 2 (Weeks 3-4): Character & Hub**
- Character Creation + Emotion Selection

**Sprint 3 (Weeks 5-6): Early Modules**
- Modules 1-3

**Sprint 4 (Weeks 7-8): Writing Modules**
- Modules 4-6

**Sprint 5 (Weeks 9-10): Final Modules**
- Modules 7-9

**Sprint 6 (Weeks 11-12): AI & Polish**
- LLM Integration + Art Polish

**Sprint 7 (Weeks 13-14): Testing**
- Comprehensive QA

**Sprint 8 (Weeks 15-16): Deployment**
- Final polish + Go live

**Total Timeline: 16 weeks (4 months)**

---

## 4. Testing & Quality Assurance

### 4.1 Testing Strategy

**Unit Testing (Vitest):**
- Target Coverage: 70%+
- Focus Areas:
  - State management (Zustand stores)
  - Utility functions
  - Data validation
  - Emotion mapping
  - LLM prompt building

**Integration Testing:**
- Module completion flows
- Save/load functionality
- State persistence
- API integration

**E2E Testing (Playwright):**
- Critical user paths:
  1. New player → Character creation → First emotion journey
  2. Complete full 9-module journey
  3. Save → Close → Reload → Continue
  4. Companion chat interaction
  5. Multiple emotion journeys
- Run on: Chrome, Firefox, Safari

**Performance Testing:**
- Load time benchmarks
- Frame rate monitoring
- Memory leak detection
- Asset loading optimization

**User Acceptance Testing:**
- 5-10 beta testers (target age)
- Feedback surveys
- Session recordings
- Bug reports

### 4.2 Quality Gates

**Before moving to next phase:**
- [ ] All features in current phase work
- [ ] No critical bugs
- [ ] Code reviewed
- [ ] Tests pass
- [ ] Performance acceptable

**Before launch:**
- [ ] All MVP features complete
- [ ] All critical bugs fixed
- [ ] Cross-browser tested
- [ ] User testing feedback addressed
- [ ] Documentation complete

---

## 5. Deployment Strategy

### 5.1 Hosting Platform

**Recommended: Vercel**

**Rationale:**
- Optimized for React/Vite apps
- Automatic deployments from Git
- Edge network (fast global access)
- Free tier sufficient for MVP
- Easy environment variable management
- Built-in analytics

**Alternative: Netlify**
- Similar features
- Also excellent for static sites

### 5.2 Environment Configuration

**Environment Variables:**
```
VITE_CLAUDE_API_KEY=<your-api-key>
VITE_APP_VERSION=1.0.0
VITE_ANALYTICS_ID=<if-using> (post-MVP)
```

**Build Configuration:**
```json
{
  "build": {
    "outDir": "dist",
    "assetsDir": "assets",
    "minify": true,
    "sourcemap": false
  }
}
```

### 5.3 Deployment Checklist

**Pre-Deployment:**
- [ ] All environment variables configured
- [ ] Production build tested locally
- [ ] Assets optimized (images compressed, audio encoded)
- [ ] API keys secured
- [ ] Analytics configured (post-MVP)

**Deployment:**
- [ ] Push to main branch (triggers auto-deploy)
- [ ] Verify build succeeds
- [ ] Test live site thoroughly
- [ ] Check all features work
- [ ] Monitor for errors

**Post-Deployment:**
- [ ] Announce launch
- [ ] Monitor performance
- [ ] Gather user feedback
- [ ] Track any issues

---

## 6. Post-MVP Roadmap

### Version 1.1 (Month 5-6)

**Features:**
- [ ] Cloud storage (Supabase/Firebase)
- [ ] User authentication
- [ ] Cross-device sync
- [ ] All 16 emotion music themes
- [ ] Complete avatar customization options
- [ ] Accessibility improvements
- [ ] Mobile responsive design

### Version 1.2 (Month 7-9)

**Features:**
- [ ] Analytics dashboard (player insights)
- [ ] Export journey as PDF
- [ ] Additional companion creatures (choose your guide)
- [ ] Achievement system expanded
- [ ] Social sharing (optional, privacy-focused)
- [ ] Educator portal (view student progress, aggregated)

### Version 2.0 (Month 10-12)

**Features:**
- [ ] Open-world exploration mode
- [ ] Side quests and NPCs
- [ ] Advanced emotion power system
- [ ] Puzzle challenges
- [ ] Combo powers
- [ ] Seasonal content
- [ ] Community features

### Version 3.0 (Year 2)

**Features:**
- [ ] Mobile native apps (iOS/Android)
- [ ] Desktop application
- [ ] VR experience (experimental)
- [ ] Multiplayer co-exploration
- [ ] Therapist/clinician tools
- [ ] Research partnerships

---

## 7. Risk Mitigation

### 7.1 Technical Risks

**Risk: Phaser-React integration issues**
- Mitigation: Prototype early, use proven patterns, community support

**Risk: LLM API costs**
- Mitigation: Rate limiting, caching common responses, usage monitoring

**Risk: Performance issues (large game assets)**
- Mitigation: Asset optimization, lazy loading, performance profiling

**Risk: Browser compatibility**
- Mitigation: Cross-browser testing, polyfills, graceful degradation

**Risk: Data loss (local storage only)**
- Mitigation: Frequent auto-save, export functionality, clear save indicators

### 7.2 Content Risks

**Risk: Inappropriate LLM responses**
- Mitigation: Strong system prompts, safety filters, crisis detection, monitoring

**Risk: Triggering content for vulnerable users**
- Mitigation: Content warnings, gentle pacing, crisis resources, age-appropriate content

**Risk: Privacy concerns (emotional data)**
- Mitigation: Local-only storage (MVP), clear privacy policy, no tracking

### 7.3 Design Risks

**Risk: Too complex for target age**
- Mitigation: User testing, age-appropriate language, optional guidance levels

**Risk: Not engaging enough (too therapeutic)**
- Mitigation: Beautiful art, gamification, companion personality, power system

**Risk: Too long per session**
- Mitigation: Save anywhere, module-based progression, clear time estimates

---

## 8. THE COMPREHENSIVE IMPLEMENTATION PROMPT

---

# 🎮 EMOTION EXPLORER ADVENTURE GAME - MASTER IMPLEMENTATION PROMPT

## Project Overview

You are building **Emotion Explorer: Realm of Feelings**, a Fantasy/Magical Realism adventure game that helps players aged 12-20 explore and understand their emotions through an immersive, therapeutic gameplay experience. This is a web-based game using **Phaser 3**, **React**, and **TypeScript**.

---

## Core Concept

Transform **Tian Dayton's Emotion Explorer** therapeutic framework into an engaging RPG adventure where:
- Players choose from **16 emotions** to explore
- Each emotion journey involves **9 sequential therapeutic modules**
- Each module is a unique game level with its own environment, mechanics, and challenges
- An **LLM-powered companion** (Claude API) provides emotional support and guidance
- **Emotion-based powers** unlock as players complete modules
- All progress saves locally via **IndexedDB**
- Beautiful art in a **Fantasy/Magical Realism** style

---

## Game Flow Architecture

### High-Level User Journey

```
1. Main Menu
   ↓
2. Age Selection (12-13, 14-15, 16-17, 18-20)
   ↓
3. Character Creation (Avatar Customization)
   ↓
4. Tutorial/Onboarding (Portal Entry, Companion Introduction)
   ↓
5. Hub Area (Heart of the Realm)
   ↓
6. Emotion Selection (16 emotion crystals)
   ↓
7. Module 1: The Awakening Circle (Mood Meter)
   ↓
8. Module 2: The Memory Constellation (Map Your Feelings)
   ↓
9. Module 3: The Temple of Embodiment (Body Language)
   ↓
10. Module 4: The Speaking Stone (Letter Writing)
    ↓
11. Module 5: The Mirror Portal (Reverse Letter Writing)
    ↓
12. Module 6: The Cathartic Falls (Feelings Journal)
    ↓
13. Module 7: The Emotional Compass (Trajectories)
    ↓
14. Module 8: The Wisdom Tree (Spiritual Awakening)
    ↓
15. Module 9: The Ripple Pool (Intentions)
    ↓
16. Journey Completion → Return to Hub OR Explore Another Emotion
```

---

## Technical Stack

**Core:**
- **Phaser 3** (v3.60+) - Game engine
- **React** (v18+) - UI layer
- **TypeScript** (v5+) - Type safety
- **Vite** (v5+) - Build tool

**State Management:**
- **Zustand** (v4+) - Simple, hooks-based state

**Data Persistence:**
- **Dexie.js** - IndexedDB wrapper
- Local storage for settings

**LLM Integration:**
- **Anthropic Claude API** (Claude 3.5 Sonnet)
- Streaming responses
- Context-aware prompts

**Animations & Effects:**
- **Framer Motion** - UI animations
- **Phaser Particle System** - In-game effects

---

## Directory Structure

```
emotion-explorer-game/
├── public/
│   └── assets/
│       ├── images/         # Sprites, backgrounds
│       ├── audio/          # Music, SFX
│       └── fonts/          # Typography
├── src/
│   ├── game/              # Phaser game code
│   │   ├── scenes/        # Game scenes (modules)
│   │   ├── entities/      # Player, Companion, NPCs
│   │   ├── systems/       # Power system, particles
│   │   └── config/        # Game configuration
│   ├── components/        # React UI components
│   │   ├── ui/            # Menus, HUD
│   │   ├── modules/       # Module-specific UI
│   │   └── companion/     # Chat interface
│   ├── stores/            # Zustand stores
│   ├── services/          # LLM, storage, analytics
│   ├── types/             # TypeScript types
│   ├── utils/             # Helper functions
│   └── hooks/             # Custom React hooks
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── docs/
```

---

## Data Models

### Core Types

```typescript
// Player
interface PlayerProfile {
  id: string;
  name: string;
  age: number;
  ageGroup: '12-13' | '14-15' | '16-17' | '18-20';
  avatar: AvatarCustomization;
  createdAt: Date;
}

// Game Progress
interface GameProgress {
  playerId: string;
  emotionsExplored: EmotionProgress[];
  companionBondLevel: number; // 1-4
  powersUnlocked: EmotionPower[];
  currentSession?: SessionState;
}

// Emotion Progress
interface EmotionProgress {
  emotionId: EmotionType; // 'angry', 'joy', 'sad', etc.
  modulesCompleted: ModuleCompletion[]; // 9 modules
  powerLevel: 1 | 2 | 3 | 4;
  wisdomCollected: string[];
}

// Module Completion
interface ModuleCompletion {
  moduleId: number; // 1-9
  completed: boolean;
  data: ModuleData; // Player's responses/writings
  completedAt?: Date;
}

// Session State
interface SessionState {
  emotionId: EmotionType;
  currentModule: number; // 1-9
  startedAt: Date;
  moduleData: ModuleData;
}
```

---

## The 9 Modules - Detailed Specifications

### Module 1: The Awakening Circle (Mood Meter)

**Environment:** Heart of the Realm, 16 glowing emotion crystals in a circle

**Mechanics:**
1. Player selects emotion crystal (click to examine, click again to choose)
2. Intensity calibration: Vertical slider (1-100) with real-time environment feedback
3. Text reflection: "Write about this feeling's intensity and impact"

**UI Components:**
- Emotion crystal selector (clickable, hoverable)
- Intensity slider (vertical, visual feedback)
- Text input (parchment style, auto-save)

**Data Captured:**
- emotionSelected: EmotionType
- intensity: number (1-100)
- intensityDescription: string

**Power Unlocked:** Emotion Sight (see emotional energy)

---

### Module 2: The Memory Constellation (Map Your Feelings)

**Environment:** Star Chamber - dark space with glowing central emotion-star

**Mechanics:**
1. Central emotion appears as brilliant star
2. 5 satellite positions orbit around it
3. Player walks to each satellite and fills with memory/association
4. Lines of light connect satellites to center

**UI Components:**
- 5 text input circles (orbital layout)
- Constellation visualization
- Light connections (animated)

**Data Captured:**
- memoryAssociations: string[5] - words, phrases, names, places, times

**Power Unlocked:** Memory Weaving (access past wisdom)

---

### Module 3: The Temple of Embodiment (Body Language)

**Environment:** Crystal temple with central statue (player's avatar in Vitruvian pose)

**Mechanics:**
1. Body scan: Hold SPACE, glow travels down statue
2. 5-step exploration:
   - WHERE: Click body region
   - FEEL: Describe sensation (tight, heavy, etc.)
   - TALK: "If this body part could talk, what would it say?"
   - ASK: "What does it need?"
   - ACTION: "What would it do?"

**UI Components:**
- Interactive body diagram (clickable regions)
- 5 sequential text inputs
- Statue animations (glow, highlight)

**Data Captured:**
- bodyLocation: string
- sensation: string
- bodyVoice: string
- bodyNeed: string
- bodyAction: string

**Power Unlocked:** Somatic Sensing (detect emotional energy)

---

### Module 4: The Speaking Stone (Letter Writing)

**Environment:** Sacred writing chamber with glowing stone

**Mechanics:**
1. Player chooses letter recipient
2. Writes greeting ("Dear...")
3. Writes letter body (free-form, 50+ words suggested)
4. Signs letter ("From...")
5. Letter is sealed and absorbed into Speaking Stone

**UI Components:**
- Letter template (To/Dear/Body/From fields)
- Large text area (parchment aesthetic)
- Seal animation

**Data Captured:**
- letterRecipient: string
- letterGreeting: string
- letterBody: string
- letterClosing: string

**Power Unlocked:** Voice Manifestation (truth affects world)

---

### Module 5: The Mirror Portal (Reverse Letter Writing)

**Environment:** Hall of mirrors with central swirling portal

**Mechanics:**
1. Choose whose perspective to take
2. Enter portal (perspective shift visual)
3. Write letter FROM them TO player
4. Exit portal, receive letter

**UI Components:**
- Silhouette selector (portal interface)
- Letter template (reversed addresses)
- Portal transition effects

**Data Captured:**
- perspectivePerson: string
- reverseLetterBody: string

**Power Unlocked:** Empathic Resonance (sense others' emotions)

---

### Module 6: The Cathartic Falls (Feelings Journal)

**Environment:** Waterfall cascading into glowing pool

**Mechanics:**
1. Floating journal appears
2. Free-write, completely unfiltered
3. As player writes, words become droplets
4. When finished, droplets flow to waterfall
5. Waterfall surges with emotional release

**UI Components:**
- Full-screen journal (minimal UI)
- Waterfall particle system
- Word-to-droplet animation

**Data Captured:**
- journalEntry: string (no minimum, completely free)

**Power Unlocked:** Emotional Release (cleanse stagnant energy)

---

### Module 7: The Emotional Compass (Trajectories)

**Environment:** Mountain peak with three diverging landscapes

**Mechanics:**
1. Player explores three states:
   - LEFT: Shutdown (frozen wasteland, muted, slow)
   - CENTER: Balance (beautiful meadow, clear, responsive)
   - RIGHT: Overwhelm (volcanic chaos, intense, frantic)
2. For each state, answer 4 prompts:
   - "When I [state], I feel..."
   - "I think..."
   - "I do..."
   - "And as a result, I'm likely to..."

**UI Components:**
- Environment transitions (color grading, visual effects)
- 3 × 4 text inputs (12 total)
- Compass visualization

**Data Captured:**
- shutdownState: {feel, think, do, result}
- balancedState: {feel, think, do, result}
- overwhelmedState: {feel, think, do, result}

**Power Unlocked:** Emotional Navigation (control intensity)

---

### Module 8: The Wisdom Tree (Spiritual Awakening)

**Environment:** Ancient massive tree with glowing fruit

**Mechanics:**
1. Player approaches tree with luminous fruit on branches
2. Click fruit to harvest (3-7 fruits suggested)
3. Each fruit opens: "What lesson have you learned?"
4. Lessons become stars in constellation above
5. Climb to highest branch for perspective
6. Final reflection: "What's the highest perspective you can take?"

**UI Components:**
- Interactive fruit (click to harvest)
- Star constellation formation
- Elevation camera movement
- Text inputs in fruit containers

**Data Captured:**
- lessonsLearned: string[] (3-7 entries)
- highestPerspective: string

**Power Unlocked:** Transformative Insight (turn challenges into strengths)

---

### Module 9: The Ripple Pool (Intentions)

**Environment:** Mirror-perfect pool reflecting stars

**Mechanics:**
1. Pool shows journey recap (all 8 modules briefly)
2. Synthesis: "What new insights do you have?"
3. Impact: "How will this affect your relationships?"
4. Intention: "What will you do differently today?"
5. Drop of light falls into pool, creates ripples
6. Ripples expand infinitely, illuminating entire realm

**UI Components:**
- Pool reflection animations
- Journey recap visuals
- 3 text inputs (synthesis, impact, intention)
- Ripple animation (expanding circles of light)

**Data Captured:**
- synthesisInsights: string
- relationshipImpact: string
- intention: string

**Power Unlocked:** Intention Setting (carry wisdom to real world)

**Journey Completion:** Player receives badge, can return to hub or continue

---

## Companion System (LLM Integration)

### Claude API Setup

```typescript
// src/services/llm/claudeService.ts

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: import.meta.env.VITE_CLAUDE_API_KEY
});

async function sendMessage(
  userMessage: string,
  context: {
    currentEmotion?: EmotionType;
    currentModule?: number;
    playerAge?: number;
  }
): Promise<string> {

  // Crisis check
  if (hasCrisisKeywords(userMessage)) {
    return CRISIS_RESPONSE;
  }

  const systemPrompt = buildSystemPrompt(context);

  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    system: systemPrompt,
    messages: formatHistory()
  });

  return response.content[0].text;
}
```

### System Prompt Template

```
You are a wise, compassionate emotional companion guiding a ${age}-year-old through ${emotion} exploration.

Current Context:
- Emotion: ${emotion}
- Module: ${moduleName}
- Player Age: ${age}

Your Role:
- Validate all emotions as normal
- Encourage self-discovery
- Ask open-ended questions
- Provide gentle guidance
- Use age-appropriate language
- Keep responses 2-4 sentences

Safety:
- If player mentions self-harm/suicide, provide crisis resources immediately
- Never give medical/mental health advice
- Encourage speaking to trusted adults

Crisis Resources:
- Crisis Text Line: Text HOME to 741741
- Suicide Prevention Lifeline: 988
```

### Crisis Keywords
```typescript
const CRISIS_KEYWORDS = [
  'suicide', 'kill myself', 'end my life',
  'hurt myself', 'self harm', 'want to die'
];
```

---

## Art Direction - Key Visual Specifications

### Color Palette (16 Emotions)

```typescript
const EMOTION_COLORS = {
  angry: '#8B0000',      // Dark Red
  anxious: '#CC5500',    // Burnt Orange
  scared: '#B8860B',     // Dark Gold
  jealous: '#6B8E23',    // Olive
  guilty: '#228B22',     // Forest Green
  forgiving: '#6A5ACD',  // Periwinkle
  joy: '#00CED1',        // Turquoise
  lonely: '#DAA520',     // Goldenrod
  playful: '#FFD700',    // Yellow
  grateful: '#008B8B',   // Teal
  other: '#8FBC8F',      // Sage Green
  hopeful: '#BC8F8F',    // Dusty Rose
  shameful: '#DB7093',   // Muted Pink
  sad: '#663399',        // Deep Purple
  stuck: '#9370DB',      // Lavender
  nervous: '#CD853F'     // Copper
};
```

### Art Style Guidelines

**Fantasy/Magical Realism:**
- Hand-painted quality (illustrated 2D)
- Bioluminescent elements (glowing plants, crystals)
- Ethereal atmospheres (mist, light rays, particles)
- Emotional tangibility (feelings as visible energy)
- Inspired by: Ori, Gris, Studio Ghibli, Journey

**Visual Pillars:**
1. Emotional Tangibility - feelings are visible
2. Enchanted Naturalism - magical but grounded
3. Soft Luminosity - glowing elements everywhere
4. Hand-Painted Quality - painterly brushwork

**Assets Needed (MVP):**
- 9 environment backgrounds (1920×1080)
- Player avatar sprites (customizable parts)
- Companion creature (4 evolution stages)
- UI elements (menus, buttons, text fields)
- Particle effects (wisps, sparkles, water, fire)
- Emotion crystals (16 variants)

---

## Audio Design Brief

### Music (MVP Priority)

**Essential Tracks:**
1. Main Menu - contemplative, hopeful (3-4 min loop)
2. Hub Theme - peaceful, inviting (4-5 min loop)
3. Joy Domain - bright, uplifting
4. Sadness Domain - melancholic, profound
5. Anger Domain - intense, driving

**Post-MVP:** All 16 emotion themes

### Sound Effects (MVP)

**UI:**
- Button click, hover
- Menu open/close
- Save indicator

**Gameplay:**
- Footsteps (soft)
- Interaction (magical chime)
- Power activation (whoosh + emotion-specific)
- Module completion (success chime)

**Environmental:**
- Waterfall (looping)
- Wind (gentle)
- Ambient creatures (fireflies, crickets)

---

## State Management Architecture

### Zustand Stores

```typescript
// src/stores/playerStore.ts
interface PlayerState {
  profile: PlayerProfile | null;
  setProfile: (profile: PlayerProfile) => void;
  updateAvatar: (avatar: Partial<AvatarCustomization>) => void;
}

// src/stores/gameProgressStore.ts
interface GameProgressState {
  progress: GameProgress | null;
  currentSession: SessionState | null;
  startEmotionJourney: (emotionId: EmotionType) => void;
  completeModule: (moduleId: number, data: ModuleData) => Promise<void>;
  saveProgress: () => Promise<void>;
}

// src/stores/companionStore.ts
interface CompanionState {
  state: CompanionState | null;
  chatOpen: boolean;
  sendMessage: (text: string) => Promise<string>;
}
```

---

## Performance Requirements

**Targets:**
- Initial load: < 3 seconds
- Scene transitions: < 1 second
- Frame rate: 60 FPS (min 30 FPS)
- Memory: < 256 MB target, 512 MB max

**Optimization:**
- Sprite atlases
- Lazy loading modules
- Asset compression (WebP, MP3)
- Object pooling (particles)
- Code splitting

---

## Testing Requirements

### Critical Paths (E2E Tests)

1. **New Player Journey**
   - Create character → Select emotion → Complete Module 1

2. **Full Emotion Journey**
   - Complete all 9 modules → Journey completion

3. **Save/Load**
   - Start journey → Save → Close → Reopen → Continue

4. **Companion Chat**
   - Open chat → Send message → Receive response

5. **Multiple Emotions**
   - Complete one emotion → Return to hub → Start another

### Testing Checklist

**Before Each Phase:**
- [ ] All features work as specified
- [ ] No critical bugs
- [ ] Performance acceptable
- [ ] Code reviewed

**Before Launch:**
- [ ] All 9 modules completable
- [ ] Save/load works reliably
- [ ] Companion chat functional
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] User testing complete (5-10 beta testers)
- [ ] All critical bugs fixed

---

## Deployment

**Platform:** Vercel (recommended) or Netlify

**Environment Variables:**
```
VITE_CLAUDE_API_KEY=sk-ant-...
VITE_APP_VERSION=1.0.0
```

**Build Command:**
```bash
npm run build
```

**Deployment Checklist:**
- [ ] Environment variables configured
- [ ] Production build tested locally
- [ ] Assets optimized
- [ ] API keys secured
- [ ] Live site tested thoroughly

---

## Development Priorities (MVP)

### MUST HAVE:
1. ✅ All 9 modules fully playable
2. ✅ Character creation
3. ✅ Emotion selection
4. ✅ Companion LLM chat
5. ✅ Save/load (IndexedDB)
6. ✅ Basic art (all environments)
7. ✅ Essential audio (hub + 3 emotion themes)

### NICE TO HAVE:
- Full avatar animation
- All 16 emotion themes
- Advanced particles
- Achievements display

### POST-MVP:
- Cloud storage
- User authentication
- Analytics
- Mobile responsive

---

## Timeline Estimate

**16 weeks (4 months) for MVP:**
- Weeks 1-2: Foundation & setup
- Weeks 3-4: Character creation & hub
- Weeks 5-6: Modules 1-3
- Weeks 7-8: Modules 4-6
- Weeks 9-10: Modules 7-9
- Weeks 11-12: LLM integration & polish
- Weeks 13-14: Testing & bug fixes
- Weeks 15-16: Final polish & deployment

---

## Key Success Metrics (MVP)

- ✅ Players can complete full emotional journey (all 9 modules)
- ✅ Save/load works reliably (no data loss)
- ✅ Companion provides helpful, empathetic responses
- ✅ Game runs at 30+ FPS on modern browsers
- ✅ Positive user feedback from beta testers
- ✅ Average session length: 30-60 minutes
- ✅ Return rate: 60%+ players explore multiple emotions

---

## Critical Implementation Notes

### 1. Phaser-React Bridge
- Phaser game runs in dedicated div
- React overlays for UI (menus, text inputs)
- Communication via Zustand stores
- Phaser scenes emit events → Update stores → React re-renders

### 2. Auto-Save System
- Save after each module completion
- Auto-save text inputs every 10 seconds
- Visual indicator when saving
- Allow manual save anytime

### 3. Companion Context Awareness
- Pass current emotion, module, recent player writings to LLM
- Limit conversation history to last 10 messages (context window)
- Store full history in IndexedDB

### 4. Crisis Detection
- Check every user message for crisis keywords
- Immediate response with resources
- Log occurrence (for safety monitoring)

### 5. Age-Appropriate Content
- Adjust language complexity based on age selection
- Simpler for 12-13, more sophisticated for 18-20
- Companion tone adjusts accordingly

---

## Repository Structure & First Steps

### Initialize Project

```bash
npm create vite@latest emotion-explorer-game -- --template react-ts
cd emotion-explorer-game
npm install

# Core dependencies
npm install phaser zustand dexie @anthropic-ai/sdk framer-motion

# Dev dependencies
npm install -D @types/node eslint prettier husky vitest @playwright/test
```

### Configuration Files

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

---

## Final Notes

This game is more than entertainment—it's a safe, beautiful space for young people to explore their emotional worlds. Every design decision should support:

1. **Safety** - Players feel emotionally safe and supported
2. **Beauty** - Art evokes emotional resonance
3. **Authenticity** - Real therapeutic value, not superficial
4. **Empowerment** - Players feel stronger after playing
5. **Accessibility** - Clear, understandable, inclusive

**Remember:**
- No emotional response is wrong
- The companion validates everything
- The game adapts to the player, not vice versa
- Progression is about emotional growth, not competition
- Save often, allow breaks anytime
- Beauty matters—this is emotional work, make it beautiful

---

## Reference All Previous Parts

**This prompt assumes you have read:**
- **Part 1: Vision & Overview** - Game concept, narrative, world design
- **Part 2: User Journeys & Modules** - Detailed module specifications, companion system
- **Part 3: Technical Architecture** - Stack, data models, component design
- **Part 4: Art Direction & Assets** - Visual style, color palettes, asset lists

**All parts together form the complete specification for building this game.**

---

## Ready to Build?

**Start with Phase 0 (Foundation):**
1. Set up project structure
2. Initialize Phaser + React
3. Create base scene and first placeholder module
4. Set up IndexedDB with Dexie
5. Build main menu

**Then proceed through each phase systematically.**

**You have everything you need. Now go create something beautiful that helps young people understand themselves.**

🎮✨💜

---

*End of Implementation Prompt*
*Document Version: 1.0*
*Last Updated: 2025-01-22*
*Ready to Build*
