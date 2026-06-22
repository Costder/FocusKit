# FocusKit

<p align="center">
  <img src="docs/images/feature-graphic.png" alt="FocusKit — focus for the brain that doesn't focus on command" width="100%">
</p>

<p align="center">
  <strong>A calm, private ADHD focus app for Android.</strong><br>
  Body doubling · Visual timer · One-tap tasks · No shame streaks · Local-first
</p>

<p align="center">
  <a href="https://costder.github.io/FocusKit/">🌐 Landing page</a> ·
  <a href="https://play.google.com/store/apps/details?id=com.nyx.focuskit">📱 Google Play</a> ·
  <a href="https://costder.github.io/FocusKit/body-doubling/">What is body doubling?</a> ·
  <a href="LICENSE.md">Source-available</a>
</p>

---

## Why FocusKit

Most focus apps were built for neurotypical brains. They use countdown timers (you read a number, you don't *feel* time passing), streak mechanics that punish you the day you miss, and they require accounts, cloud access, and ads to keep the lights on.

FocusKit is built from the other direction — reading r/ADHD community threads for months before writing a line of code. Every feature is a direct response to something that kept coming up. Nothing else.

## What it does

### 🪞 Body-doubling companion
Working next to someone makes the impossible suddenly possible. FocusKit's companion stays with you for your entire session — a quiet, present accountability anchor. No video call, no scheduling, no stranger on a webcam. Open the app and you're not alone.

### ⏳ Time-blindness timer
Not a number ticking down in the corner — a ring of light that visibly depletes as your session runs. You look up and you *see* how much time is left, rather than calculating it. Choose 5, 15, 25, or 45 minutes.

### ⚡ One-tap task capture
Before the thought disappears, tap once and it's saved. No project hierarchy, no tags, no planning session required. Under two seconds from thought to captured.

### 🌱 No-shame progress
You showed up *N* days. That's the metric. No streak counter that resets and triggers a shame spiral. Cumulative, forward-only credit for every day you opened the app.

### 🌙 Sensory-calm interface
High-contrast mode, reduce-motion option, muted calm colors throughout. No pop-ups asking for a rating, no badge notifications competing for attention.

## Privacy

Everything lives on your device. No account to create, no server to breach, no behavioral data to sell to advertisers.

- ✓ No account required
- ✓ No cloud sync (local-first via AsyncStorage)
- ✓ No ads, no tracking, no analytics SDK
- ✓ Zero network calls at runtime

## Tech stack

- **Expo / React Native** (TypeScript)
- **@react-native-async-storage/async-storage** — local persistence
- **EAS** — cloud Android build (no local Mac / Android SDK required)
- Zero backend, zero network calls, zero analytics

## Run it locally

```bash
npm install
npx expo start        # scan QR with Expo Go, or:
npm run android       # run on an Android emulator/device
npm run typecheck     # tsc --noEmit
```

## Build for Android (EAS cloud build)

```bash
npm install -g eas-cli
eas login             # free Expo account required
eas build -p android --profile production
# Download the .aab when done, upload to Google Play Console
```

iOS support coming later via EAS cloud build — no local Mac required.

## License

FocusKit is **source-available** under the [PolyForm Noncommercial License 1.0.0](LICENSE.md).

You're welcome to read the code, audit it, and build your own personal copy. **You cannot** use it commercially — that includes shipping a competing or derivative app. The code is public so you can trust it, not so it can be cloned into a product.

## Roadmap

- **Fair Pro tier** — cloud backup/sync, custom session lengths, themes (via Play Billing)
- Ambient focus sounds
- Widgets / quick-start tile
- iOS (via EAS cloud build)

---

<p align="center">
  Made by <a href="https://costder.github.io/FocusKit/">Nyx</a> — software that respects your attention.<br>
  <em>No investors. No ad model. Just a useful tool, fairly priced.</em>
</p>
