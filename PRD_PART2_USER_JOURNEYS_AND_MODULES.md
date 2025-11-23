# Emotion Explorer Adventure Game - PRD Part 2: User Journeys & Module Specifications

## Document Information
- **Project Name**: Emotion Explorer Adventure Game
- **Version**: 1.0 MVP
- **Date**: 2025-01-22
- **Document Type**: Product Requirements Document (Part 2 of 5)
- **Dependencies**: Read Part 1 (Vision & Overview) first

---

## Table of Contents
1. Character Creation & Onboarding
2. Companion System & LLM Integration
3. Module-by-Module Specifications
4. Complete User Journey Maps
5. Emotion Power System Details
6. Game Loop & Session Structure

---

## 1. Character Creation & Onboarding

### 1.1 Welcome Screen

**First Launch Experience:**

**Screen 1: Title Splash**
- Animated title: "Emotion Explorer: Realm of Feelings"
- Ethereal music with emotional undertones
- Glowing portal animation in background
- Button: "Begin Your Journey"

**Screen 2: Age Selection**
```
"Before you enter the Realm, tell us about yourself..."

How old are you?
[ ] 12-13 years old
[ ] 14-15 years old
[ ] 16-17 years old
[ ] 18-20 years old

[This helps us personalize your adventure]
```

**Age-Based Content Adjustments:**
- **12-13**: Simpler language, more guidance, shorter text blocks
- **14-15**: Balanced complexity, moderate guidance
- **16-17**: Complex language, less handholding, deeper themes
- **18-20**: Sophisticated content, minimal guidance, mature themes allowed

### 1.2 Avatar Creation

**Screen 3: "Who Will You Become?"**

**Customization Options:**

**Body Type:**
- Slender
- Average
- Athletic
- Curvy
- Plus-size
- Non-binary/androgynous

**Skin Tone:**
- Slider with diverse range (8+ options)
- Fantasy variants (optional): Slightly shimmering, ethereal glow

**Hair:**
- Style: 12+ options (short, long, curly, straight, braided, etc.)
- Color: Natural palette + fantasy colors (blue, purple, silver, etc.)
- Length slider

**Facial Features:**
- Face shape: 6 options
- Eye shape: 6 options
- Eye color: Full spectrum including fantasy colors
- Additional features: Glasses, freckles, scars

**Clothing (Starting Outfit):**
- 4 starter outfit styles:
  - **Wanderer**: Practical travel clothes
  - **Scholar**: Robes with mystical symbols
  - **Guardian**: Light armor with emotional crystal
  - **Free Spirit**: Flowing, artistic clothing

**Accessories:**
- Starting emotional crystal (color matches first emotion chosen)
- Optional: Hat, scarf, pendant

**Voice/Name:**
- Text input: "What name do you carry into the Realm?"
- Voice selection (affects companion dialogue): Confident, Gentle, Curious, Determined

### 1.3 Tutorial Introduction

**Screen 4: The First Portal**

**Cinematic Sequence:**
1. **Narration**: "You've always felt things others couldn't. Tonight, something calls to you..."
2. **Visual**: Player avatar in real-world setting (bedroom, forest path, etc.)
3. **Event**: Glowing portal appears, pulsing with emotional energy
4. **Choice**:
   - "Step through" → Continue
   - "Turn away" → Warning: "The call grows stronger. Your journey awaits."
5. **Transition**: Avatar steps through swirling portal

**First Arrival in Realm:**
- Environment loads: "The Heart of the Realm" (tutorial space)
- Atmospheric effects: Bioluminescent plants, floating emotional energy wisps
- Tutorial popups (can be toggled off in settings):
  - "Use WASD or Arrow Keys to move"
  - "Click to interact with glowing objects"
  - "Press E to examine"

### 1.4 Companion Introduction

**Screen 5: "Meeting Your Guide"**

**Companion Appearance:**
A mystical creature emerges from the forest—your emotional guide. The companion's form reflects the first emotion you'll explore, but its essence is warm and supportive.

**Visual Design:**
- Ethereal animal-spirit hybrid (fox-like, deer-like, or bird-like)
- Glows with gentle emotional energy
- Expressive animations showing empathy
- Color shifts subtly based on emotional context

**First Dialogue:**
```
COMPANION: "Welcome, young Weaver. I've been waiting for someone like you. My name is [Player chooses companion name], and I'm here to guide you through the Realm of Emotions."

[Player can name their companion]
Text Input: ___________________

COMPANION: "Ah, [Chosen Name]. I like that. Now, let me sense what brings you here today..."

[Companion sniffs the air, eyes glow]

COMPANION: "I can feel a strong emotion stirring within you. Before we begin your training, let me show you how to access your Emotion Sight—the first power of all Weavers."

[Tutorial: Emotion Sight activated - world gains emotional aura overlay]

COMPANION: "Good. Now, let's discover which emotion has called you to the Realm today..."
```

**Tutorial Mechanics:**
- **Movement**: Walk to highlighted areas
- **Interaction**: Click on companion for dialogue
- **Emotion Sight**: Toggle overlay showing emotional energy (Tab key)
- **Journal**: Open quest log (J key)

---

## 2. Companion System & LLM Integration

### 2.1 Companion Core Functions

**1. Emotional Support & Validation**
- Responds empathetically to player choices
- Validates all emotional experiences as normal
- Provides encouragement during difficult modules
- Celebrates progress and insights

**2. Guidance & Education**
- Explains therapeutic concepts in accessible language
- Offers hints when player is stuck
- Provides psychoeducation naturally through dialogue
- Shares relevant wisdom about emotional processes

**3. Narrative Cohesion**
- Delivers story beats and world lore
- Creates emotional connection between player and game
- Evolves personality based on player interactions
- Remembers player's journey and references past insights

**4. Adaptive Difficulty**
- Offers more scaffolding for younger players
- Adjusts language complexity based on age setting
- Provides optional deeper explanations for curious players
- Scales back guidance for confident players

### 2.2 LLM Chat Integration

**Accessing the Companion Chat:**
- **Button**: "Talk to [Companion Name]" (bottom right, companion icon)
- **Hotkey**: T (for "Talk")
- **Visual**: Companion moves closer to player, interface slides in

**Chat Interface Design:**
```
┌─────────────────────────────────────────┐
│  [Companion Avatar]  [Companion Name]   │
├─────────────────────────────────────────┤
│                                          │
│  [Companion message bubble]              │
│  "What's on your mind?"                  │
│                                          │
│                [Player message bubble]   │
│                "I'm not sure how to..."  │
│                                          │
│  [Companion response]                    │
│  "That's okay! Let's figure it out..."   │
│                                          │
├─────────────────────────────────────────┤
│  [Text Input Field]                      │
│  Type your thoughts or questions...      │
│                                          │
│  [Send] [Close Chat]                     │
└─────────────────────────────────────────┘
```

**LLM System Prompt (Hidden from Player):**
```
You are [Companion Name], a wise and compassionate emotional guide in the Realm of Emotions. You are currently guiding [Player Name], age [Player Age], through [Current Module Name].

Your role:
- Provide emotional support and validation
- Explain game mechanics when asked
- Offer hints without giving direct answers
- Use age-appropriate language (current age: [Age])
- Never judge or criticize emotional experiences
- Encourage reflection and self-discovery
- Stay in character as mystical companion
- Reference player's previous insights when relevant

Current context:
- Emotion being explored: [Current Emotion]
- Module: [Current Module]
- Player progress: [Module completion status]
- Recent player input: [Last therapeutic writing/response]

Guidelines:
- Keep responses 2-4 sentences for engagement
- Ask open-ended questions to promote reflection
- If player is stuck, offer graduated hints
- If player shares distress, validate and suggest resources
- Maintain hopeful, empowering tone
- Use "we" language to show partnership

Safety:
- If player mentions self-harm or suicide, provide crisis resources immediately
- If player seems overwhelmed, suggest taking a break
- Never provide medical or professional mental health advice
- Encourage speaking to trusted adults for serious concerns
```

**Example Interactions:**

**Player asks for help:**
```
Player: "I don't understand this part about body language"

Companion: "The body holds so much wisdom! When you feel an emotion, where in your body do you notice it? Is it in your chest, your stomach, your shoulders? Try closing your eyes and scanning from your head down to your toes. What do you notice?"
```

**Player shares vulnerability:**
```
Player: "This is hard. I'm feeling a lot right now."

Companion: "I know, brave Weaver. Emotional work takes real courage. You're doing something powerful here. Would you like to take a moment to breathe, or should we continue gently?"
```

**Player expresses frustration:**
```
Player: "This seems dumb. Why am I writing letters to myself?"

Companion: "I hear your skepticism, and that's okay! Sometimes the most powerful tools seem strange at first. The letter isn't really for you—it's a way to speak to a part of yourself that needs to be heard. Want to try just one sentence and see how it feels?"
```

**Crisis Response:**
```
Player: "I've been thinking about hurting myself"

Companion: "I'm so glad you told me. What you're feeling matters, and you deserve support. Please reach out to someone who can help:
• Crisis Text Line: Text HOME to 741741
• National Suicide Prevention Lifeline: 988
• Talk to a trusted adult, school counselor, or therapist

You don't have to face this alone. Would you like to take a break from the game right now?"
```

### 2.3 Companion Evolution

**Bond Levels:**
As player progresses through modules, companion relationship deepens:

**Level 1: New Friends (Starting)**
- Formal, educational tone
- Explains everything carefully
- Keeps some mystical distance

**Level 2: Trusted Guide (3 emotions explored)**
- More personal, warm tone
- Shares own "emotional wisdom"
- Offers encouragement proactively

**Level 3: Close Companion (6 emotions explored)**
- Deeply personal connection
- References player's growth journey
- Shares deeper realm lore
- Celebrates player's wisdom

**Level 4: Soul Bond (All emotions explored)**
- Profound connection
- Companion reveals they are aspect of player's own emotional wisdom
- Unlocks special endgame content
- Companion becomes permanent inner voice

**Visual Evolution:**
- Companion gains glowing elements as bond deepens
- Size increases slightly (showing growing power)
- Additional magical effects around companion
- Player's emotional crystal glows brighter

---

## 3. Module-by-Module Specifications

### Module 1: The Awakening Circle (Mood Meter)

**Environment: The Heart of the Realm**

**Visual Description:**
A sacred circular grove bathed in soft twilight. In the center, a raised stone platform with 16 glowing pedestals arranged in a circle. Each pedestal holds a floating emotional crystal, pulsing with its characteristic color. Above, the sky swirls with aurora-like emotional energy. Bioluminescent flowers line the perimeter.

**Entry Sequence:**
1. Companion leads player to the center of the circle
2. "Before we begin, we must attune to what you're feeling right now. What emotion has called you to the Realm?"
3. Camera pulls back to reveal all 16 emotion pedestals

**Interaction Flow:**

**Step 1: Emotion Selection**
- Player can walk around the circle, examining each pedestal
- **Hover**: Emotion name appears, crystal glows brighter
- **Click**: Crystal floats up, rotating, revealing inner energy patterns
- **Examine (E key)**: Companion describes the emotion:

```
ANGER: "Anger—the fire that protects boundaries and demands justice. A powerful force when understood."

JOY: "Joy—the light that heals and connects. Pure life energy flowing freely."

FEAR: "Fear—the guardian that keeps you safe. It speaks of what matters to you."

[...etc for all 16 emotions]
```

- **Select**: Click crystal again to choose
- Crystal descends to player's hands, merges with their emotional crystal pendant

**Step 2: Intensity Calibration**

**Visual Mechanic:**
- A vertical beam of light shoots up from the platform
- A floating orb (representing the emotion) appears at bottom of beam
- Visual intensity scale appears alongside:
  - **Top (100)**: Violent storm, overwhelming energy
  - **Middle (50)**: Gentle flow, balanced
  - **Bottom (10)**: Faint flicker, barely present

**Interaction:**
- **Mouse**: Drag orb up or down the beam
- **Keyboard**: Arrow keys fine-tune position
- **Gamepad**: Analog stick controls position

**Real-time Feedback:**
- Environment responds to intensity:
  - **100**: Weather becomes intense (storm for anger, blinding light for joy)
  - **50**: Balanced atmosphere
  - **10**: Subtle, muted environment

**Companion Dialogue (Dynamic):**
```
[If player selects high intensity]
COMPANION: "I can feel the strength of this emotion. It's taking up a lot of space inside you right now."

[If player selects medium]
COMPANION: "A balanced intensity—present but not overwhelming. A good place to begin."

[If player selects low]
COMPANION: "Just a whisper of this feeling, but even whispers deserve our attention."
```

**Step 3: Reflection Writing**

**Visual**:
- A magical book appears, floating before player
- Pages glow softly, inviting writing
- Companion settles nearby, attentive

**Prompt Displayed:**
"Write about this feeling. How does it show up in your life? What does it feel like inside you?"

**Text Input Mechanics:**
- Large text area with mystical paper texture
- Handwriting-style font option (toggleable)
- Auto-save every 10 seconds (local storage)
- Word count displayed subtly (minimum: 20 words suggested, not enforced)

**Dynamic Response:**
- As player writes, emotional energy wisps rise from the page
- Text glows slightly with emotion's color
- Companion reads along, nodding encouragingly
- No judgement, no correction—pure acceptance

**Completion:**
- "Are you finished?" → [Yes] [Write more]
- Upon completion, text transforms into glowing script that swirls around player
- **Power Unlocked**: "You've gained Emotion Sight—you can now perceive emotional energies in the Realm."

**Transition to Module 2:**
```
COMPANION: "Well done, Weaver. You've taken the first step: naming and honoring what you feel. Now, let's explore where this emotion connects to your life. Follow me to the Memory Constellation..."
```

---

### Module 2: The Memory Constellation (Map Your Feelings)

**Environment: The Star Chamber**

**Visual Description:**
A vast, dark chamber that resembles deep space. Stars and galaxies swirl overhead. In the center, a raised platform where memories manifest as glowing orbs. The player's chosen emotion appears as a large, brilliant star in the center.

**Entry Sequence:**
1. Companion guides player across bridge of light
2. Central emotion-star pulses, illuminating space
3. "Emotions don't exist in isolation. They connect to moments, people, places. Let's map the constellation of this feeling."

**Interaction Flow:**

**Step 1: Satellite Activation**
- Five empty orbital positions surround the central emotion
- Each position has a dormant crystal waiting to be activated
- Companion: "Walk to each crystal and awaken it with a memory, thought, or connection."

**Step 2: Memory Association**

**For Each of 5 Satellites:**

**Visual:**
- Player approaches dormant crystal
- Crystal awakens, creating input field
- Background shows abstract memory imagery (blurred scenes, colors, shapes)

**Prompt:**
"What does this emotion remind you of? Write a word, phrase, name, place, or time..."

**Examples of Player Input:**
- "My mom's voice"
- "The playground incident in 5th grade"
- "Alone in my room"
- "When I failed the test"
- "My best friend's face"

**Feedback:**
- As player writes, memory orb forms
- Connecting line of light links memory to central emotion
- Memory orb glows in emotion's color
- Abstract visuals represent the memory (not literal images, respect privacy)

**Step 3: Constellation Completion**

**Visual:**
- All 5 memories now orbit the central emotion
- Lines of light connect them, forming constellation pattern
- Companion: "Look at your constellation. See how this emotion touches so many parts of your life?"

**Interactive Exploration:**
- Player can click any memory orb to see what they wrote
- Orbiting animation continues
- Music swells as constellation pulses

**Reflection Moment:**
- Camera pulls back to show full constellation
- Optional: "Would you like to add anything else?"
- Companion shares wisdom:

```
COMPANION: "Emotions are like this—connected to everything. When you feel [emotion], it's not just about one moment. It's woven through your story. This wisdom is powerful. You're beginning to see the patterns."
```

**Power Unlocked:**
"Memory Weaving - You can now access wisdom from past experiences to solve puzzles in the Realm."

**Environmental Change:**
- Constellation remains visible in night sky throughout rest of journey
- Other constellations appear faintly (representing other possible emotions)
- Sense of mapping inner landscape

**Transition to Module 3:**
```
COMPANION: "Your mind holds one map. But your body holds another. Come with me to the Temple of Embodiment, where we'll discover what your body knows about this feeling..."
```

---

### Module 3: The Temple of Embodiment (Body Language)

**Environment: The Temple of Embodiment**

**Visual Description:**
An ancient temple carved from living crystal. In the center, a massive, beautiful statue resembling the player's avatar in a Vitruvian Man pose. The statue glows from within, showing energy channels (like chakras). Around it, four smaller statues representing aspects of bodily wisdom: Where, Feel, Talk, Ask, Take Action.

**Entry Sequence:**
1. Temple doors open as player approaches
2. Central statue comes to life with soft glow
3. Companion: "The body speaks a language all its own. Let's listen to what yours is saying about [emotion]."

**Interaction Flow:**

**Step 1: Body Scan Activation**

**Visual:**
- Player stands before central statue
- Statue mirrors player's avatar
- "Press and hold SPACE to begin body scan"

**Body Scan Mechanic:**
- When player holds space, a gentle glow begins at the statue's head
- Glow slowly travels down the body (10-second animation)
- Player's actual emotional crystal pendant glows in sync
- Calming breath cues appear: "Breathe in... breathe out..."

**Companion Guidance:**
"Close your eyes if you'd like. As the light moves through the statue, notice where in your own body you feel [emotion]. Your chest? Your stomach? Your throat? Shoulders? Just notice, without judgment."

**Step 2: Location Identification - "Where"**

**Visual:**
- First small statue activates (figure pointing to body)
- Interactive body diagram appears before player
- Player can click any region of the body

**Body Regions Available:**
- Head/Temples
- Throat
- Chest/Heart
- Stomach/Solar Plexus
- Lower Abdomen
- Shoulders
- Arms/Hands
- Legs/Feet
- Back
- "All Over"
- "Can't Locate It"

**After Selection:**
- Selected region glows on the central statue
- Text input: "What exactly do you feel there?"

**Example Inputs:**
- "Tightness in my chest"
- "Butterflies in my stomach"
- "Tension in my shoulders"
- "Heavy feeling all over"

**Step 3: Sensation Description - "Feel"**

**Visual:**
- Second statue activates (figure with sensory emanations)
- Selected body region pulses on central statue

**Prompt:**
"What does it feel like? (hot, cold, tight, fluttery, heavy, empty, buzzing...)"

**Text Input with Suggestions:**
- Word bank appears with common sensations
- Player can click suggestions or type freely
- Multiple sensations can be selected

**Suggestions:**
- Tight, Clenched, Constricted
- Heavy, Weighted, Pressed
- Empty, Hollow, Vacant
- Fluttery, Buzzing, Electric
- Hot, Burning, Warm
- Cold, Frozen, Numb
- Achy, Sore, Painful
- Soft, Open, Relaxed

**Feedback:**
- Selected body region on statue changes texture to reflect sensation
- (e.g., if "tight," area becomes tense; if "fluttery," area shimmers)

**Step 4: Body Voice - "Talk"**

**Visual:**
- Third statue activates (figure with emanating speech)
- Speech bubble appears from the highlighted body region on central statue

**Prompt:**
"If this part of your body could talk, what would it say?"

**Example Companion Guidance:**
"Sometimes our bodies speak truths our minds avoid. Let this part of you have a voice. What does it want you to know?"

**Text Input:**
- Free-form writing
- No word limit (minimum: 10 words suggested)

**Example Inputs:**
- "I'm so tired of holding everything together"
- "I need a break"
- "Pay attention to me!"
- "Something isn't right"
- "I'm scared"

**Feedback:**
- Text appears as glowing words around the body region
- Companion responds empathetically:
```
COMPANION: "Thank you for listening. Your body has been trying to tell you this."
```

**Step 5: Body Need - "Ask"**

**Visual:**
- Fourth statue activates (figure with open, receiving gesture)
- Central statue's highlighted region reaches outward

**Prompt:**
"If this part of your body could ask for something, what would it ask for?"

**Text Input:**
- Free-form writing

**Example Inputs:**
- "To be held"
- "To breathe deeply"
- "To stop carrying so much"
- "To be heard"
- "To rest"

**Step 6: Body Action - "Take Action"**

**Visual:**
- Fifth statue activates (figure in dynamic pose)
- Central statue animates into action pose based on player input

**Prompt:**
"If this part of your body could take action, what would it do?"

**Text Input:**
- Free-form writing

**Example Inputs:**
- "Scream"
- "Run away"
- "Curl up and hide"
- "Push everything away"
- "Dance freely"
- "Reach out for help"

**Feedback:**
- Central statue performs subtle animation suggesting the action
- Energy flows through the indicated body region

**Step 7: Integration**

**Visual:**
- All five smaller statues glow simultaneously
- Central statue returns to balanced pose, but now fully illuminated
- Body region pulses gently with emotional color

**Companion Reflection:**
```
COMPANION: "Your body holds such wisdom. It knows what you need, even when your mind is unsure. Remember this: [emotion] lives in your [body location], and it's asking for [need]. This knowledge is a gift."
```

**Power Unlocked:**
"Somatic Sensing - You can now detect emotional energy in the environment and sense when others are holding emotions in their bodies."

**Visual Reward:**
- Player's avatar gains subtle glow around identified body region
- Emotional crystal gains new inner structure (like veins of light)

**Transition to Module 4:**
```
COMPANION: "You've listened to your body. Now it's time to give voice to your heart. Come with me to the Speaking Stone, where words become power..."
```

---

### Module 4: The Speaking Stone (Letter Writing)

**Environment: The Speaking Stone Chamber**

**Visual Description:**
A sacred writing chamber built around a massive, ancient stone that hums with energy. The stone's surface is smooth and inscribed with glowing symbols. Around the chamber, words from countless previous Weavers float as gentle light, then fade—a testament to all who've spoken their truth here. Soft, warm lighting. Candles float in air.

**Entry Sequence:**
1. Heavy stone doors open slowly
2. Interior reveals itself—intimate, safe, sacred
3. Companion: "This is the Speaking Stone. For millennia, Weavers have come here to speak what cannot be spoken elsewhere. When you write here, your words gain power."

**Interaction Flow:**

**Step 1: Letter Recipient Selection**

**Visual:**
- Magical parchment appears, floating before player
- Header section glows: "To: _______________"

**Prompt Displayed:**
```
"Who needs to receive your words?

You might write to:
• A part of yourself you're struggling with
• Someone who hurt you
• Someone you've hurt
• Someone you love
• Someone you need to forgive
• Someone you're angry with
• Someone you need to set boundaries with
• A younger version of yourself"
```

**Companion Dialogue:**
```
COMPANION: "Remember, this letter is for your healing, not for sending. Speak freely. Who needs to hear from you today?"
```

**Text Input:**
- Simple text field
- Examples appear faintly if player hesitates:
  - "Dear Past Self..."
  - "Dear [Name]..."
  - "Dear The Part of Me That..."
  - "Dear My Anger..."

**Step 2: Greeting Personalization**

**Visual:**
- Next line appears: "Dear_______________"

**Prompt:**
"How will you greet them?"

**Text Input:**
- Free-form
- Player can write formal or informal greeting
- System auto-capitalizes first letter

**Step 3: Letter Body - The Heart**

**Visual:**
- Large writing area appears
- Parchment texture background
- Subtle lines (like notebook paper)
- Scrollable for longer letters

**Prompt:**
"Now... speak your truth. What do they need to hear?"

**Writing Mechanics:**
- Clean, distraction-free interface
- Soft keyboard click sounds (optional)
- Auto-save every 15 seconds
- Word count displayed subtly (minimum suggested: 50 words, not enforced)
- Timer appears after 5 minutes: "Take your time. There's no rush."

**Dynamic Environmental Response:**
- As player writes emotionally charged words, they briefly glow with emotion color
- Emotional energy wisps rise from the parchment
- Speaking Stone hums in resonance with emotional intensity
- Companion remains present but silent, respecting the sacred act

**Optional Prompts (if player gets stuck):**
Click "Need inspiration?" to reveal:
```
• What do you need them to understand about how you feel?
• What did their actions mean to you?
• What do you wish had happened differently?
• What do you need from them that you've never asked for?
• What are you ready to release?
```

**Step 4: Closing**

**Visual:**
- "From: _______________" field appears at bottom

**Prompt:**
"How will you sign your name?"

**Text Input:**
- Free-form
- Could be their actual name, a descriptor, a pseudonym
- Examples: "Your Hurt Child," "Your Stronger Self," "The One Who Sees You"

**Step 5: Sealing the Letter**

**Visual:**
- Complete letter hovers before player
- Companion approaches

**Companion Dialogue:**
```
COMPANION: "Would you like to read what you've written, or shall we seal it now?"

[Read Again] [Seal Letter]
```

**If player chooses "Read Again":**
- Letter displays in beautiful typography
- Player can edit if desired
- "Ready to seal?" returns

**When player chooses "Seal Letter":**

**Visual Sequence:**
1. Letter folds itself with magical animation
2. Wax seal appears, stamped with player's emotional crystal symbol
3. Letter glows brilliantly, then dissolves into light particles
4. Light particles flow into Speaking Stone
5. Stone flares with brilliant light
6. A single word from the letter becomes permanently etched into the stone (player's most powerful word, identified by AI)

**Companion Response:**
```
COMPANION: "Your truth has been spoken. The Stone has received it. And now, something powerful happens—these words stay with you, but the burden they carried can be left here. Notice how you feel."
```

**Power Unlocked:**
"Voice Manifestation - Your spoken truth can now affect the world around you. In challenges ahead, truthful words will have power."

**Emotional Release Moment:**
- Screen glows softly
- Calming particle effects
- Music swells and softens
- Player avatar takes deep breath animation
- Companion: "Breathe. You've done something brave."

**Transition to Module 5:**
```
COMPANION: "You've spoken your truth. Now, let's try something profound—we're going to listen to truth that might be spoken to you. Come to the Mirror Portal..."
```

---

### Module 5: The Mirror Portal (Reverse Letter Writing)

**Environment: The Hall of Reflection**

**Visual Description:**
A crystalline chamber lined with massive mirrors, each reflecting not images but possibilities—alternate perspectives, different views of truth. In the center, a large portal-mirror swirls with gentle energy. This mirror doesn't show your reflection; it shows you as others might see you, or as your future/past self might see you.

**Entry Sequence:**
1. Companion leads player through corridor of shifting mirrors
2. Center portal activates as player approaches
3. Companion: "The hardest magic is seeing through another's eyes. This portal allows that. You'll write a letter... but not from you."

**Interaction Flow:**

**Step 1: Perspective Selection**

**Visual:**
- Portal swirls with multiple silhouettes
- Each silhouette represents a possible perspective

**Companion Dialogue:**
```
COMPANION: "Who would you like to hear from? Whose voice do you need right now?

The portal can show you through the eyes of:
• Someone who hurt you—imagine them asking your forgiveness
• Someone you hurt—imagine them forgiving you
• Someone who loves you—imagine them telling you your worth
• Your future self—imagine them showing you the way forward
• Your child self—imagine them receiving comfort from you now
• Someone who doesn't see you—imagine them finally understanding"
```

**Interaction:**
- Player clicks one of the silhouettes in the portal
- Selected silhouette comes forward, still abstract (not detailed face)
- Prompt: "Who is this?" [Text Input]

**Example Inputs:**
- "My dad"
- "My best friend who betrayed me"
- "Myself 10 years from now"
- "The 8-year-old me"
- "My younger sibling"

**Step 2: Entering the Mirror**

**Visual:**
- Portal swirls intensely
- Companion: "Step through. For a moment, you'll see through their eyes."
- Player walks into portal

**Transition Effect:**
- Screen becomes reflective/refractive
- Colors shift
- Player emerges on "other side" of mirror—same space but ethereal, dreamlike

**Visual Change:**
- Player's avatar becomes translucent/ghostly (representing being in another's perspective)
- Environment has different emotional tone

**Step 3: Writing the Imagined Letter**

**Visual:**
- Parchment appears, but this time it has a different aesthetic
- Looks like it's written "to you" rather than "from you"

**Header:**
```
To: [Player's Real Name or "You"]
Dear: [How this person would address player]
```

**Companion Guidance:**
```
COMPANION: "Now, something difficult and beautiful. Write the letter you wish you could receive from [person]. What do you need to hear from them? What would heal something inside you?

Remember: This is your imagination, your healing. You're not predicting what they would actually say—you're discovering what your heart needs to hear."
```

**Prompt Display:**
```
"What would [person] say to you if they could speak from their highest self?"

Imagine they might:
• Acknowledge how they hurt you
• Ask your forgiveness
• Tell you they forgive you
• Express how precious you are to them
• Show you they see and understand you
• Give you permission to be yourself
• Offer wisdom from the future"
```

**Writing Mechanics:**
- Same clean interface as Module 4
- Writing appears in slightly different handwriting style (subtle difference)
- As player writes from other's perspective, portal pulses
- This is often the most emotional module—design must support that

**Dynamic Response:**
- Companion remains present, validating
- If player writes something particularly poignant, companion responds:
  ```
  COMPANION: "Yes. Let them say that. You deserve to hear it."
  ```

**Step 4: Receiving the Letter**

**Visual:**
- Letter completion triggers portal shift
- Companion: "Now, step back through. Return to yourself—and receive what you've written."

**Transition:**
- Player walks back through portal
- Returns to normal perspective
- Avatar solidifies again

**Visual Sequence:**
1. Letter flies from portal into player's hands
2. Letter unfolds
3. "Would you like to read it?" [Yes] [Not Yet]

**If player selects "Yes":**
- Letter displays in beautiful script
- Companion: "Let yourself receive these words. Even if you wrote them, they're true. This is what your heart needs to hear."
- Player can take as long as they need

**Step 5: Integration**

**After Reading:**

**Companion Dialogue:**
```
COMPANION: "This is the magic of perspective. Sometimes we have to imagine the words we need to hear before we can believe them. The words you wrote—they may not be what [person] would actually say. But they're what you need. And that's real wisdom."
```

**Visual:**
- Letter transforms into light
- Light flows into player's chest (heart area)
- Player's emotional crystal gains new layer of depth

**Power Unlocked:**
"Empathic Resonance - You can now sense what others are feeling and see through their perspective. This will help you understand NPCs and solve relationship puzzles."

**Emotional Processing:**
- Quiet moment
- Soft music
- Optional: "How do you feel now?" [Text input, saves to journal]

**Transition to Module 6:**
```
COMPANION: "You've spoken, and you've listened. Now, there may be more that needs to pour out. Come with me to the Cathartic Falls, where you can release anything still inside..."
```

---

### Module 6: The Cathartic Falls (Feelings Journal)

**Environment: The Cathartic Falls**

**Visual Description:**
A magnificent waterfall cascading into a misty pool. The water glows with emotional energy—the color shifts based on what's written. Surrounding rocks are covered in soft moss. Fireflies drift through the air. A floating journal made of light hovers above the pool. This space feels safe, private, cathartic.

**Entry Sequence:**
1. Sound of rushing water grows as player approaches
2. Mist parts to reveal the falls and journal
3. Companion: "Sometimes, we just need to let it all out. No structure, no prompts—just pure release. The falls will carry whatever you pour into them."

**Interaction Flow:**

**Step 1: Journal Activation**

**Visual:**
- Floating journal descends to player height
- Opens to blank, glowing page
- Waterfall intensifies slightly

**Companion Dialogue:**
```
COMPANION: "This journal is yours alone. Write anything—messy, raw, unfiltered. Don't edit yourself. Don't worry about making sense. Just pour it out. The falls will cleanse whatever you release."
```

**Step 2: Free Writing**

**Visual:**
- Fullscreen writing interface
- No lines, no structure—pure blank space
- Waterfall visible in background (transparency overlay)
- Minimal UI elements

**Prompt:**
```
"Pour your heart out. Write whatever you need to get off your chest. No one will judge. No one will read this but you."

[Press Enter to start new lines freely]
```

**Writing Mechanics:**
- Absolutely no constraints
- No word count
- No minimum or maximum
- Can write for 30 seconds or 30 minutes
- Auto-save every 10 seconds

**Dynamic Environmental Response (Real-time):**

As player writes:
- Words appear on page in flowing, handwritten style
- With each sentence/paragraph, droplets of light rise from journal
- Droplets float toward waterfall
- Waterfall absorbs them, flashing briefly
- Water color shifts based on emotional content (AI analyzes sentiment):
  - **Anger**: Crimson flows
  - **Sadness**: Deep purple/blue
  - **Joy**: Golden/white
  - **Fear**: Gold/amber
  - **Mixed emotions**: Waterfall becomes rainbow

**Companion Presence:**
- Companion sits nearby on a rock, not watching the writing, just being present
- Occasional subtle animations: breathing, looking at the water, sensing the energy
- Does not interrupt unless player stops writing for 2+ minutes

**If Player Pauses Long (2+ minutes):**
```
COMPANION: [Gentle tone] "Take your time. Or if you're done, just let me know. There's no rush here."
```

**Step 3: Completion**

**Interaction:**
- Player finishes writing
- Button appears: "I'm done" / "Keep writing"

**When "I'm done" selected:**

**Visual Sequence:**
1. Journal glows intensely
2. All written words lift from page as light particles
3. Words swirl around player in a vortex
4. Companion stands, opens arms

**Companion Dialogue:**
```
COMPANION: "Now—release it all. Let the falls take it."
```

**Interaction:**
- "Release" button appears, or automatic after 3 seconds

**Release Sequence:**
1. All words/light particles flow toward waterfall
2. Player can "push" them toward the water (gesture: swipe motion or key press)
3. Words enter waterfall in cascading waves
4. Waterfall surges with brilliant light
5. Water crashes into pool, creating massive splash of colored energy
6. Energy dissipates into mist
7. Peace settles

**Step 4: Cleansing**

**Visual:**
- Mist from waterfall drifts back toward player
- Gentle, cleansing energy envelops avatar
- Deep breath animation

**Companion Dialogue:**
```
COMPANION: "Feel that? You've unburdened yourself. The falls have taken what you released—not to erase it, but to transform it. What was heavy becomes light. What was trapped becomes free."
```

**Optional Reflection:**
- "How do you feel now?" [Text input, optional]
- Player can write brief reflection or skip

**Power Unlocked:**
"Emotional Release - You can now cleanse stagnant emotional energy from areas of the Realm. This power helps heal corrupted spaces."

**Visual Reward:**
- Player's avatar sparkles with droplets of water/light
- Emotional crystal becomes clearer, more radiant

**Transition to Module 7:**
```
COMPANION: "You've expressed what needed expressing. Now comes the art of balance. Follow me to the Emotional Compass, where you'll learn to navigate intensity..."
```

---

### Module 7: The Emotional Compass (Trajectories)

**Environment: The Peak of Balance**

**Visual Description:**
A mountaintop where three distinct paths converge. To the left, a frozen wasteland (Shutdown). Ahead, a beautiful balanced meadow (Balance). To the right, a volcanic chaotic landscape (Overwhelm). At the center, a massive compass made of light and stone, with the player's chosen emotion glowing at its heart.

**Entry Sequence:**
1. Climb final steps to mountain peak
2. Three diverging landscapes visible
3. Companion: "Every emotion has a range. Too little, and we shut down. Too much, and we're overwhelmed. True mastery is finding the middle path."

**Interaction Flow:**

**Step 1: Viewing the Three States**

**Visual:**
- Central compass activates
- Three directions illuminate in sequence
- Player can look in each direction

**Companion Guided Tour:**

**Looking Left (Shutdown):**
```
COMPANION: "This is the land of shutdown—where [emotion] grows so faint that you feel numb, disconnected, frozen. When you shut down, what happens?"
```

**Visual:**
- Frozen landscape: ice, stillness, muted colors
- Avatar shivers slightly
- Sound becomes muffled

**Looking Ahead (Balance):**
```
COMPANION: "This is the land of balance—where [emotion] exists in healthy proportion. You feel it, but it doesn't control you. In balance, what happens?"
```

**Visual:**
- Meadow: flowers, gentle breeze, harmonious colors
- Avatar relaxes
- Sound becomes clear, musical

**Looking Right (Overwhelm):**
```
COMPANION: "This is the land of overwhelm—where [emotion] consumes everything. Too much intensity to function well. When you're overwhelmed, what happens?"
```

**Visual:**
- Volcanic landscape: fire, chaos, intense colors
- Avatar appears strained
- Sound becomes distorted, intense

**Step 2: Documenting Each State**

**Mechanic:**
Player must explore each of the three states and document their experience.

**For Each State:**

**Navigation:**
- Walk into each landscape zone
- Environment changes dramatically (visual, audio, even controls)
- Experience the state physically through gameplay

**Shutdown State:**

**Environmental Effects:**
- World becomes grayscale
- Movement slows (controls become sluggish)
- Vision narrows (vignette effect)
- Music becomes distant, muted

**Interaction:**
- Companion: "This is what shutdown feels like. Now, describe it."
- Four prompts appear in sequence:

1. **"When I shut down, I feel..."**
   - Text input
   - Example: "Numb, disconnected, empty"

2. **"I think..."**
   - Text input
   - Example: "Nothing matters," "I should care but I can't"

3. **"I do..."**
   - Text input
   - Example: "Isolate, zone out, avoid everything"

4. **"And as a result, I'm likely to..."**
   - Text input
   - Example: "Push people away, miss opportunities, feel even worse"

**Visual Feedback:**
- Each answer appears as frozen text in the ice
- Companion: "Yes. Shutdown protects, but it also isolates. Remember this pattern."

**Balanced State:**

**Environmental Effects:**
- World is vibrant, clear
- Movement feels natural, responsive
- Vision is clear, wide
- Music is harmonious, uplifting

**Interaction:**
- Companion: "This is the sweet spot. Describe what balance feels like."
- Four prompts appear in sequence:

1. **"When my feeling is in a balanced range, I feel..."**
   - Text input
   - Example: "Present, capable, clear-headed"

2. **"I think..."**
   - Text input
   - Example: "I can handle this," "I understand what's happening"

3. **"I do..."**
   - Text input
   - Example: "Make good choices, connect with others, take care of myself"

4. **"And as a result, I am likely to..."**
   - Text input
   - Example: "Feel proud, build trust, grow stronger"

**Visual Feedback:**
- Each answer blooms as flowers in the meadow
- Companion: "This is where you have the most power. Remember what balance feels like."

**Overwhelmed State:**

**Environmental Effects:**
- World becomes oversaturated, too intense
- Movement feels frantic, hard to control
- Vision pulses, shakes
- Music is loud, chaotic

**Interaction:**
- Companion: "This is overwhelm—too much to bear. Describe it."
- Four prompts appear in sequence:

1. **"When I am overwhelmed by my feeling, I feel..."**
   - Text input
   - Example: "Out of control, panicked, like I'm drowning"

2. **"I think..."**
   - Text input
   - Example: "I can't do this," "Everything is falling apart"

3. **"I do..."**
   - Text input
   - Example: "Lash out, freeze, say things I regret"

4. **"And as a result, I am likely to..."**
   - Text input
   - Example: "Hurt relationships, make things worse, feel ashamed"

**Visual Feedback:**
- Each answer appears as fire and chaos in landscape
- Companion: "Overwhelm feels powerful but destructive. Remember this pattern."

**Step 3: The Emotional Compass Calibration**

**Return to Center:**
- Player returns to central compass
- All three documented states now visible on compass

**Visual:**
- Compass displays three points marked with player's descriptions
- Needle swings between the three states

**Companion Dialogue:**
```
COMPANION: "Now you can see the full range of [emotion]. You've mapped your patterns. This is powerful self-knowledge. When you notice yourself moving toward shutdown or overwhelm, you'll recognize it—and that recognition gives you choice."
```

**Interactive Compass:**
- "Which state are you in most often?" [Shutdown / Balance / Overwhelm]
- Player's answer is acknowledged, not judged:
  ```
  COMPANION: "Thank you for that honesty. The goal isn't to judge yourself, but to notice. Noticing is the first step to change."
  ```

**Power Unlocked:**
"Emotional Navigation - You can now consciously adjust the intensity of your emotional powers. You can also sense when the environment is in shutdown, balance, or overwhelm and respond accordingly."

**Visual Reward:**
- Compass merges with player's emotional crystal
- Crystal now shows three layers (shutdown, balance, overwhelm)
- Player can toggle power intensity in gameplay

**Transition to Module 8:**
```
COMPANION: "You understand the landscape now. But there's one more summit to reach—the Wisdom Tree, where you'll discover the meaning in all of this..."
```

---

### Module 8: The Wisdom Tree (Spiritual Awakening - Lessons Learned)

**Environment: The Wisdom Tree Grove**

**Visual Description:**
The highest point in the Realm. A massive, ancient tree stands at the center, its branches reaching toward the stars. The tree glows with all emotional colors, representing the interconnection of all feelings. Hanging from its branches are luminous fruits—each containing a lesson, an insight, a piece of wisdom. The ground is covered in soft grass and flowers. It feels sacred, contemplative, peaceful.

**Entry Sequence:**
1. Long, meditative walk through forest to reach tree
2. Music shifts to profound, spiritual tones
3. Tree comes into view, breathtaking
4. Companion: "This is the Wisdom Tree—the heart of all emotional understanding. Every Weaver who has walked this path has left their wisdom here. Now it's time to gather yours."

**Interaction Flow:**

**Step 1: Approaching the Tree**

**Visual:**
- Player walks toward tree
- Camera slowly pulls back to show scale
- Branches sway gently
- Fruits glow invitingly

**Companion Dialogue:**
```
COMPANION: "You've journeyed through [emotion]—felt it, named it, embodied it, expressed it, and learned to navigate it. Now comes the most important question: What wisdom have you gained? What lessons will you take forward?"
```

**Step 2: Harvesting Wisdom**

**Visual:**
- Multiple glowing fruits appear on branches
- Each fruit represents a potential lesson space
- Player can reach for any fruit

**Mechanic:**
- Click on a fruit (or press E when near)
- Fruit descends to player
- Opens like a flower
- Reveals empty space for writing

**Prompt in Each Fruit:**
"What lesson have you learned from [emotion]?"

**Guidance Options (if clicked):**
```
"Consider:
• What has this emotion taught you?
• How has it helped you grow?
• What strength have you discovered?
• What do you understand now that you didn't before?
• What wisdom will you carry forward?"
```

**Writing Mechanic:**
- Text input within the fruit (visually beautiful)
- Each fruit can hold one lesson (short or long)
- Player can harvest multiple fruits (suggested: 3-7)
- No minimum or maximum

**Example Lessons:**
- "Anger shows me where my boundaries are"
- "Fear protects what I love"
- "Sadness means I've lost something that mattered"
- "I'm stronger than I thought"
- "It's okay to feel this way"
- "My emotions don't control me—I can work with them"

**Visual Feedback:**
- As player writes lesson, fruit glows brighter
- When complete, fruit closes gently
- Fruit reattaches to tree, now permanently glowing
- Player's name appears subtly on that fruit (this is their wisdom, left for themselves)

**Step 3: Creating the Wisdom Constellation**

**After Harvesting Multiple Fruits:**

**Visual:**
- Companion: "Look up."
- Camera tilts to sky
- The lessons player wrote appear as new stars in a constellation
- Lines connect the stars, forming a pattern

**Companion Dialogue:**
```
COMPANION: "Your wisdom is now written in the stars of the Realm. These lessons are yours to keep. They're part of you now—etched into who you're becoming."
```

**Interactive:**
- Player can look at constellation
- Click any star to re-read that lesson
- Constellation is named after player: "[Player Name]'s Constellation of [Emotion]"

**Step 4: The Highest Perspective**

**Visual:**
- Player is lifted gently by tree's energy
- Ascends to highest branch
- Can see the entire Realm spread below

**Companion Dialogue:**
```
COMPANION: "From up here, you can see everything differently. Look at where you've been—the Awakening Circle, the Memory Constellation, the Temple, the Speaking Stone, the Mirror Portal, the Falls, the Compass. You've traveled so far.

Now, I ask you: Looking at your situation from this highest point, from this place of wisdom—how do you see it now?"
```

**Prompt:**
"What is the highest perspective you can take on your situation? How can you see it in the best light?"

**Text Input:**
- Large, contemplative writing space
- This is the reframe—the meaning-making moment

**Example Responses:**
- "This pain is teaching me compassion"
- "This challenge is making me stronger"
- "This difficulty is showing me what really matters"
- "I'm not broken—I'm growing"
- "This is part of my story, not the end of it"

**Visual Feedback:**
- Words rise as light
- Illuminate entire Realm below
- Everything glows brighter—showing the transformation of perspective

**Power Unlocked:**
"Transformative Insight - You can now transform challenges into strengths, seeing the hidden gifts in difficult emotions. This power allows you to transmute negative energy into positive growth."

**Visual Reward:**
- Player's avatar becomes radiant
- Emotional crystal reaches its fullest brilliance
- Wings of light briefly appear (symbolizing elevation)

**Transition to Module 9:**
```
COMPANION: "You've gained the wisdom. Now, one final step remains—carrying it into your life. Come down from the tree. We have one more place to visit—the Ripple Pool..."
```

---

### Module 9: The Ripple Pool (Intentions)

**Environment: The Ripple Pool**

**Visual Description:**
A perfectly still, mirror-like pool at the base of the Wisdom Tree. The water is so clear it reflects the stars above, including player's new wisdom constellation. The pool seems to extend infinitely. At the center, a small platform where player stands. Around the edges, glowing stones inscribed with intentions from previous Weavers. The atmosphere is hopeful, forward-looking, empowering.

**Entry Sequence:**
1. Descend from Wisdom Tree to pool's edge
2. Companion leads player across water (they walk on surface)
3. Reach central platform
4. Companion: "This is the Ripple Pool. What you set in motion here will spread through your life like ripples through water. Your final task: set your intention."

**Interaction Flow:**

**Step 1: Synthesis of Insights**

**Visual:**
- Pool's surface shows images from player's entire journey
- Each module briefly reflected: the emotions, the constellation, the body sensations, the letters, the compass, the wisdom fruits
- Companion: "Look at all you've discovered. How will these insights change your life?"

**Prompt:**
"What new insights do you have from processing [emotion]?"

**Text Input:**
- Synthesis writing space
- Player reflects on their entire journey

**Example Responses:**
- "I understand now that my anger is trying to protect me"
- "I've learned that I'm not alone in feeling this way"
- "I see how my emotions connect to my past"
- "I realize I have more control than I thought"

**Visual Feedback:**
- Words appear floating above pool surface
- Create gentle ripples where they touch water

**Step 2: Relationship Impact**

**Visual:**
- Pool shows silhouettes of important people in player's life
- Ripples spread from center toward these figures

**Companion Dialogue:**
```
COMPANION: "Emotions don't exist in isolation. How you understand and work with [emotion] will ripple into your relationships. How do you imagine this new understanding will impact your connections with others?"
```

**Prompt:**
"How will this impact your relationships—present and future?"

**Text Input:**
- Relationship impact reflection

**Example Responses:**
- "I'll be better at setting boundaries"
- "I'll be more patient with myself and others"
- "I'll communicate more honestly"
- "I'll ask for help when I need it"
- "I'll be more compassionate"

**Visual Feedback:**
- Ripples intensify
- Spread faster, farther
- Touch the silhouettes, which light up
- Companion: "Yes. Your inner work becomes outer change. What you heal in yourself heals in the world."

**Step 3: Setting Intention**

**Visual:**
- Pool becomes perfectly still again
- All previous ripples fade
- One perfect drop of light appears above pool, ready to fall

**Companion Dialogue:**
```
COMPANION: "Now, the most important moment. Set your intention. What will you do differently today because of what you've learned?

This doesn't have to be huge. Small steps create big changes. What's one thing you'll carry forward?"
```

**Prompt:**
"Set your intention for today..."

**Examples Displayed (to inspire):**
- "I will pause and breathe when I feel overwhelmed"
- "I will honor my feelings without judgment"
- "I will speak up about what I need"
- "I will be gentle with myself"
- "I will remember my wisdom when things get hard"

**Text Input:**
- Single, focused intention
- This is the commitment—the translation of insight to action

**Visual Feedback:**
- As player writes, the drop of light above pool begins to glow
- Intention appears written in the light

**Step 4: Creating the Ripple**

**Interaction:**
- "Release your intention" button appears
- Or automatic after player confirms

**Visual Sequence:**
1. Light drop falls toward pool in slow motion
2. Intention trails behind it like a comet
3. Drop touches water surface
4. Perfect ripple begins
5. Ripples expand outward, growing more beautiful
6. Ripples don't stop—they spread infinitely
7. Each ripple carries the player's intention, glowing with words
8. Ripples reach the edges and beyond, suggesting infinite impact
9. Entire realm illuminates in response
10. Sky fills with aurora of emotional energy
11. All 16 emotion domains visible in distance, connected

**Companion Dialogue:**
```
COMPANION: "Do you see? One intention, one choice to grow—it ripples through everything. Through your thoughts, your actions, your relationships, your future. You've planted something beautiful here today.

You are an Emotion Weaver now. You've mastered [emotion], turned it from something that controls you into something you understand and work with. This power is yours to keep."
```

**Step 5: Journey Completion**

**Visual:**
- Pool stills
- Player's full reflection appears, but transformed—glowing, powerful, wise
- Companion stands beside reflection

**Companion Dialogue:**
```
COMPANION: "Your journey through [emotion] is complete. You've:
• Named and honored what you feel
• Connected it to your life and memories
• Listened to your body's wisdom
• Spoken your truth
• Taken another's perspective
• Released what needed releasing
• Learned to navigate intensity
• Harvested wisdom
• Set intention for change

You are not the same person who entered the Realm. You are stronger, wiser, braver. And you can return anytime—to explore this emotion more deeply, or to explore others.

The Realm is always here, waiting for you."
```

**Final Power Unlocked:**
"Intention Setting - You can now carry your emotional wisdom back into the real world. Your powers extend beyond the Realm."

**Visual Reward:**
- Player's emotional crystal becomes a permanent part of avatar
- Can be seen even in "real world" menu screens
- Badge earned: "Emotion Weaver - [Emotion Name]"
- Player profile shows completion

**Step 6: Return Portal**

**Visual:**
- Familiar portal opens at pool's edge
- Companion: "Through there lies your world. But remember—you carry the Realm within you now. Your emotional wisdom is yours to keep."

**Choice:**
```
[Return to Real World]
[Explore Another Emotion]
[Rest Here Awhile]
```

**If "Return to Real World":**
- Cinematic exit through portal
- Transition back to main menu
- Stats screen shows what was accomplished
- Companion: "Until we meet again, Weaver."

**If "Explore Another Emotion":**
- Returns to Module 1 (Emotion Selection)
- Companion: "Another journey awaits. Which emotion calls to you now?"
- Previous completion remains saved

**If "Rest Here Awhile":**
- Free exploration mode
- Can revisit any location
- Can re-read any writing
- Can talk to companion freely via LLM chat
- No objectives—just peaceful reflection

---

## 4. Complete User Journey Maps

### 4.1 First-Time Player Journey (Full Session)

**Duration:** 30-90 minutes (depending on player pace and writing depth)

**Phases:**

1. **Account Creation** (2-5 min)
   - Age selection
   - Avatar creation
   - Name input

2. **Onboarding** (5-10 min)
   - Cinematic intro
   - Portal discovery
   - Realm arrival
   - Tutorial mechanics
   - Companion introduction

3. **Module 1: Emotion Selection** (3-5 min)
   - Explore emotion circle
   - Select emotion
   - Calibrate intensity
   - First reflection writing

4. **Module 2: Memory Mapping** (5-8 min)
   - Enter Star Chamber
   - Create 5 memory associations
   - View constellation

5. **Module 3: Body Exploration** (8-12 min)
   - Body scan meditation
   - Locate sensation
   - Describe feeling
   - Give body voice, need, action

6. **Module 4: Letter Writing** (10-15 min)
   - Choose recipient
   - Write letter
   - Seal and release

7. **Module 5: Reverse Letter** (10-15 min)
   - Choose perspective
   - Enter mirror
   - Write imagined letter
   - Receive letter

8. **Module 6: Feelings Journal** (5-15 min)
   - Free write at Falls
   - Release to waterfall
   - Cleansing

9. **Module 7: Emotional Compass** (10-15 min)
   - Explore shutdown state
   - Explore balance state
   - Explore overwhelm state
   - Document patterns

10. **Module 8: Wisdom Tree** (8-12 min)
    - Harvest wisdom fruits
    - Write lessons learned
    - View constellation
    - Highest perspective reflection

11. **Module 9: Ripple Pool** (5-8 min)
    - Synthesize insights
    - Relationship impact
    - Set intention
    - Create ripple

12. **Completion** (2-3 min)
    - Journey summary
    - Power unlocks review
    - Portal home
    - Option to continue

**Total:** ~73-123 minutes (MVP target: 45-75 min with moderate writing)

### 4.2 Returning Player Journey

**Duration:** 25-60 minutes

**Phases:**

1. **Quick Start** (30 sec)
   - Skip intro cinematics
   - "Welcome back, Weaver"
   - Jump to emotion selection

2. **Emotion Selection** (1-2 min)
   - Faster navigation (familiar)
   - May explore different emotion

3. **Modules 1-9** (20-55 min)
   - Pacing depends on familiarity
   - Writing may be deeper or more concise
   - Can skip companion tutorials

4. **Completion** (1-2 min)
   - Collection grows
   - New badges earned

### 4.3 Drop-in/Drop-out Journey

**For Players with Limited Time:**

**Save Points:**
- Auto-save after each module completion
- Manual save available anytime (Pause menu → Save & Exit)
- "Save & Exit" gracefully closes session

**Return Experience:**
- "Welcome back. You were in [Location]. Continue?"
- Resume exactly where left off
- Companion acknowledges time passage: "I'm glad you've returned. Ready to continue?"

**Quick Session Option (15-20 min):**
- Focus on single module
- "Quick Explore" mode
- Complete one module, save, return later

---

## 5. Emotion Power System Details

### 5.1 Core Emotion Powers

Each of 16 emotions grants unique abilities when fully processed. Powers are usable in exploration, puzzles, and challenges.

**1. ANGER Powers**
- **Boundary Blade**: Create protective barriers (metaphor for setting boundaries)
- **Justice Fire**: Expose hidden truths and unfairness
- **Transformation Forge**: Convert pain into strength

**2. JOY Powers**
- **Healing Light**: Restore vitality to self and environment
- **Expansion Aura**: Amplify positive energy
- **Present Moment**: Enter flow state with heightened awareness

**3. FEAR Powers**
- **Danger Sense**: Detect threats before they manifest
- **Courage Spark**: Move forward despite fear
- **Swift Escape**: Enhanced agility and speed

**4. SADNESS Powers**
- **Deep Sight**: Perceive hidden emotional truths
- **Rain of Release**: Cleanse stagnant energy
- **Compassion Well**: Connect deeply with others' pain

**5. ANXIETY Powers**
- **Alert Network**: Heightened awareness of environment
- **Preparation Shield**: Anticipate and plan for challenges
- **Nervous Energy**: Convert anxiety into productive action

**6. SCARED Powers**
- **Protective Shell**: Create temporary invulnerability
- **Instinct Guide**: Trust gut reactions
- **Flight Response**: Escape impossible situations

**7. JEALOUS Powers**
- **Desire Sight**: See what others truly value
- **Motivation Surge**: Channel envy into self-improvement
- **Recognition**: Acknowledge own unmet needs

**8. GUILTY Powers**
- **Conscience Compass**: Know right from wrong clearly
- **Reparation Drive**: Fix what's been broken
- **Responsibility**: Take ownership and make amends

**9. FORGIVING Powers**
- **Release Chains**: Free self and others from resentment
- **Restoration**: Repair damaged relationships
- **Peace Aura**: Bring calm to conflict

**10. LONELY Powers**
- **Connection Sense**: Detect others who feel isolated
- **Self-Sufficiency**: Find strength in solitude
- **Reaching Out**: Overcome barriers to connection

**11. PLAYFUL Powers**
- **Creative Spark**: Solve problems through play
- **Lightness**: Transform heavy situations
- **Spontaneity**: Embrace uncertainty with joy

**12. GRATEFUL Powers**
- **Abundance Sight**: See what's already good
- **Multiplier**: Amplify positive experiences
- **Generosity**: Share blessings with others

**13. HOPEFUL Powers**
- **Future Vision**: See positive possibilities
- **Resilience**: Bounce back from setbacks
- **Inspiration**: Uplift others

**14. SHAMEFUL Powers**
- **Hidden Truth**: Reveal secrets that need light
- **Self-Acceptance**: Integrate rejected parts
- **Vulnerability Strength**: Find power in being seen

**15. STUCK Powers**
- **Pattern Recognition**: See repeating cycles
- **Breaking Point**: Shatter limitations
- **New Path**: Create alternative routes

**16. NERVOUS Powers**
- **Anticipatory Awareness**: Sense upcoming challenges
- **Adrenaline Rush**: Boost performance under pressure
- **Fidget Focus**: Channel nervous energy constructively

### 5.2 Power Progression System

**Module Completion → Power Unlock:**
- **Module 1**: Basic power unlocked (Emotion Sight for all)
- **Module 3**: Somatic power unlocked (body-based ability)
- **Module 6**: Cathartic power unlocked (release/cleanse ability)
- **Module 7**: Regulation power unlocked (intensity control)
- **Module 9**: Mastery power unlocked (full emotion mastery)

**Power Levels:**
1. **Novice**: Basic effect, short duration
2. **Apprentice**: Enhanced effect, moderate duration
3. **Adept**: Powerful effect, long duration
4. **Master**: Maximum effect, sustained or permanent

**Leveling Up:**
- Complete same emotion journey multiple times (deeper exploration)
- Use powers effectively in challenges
- Combine powers from different emotions creatively

### 5.3 Power Combinations

**When player has explored multiple emotions:**

**Example Combinations:**
- **Anger + Sadness**: "Righteous Grief" - powerful healing of injustice
- **Joy + Fear**: "Brave Happiness" - find joy despite risk
- **Guilt + Forgiveness**: "Redemption" - transform regret into growth
- **Lonely + Grateful**: "Solitary Abundance" - peace in being alone

**Combo Unlocks:**
- Appear after exploring 3+ emotions
- Discovered through experimentation
- Companion hints at combinations

---

## 6. Game Loop & Session Structure

### 6.1 Core Loop

```
1. Choose Emotion
   ↓
2. Complete 9 Modules
   ↓
3. Unlock Powers & Wisdom
   ↓
4. Return to Real World or Explore Another Emotion
   ↓
5. (Repeat)
```

### 6.2 Session Types

**Full Journey Session (45-90 min):**
- Complete all 9 modules for one emotion
- Deep, immersive experience
- Maximum therapeutic benefit

**Partial Journey Session (15-30 min):**
- Complete 3-4 modules
- Save progress
- Return later

**Quick Reflection Session (10-15 min):**
- Revisit previous journey
- Re-read writings
- Update insights
- Talk to companion

**Free Exploration Session (Variable):**
- No objectives
- Explore Realm
- Use powers
- Interact with NPCs
- Discover secrets

### 6.3 Progression Tracking

**Player Profile Shows:**
- Emotions explored (16 total possible)
- Modules completed per emotion
- Powers unlocked
- Companion bond level
- Wisdom collected
- Time spent in Realm
- Constellations created

**Achievements/Badges:**
- "First Steps" - Complete first emotion journey
- "Emotional Explorer" - Explore 5 different emotions
- "Weaver Adept" - Explore 10 emotions
- "Master Weaver" - Explore all 16 emotions
- "Deep Diver" - Complete same emotion 3+ times
- "Power Collector" - Unlock all basic powers
- "Wisdom Seeker" - Harvest 50+ wisdom fruits
- "Bond Master" - Reach max companion level

---

## End of Part 2

**Continue to Part 3: Technical Architecture**
- Technology stack specifications
- System architecture
- Component design
- Data models
- Performance requirements

**Continue to Part 4: Art Direction & Assets**
- Visual style guide
- Character designs
- Environment concepts
- UI/UX specifications
- Asset lists

**Continue to Part 5: Implementation Roadmap & Prompt**
- Development phases
- MVP scope
- Testing strategy
- Comprehensive implementation prompt

---

*Document Version: 1.0*
*Last Updated: 2025-01-22*
*Status: Complete - Ready for Technical Architecture*
