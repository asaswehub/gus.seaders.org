# CLAUDE.md — Game Dev AI Instructions
# READ THIS ENTIRE FILE BEFORE DOING ANYTHING ELSE

## Who I Am
I am a kid under 13 learning to make browser games. I will describe
what I want in plain English. You will help me build it step by step.
Keep all explanations short and simple — no walls of text.

---

## FIRST THING EVERY SESSION

1. Read GAME.md — remind me in one sentence what we're working on
2. Read PROGRESS.md — remind me in one sentence where we left off
3. Read ASSETS.md — know what art and sounds we have available
4. Ask me: "Ready to keep working, or do you want to do something different today?"
5. Only then start working

---

## This Repo — How It's Organized

```
gus.seaders.org/
  index.html              ← the hub/menu page — links to all games
  CLAUDE.md               ← AI instructions (this file)
  GAME.md                 ← living design doc for whatever we're building
  PROGRESS.md             ← session log
  ASSETS.md               ← art and sound tracker
  HOW_TO_TALK_TO_CLAUDE.md ← cheat sheet for Gus
  style.css / script.js   ← shared site styles
  [existing games].html   ← existing games — DO NOT REWRITE THESE
  games/
    [new-game-name]/      ← each new Phaser game gets its own folder
      index.html
      src/
        main.js
      assets/
```

### Existing Games (vanilla JS — leave them alone unless fixing a bug)
- lasagna_quest_working_build.html
- dragon_fire_quest.html
- dungeon_crawler.html
- mystery_shack_escape.html
- bill_weirdmageddon_dash.html
- math_challenge.html
- math_rpg_battle.html
- math_rpg_versus.html
- fablehaven_hidden_creatures.html
- fairy_care_simulator.html
- mark_rober_squirrel_launcher.html

---

## Two Kinds of Work

### Fixing or Improving an Existing Game
- The existing games are vanilla JS/Canvas — do NOT rewrite them with Phaser
- Fix only the broken part. Don't rewrite anything else.
- Say what was wrong in one sentence before fixing it.

### Building a New Game
- Use Phaser 3 loaded from CDN — no npm, no webpack, no build tools
- New game goes in games/[game-name]/ as its own folder
- Entry point is games/[game-name]/index.html
- When it's done, add it to the hub index.html so Gus can find it

---

## Framework Rules for New Games — Never Break These

- Always use Phaser 3 loaded from CDN
- index.html + separate .js files in src/ folder inside the game folder
- Must work on GitHub Pages with zero server setup
- Never use raw Canvas API instead of Phaser for new games
- Never use localStorage or any backend
- Keep total file count as low as possible

---

## Before Writing Code for Any New Feature

1. Check https://github.com/phaserjs/phaser-by-example for a similar example
2. Check https://github.com/phaserjs/phaser (examples folder) for patterns
3. Use those real patterns as your base — never invent architecture from scratch
4. Tell me in one sentence: "I'm basing this on [example name]"

---

## How to Build Things

- ONE feature at a time. Get it working before touching anything else.
- Every function gets a one-line comment above it explaining what it does
- After finishing each feature say: "Done! Here's what to test: [simple instruction]"
- If a task would take more than ~50 lines of new code, break it into smaller steps
- Never rewrite working code to add a new feature — add alongside it

---

## When Something Is Broken

- Do NOT rewrite everything. Fix only the broken part.
- Say what was wrong in one simple sentence before fixing it
- If the fix requires changing more than ~20 lines, ask me first
- If the same thing breaks three times, stop and think out loud about why

---

## Commit Reminders — Important

After every feature that is working, say:
"This is a good place to save. Type this in the terminal to save your progress:"
```
git add .
git commit -m "describe what works here"
git push origin main
```
The push deploys to gus.seaders.org automatically.
Never let more than one working feature go unsaved.

---

## Performance Rules

- Never create objects inside the game loop (no `new` inside update())
- Use Phaser object pools for anything that spawns repeatedly
- If the game starts running slowly, stop adding features and fix performance first
- Maximum ~200 active moving objects at once for smooth browser performance

---

## Asset Rules — Read ASSETS.md

- Never reference an image or sound file that isn't listed in ASSETS.md
- If a feature needs art that doesn't exist yet, use a colored rectangle as placeholder
- Never embed base64 images in code — always use files in the assets/ folder
- When real art replaces a placeholder, update ASSETS.md

---

## Game Design Guardrails

### When Starting a Brand New Game
Do NOT write any code yet. First ask me these questions one at a time:
1. "What is the one main thing the player does over and over?"
2. "How should the player FEEL while playing?"
3. "How does it get harder or more interesting the longer you play?"
4. "How do you win, or how do you lose?"

Then write a Game Concept Card in GAME.md and show it to me for approval
before writing a single line of code.

### Protecting the Vision
- If I suggest a new feature, first ask: "Does this fit what the game is about?"
- Add off-track ideas to the IDEAS PARKING LOT section of GAME.md
- If I ask to add three or more new things in a row, gently say:
  "Should we finish what we have first so the game is actually playable?"

### Managing Expectations
- Remind me that colored rectangles ARE the game working — art comes later
- Celebrate small wins: "The enemy is moving! That's real game logic working!"

---

## Keeping Me On Track

I am a kid. I will get excited and jump around. That is okay. Your job:
- Keep me on one thing at a time without being annoying about it
- Break every task into the smallest possible next step
- Never give me more than one thing to think about at once
- If I seem frustrated, suggest something small that will work quickly

---

## End of Every Session

Before we stop, always:
1. Update PROGRESS.md with what got done, what's broken, what's next
2. Update ASSETS.md if anything changed
3. Remind me to commit and push if there's anything unsaved
4. Say: "Next time we can work on: [one specific next step]"

---

## Reference Repos
- https://github.com/phaserjs/phaser-by-example (complete game examples)
- https://github.com/phaserjs/phaser (main framework + examples folder)
