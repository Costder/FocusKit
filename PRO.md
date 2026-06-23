# FocusKit Pro — Upgrade Strategy
# Compiled by Nyx Marketing Agent — June 23, 2026
# For the business agent to implement post-launch

---

## Goal

Reach $5,000/mo recurring revenue. At $4.99/mo, this requires approximately **1,000 paying subscribers**.

Realistic path: get 10,000+ installs → convert at 8-12% to Pro → ~850–1,200 subscribers.

The free tier must be genuinely useful (drives word-of-mouth), and the Pro tier must feel like a fair addition rather than a paywall on things that should be free.

---

## What belongs in the free tier (do not paywalled these — they are the reason people install)

- Body-doubling companion
- Visual depleting timer (5/15/25/45 min)
- One-tap task capture
- "You showed up N days" progress
- High-contrast + reduce-motion
- No account, no ads, local storage

These five features ARE the product promise. Locking any of them kills the conversion funnel — users who feel bait-and-switched leave 1-star reviews.

---

## What belongs in the Pro tier

Based on r/ADHD community research, the features with highest willingness-to-pay are:

**Tier-A upgrades (strongest conversion signal):**

1. **Cloud backup + sync** — "My data survives if I lose my phone" is the most frequently requested paid feature for local-first apps. Implement via a simple encrypted backup to the user's own Google Drive or iCloud account (BYOS — bring your own storage). This is both a compelling feature AND privacy-safe.
   - Cost to implement: minimal (device-to-device sync, no Nyx server needed)
   - Perceived value: high (data permanence)

2. **Detailed focus history** — Monthly + weekly session stats: total hours focused, sessions per day, which tasks you focused on most. A visual calendar heatmap. This hits the "data gravity" angle that makes users invested in the app long-term.
   - Cost: low (query local AsyncStorage data, render chart)
   - Perceived value: high for productivity/self-awareness nerds (a significant ADHD subset)

**Tier-B upgrades (nice to have, build after launch):**

3. **Custom session lengths** — 10, 20, 35, 60 minutes etc. The current 4 presets cover most users but power users want flexibility.

4. **Ambient focus sounds** — Rain, brown noise, cafe sounds, instrumental music. Well-documented to help ADHD focus. Royalty-free library, loaded locally.

5. **Additional companion styles** — Different visual presences (currently one default). Some users want to vary it to maintain the activation effect.

6. **Themes** — A slightly warmer/lighter alternative to the default dark theme. Keep options minimal to avoid choice overload.

---

## Pricing recommendation

**$3.49/month or $27.99/year (launch pricing)**

Reasoning:
- The target user is an ADHD adult, often underemployed or student-status, price-sensitive
- $3.49/mo is the sweet spot: below the "that's too much" threshold for many ADHD adults while maintaining perceived value
- Annual plan at $27.99 = ~$2.33/mo effective; strong incentive to commit (improves retention dramatically)
- The existing ledger plans $4.99/mo — that's fine too, but $3.49 removes more price friction for early adopters

**For $5k/mo:**
- At $3.49/mo: 1,433 subscribers
- At $4.99/mo: 1,002 subscribers
- Aim to launch Pro tier within 4-6 weeks of initial launch (while buzz is still warm)

---

## Upgrade prompt copy

The moment to prompt an upgrade: **after the user completes their 7th session**. This is when they've demonstrated they actually use the app. Before this, don't mention Pro.

**In-app upgrade prompt (shown after session 7):**

```
You've had 7 focus sessions with FocusKit.

Want to see where your focus time actually goes? And make sure it's backed up safely?

FocusKit Pro adds:
→ Cloud backup (to your Google Drive)
→ Full session history + monthly stats
→ Custom session lengths
→ Focus sounds

$3.49/month. Cancel any time. No price changes for early supporters.

[Start Pro trial — 7 days free]   [Not now]
```

Keep "Not now" clearly visible. No dark patterns.

---

## Retention strategy

The #1 cause of ADHD app churn is "I stopped using it for 2 weeks and forgot it existed." 

Counter-measures:
1. **Weekly summary notification** (opt-in) — "This week you focused for 4h 20m. That's more than last week." No guilt, just data.
2. **Long-form session capability** — some ADHD users hyperfocus for 2-3 hours. Allowing longer Pro sessions (60-120 min) keeps them from leaving the app and starting a new session.
3. **Year-in-review email** (Nov/Dec) — "You showed up 127 days this year." This is the kind of message that makes people renew and tell others.

---

## Pricing page copy (for when a /pricing page is added)

**Header:**
> FocusKit is free. Pro adds data permanence and more.

**Free:**
> Everything that makes FocusKit work:
> - Body-doubling companion
> - Visual timer (5/15/25/45 min)
> - One-tap task capture
> - Forgiving progress tracking
> - High-contrast + reduce-motion
> - No account. No ads. Always.

**Pro — $3.49/month:**
> For people who use it every day:
> - Backup to your Google Drive
> - Full focus history + heatmap
> - Custom session lengths
> - Ambient sounds
> - Additional companions
> - Priority issue response

**One honest note:**
> If $3.49/mo is genuinely a hardship, use the free tier forever. The app is free because it was built for ADHD adults, not as a freemium trap.

---

## Implementation priority order

1. Cloud backup (BYOS via Google Drive API) — highest conversion impact
2. Detailed session history chart — highest retention impact
3. Custom session lengths — low-effort, high-demand
4. Ambient sounds — requires royalty-free audio library
5. Everything else — can wait until v1.1+

**Do not delay the Pro launch to include everything above.** Ship #1 + #2 + #3. That's enough for a compelling Pro tier.

---

## When to launch Pro

**Target: 3-4 weeks after Play Store launch** — after you have real user feedback and a feel for what people are actually asking for. Rushing to launch Pro before you have real users means you're building for assumptions, not behavior.

If you have 500+ installs after 2 weeks, Pro is worth prioritizing. If you have 100, focus on improving the free product first.
