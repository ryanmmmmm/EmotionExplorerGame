# Emotion Explorer Adventure Game - PRD Part 4: Art Direction & Assets

## Document Information
- **Project Name**: Emotion Explorer Adventure Game
- **Version**: 1.0 MVP
- **Date**: 2025-01-22
- **Document Type**: Product Requirements Document (Part 4 of 5)
- **Dependencies**: Read Parts 1-3 first

---

## Table of Contents
1. Visual Style Guide
2. Color Psychology & Emotion Palette
3. Character Design Specifications
4. Environment & World Design
5. UI/UX Visual Design
6. Animation Specifications
7. Particle & VFX Design
8. Audio Design Brief
9. Complete Asset List

---

## 1. Visual Style Guide

### 1.1 Art Style: Fantasy/Magical Realism

**Core Aesthetic:**
"Where the emotional inner world meets tangible magic—beautiful, ethereal, and deeply expressive."

**Visual Pillars:**

**1. Emotional Tangibility**
- Emotions are visible as energy, color, and light
- Abstract emotional concepts take physical form
- Environmental responses to emotional states

**2. Enchanted Naturalism**
- Based on real-world natural beauty (forests, waterfalls, mountains)
- Enhanced with magical, bioluminescent elements
- Grounded yet fantastical

**3. Soft Luminosity**
- Glowing elements throughout (crystals, plants, water)
- Warm lighting with emotional color casts
- Ethereal atmosphere with mist, light rays, particles

**4. Hand-Painted Quality**
- Illustrated 2D art with rich textures
- Painterly brushwork visible in backgrounds
- Detailed without being photorealistic

### 1.2 Visual References & Inspiration

**Primary Inspirations:**
- **Gris** (game) - Emotional color progression, watercolor aesthetics
- **Ori and the Blind Forest** - Luminous forests, emotional storytelling through art
- **Journey** - Minimalist beauty, emotional resonance
- **Studio Ghibli** (Spirited Away, Howl's Moving Castle) - Magical realism, emotional depth
- **Firewatch** - Painterly landscapes, atmospheric lighting
- **Hollow Knight** - Hand-drawn characters, detailed environments

**Avoid:**
- Generic mobile game art (overly simplistic, plastic-looking)
- Ultra-realistic 3D (breaks magical realism)
- Dark, gritty aesthetics (needs to feel safe and inviting)
- Overly childish/cartoon art (target is teens/young adults)

### 1.3 Technical Specifications

**Resolution:**
- Base resolution: 1920x1080 (16:9)
- Scalable to 4K and down to 720p
- UI elements: Vector-based when possible

**Asset Format:**
- Sprites: PNG with alpha channel
- Backgrounds: High-res PNG or WebP
- UI: SVG (icons), PNG (complex elements)
- Animations: Sprite sheets (JSON + PNG)

**Performance Targets:**
- Character sprites: 512x512 max
- Background layers: 2048x1152 max
- Texture atlases for efficiency
- Compressed WebP where supported

---

## 2. Color Psychology & Emotion Palette

### 2.1 Emotion Color System

Each emotion has a primary color that reflects psychological associations while maintaining visual harmony.

**ANGRY** - Deep Crimson Red
- **Primary**: #8B0000 (Dark Red)
- **Secondary**: #B22222 (Firebrick)
- **Accent**: #FF4500 (Orange Red)
- **Psychology**: Intensity, boundaries, passion, protection
- **Domain Aesthetic**: Volcanic forge, molten energy, heat

**ANXIOUS** - Burnt Orange
- **Primary**: #CC5500 (Burnt Orange)
- **Secondary**: #FF8C00 (Dark Orange)
- **Accent**: #FFD700 (Gold)
- **Psychology**: Alert, anticipation, nervous energy
- **Domain Aesthetic**: Tangled thickets, restless movement

**SCARED** - Dark Gold
- **Primary**: #B8860B (Dark Goldenrod)
- **Secondary**: #DAA520 (Goldenrod)
- **Accent**: #FFF8DC (Cornsilk)
- **Psychology**: Caution, awareness, self-protection
- **Domain Aesthetic**: Golden caverns, shadows, hiding places

**JEALOUS** - Yellow-Green/Olive
- **Primary**: #6B8E23 (Olive Drab)
- **Secondary**: #9ACD32 (Yellow Green)
- **Accent**: #7CFC00 (Lawn Green)
- **Psychology**: Desire, comparison, longing
- **Domain Aesthetic**: Lush but untouchable gardens

**GUILTY** - Forest Green
- **Primary**: #228B22 (Forest Green)
- **Secondary**: #2E8B57 (Sea Green)
- **Accent**: #90EE90 (Light Green)
- **Psychology**: Responsibility, conscience, moral awareness
- **Domain Aesthetic**: Deep forest, weighing scales, echoes

**FORGIVING** - Periwinkle Blue
- **Primary**: #6A5ACD (Slate Blue)
- **Secondary**: #7B68EE (Medium Slate Blue)
- **Accent**: #E6E6FA (Lavender)
- **Psychology**: Release, peace, letting go
- **Domain Aesthetic**: Healing springs, flowing water, release

**JOY** - Light Turquoise/Cyan
- **Primary**: #00CED1 (Dark Turquoise)
- **Secondary**: #40E0D0 (Turquoise)
- **Accent**: #AFEEEE (Pale Turquoise)
- **Psychology**: Expansion, vitality, aliveness
- **Domain Aesthetic**: Crystal meadows, sunlight, dancing light

**LONELY** - Muted Brass/Gold
- **Primary**: #B8860B (Dark Goldenrod)
- **Secondary**: #DAA520 (Goldenrod)
- **Accent**: #F0E68C (Khaki)
- **Psychology**: Isolation, longing for connection
- **Domain Aesthetic**: Empty wastelands, echoes, distance

**PLAYFUL** - Bright Yellow
- **Primary**: #FFD700 (Gold)
- **Secondary**: #FFFF00 (Yellow)
- **Accent**: #FFFACD (Lemon Chiffon)
- **Psychology**: Lightness, creativity, spontaneity
- **Domain Aesthetic**: Sunlit playgrounds, laughter, movement

**GRATEFUL** - Deep Teal
- **Primary**: #008B8B (Dark Cyan)
- **Secondary**: #20B2AA (Light Sea Green)
- **Accent**: #B0E0E6 (Powder Blue)
- **Psychology**: Abundance, appreciation, fullness
- **Domain Aesthetic**: Temple of plenty, offerings, blessings

**OTHER** - Sage Green (Neutral)
- **Primary**: #8FBC8F (Dark Sea Green)
- **Secondary**: #98FB98 (Pale Green)
- **Accent**: #F5FFFA (Mint Cream)
- **Psychology**: Unknown, exploration, mystery
- **Domain Aesthetic**: Crossroads, fog, possibility

**HOPEFUL** - Dusty Rose/Mauve
- **Primary**: #BC8F8F (Rosy Brown)
- **Secondary**: #DDA0DD (Plum)
- **Accent**: #FFE4E1 (Misty Rose)
- **Psychology**: Optimism, possibility, looking forward
- **Domain Aesthetic**: Observatory, dawn light, stars

**SHAMEFUL** - Muted Pink
- **Primary**: #DB7093 (Pale Violet Red)
- **Secondary**: #FFB6C1 (Light Pink)
- **Accent**: #FFF0F5 (Lavender Blush)
- **Psychology**: Exposure, vulnerability, hiding
- **Domain Aesthetic**: Veiled spaces, exposed places, shadows

**SAD** - Deep Purple
- **Primary**: #663399 (Rebecca Purple)
- **Secondary**: #8B008B (Dark Magenta)
- **Accent**: #DA70D6 (Orchid)
- **Psychology**: Depth, loss, mourning, acceptance
- **Domain Aesthetic**: Purple abyss, rain, stillness

**STUCK** - Lavender/Light Purple
- **Primary**: #9370DB (Medium Purple)
- **Secondary**: #BA55D3 (Medium Orchid)
- **Accent**: #E6E6FA (Lavender)
- **Psychology**: Immobility, repetition, seeking change
- **Domain Aesthetic**: Labyrinth, loops, barriers

**NERVOUS** - Copper/Bronze
- **Primary**: #CD853F (Peru)
- **Secondary**: #D2691E (Chocolate)
- **Accent**: #F4A460 (Sandy Brown)
- **Psychology**: Anticipatory energy, jitters, alertness
- **Domain Aesthetic**: Cliffs, precipices, edges

### 2.2 Global Palette

**Neutral Colors:**
- **Backgrounds**: #1A1A2E (Deep Night Blue), #16213E (Dark Blue)
- **UI Panels**: #0F3460 (Navy), #533483 (Purple Gray) with transparency
- **Text**: #FFFFFF (White), #E8E8E8 (Off-White), #CCCCCC (Light Gray)
- **Accents**: #E94560 (Coral), #FCA311 (Orange)

**Environmental Colors:**
- **Sky**: Gradient from #1A1A2E (night) to #4A5568 (twilight) to #E2E8F0 (day)
- **Grass/Foliage**: #228B22, #32CD32, #90EE90 (variety)
- **Water**: #4682B4 (Steel Blue) to #00CED1 (Turquoise)
- **Stone**: #696969 (Dim Gray) to #A9A9A9 (Dark Gray)

---

## 3. Character Design Specifications

### 3.1 Player Avatar

**Design Requirements:**

**Age Representation:**
- Appearance suggests 12-20 year old
- Not overly stylized/chibi (maintain dignity for teen players)
- Moderate proportions (6-7 heads tall)
- Gender-neutral options available

**Customization Layers:**

**Base Body (8 options):**
1. Slender build
2. Athletic build
3. Average build
4. Curvy build
5. Plus-size build
6. Very slender build
7. Broad/stocky build
8. Non-binary/androgynous build

**Skin Tones (12 options):**
- Spectrum from very light to very dark
- Undertones: warm, neutral, cool
- Optional: Slight ethereal glow (magical realism)
- Hex codes: #FFDFC4, #F0C5A0, #D4A373, #C68642, #8D5524, #5C4033, etc.

**Hair Styles (15+ options):**
- Short styles: Pixie cut, cropped, undercut
- Medium: Bob, shoulder-length, wavy
- Long: Straight, curly, braided, ponytail
- Textured: Curly/coily, locs, afro
- Fantasy: With subtle magical shimmer

**Hair Colors (Natural + Fantasy):**
- Natural: Black, brown (dark/light), blonde (platinum/honey), red, gray
- Fantasy: Blue, purple, silver, pink, teal, gradient
- Opacity/saturation adjustable

**Facial Features:**
- **Face Shape** (6): Round, oval, heart, square, diamond, long
- **Eyes** (8 shapes): Almond, round, hooded, upturned, downturned
- **Eye Color**: Full spectrum + heterochromia option
- **Optional**: Glasses, freckles, beauty marks, scars

**Clothing (Starter Outfits - 4):**

1. **Wanderer**
   - Practical tunic and pants
   - Leather boots
   - Travel cloak
   - Earth tones with emotion crystal accent

2. **Scholar**
   - Flowing robes with mystical symbols
   - Hood (up/down toggle)
   - Carries emotional codex
   - Deep blues/purples with gold trim

3. **Guardian**
   - Light armor (leather/cloth hybrid)
   - Emotion crystal embedded in chest piece
   - Protective but not aggressive
   - Silver/white with emotional color accents

4. **Free Spirit**
   - Artistic, flowing clothing
   - Layered fabrics
   - Bare feet or sandals
   - Warm, organic colors

**Emotional Crystal Pendant:**
- Hangs at chest level
- Glows with current emotion's color
- Evolves visually as player progresses
- Detailed inner structure (visible fractures of light)

**Animation States:**
- Idle (breathing, subtle movement)
- Walk cycle (8 directions)
- Run cycle
- Interact (reaching, examining)
- Emotional reactions (joy, sadness, contemplation)
- Power activation (glow, energy emanation)

### 3.2 Companion Creature

**Design Concept:**
"A mystical animal-spirit hybrid that embodies emotional wisdom—part fox, part deer, part phoenix."

**Physical Characteristics:**
- **Size**: Large cat to small deer (reaches player's waist)
- **Form**: Quadruped with elegant, flowing lines
- **Head**: Fox-like with wise, expressive eyes
- **Ears**: Deer-like, alert and emotive
- **Body**: Sleek but with ethereal fur that flows like smoke
- **Tail**: Long, flowing, with wisps of light
- **Legs**: Graceful, ending in soft paws (not hooves)

**Magical Elements:**
- Entire form has subtle glow
- Fur has bioluminescent patterns (like constellations)
- Eyes glow warmly (gold/amber)
- Emotional energy wisps drift from fur
- When moving, leaves trail of soft light

**Color Evolution (Bond Levels):**

**Level 1 (New Friends):**
- Base color: Soft white/silver
- Subtle glow
- Few glowing patterns

**Level 2 (Trusted Guide):**
- Warmer tones appear (cream/gold)
- More intricate glowing patterns
- Slightly larger
- Brighter glow

**Level 3 (Close Companion):**
- Rich gold/amber base
- Complex constellation patterns
- Notable size increase
- Radiant glow
- Small particles orbit body

**Level 4 (Soul Bond):**
- Brilliant multicolored (all emotions)
- Full constellation patterns
- Maximum size
- Otherworldly radiance
- Wings of light appear in special moments

**Expressions & Animations:**
- Idle: Gentle breathing, looking around, grooming
- Walk: Graceful four-legged gait
- Run: Flows like water, leaves light trail
- Listen: Ears perk, head tilts
- Speak: Looks at player, subtle mouth movement
- Happy: Playful bounce, tail wags
- Concerned: Moves closer, nuzzles
- Celebration: Glows brighter, spins, releases particles

### 3.3 NPC Characters (Future/Optional)

**Purpose:**
- Populate emotion domains
- Provide side quests
- Represent emotional archetypes

**Design Approach:**
- More stylized than player avatar (clearly NPCs)
- Embody specific emotions visually
- Varied ages, body types, presentations
- Some human, some spirit-beings

---

## 4. Environment & World Design

### 4.1 Hub Area: The Heart of the Realm

**Description:**
Central grove where player arrives and chooses emotions. Sacred, neutral ground connecting all emotion domains.

**Visual Elements:**
- **Ground**: Soft, glowing moss; stone pathways
- **Center Platform**: Circular, raised, with 16 pedestals
- **Pedestals**: Each holds an emotion crystal (colored, glowing)
- **Surrounding**: Ancient trees with bioluminescent leaves
- **Sky**: Swirling aurora representing all emotions
- **Lighting**: Warm, welcoming, ethereal
- **Ambient Life**: Glowing butterflies, floating wisps

**Layers (Parallax):**
1. Foreground: Grass, flowers, small rocks
2. Mid-ground: Platform, crystals, player
3. Background 1: Trees, companion
4. Background 2: Distant forest
5. Sky: Aurora, stars

### 4.2 Module Environments

#### **Module 1: The Awakening Circle**
- **Setting**: Same as Hub (Heart of the Realm)
- **Change**: When emotion selected, environment shifts to that emotion's color
- **Effects**: Particles, lighting, sky all adapt to chosen emotion

#### **Module 2: The Memory Constellation (Star Chamber)**

**Description:**
A vast chamber that feels like deep space, but intimate. Memories appear as glowing orbs among stars.

**Visual Elements:**
- **Floor**: Reflective, like still water or obsidian
- **Walls**: Non-existent—fades into starfield
- **Center**: Raised platform with central emotion-star
- **Satellites**: 5 orbital positions for memories
- **Lighting**: Comes from stars and memory orbs
- **Effects**: Connecting light-threads, gentle rotation

**Color Scheme:**
- Deep blues and purples (space)
- Bright points of light (stars)
- Emotion color for central star

**Assets Needed:**
- Star background (animated, slowly moving)
- Platform (glowing edges)
- Memory orbs (5 variations, scalable)
- Light beam connectors
- Particle systems (stardust)

#### **Module 3: The Temple of Embodiment**

**Description:**
Ancient crystal temple with central statue (player's avatar), surrounded by smaller teaching statues.

**Visual Elements:**
- **Architecture**: Carved crystal pillars, vaulted ceiling
- **Floor**: Intricate mandala pattern
- **Central Statue**: Large, glowing player avatar (Vitruvian Man pose)
- **Teaching Statues**: 5 smaller statues around center
- **Lighting**: Soft, coming from within crystals
- **Windows**: Stained glass showing emotional symbols

**Color Scheme:**
- Cool stone grays and whites
- Warm internal glow (gold/amber)
- Emotion color highlights

**Special Effects:**
- Body scan: Traveling glow down statue
- Activation: Statues come to life with light
- Highlight: Selected body region pulses

#### **Module 4: The Speaking Stone Chamber**

**Description:**
Sacred writing room built around massive ancient stone. Intimate, warm, safe.

**Visual Elements:**
- **Speaking Stone**: Central, massive, inscribed with glowing symbols
- **Parchment**: Floating magical paper
- **Candles**: Floating in air, warm light
- **Walls**: Covered in faint, glowing text (past Weavers' words)
- **Furniture**: Simple writing desk, cushions
- **Floor**: Soft rugs, warm wood

**Color Scheme:**
- Warm browns and golds
- Soft candlelight (orange/yellow)
- Emotion color for active writing

**Special Effects:**
- Words glow as written
- Emotional energy rises from parchment
- Stone hums and glows in resonance

#### **Module 5: The Mirror Portal (Hall of Reflection)**

**Description:**
Crystal chamber lined with mirrors showing alternate perspectives. Center portal is key.

**Visual Elements:**
- **Mirrors**: Massive, ornate frames, swirling surfaces
- **Center Portal**: Large, active, showing silhouettes
- **Floor**: Reflective crystal
- **Lighting**: Refractive, prismatic
- **Effects**: Multiple reflections, light splitting

**Color Scheme:**
- Silver and white (mirrors)
- Prismatic rainbows (refraction)
- Emotion color for portal glow

**Special Effects:**
- Portal swirl animation
- Silhouette selection
- Perspective shift (color grading change)
- Player becomes translucent in alternate perspective

#### **Module 6: The Cathartic Falls**

**Description:**
Magnificent waterfall cascading into glowing pool. Serene, powerful, cleansing.

**Visual Elements:**
- **Waterfall**: Large, animated, emotional color
- **Pool**: Glowing water, ripples
- **Rocks**: Moss-covered, soft
- **Journal**: Floating light-construct above pool
- **Surroundings**: Lush plants, fireflies
- **Mist**: Gentle, glowing

**Color Scheme:**
- Blues and teals (water)
- Greens (moss, plants)
- Emotion color in water glow
- Warm firefly light (yellow)

**Special Effects:**
- Water flow animation (particle-based)
- Words become droplets
- Droplets absorbed by waterfall
- Waterfall color shifts with emotion
- Splash and mist when words released

#### **Module 7: The Emotional Compass (Peak of Balance)**

**Description:**
Mountain peak where three distinct landscapes converge around central compass.

**Visual Elements:**
- **Center**: Large stone compass with emotion core
- **Left Path**: Frozen wasteland (Shutdown)
  - Ice, snow, muted colors, stillness
- **Center Path**: Beautiful meadow (Balance)
  - Flowers, gentle breeze, vibrant colors
- **Right Path**: Volcanic chaos (Overwhelm)
  - Lava, fire, intense colors, turbulence
- **Sky**: Reflects current state

**Color Scheme:**
- Shutdown: Desaturated, cool (blues/grays)
- Balance: Full saturation, natural greens/golds
- Overwhelm: Oversaturated, hot (reds/oranges)

**Special Effects:**
- Environment morphs as player enters each state
- Visual feedback: vignette, color grading, particle density
- Compass needle points to player's current state

#### **Module 8: The Wisdom Tree Grove**

**Description:**
Highest point—ancient, enormous tree at center. Sacred, profound, beautiful.

**Visual Elements:**
- **Wisdom Tree**: Massive, glowing with all emotion colors
- **Trunk**: Ancient, with visible energy channels
- **Branches**: Reaching high, holding glowing fruit
- **Fruit**: Luminous spheres (wisdom containers)
- **Ground**: Soft grass, flowers, roots
- **Sky**: Clear, stars visible, player's constellation appears
- **View**: Can see entire Realm below

**Color Scheme:**
- Tree: Rich browns with multicolor glow
- Fruit: Emotion color (player's current emotion)
- Grass: Lush greens
- Sky: Deep blue with stars

**Special Effects:**
- Fruit glow pulses
- Written lessons become stars
- Constellation forms in sky
- Tree's energy flows visible
- Elevation camera effect

#### **Module 9: The Ripple Pool**

**Description:**
Perfect, mirror-like pool at tree's base. Reflects stars and wisdom constellation. Peaceful, hopeful.

**Visual Elements:**
- **Pool**: Perfectly still, reflective surface
- **Platform**: Central, where player stands
- **Stones**: Glowing, inscribed with past intentions
- **Reflections**: Stars, constellation, player
- **Surroundings**: Soft grass, quiet

**Color Scheme:**
- Water: Deep blue-black (night sky reflection)
- Reflections: Starlight (white/silver)
- Stones: Warm glow (gold)
- Ripples: Emotion color

**Special Effects:**
- Mirror-perfect reflection
- Journey replay in water (images from past modules)
- Intention drop creates ripples
- Ripples expand infinitely
- Entire realm illuminates with ripple

### 4.3 Environmental Storytelling

**Bioluminescent Flora:**
- Mushrooms, flowers, vines that glow
- React to player proximity (glow brighter)
- Color shifts based on nearby emotion energy

**Emotional Wisps:**
- Small particles of light floating through air
- Color matches nearby emotion
- Drawn to player's crystal
- Create ambient life

**Ancient Inscriptions:**
- Carved into stones throughout realm
- Glow faintly
- Written in mystical language (emotional wisdom)
- Sometimes readable (insights for player)

**Weather/Atmosphere:**
- Gentle wind (leaves/grass movement)
- Occasional emotional "weather" (joy = sunbeams, sadness = gentle rain)
- Fog/mist in mysterious areas
- Aurora effects in sky

---

## 5. UI/UX Visual Design

### 5.1 UI Design Principles

**Approach:**
- Diegetic when possible (exists in game world)
- Minimal screen clutter
- Elegant, mystical aesthetic
- Accessibility: readable, clear, scalable

### 5.2 HUD (Heads-Up Display)

**Elements:**

**Companion Icon (Bottom Right):**
- Circular avatar of companion
- Glows when hover
- Pulsing outline when companion has dialogue
- Click to open chat

**Emotional Crystal Status (Top Right):**
- Player's crystal visual
- Shows current emotion color
- Glow intensity indicates module progress
- Tooltip: emotion name, powers unlocked

**Module Progress (Top Center, subtle):**
- 9 small dots or icons
- Completed: Glowing
- Current: Pulsing
- Future: Dim
- Appears only during active journey

**Settings/Menu (Top Left):**
- Gear icon or mystical symbol
- Access: Save, Load, Settings, Exit

**Interaction Prompts (Context-Sensitive):**
- Appear near interactive objects
- Example: "Press E to examine"
- Fade in/out smoothly
- Minimal, clean font

### 5.3 Menu Screens

**Main Menu:**
- Background: Animated view of Heart of Realm
- Title: "Emotion Explorer: Realm of Feelings" (elegant font)
- Buttons (vertically centered):
  - New Journey
  - Continue Journey
  - Settings
  - Exit
- Ambient particles, gentle music

**Character Creation:**
- Full-screen interface
- Live preview of avatar (left side)
- Customization options (right side, scrollable)
- Category tabs: Body, Face, Hair, Outfit, Accessories
- Color pickers: Palette and sliders
- Name input: Mystical text field
- Navigation: Back, Confirm

**Pause Menu (In-Game):**
- Semi-transparent overlay (blurs game)
- Central panel with options:
  - Resume
  - Save Progress
  - Settings (volume, graphics, accessibility)
  - Main Menu (with confirmation)
- No full obstruction of game view

### 5.4 Text Input Interfaces

**Standard Text Box (Reflections, Letters, Journal):**
- Parchment or mystical paper texture
- Lined (subtle) or blank
- Handwriting font option (toggle)
- Auto-save indicator (small icon, animated when saving)
- Word count (bottom right, subtle)
- Submit button (glowing, emotion-colored)

**Letter Template:**
- Vintage letter aesthetic
- "To:", "Dear:", "From:" fields
- Wax seal visual when sealed
- Fold animation

**Journal Interface:**
- Spiral-bound notebook aesthetic
- Full page, minimal distractions
- Page-turn animation (optional)

### 5.5 Dialogue Boxes

**Companion Dialogue:**
- Bottom-center or bottom-left
- Semi-transparent panel
- Companion avatar (small) on left
- Text area (right)
- Name: "[Companion Name]"
- Font: Warm, readable (16-18pt)
- Auto-advance option or click to continue

**Interactive Dialogue (Choices):**
- Same layout
- Choice buttons below text
- Hover effect: Glow
- Selected: Slight emotion color tint

### 5.6 Typography

**Fonts:**

**Title/Headers:**
- Font: "Cinzel" or "Philosopher" (elegant, serif)
- Usage: Game title, major headers
- Weight: Medium to Bold

**Body Text:**
- Font: "Merriweather" or "Lora" (readable serif)
- Usage: Companion dialogue, prompts
- Weight: Regular
- Size: 16-18pt

**UI Elements:**
- Font: "Raleway" or "Lato" (clean sans-serif)
- Usage: Buttons, labels, HUD
- Weight: Regular to Semi-Bold

**Handwriting (Optional for Player):**
- Font: "Dancing Script" or "Satisfy"
- Usage: Player's written responses (toggle)

**Mystical/Ancient:**
- Font: "Cinzel Decorative" or custom
- Usage: Ancient inscriptions, magical elements

### 5.7 Icons & Symbols

**Emotion Icons (16 needed):**
- Circular or crystalline shape
- Abstract symbol representing each emotion
- Glows in emotion's color
- Examples:
  - Anger: Flame
  - Joy: Burst of light
  - Sadness: Teardrop
  - Fear: Shield
  - etc.

**UI Icons:**
- Settings: Gear or mystical circle
- Save: Crystal or scroll
- Load: Open book
- Chat: Speech bubble with heart
- Journal: Book or quill
- Map: Compass
- Powers: Star or energy burst

**Style:**
- Line art with glow
- Minimal detail
- Recognizable at small sizes
- Consistent stroke width

---

## 6. Animation Specifications

### 6.1 Character Animations

**Player Avatar:**

**Idle Animations:**
- Default: Subtle breathing, weight shift
- Looking around: Occasional head turn
- Contemplative: Hand to chin
- Duration: 3-5 second loops

**Movement:**
- Walk: 8-direction sprite (8 frames per direction)
- Run: Faster walk with more exaggeration
- Frame rate: 12 fps (smooth but performant)

**Interactions:**
- Reach: Extending hand toward object (1 second)
- Examine: Leaning in, curious pose (looping)
- Activate: Hand glows with power (1.5 seconds)
- Emotional reaction: Quick expression change

**Power Activation:**
- Body glows with emotion color
- Energy emanates from crystal
- Specific pose for each emotion family
- Duration: 2-3 seconds

**Companion:**

**Idle:**
- Breathing
- Looking around
- Sitting/standing variants
- Grooming

**Movement:**
- Walk: 4-legged graceful gait
- Run: Flowing, leaves light trail
- Jump: Leap with light burst

**Social:**
- Approach player: Walk with tail wag
- Listen: Ears perk, head tilt
- Speak: Subtle mouth animation, eyes glow
- Happy: Bounce, spin, particles
- Concerned: Move close, nuzzle

**Evolution:**
- Glow intensity increases with bond level
- Patterns appear progressively
- Size scales up subtly
- Particle effects become richer

### 6.2 Environmental Animations

**Flora:**
- Gentle sway (wind)
- Glow pulse (bioluminescence)
- React to player (brighten on approach)

**Water:**
- Waterfall: Cascading particle system
- Pool: Ripple effects
- Reflection: Real-time or pre-rendered

**Sky:**
- Aurora: Slow, flowing movement
- Stars: Gentle twinkle
- Clouds: Drifting parallax

**Crystals:**
- Inner light pulse
- Rotating slowly on pedestals
- Sparkle/shimmer effects

**Portals:**
- Swirling energy
- Pulsing glow
- Particle emission

### 6.3 UI Animations

**Transitions:**
- Fade in/out (0.3-0.5 seconds)
- Slide in/out (menus, dialogue)
- Scale in (buttons, icons on hover)

**Buttons:**
- Idle: Subtle glow pulse
- Hover: Scale up 5%, brighten
- Click: Quick scale down, then return

**Text:**
- Type-in effect (optional for dialogue)
- Glow on emotional keywords

**Loading:**
- Spinning crystal or mystical circle
- Pulsing light
- "Weaving..." text

---

## 7. Particle & VFX Design

### 7.1 Emotional Energy Wisps

**Description:**
Tiny particles of light floating through air, representing ambient emotional energy.

**Properties:**
- Size: 2-5px
- Color: Matches nearby emotion or environment
- Behavior: Float upward/drift slowly, slight random movement
- Quantity: 20-50 on screen at once
- Fade: Fade in/out gently

**Usage:**
- Background ambiance
- Increase density during emotional moments
- Drawn toward player's crystal

### 7.2 Power Activation Effects

**General:**
- Player glows with emotion color
- Energy ripples outward from body
- Crystal flares brightly
- Ground beneath player glows (magic circle optional)

**Emotion-Specific:**
- **Anger**: Red flames/embers
- **Joy**: Golden sparkles, outward burst
- **Sadness**: Purple tears of light falling
- **Fear**: Yellow barrier flash
- **etc.**

### 7.3 Module-Specific Effects

**Memory Constellation:**
- Memory orbs: Glow pulse, particle orbit
- Connecting lines: Flowing energy along thread
- Constellation completion: Burst of light

**Body Language:**
- Body scan: Traveling wave of light
- Sensation highlight: Pulsing glow on body region
- Statue activation: Cracks of light spreading

**Speaking Stone:**
- Words glow as typed
- Emotional energy rises (smoke-like wisps)
- Letter sealing: Wax seal materializes with glow

**Cathartic Falls:**
- Words become droplets
- Droplets fly to waterfall
- Waterfall surges with color
- Splash creates particle burst

**Ripple Pool:**
- Intention drop: Slow-motion droplet
- Ripples: Expanding rings of light
- Ripple carries glowing text
- Realm illumination: Pulse of light spreading everywhere

### 7.4 Ambient Effects

**Fireflies/Light Bugs:**
- Small, yellow-green glowing orbs
- Fly in gentle, looping paths
- Avoid player (AI steering)

**Dust Motes:**
- In light beams
- Slow floating, catching light

**Fog/Mist:**
- Ground-level, gentle movement
- Particles-based or shader

**Light Rays (God Rays):**
- From sky/windows
- Volumetric or image-based

---

## 8. Audio Design Brief

### 8.1 Music

**Approach:**
- Emotional, orchestral with electronic elements
- Adaptive (layers add/remove based on intensity)
- Memorable themes for each emotion domain

**Tracks Needed:**

**Main Menu:**
- Contemplative, hopeful
- Gentle strings, piano
- Ambient pads
- Loop: 3-4 minutes

**Hub (Heart of Realm):**
- Neutral, inviting
- Harp, woodwinds, soft percussion
- Peaceful but with underlying magic
- Loop: 4-5 minutes

**Emotion Domain Themes (16):**
- Each emotion has distinct musical identity
- Examples:
  - **Anger**: Intense drums, deep brass, driving rhythm
  - **Joy**: Bright strings, playful melodies, major key
  - **Sadness**: Melancholic cello, piano, minor key, rain sounds
  - **Fear**: Tense strings, dissonant chords, rising tension
- Loop: 3-4 minutes each

**Module Ambience:**
- Subtle, supportive of reflection
- Can be variations on emotion theme
- Examples:
  - **Writing modules**: Soft, contemplative
  - **Body Language**: Meditative, spacious
  - **Wisdom Tree**: Ethereal, profound

### 8.2 Sound Effects

**UI:**
- Button hover: Soft chime
- Button click: Gentle click + magic shimmer
- Menu open/close: Whoosh
- Text input: Soft key taps (optional)
- Save: Crystal chime

**Gameplay:**
- Footsteps: Soft, varied by surface
- Interaction: Gentle magical tone
- Power activation: Whoosh + emotion-specific sound
- Emotion crystal: Hum (continuous, subtle)

**Environmental:**
- Waterfall: Rushing water (looping)
- Fire: Crackling (looping)
- Wind: Gentle breeze (looping)
- Birds/crickets: Ambient life

**Companion:**
- Footsteps: Soft paw pads
- Vocalization: Gentle, non-verbal sounds (no speech)
- Happy: Playful chime
- Concerned: Soft tone

**Special Moments:**
- Module completion: Success chime + sparkle
- Power unlock: Dramatic flourish
- Wisdom fruit: Gentle bell tone
- Ripple: Expanding water sound with shimmer

### 8.3 Voice (No VO for MVP)

**Text-to-Speech (Optional Future):**
- Companion dialogue
- Age-appropriate voice
- Warm, supportive tone

---

## 9. Complete Asset List

### 9.1 Characters

**Player Avatar:**
- [ ] Base body sprites (8 body types × 8 directions × 3 animation states) = 192 sprites
- [ ] Hair overlays (15 styles × 8 directions) = 120 sprites
- [ ] Outfit sprites (4 outfits × 8 directions) = 32 sprites
- [ ] Facial feature variations = 50+ sprites
- [ ] Emotional crystal pendant = 10 states

**Companion:**
- [ ] Idle animation (4 variations)
- [ ] Walk/run cycles (8 directions)
- [ ] Social animations (listen, speak, happy, concerned) = 8 animations
- [ ] Evolution variants (4 bond levels) = 4 versions of all above

### 9.2 Environments

**Hub (Heart of Realm):**
- [ ] Background layers (3-5 layers for parallax)
- [ ] Stone platform
- [ ] 16 emotion pedestals + crystals
- [ ] Trees, foliage
- [ ] Sky with aurora

**Module 2 (Star Chamber):**
- [ ] Starfield background (animated)
- [ ] Platform
- [ ] Central emotion star
- [ ] Memory orb templates (5)
- [ ] Light beam connectors

**Module 3 (Temple):**
- [ ] Temple architecture (walls, columns, floor)
- [ ] Central statue (dynamic, matches player)
- [ ] 5 teaching statues
- [ ] Stained glass windows

**Module 4 (Speaking Stone):**
- [ ] Chamber walls with inscriptions
- [ ] Speaking Stone (detailed)
- [ ] Floating parchment
- [ ] Candles (animated)
- [ ] Rugs, furniture

**Module 5 (Mirror Portal):**
- [ ] Mirror frames (multiple)
- [ ] Portal (animated)
- [ ] Reflective floor
- [ ] Silhouettes (6-8 variants)

**Module 6 (Cathartic Falls):**
- [ ] Waterfall (animated, particle-based)
- [ ] Pool with ripples
- [ ] Rocks, moss
- [ ] Floating journal
- [ ] Fireflies, plants

**Module 7 (Emotional Compass):**
- [ ] Mountain peak
- [ ] Central compass (interactive)
- [ ] Shutdown landscape (frozen)
- [ ] Balanced landscape (meadow)
- [ ] Overwhelmed landscape (volcanic)
- [ ] Sky variants

**Module 8 (Wisdom Tree):**
- [ ] Massive tree (detailed, glowing)
- [ ] Glowing fruit (various states)
- [ ] Grove surroundings
- [ ] Star sky with constellation overlay
- [ ] View of Realm below

**Module 9 (Ripple Pool):**
- [ ] Mirror-perfect pool
- [ ] Central platform
- [ ] Glowing stones
- [ ] Reflection effects
- [ ] Ripple animations

### 9.3 UI Elements

**Menus:**
- [ ] Main menu background
- [ ] Button templates (normal, hover, pressed)
- [ ] Panel backgrounds (semi-transparent)
- [ ] Character creation interface
- [ ] Settings interface

**HUD:**
- [ ] Companion icon
- [ ] Emotional crystal indicator
- [ ] Module progress tracker
- [ ] Settings icon

**Text Inputs:**
- [ ] Parchment textures (3 variations)
- [ ] Letter template
- [ ] Journal pages
- [ ] Text field backgrounds

**Icons:**
- [ ] 16 emotion icons
- [ ] UI icons (save, load, chat, etc.) = 15+
- [ ] Power icons (based on emotions) = 32+

### 9.4 VFX & Particles

**Particles:**
- [ ] Emotional wisps (general)
- [ ] Sparkles/shimmer
- [ ] Fire/embers (anger)
- [ ] Water droplets (sadness, falls)
- [ ] Light rays
- [ ] Smoke/mist
- [ ] Stardust
- [ ] Fireflies

**Effects:**
- [ ] Glow overlays (emotion colors)
- [ ] Power activation effects (16 emotions)
- [ ] Portal swirl
- [ ] Body scan beam
- [ ] Ripple wave
- [ ] Light beams/connectors
- [ ] Constellation formation

### 9.5 Audio

**Music:**
- [ ] Main menu theme
- [ ] Hub theme
- [ ] 16 emotion domain themes
- [ ] Module ambient tracks (9)
- [ ] Victory/completion theme

**SFX:**
- [ ] UI sounds (20+)
- [ ] Footsteps (5 surfaces)
- [ ] Environmental ambience (10+ loops)
- [ ] Companion sounds (10+)
- [ ] Power sounds (16)
- [ ] Special moment sounds (10+)

---

## End of Part 4

**Continue to Part 5: Implementation Roadmap & Comprehensive Prompt**
- MVP development phases
- Testing milestones
- The ultimate implementation prompt that ties everything together

---

*Document Version: 1.0*
*Last Updated: 2025-01-22*
*Status: Complete - Ready for Implementation Roadmap*
