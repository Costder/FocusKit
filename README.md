# FocusKit

**A calm, private, ADHD-friendly focus & planner app.** Local-first. No account. No ads. No shame.

Built by **Nyx** — software that respects your attention and your privacy.

## Why FocusKit exists

Most "productivity" apps assume a neurotypical brain: endless fields, guilt-tripping
streaks, cloud accounts, and ads. For people with ADHD, that's friction that kills
momentum. FocusKit does the opposite — it's built around three things the ADHD
community actually asks for:

- **Body doubling** — a calm on-screen presence so starting (and staying started) feels less lonely.
- **Time-blindness support** — a big visual timer that lets you *see* time passing, not just read digits.
- **No-shame progress** — we celebrate showing up. There are no streaks to "break."

And it's **local-first**: everything stays on your device. No account, no ads, no tracking.

## Features (v1)

- **Focus sessions** with a breathing "companion" presence and a depleting visual timer (5/15/25/45 min).
- **Low-friction tasks** — capture the one thing on your mind in a tap; pick one to "focus."
- **Forgiving progress** — "you showed up N days," total sessions, minutes focused, and a gentle 14-day view.
- **Comfort settings** — high-contrast mode and reduce-motion.

## Tech

- Expo / React Native (TypeScript)
- Local persistence via `@react-native-async-storage/async-storage`
- Zero backend, zero network calls, zero analytics

## Run it

```bash
npm install
npx expo start        # scan the QR with Expo Go, or:
npm run android       # run on an Android emulator/device
npm run typecheck     # tsc --noEmit
```

## Build for the Play Store (EAS)

```bash
npm install -g eas-cli
eas build -p android --profile production
```

(iOS later via EAS cloud build — no local Mac required.)

## Roadmap

- Optional, fair **Pro** tier (one-time or low annual): cloud backup, multi-device sync, custom session lengths, themes.
- Optional ambient focus sounds.
- Widgets / quick-start tile.

## Privacy

FocusKit collects nothing. There is no server. Your tasks and focus history live only
on your device. That's the whole point.

## License

FocusKit is **source-available**, not open source, under the
[PolyForm Noncommercial License 1.0.0](LICENSE.md).

You're welcome to read the code, audit it, and build your own personal copy. What you
**can't** do is use it commercially — that includes shipping a competing or derivative
app. The code is public so you can trust it, not so it can be cloned into a product.
