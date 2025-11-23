# Emotion Explorer Adventure Game - PRD Part 3: Technical Architecture

## Document Information
- **Project Name**: Emotion Explorer Adventure Game
- **Version**: 1.0 MVP
- **Date**: 2025-01-22
- **Document Type**: Product Requirements Document (Part 3 of 5)
- **Dependencies**: Read Parts 1 & 2 first

---

## Table of Contents
1. Technology Stack
2. System Architecture
3. Component Design
4. Data Models
5. State Management
6. LLM Integration Architecture
7. Performance Requirements
8. Security & Privacy
9. Testing Strategy

---

## 1. Technology Stack

### 1.1 Core Technologies

**Game Engine:**
- **Phaser 3** (v3.60+)
  - Mature, well-documented 2D game framework
  - Excellent WebGL and Canvas rendering
  - Built-in physics, animations, particle systems
  - Active community and plugin ecosystem
  - Optimal for Fantasy/Magical Realism visual style
  - Performance optimized for web browsers

**UI Framework:**
- **React** (v18+)
  - Component-based architecture
  - Efficient state management
  - Seamless integration with Phaser via React hooks
  - Rich ecosystem for UI components
  - Excellent developer experience

**Language:**
- **TypeScript** (v5+)
  - Type safety for complex game logic
  - Better IDE support and refactoring
  - Reduced runtime errors
  - Self-documenting code

**Build Tool:**
- **Vite** (v5+)
  - Fast development server with HMR
  - Optimized production builds
  - Native ESM support
  - Excellent TypeScript support

### 1.2 Supporting Libraries

**State Management:**
- **Zustand** (v4+)
  - Lightweight, simple API
  - No boilerplate
  - React hooks-based
  - Perfect for game state management

**Animation:**
- **Framer Motion** (v10+)
  - Declarative animations for UI
  - Spring physics
  - Gesture support
  - Great for smooth transitions

**Text Rendering:**
- **React Quill** or **Slate**
  - Rich text editing for writing modules
  - Custom styling support
  - Auto-save functionality

**Particle Effects:**
- **Phaser Particle Emitter** (built-in)
  - Emotional energy wisps
  - Waterfall effects
  - Power manifestations

**3D Effects (Optional Enhancement):**
- **Three.js** (for portal/special effects)
  - Portal animations
  - Crystalline structures
  - Enhanced visual fidelity

### 1.3 Backend & Data

**Local Storage (MVP):**
- **IndexedDB** via **Dexie.js**
  - Structured storage for game progress
  - Large storage capacity (50MB+)
  - Async operations
  - Query support

**LLM Integration:**
- **Anthropic Claude API**
  - Claude 3.5 Sonnet for companion chat
  - Streaming responses for natural conversation
  - Context window for journey awareness
  - Safety features for vulnerable users

**Future Backend (Post-MVP):**
- **Supabase** or **Firebase**
  - User authentication
  - Cloud save storage
  - Analytics tracking
  - Cross-device sync

### 1.4 Development Tools

**Version Control:**
- Git + GitHub
- Conventional Commits
- Feature branch workflow

**Code Quality:**
- ESLint + Prettier
- Husky for pre-commit hooks
- TypeScript strict mode

**Testing:**
- Vitest (unit tests)
- Playwright (e2e tests)
- React Testing Library (component tests)

**Deployment:**
- **Vercel** or **Netlify**
  - Automatic deployments
  - Edge network CDN
  - Environment variables
  - Analytics

---

## 2. System Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│              User Browser                        │
├─────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────────────────┐ │
│  │ React UI     │  │ Phaser Game Engine       │ │
│  │ Layer        │←→│ Layer                    │ │
│  │              │  │                          │ │
│  │ - Menus      │  │ - Game World            │ │
│  │ - HUD        │  │ - Character/NPCs        │ │
│  │ - Dialogs    │  │ - Environments          │ │
│  │ - Text Input │  │ - Particle Systems      │ │
│  └──────────────┘  └──────────────────────────┘ │
│         ↓                    ↓                   │
│  ┌─────────────────────────────────────────┐    │
│  │     State Management (Zustand)          │    │
│  │  - Player Data                          │    │
│  │  - Game Progress                        │    │
│  │  - Current Module State                 │    │
│  │  - Companion State                      │    │
│  └─────────────────────────────────────────┘    │
│         ↓                                        │
│  ┌─────────────────────────────────────────┐    │
│  │     Data Persistence Layer              │    │
│  │  - IndexedDB (Dexie.js)                 │    │
│  │  - Local Storage (settings)             │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
         ↓ (API Calls)
┌─────────────────────────────────────────────────┐
│     External Services                            │
│  ┌──────────────────┐  ┌───────────────────┐   │
│  │ Claude API       │  │ Analytics         │   │
│  │ (Companion Chat) │  │ (Post-MVP)        │   │
│  └──────────────────┘  └───────────────────┘   │
└─────────────────────────────────────────────────┘
```

### 2.2 Folder Structure

```
emotion-explorer-game/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── characters/
│   │   │   ├── environments/
│   │   │   ├── ui/
│   │   │   └── effects/
│   │   ├── audio/
│   │   │   ├── music/
│   │   │   ├── sfx/
│   │   │   └── ambient/
│   │   └── fonts/
│   └── index.html
├── src/
│   ├── game/                    # Phaser game code
│   │   ├── scenes/
│   │   │   ├── BootScene.ts
│   │   │   ├── MainMenuScene.ts
│   │   │   ├── CharacterCreationScene.ts
│   │   │   ├── Module1AwakeningCircle.ts
│   │   │   ├── Module2MemoryConstellation.ts
│   │   │   ├── Module3TempleEmbodiment.ts
│   │   │   ├── Module4SpeakingStone.ts
│   │   │   ├── Module5MirrorPortal.ts
│   │   │   ├── Module6CatharticFalls.ts
│   │   │   ├── Module7EmotionalCompass.ts
│   │   │   ├── Module8WisdomTree.ts
│   │   │   └── Module9RipplePool.ts
│   │   ├── entities/
│   │   │   ├── Player.ts
│   │   │   ├── Companion.ts
│   │   │   ├── EmotionCrystal.ts
│   │   │   └── NPC.ts
│   │   ├── systems/
│   │   │   ├── EmotionPowerSystem.ts
│   │   │   ├── ParticleManager.ts
│   │   │   ├── AnimationManager.ts
│   │   │   └── AudioManager.ts
│   │   └── config/
│   │       ├── gameConfig.ts
│   │       └── constants.ts
│   ├── components/              # React UI components
│   │   ├── ui/
│   │   │   ├── MainMenu.tsx
│   │   │   ├── HUD.tsx
│   │   │   ├── DialogBox.tsx
│   │   │   ├── TextInput.tsx
│   │   │   └── ProgressTracker.tsx
│   │   ├── modules/
│   │   │   ├── EmotionSelector.tsx
│   │   │   ├── IntensitySlider.tsx
│   │   │   ├── MemoryInput.tsx
│   │   │   ├── BodyDiagram.tsx
│   │   │   ├── LetterTemplate.tsx
│   │   │   ├── JournalEditor.tsx
│   │   │   ├── CompassNavigator.tsx
│   │   │   ├── WisdomFruit.tsx
│   │   │   └── RippleInterface.tsx
│   │   └── companion/
│   │       ├── CompanionChat.tsx
│   │       ├── CompanionAvatar.tsx
│   │       └── MessageBubble.tsx
│   ├── stores/                  # State management
│   │   ├── playerStore.ts
│   │   ├── gameProgressStore.ts
│   │   ├── companionStore.ts
│   │   └── uiStore.ts
│   ├── services/                # Business logic
│   │   ├── llm/
│   │   │   ├── claudeService.ts
│   │   │   ├── promptBuilder.ts
│   │   │   └── safetyChecker.ts
│   │   ├── storage/
│   │   │   ├── database.ts
│   │   │   ├── saveManager.ts
│   │   │   └── exportService.ts
│   │   └── analytics/
│   │       └── tracker.ts (post-MVP)
│   ├── types/                   # TypeScript types
│   │   ├── game.types.ts
│   │   ├── player.types.ts
│   │   ├── emotion.types.ts
│   │   └── companion.types.ts
│   ├── utils/                   # Utility functions
│   │   ├── textAnalysis.ts
│   │   ├── emotionMapping.ts
│   │   └── validators.ts
│   ├── hooks/                   # React custom hooks
│   │   ├── useGame.ts
│   │   ├── useCompanion.ts
│   │   └── useAutoSave.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── API.md
│   └── ARCHITECTURE.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 3. Component Design

### 3.1 Core Game Components

#### **PhaserGame Component**
```typescript
// src/components/PhaserGame.tsx
interface PhaserGameProps {
  currentScene: string;
  onSceneComplete: (sceneId: string, data: any) => void;
}

export const PhaserGame: React.FC<PhaserGameProps> = ({
  currentScene,
  onSceneComplete
}) => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    // Initialize Phaser game
    // Handle scene transitions
    // Bridge between React and Phaser
  }, [currentScene]);

  return <div id="phaser-game-container" />;
};
```

#### **Scene Base Class**
```typescript
// src/game/scenes/BaseModuleScene.ts
export abstract class BaseModuleScene extends Phaser.Scene {
  protected player: Player;
  protected companion: Companion;
  protected emotionCrystal: EmotionCrystal;
  protected uiContainer: Phaser.GameObjects.Container;

  abstract onModuleComplete(): void;

  protected setupEnvironment(): void {
    // Common environment setup
  }

  protected showCompanionDialogue(text: string): void {
    // Display companion speech
  }

  protected transitionToNextModule(): void {
    // Handle module transitions
  }
}
```

### 3.2 UI Components

#### **TextInput Component**
```typescript
// src/components/ui/TextInput.tsx
interface TextInputProps {
  prompt: string;
  placeholder?: string;
  minWords?: number;
  onSubmit: (text: string) => void;
  autoSave?: boolean;
  autoSaveInterval?: number;
}

export const TextInput: React.FC<TextInputProps> = ({
  prompt,
  placeholder,
  minWords,
  onSubmit,
  autoSave = true,
  autoSaveInterval = 10000
}) => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const { autoSaveToStorage } = useAutoSave();

  // Auto-save logic
  useEffect(() => {
    if (autoSave && text.length > 0) {
      const timer = setTimeout(() => {
        autoSaveToStorage(text);
      }, autoSaveInterval);
      return () => clearTimeout(timer);
    }
  }, [text, autoSave, autoSaveInterval]);

  return (
    <div className="text-input-container">
      <div className="prompt">{prompt}</div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setWordCount(e.target.value.split(/\s+/).length);
        }}
        placeholder={placeholder}
      />
      <div className="word-count">
        {wordCount} {minWords && `/ ${minWords} words`}
      </div>
      <button
        onClick={() => onSubmit(text)}
        disabled={minWords && wordCount < minWords}
      >
        Continue
      </button>
    </div>
  );
};
```

#### **CompanionChat Component**
```typescript
// src/components/companion/CompanionChat.tsx
interface Message {
  id: string;
  sender: 'player' | 'companion';
  text: string;
  timestamp: Date;
}

export const CompanionChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { sendMessageToLLM } = useCompanion();

  const handleSend = async () => {
    if (!inputText.trim()) return;

    // Add player message
    const playerMessage: Message = {
      id: generateId(),
      sender: 'player',
      text: inputText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, playerMessage]);
    setInputText('');
    setIsLoading(true);

    // Get companion response
    try {
      const response = await sendMessageToLLM(inputText);
      const companionMessage: Message = {
        id: generateId(),
        sender: 'companion',
        text: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, companionMessage]);
    } catch (error) {
      console.error('Companion chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="companion-chat">
      <div className="messages">
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isLoading && <LoadingIndicator />}
      </div>
      <div className="input-area">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Talk to your companion..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
```

---

## 4. Data Models

### 4.1 Core Data Types

```typescript
// src/types/player.types.ts

export interface PlayerProfile {
  id: string;
  name: string;
  age: number;
  ageGroup: '12-13' | '14-15' | '16-17' | '18-20';
  avatar: AvatarCustomization;
  createdAt: Date;
  lastPlayed: Date;
}

export interface AvatarCustomization {
  bodyType: string;
  skinTone: string;
  hairStyle: string;
  hairColor: string;
  faceShape: string;
  eyeShape: string;
  eyeColor: string;
  outfit: string;
  accessories: string[];
  emotionalCrystalColor?: string;
}

export interface GameProgress {
  playerId: string;
  emotionsExplored: EmotionProgress[];
  totalPlayTime: number; // milliseconds
  companionBondLevel: number;
  powersUnlocked: EmotionPower[];
  achievements: Achievement[];
  currentSession?: SessionState;
}

export interface EmotionProgress {
  emotionId: EmotionType;
  emotionName: string;
  timesExplored: number;
  modulesCompleted: ModuleCompletion[];
  powerLevel: 1 | 2 | 3 | 4; // Novice, Apprentice, Adept, Master
  firstCompletedAt: Date;
  lastCompletedAt: Date;
  wisdomCollected: string[];
  intensityHistory: number[]; // Track how intense this emotion has been
}

export interface ModuleCompletion {
  moduleId: number; // 1-9
  moduleName: string;
  completed: boolean;
  completedAt?: Date;
  data: ModuleData; // Saved responses
  timeSpent: number; // milliseconds
}

export interface ModuleData {
  // Module 1: Mood Meter
  emotionSelected?: EmotionType;
  intensity?: number;
  intensityDescription?: string;

  // Module 2: Memory Constellation
  memoryAssociations?: string[];

  // Module 3: Body Language
  bodyLocation?: string;
  sensation?: string;
  bodyVoice?: string;
  bodyNeed?: string;
  bodyAction?: string;

  // Module 4: Letter Writing
  letterRecipient?: string;
  letterGreeting?: string;
  letterBody?: string;
  letterClosing?: string;

  // Module 5: Reverse Letter Writing
  perspectiveChoice?: string;
  perspectivePerson?: string;
  reverseLetterBody?: string;

  // Module 6: Feelings Journal
  journalEntry?: string;

  // Module 7: Trajectories
  shutdownState?: {
    feel: string;
    think: string;
    do: string;
    result: string;
  };
  balancedState?: {
    feel: string;
    think: string;
    do: string;
    result: string;
  };
  overwhelmedState?: {
    feel: string;
    think: string;
    do: string;
    result: string;
  };

  // Module 8: Wisdom Tree
  lessonsLearned?: string[];
  highestPerspective?: string;

  // Module 9: Ripple Pool
  synthesisInsights?: string;
  relationshipImpact?: string;
  intention?: string;
}

export type EmotionType =
  | 'angry'
  | 'anxious'
  | 'scared'
  | 'jealous'
  | 'guilty'
  | 'forgiving'
  | 'joy'
  | 'lonely'
  | 'playful'
  | 'grateful'
  | 'other'
  | 'hopeful'
  | 'shameful'
  | 'sad'
  | 'stuck'
  | 'nervous';

export interface EmotionDefinition {
  id: EmotionType;
  name: string;
  color: string; // Hex color
  domainName: string; // e.g., "The Crimson Forge"
  description: string;
  companionDialogue: string;
  powers: EmotionPower[];
}

export interface EmotionPower {
  id: string;
  name: string;
  emotionId: EmotionType;
  description: string;
  unlockedAtModule: number;
  level: 1 | 2 | 3 | 4;
  cooldown?: number; // milliseconds
  duration?: number; // milliseconds
}

export interface SessionState {
  emotionId: EmotionType;
  currentModule: number;
  startedAt: Date;
  lastSavedAt: Date;
  moduleData: ModuleData;
}

export interface CompanionState {
  name: string;
  bondLevel: number;
  conversationHistory: ConversationMessage[];
  personalityTraits: string[];
  appearanceEvolution: number; // 0-3
}

export interface ConversationMessage {
  id: string;
  sender: 'player' | 'companion';
  text: string;
  timestamp: Date;
  context: {
    currentEmotion?: EmotionType;
    currentModule?: number;
    playerMood?: string;
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlockedAt: Date;
  icon: string;
}
```

### 4.2 Database Schema (IndexedDB)

```typescript
// src/services/storage/database.ts
import Dexie, { Table } from 'dexie';

export class EmotionExplorerDB extends Dexie {
  playerProfiles!: Table<PlayerProfile>;
  gameProgress!: Table<GameProgress>;
  emotionProgress!: Table<EmotionProgress>;
  companionState!: Table<CompanionState>;
  savedSessions!: Table<SessionState>;

  constructor() {
    super('EmotionExplorerDB');

    this.version(1).stores({
      playerProfiles: 'id, name, lastPlayed',
      gameProgress: 'playerId',
      emotionProgress: '[playerId+emotionId], playerId, emotionId',
      companionState: 'playerId',
      savedSessions: 'playerId'
    });
  }
}

export const db = new EmotionExplorerDB();
```

---

## 5. State Management

### 5.1 Zustand Stores

```typescript
// src/stores/playerStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PlayerState {
  profile: PlayerProfile | null;
  setProfile: (profile: PlayerProfile) => void;
  updateAvatar: (avatar: Partial<AvatarCustomization>) => void;
  clearProfile: () => void;
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      updateAvatar: (avatarUpdate) =>
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                avatar: { ...state.profile.avatar, ...avatarUpdate }
              }
            : null
        })),
      clearProfile: () => set({ profile: null })
    }),
    {
      name: 'player-storage'
    }
  )
);
```

```typescript
// src/stores/gameProgressStore.ts
import { create } from 'zustand';

interface GameProgressState {
  progress: GameProgress | null;
  currentSession: SessionState | null;

  initializeProgress: (playerId: string) => Promise<void>;
  saveProgress: () => Promise<void>;

  startEmotionJourney: (emotionId: EmotionType) => void;
  completeModule: (moduleId: number, data: ModuleData) => Promise<void>;

  unlockPower: (power: EmotionPower) => void;
  unlockAchievement: (achievement: Achievement) => void;

  updateCompanionBond: (increment: number) => void;
}

export const useGameProgressStore = create<GameProgressState>((set, get) => ({
  progress: null,
  currentSession: null,

  initializeProgress: async (playerId) => {
    // Load from IndexedDB or create new
    const progress = await loadProgressFromDB(playerId);
    set({ progress });
  },

  saveProgress: async () => {
    const { progress } = get();
    if (progress) {
      await saveProgressToDB(progress);
    }
  },

  startEmotionJourney: (emotionId) => {
    set({
      currentSession: {
        emotionId,
        currentModule: 1,
        startedAt: new Date(),
        lastSavedAt: new Date(),
        moduleData: {}
      }
    });
  },

  completeModule: async (moduleId, data) => {
    const { progress, currentSession } = get();
    if (!progress || !currentSession) return;

    // Update module completion
    const emotionProgress = progress.emotionsExplored.find(
      (ep) => ep.emotionId === currentSession.emotionId
    );

    if (emotionProgress) {
      const module = emotionProgress.modulesCompleted[moduleId - 1];
      module.completed = true;
      module.completedAt = new Date();
      module.data = data;
    }

    // Auto-save
    await get().saveProgress();
  },

  unlockPower: (power) => {
    set((state) => ({
      progress: state.progress
        ? {
            ...state.progress,
            powersUnlocked: [...state.progress.powersUnlocked, power]
          }
        : null
    }));
  },

  unlockAchievement: (achievement) => {
    set((state) => ({
      progress: state.progress
        ? {
            ...state.progress,
            achievements: [...state.progress.achievements, achievement]
          }
        : null
    }));
  },

  updateCompanionBond: (increment) => {
    set((state) => ({
      progress: state.progress
        ? {
            ...state.progress,
            companionBondLevel: Math.min(
              4,
              state.progress.companionBondLevel + increment
            )
          }
        : null
    }));
  }
}));
```

```typescript
// src/stores/companionStore.ts
import { create } from 'zustand';

interface CompanionStoreState {
  state: CompanionState | null;
  chatOpen: boolean;
  isTyping: boolean;

  initializeCompanion: (playerId: string) => Promise<void>;
  setChatOpen: (open: boolean) => void;
  addMessage: (message: ConversationMessage) => void;
  sendMessage: (text: string) => Promise<string>;
}

export const useCompanionStore = create<CompanionStoreState>((set, get) => ({
  state: null,
  chatOpen: false,
  isTyping: false,

  initializeCompanion: async (playerId) => {
    const companionState = await loadCompanionFromDB(playerId);
    set({ state: companionState });
  },

  setChatOpen: (open) => set({ chatOpen: open }),

  addMessage: (message) => {
    set((state) => ({
      state: state.state
        ? {
            ...state.state,
            conversationHistory: [...state.state.conversationHistory, message]
          }
        : null
    }));
  },

  sendMessage: async (text) => {
    const { state: companionState } = get();
    if (!companionState) return '';

    // Add player message
    const playerMessage: ConversationMessage = {
      id: generateId(),
      sender: 'player',
      text,
      timestamp: new Date(),
      context: {
        currentEmotion: getCurrentEmotion(),
        currentModule: getCurrentModule()
      }
    };
    get().addMessage(playerMessage);

    // Get LLM response
    set({ isTyping: true });
    try {
      const response = await claudeService.sendMessage(
        text,
        companionState.conversationHistory,
        playerMessage.context
      );

      const companionMessage: ConversationMessage = {
        id: generateId(),
        sender: 'companion',
        text: response,
        timestamp: new Date(),
        context: playerMessage.context
      };
      get().addMessage(companionMessage);

      return response;
    } finally {
      set({ isTyping: false });
    }
  }
}));
```

---

## 6. LLM Integration Architecture

### 6.1 Claude Service

```typescript
// src/services/llm/claudeService.ts
import Anthropic from '@anthropic-ai/sdk';

const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;

class ClaudeService {
  private client: Anthropic;
  private systemPrompt: string;

  constructor() {
    this.client = new Anthropic({
      apiKey: CLAUDE_API_KEY,
      dangerouslyAllowBrowser: true // For MVP; move to backend later
    });

    this.systemPrompt = this.buildSystemPrompt();
  }

  private buildSystemPrompt(): string {
    return `You are a wise and compassionate emotional companion in the Realm of Emotions. Your role is to guide players aged 12-20 through their emotional exploration journey with empathy, validation, and age-appropriate wisdom.

Core Principles:
- Always validate emotions as normal and acceptable
- Never judge or criticize any feeling
- Speak in warm, encouraging tones
- Use age-appropriate language
- Provide gentle guidance without being preachy
- Encourage self-discovery over giving answers
- Stay in character as a mystical companion

Safety Guidelines:
- If player mentions self-harm or suicide, immediately provide crisis resources
- If player seems overwhelmed, suggest taking a break
- Never provide medical or professional mental health advice
- Encourage speaking to trusted adults for serious concerns

Your responses should be:
- 2-4 sentences for engagement
- Ask open-ended questions to promote reflection
- Offer graduated hints if player is stuck
- Use "we" language to show partnership
- Maintain hopeful, empowering tone`;
  }

  async sendMessage(
    userMessage: string,
    conversationHistory: ConversationMessage[],
    context: {
      currentEmotion?: EmotionType;
      currentModule?: number;
      playerAge?: number;
    }
  ): Promise<string> {
    // Check for crisis keywords
    const crisisResponse = await this.checkForCrisisKeywords(userMessage);
    if (crisisResponse) return crisisResponse;

    // Build context-aware system prompt
    const contextPrompt = this.buildContextPrompt(context);

    // Convert conversation history to Claude format
    const messages = this.formatConversationHistory(conversationHistory);
    messages.push({
      role: 'user',
      content: userMessage
    });

    try {
      const response = await this.client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: `${this.systemPrompt}\n\n${contextPrompt}`,
        messages
      });

      const responseText = response.content[0].text;
      return responseText;
    } catch (error) {
      console.error('Claude API error:', error);
      return this.getFallbackResponse(context);
    }
  }

  private buildContextPrompt(context: any): string {
    let prompt = 'Current Context:\n';

    if (context.currentEmotion) {
      prompt += `- Player is exploring: ${context.currentEmotion}\n`;
    }
    if (context.currentModule) {
      const moduleName = getModuleName(context.currentModule);
      prompt += `- Current module: ${moduleName}\n`;
    }
    if (context.playerAge) {
      prompt += `- Player age: ${context.playerAge}\n`;
    }

    return prompt;
  }

  private formatConversationHistory(
    history: ConversationMessage[]
  ): Array<{ role: 'user' | 'assistant'; content: string }> {
    // Take last 10 messages for context window efficiency
    return history.slice(-10).map((msg) => ({
      role: msg.sender === 'player' ? 'user' : 'assistant',
      content: msg.text
    }));
  }

  private async checkForCrisisKeywords(message: string): Promise<string | null> {
    const crisisKeywords = [
      'suicide',
      'kill myself',
      'end my life',
      'hurt myself',
      'self harm',
      'want to die'
    ];

    const lowerMessage = message.toLowerCase();
    const hasCrisisKeyword = crisisKeywords.some((keyword) =>
      lowerMessage.includes(keyword)
    );

    if (hasCrisisKeyword) {
      return `I'm so glad you told me. What you're feeling matters, and you deserve support. Please reach out to someone who can help:

• Crisis Text Line: Text HOME to 741741
• National Suicide Prevention Lifeline: 988
• Talk to a trusted adult, school counselor, or therapist

You don't have to face this alone. Would you like to take a break from the game right now?`;
    }

    return null;
  }

  private getFallbackResponse(context: any): string {
    return `I'm here with you. Sometimes I need a moment to gather my thoughts. Can you tell me more about what you're experiencing right now?`;
  }
}

export const claudeService = new ClaudeService();
```

### 6.2 Prompt Builder

```typescript
// src/services/llm/promptBuilder.ts

export class PromptBuilder {
  static buildModuleSpecificPrompt(
    moduleId: number,
    emotionId: EmotionType
  ): string {
    const moduleName = getModuleName(moduleId);
    const emotionName = getEmotionName(emotionId);

    const prompts: Record<number, string> = {
      1: `The player is in the Awakening Circle, identifying and rating the intensity of ${emotionName}. Encourage them to be honest about what they're feeling.`,

      2: `The player is mapping memories and associations for ${emotionName}. Help them make connections between this emotion and their life experiences.`,

      3: `The player is exploring where ${emotionName} shows up in their body. Guide them through somatic awareness with curiosity and gentleness.`,

      4: `The player is writing a letter related to ${emotionName}. Support them in expressing what needs to be said, reminding them this is private and safe.`,

      5: `The player is doing reverse letter writing for ${emotionName}. Help them imagine what they need to hear, validating that this imaginative exercise is powerful.`,

      6: `The player is free-writing in the feelings journal about ${emotionName}. Encourage unfiltered expression without judgment.`,

      7: `The player is exploring emotional regulation patterns for ${emotionName}. Help them recognize their shutdown, balanced, and overwhelmed states with compassion.`,

      8: `The player is harvesting wisdom from their experience with ${emotionName}. Guide them to see the lessons and growth in their emotional journey.`,

      9: `The player is setting intentions based on their insights about ${emotionName}. Help them translate understanding into actionable steps.`
    };

    return prompts[moduleId] || '';
  }

  static buildStuckPlayerPrompt(moduleId: number): string {
    const hints: Record<number, string[]> = {
      3: [
        'Close your eyes and scan your body from head to toe. Where do you notice any sensations?',
        'Sometimes emotions hide in unexpected places—your shoulders, your stomach, even your hands.',
        'There\'s no wrong answer. Even if you can\'t feel anything specific, that\'s information too.'
      ],
      4: [
        'Try starting with "Dear [name], I need you to know..."',
        'What would you say if you knew they couldn\'t respond or judge?',
        'Sometimes the hardest part is the first sentence. Just write anything—you can change it later.'
      ],
      8: [
        'What surprised you about this emotion?',
        'If you could give advice to someone feeling this way, what would you say?',
        'What strength did you discover in yourself through this process?'
      ]
    };

    return `The player seems stuck. You might gently offer one of these hints: ${hints[moduleId]?.join(' OR ')}`;
  }
}
```

---

## 7. Performance Requirements

### 7.1 Performance Targets

**Loading Times:**
- Initial load: < 3 seconds
- Scene transitions: < 1 second
- Asset streaming: Progressive loading

**Frame Rate:**
- Target: 60 FPS
- Minimum: 30 FPS (on lower-end devices)

**Memory:**
- Target: < 256 MB
- Maximum: 512 MB

**Network:**
- LLM API calls: < 2 seconds response time
- Graceful degradation if offline (cached responses)

### 7.2 Optimization Strategies

**Asset Optimization:**
- Sprite atlases for character animations
- Compressed PNG/WebP for images
- MP3 audio at 128kbps
- Lazy loading for non-critical assets

**Code Optimization:**
- Code splitting by module
- Tree shaking unused code
- Minification and compression
- Service worker for caching

**Rendering Optimization:**
- Object pooling for particles
- Culling off-screen objects
- Batch rendering where possible
- WebGL over Canvas when supported

---

## 8. Security & Privacy

### 8.1 Data Privacy (MVP)

**Local Storage Only:**
- All personal data stored in browser's IndexedDB
- No server transmission of emotional content
- No tracking or analytics in MVP

**LLM API:**
- User messages sent to Claude API (necessary for chat)
- No long-term storage on Anthropic's servers (per their policy)
- API key secured in environment variables
- Rate limiting to prevent abuse

### 8.2 Content Safety

**Input Validation:**
- Sanitize all text inputs
- Prevent XSS attacks
- Character limits on text fields

**Crisis Detection:**
- Keyword monitoring for self-harm mentions
- Immediate crisis resource display
- Optional: Notify guardian (post-MVP)

**Age-Appropriate Content:**
- Content filtering based on age selection
- Mature themes handled sensitively

---

## 9. Testing Strategy

### 9.1 Unit Tests (Vitest)

**Test Coverage Targets:**
- Core game logic: 80%+
- State management: 90%+
- LLM service: 70%+
- Utility functions: 90%+

**Example Test:**
```typescript
// tests/unit/emotionMapping.test.ts
import { describe, it, expect } from 'vitest';
import { getEmotionColor, getEmotionDomain } from '@/utils/emotionMapping';

describe('Emotion Mapping', () => {
  it('should return correct color for anger', () => {
    expect(getEmotionColor('angry')).toBe('#8B0000');
  });

  it('should return correct domain name for joy', () => {
    expect(getEmotionDomain('joy')).toBe('The Crystal Meadows');
  });
});
```

### 9.2 Integration Tests

**Test Scenarios:**
- Complete emotion journey flow
- Save/load game progress
- Companion chat integration
- Module transitions

### 9.3 E2E Tests (Playwright)

**Critical User Paths:**
1. New player onboarding → Character creation → First module
2. Complete full emotion journey (all 9 modules)
3. Return player → Load progress → Continue journey
4. Companion chat interaction
5. Save and resume session

**Example E2E Test:**
```typescript
// tests/e2e/emotionJourney.spec.ts
import { test, expect } from '@playwright/test';

test('Complete emotion journey for Joy', async ({ page }) => {
  await page.goto('/');

  // Character creation
  await page.click('[data-testid="begin-journey"]');
  await page.selectOption('[data-testid="age-select"]', '16-17');
  await page.fill('[data-testid="name-input"]', 'TestPlayer');
  await page.click('[data-testid="create-character"]');

  // Module 1: Select Joy
  await page.click('[data-testid="emotion-joy"]');
  await page.fill('[data-testid="intensity-slider"]', '75');
  await page.fill('[data-testid="reflection-text"]', 'I feel joyful today because...');
  await page.click('[data-testid="continue"]');

  // Assert transition to Module 2
  await expect(page.locator('[data-testid="module-2"]')).toBeVisible();

  // Continue through all modules...
});
```

---

## End of Part 3

**Continue to Part 4: Art Direction & Assets**
- Visual style guide
- Character designs
- Environment concepts
- UI/UX specifications
- Complete asset list

**Continue to Part 5: Implementation Roadmap & Prompt**
- Development phases
- MVP timeline
- Comprehensive implementation prompt

---

*Document Version: 1.0*
*Last Updated: 2025-01-22*
*Status: Complete - Ready for Art Direction*
