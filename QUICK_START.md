# Quick Start Guide - Emotion Explorer Game

## 🚀 The Game is Running!

Your development server is live at: **http://localhost:3000/**

---

## ✅ What Just Happened

I've built the complete **Phase 0 (Foundation)** of the Emotion Explorer Adventure Game:

### Core Systems Built:
1. ✅ Vite + React + TypeScript project
2. ✅ Phaser 3 game engine integrated
3. ✅ Complete type system (16 emotions, player profiles, modules)
4. ✅ IndexedDB database (Dexie.js)
5. ✅ Zustand state management (player, progress, companion)
6. ✅ Claude API integration (AI companion chat)
7. ✅ Base scene system with utilities
8. ✅ Interactive main menu

### What You Can Do Right Now:
- Open http://localhost:3000/ in your browser
- See the animated title screen with starfield
- Click the three menu buttons (they show placeholders)
- Watch the smooth animations and particle effects
- Check the console for initialization messages

---

## 🎮 What's Working

### Game Systems:
- **Main Menu** - Fully functional with animations
- **Database** - Auto-initializes, ready to save data
- **State Management** - All stores configured
- **LLM Service** - Ready for AI companion chat (add API key)

### Code Quality:
- Full TypeScript type safety
- Clean architecture
- Modular, extensible design
- Path aliases configured (@/, @game/, @components/)

---

## 📁 Project Structure

```
emotion-explorer-game/
├── src/
│   ├── game/
│   │   ├── scenes/         # ✅ BootScene, MainMenuScene, BaseScene
│   │   └── config/         # ✅ Game configuration
│   ├── stores/             # ✅ Player, progress, companion stores
│   ├── services/
│   │   ├── llm/           # ✅ Claude API service
│   │   └── storage/       # ✅ IndexedDB database
│   ├── types/             # ✅ All TypeScript types
│   └── components/        # (Ready for React UI)
├── PRD_PART1-5.md        # Complete game documentation
├── README.md              # Project overview
└── IMPLEMENTATION_STATUS.md  # Detailed status report
```

---

## 🔧 Development Commands

```bash
# Start dev server (ALREADY RUNNING)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Lint code
npm run lint
```

---

## 🎯 Next Steps: Phase 1 (Character Creation)

### What to Build Next:
1. **Age Selection Screen**
   - Create `AgeSelectionScene.ts`
   - UI for 4 age brackets
   - Save to player store

2. **Avatar Customization**
   - Create `CharacterCreationScene.ts`
   - Implement customization options
   - Live avatar preview

3. **Companion Introduction**
   - Companion sprite
   - Name input
   - First dialogue

### Reference Documentation:
- **PRD Part 2** - Complete specifications for all features
- **PRD Part 3** - Technical architecture details
- **PRD Part 4** - Art direction and asset specs

---

## 🔑 Environment Setup (Optional)

To enable AI companion chat:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Add your Claude API key to `.env`:
   ```
   VITE_CLAUDE_API_KEY=sk-ant-your-api-key-here
   ```

3. Get an API key from: https://console.anthropic.com/

*(The game works without this - companion will use fallback responses)*

---

## 📖 Documentation Index

### Essential Reading:
1. **README.md** - Project overview and navigation
2. **IMPLEMENTATION_STATUS.md** - What's built and what's next
3. **PRD_PART1_VISION_AND_OVERVIEW.md** - Game concept and narrative
4. **PRD_PART2_USER_JOURNEYS_AND_MODULES.md** - Detailed module specs

### For Implementation:
- **PRD_PART3_TECHNICAL_ARCHITECTURE.md** - Tech stack and patterns
- **PRD_PART4_ART_DIRECTION_AND_ASSETS.md** - Visual style guide
- **PRD_PART5_IMPLEMENTATION_ROADMAP.md** - Timeline and master prompt

---

## 🎨 Adding Game Assets

### Asset Directories Ready:
```
public/assets/
├── images/
│   ├── characters/     # Player avatars, companion
│   ├── environments/   # Module backgrounds
│   ├── ui/             # Buttons, panels
│   └── effects/        # Particles, VFX
├── audio/
│   ├── music/          # Background music
│   └── sfx/            # Sound effects
└── fonts/              # Custom fonts (if needed)
```

### How to Use Assets:
```typescript
// In scene preload():
this.load.image('hub-bg', 'assets/images/environments/hub.png');

// In scene create():
this.add.image(0, 0, 'hub-bg').setOrigin(0);
```

---

## 🧩 Key Files to Know

### Game Logic (Phaser):
- `src/game/scenes/BaseScene.ts` - Base class for all scenes
- `src/game/scenes/MainMenuScene.ts` - Example scene
- `src/game/config/gameConfig.ts` - Game settings
- `src/game/config/constants.ts` - Shared constants

### State Management (Zustand):
- `src/stores/playerStore.ts` - Character profile
- `src/stores/gameProgressStore.ts` - Progression tracking
- `src/stores/companionStore.ts` - AI companion

### Services:
- `src/services/llm/claudeService.ts` - Claude API
- `src/services/storage/database.ts` - IndexedDB

### Types:
- `src/types/emotion.types.ts` - 16 emotions, modules
- `src/types/player.types.ts` - Player profile, avatar
- `src/types/companion.types.ts` - Companion state

---

## 🐛 Troubleshooting

### Port Already in Use:
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or change the port in vite.config.ts
```

### Module Not Found:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors:
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

---

## 💡 Development Tips

### Creating a New Scene:
1. Extend `BaseScene`
2. Add to `SCENE_KEYS` in constants.ts
3. Import and add to game config in App.tsx

```typescript
import { BaseScene } from './BaseScene';
import { SCENE_KEYS } from '../config/constants';

export class MyNewScene extends BaseScene {
  constructor() {
    super(SCENE_KEYS.MY_SCENE);
  }

  create(): void {
    this.fadeIn();
    // Your scene logic
  }
}
```

### Using Stores:
```typescript
import { usePlayerStore } from '@/stores/playerStore';

// In React component
const { profile, setProfile } = usePlayerStore();

// In Phaser scene (access via import)
import { usePlayerStore } from '@/stores/playerStore';
const profile = usePlayerStore.getState().profile;
```

### Testing LLM Integration:
```typescript
import { claudeService } from '@/services/llm/claudeService';

const response = await claudeService.sendMessage(
  'I feel anxious',
  [],
  { currentEmotion: 'anxious', currentModule: 1 }
);
```

---

## 📊 Success Metrics

### Phase 0 Complete ✅
- [x] Game launches successfully
- [x] No console errors
- [x] Main menu interactive
- [x] Database initializes
- [x] All stores functional
- [x] Type safety enforced
- [x] LLM service ready

### Ready for Phase 1! 🚀

---

## 🤝 Getting Help

### Documentation:
- All PRD parts contain detailed specifications
- Code comments explain complex logic
- Type definitions are self-documenting

### Common Questions:

**Q: How do I add a new emotion?**
A: Update `EMOTION_DEFINITIONS` in `emotion.types.ts`

**Q: How do I create a new scene?**
A: Extend `BaseScene`, add to constants, import in App.tsx

**Q: Where do I add React UI components?**
A: `src/components/` - they overlay the Phaser game

**Q: How do I save player data?**
A: Use the stores - they auto-save to IndexedDB

---

## 🎉 You're Ready!

The foundation is complete and working. Time to build the character creation system and start bringing the Realm of Emotions to life!

**Next up: Create the age selection and avatar customization screens.**

Happy coding! 💜✨

---

*Quick Start Guide v1.0*
*Phase 0 Complete - Phase 1 Ready*
