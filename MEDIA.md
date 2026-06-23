# FocusKit Media & Creator Outreach Kit
# Compiled by Nyx Marketing Agent — June 23, 2026
# Deploy via scout-01@agentmail.to when HBF send_email is available

---

## TARGET LIST (sorted by priority)

### TIER 1 — ADHD Publications (highest reach, editorial credibility)

**ADDitude Magazine**
- URL: additudemag.com
- Contact form: additudemag.com/contact/
- Coverage type: "Best ADHD Apps" roundups, updated Feb 2026 (active coverage)
- Pitch angle: New Android-first body doubling app, privacy-first, no account
- Note: Their Feb 2026 update to "25 Great Mobile Apps for ADHD Minds" shows active coverage. Getting listed would be very high value.

**CHADD (Children and Adults with ADHD)**
- URL: chadd.org
- Editor contact: editor@chadd.org (standard format)
- Coverage type: Resource recommendations, app spotlights

**ADDitude en Español (international reach)**
- URL: additudemag.com/category/en-espanol/

---

### TIER 2 — YouTube Creators (video reviews = install spikes)

**How to ADHD (Jessica McCabe)**
- Channel: youtube.com/@HowtoADHD
- Subs: 1M+
- Recent app review: "5 Game-Changing Productivity Apps For ADHD" (261K views, Sep 2024)
- Contact: Via YouTube About page, or look for business email in description
- Pitch angle: Body doubling + time blindness — the two features she'd care about most based on her content
- Note: She covers apps regularly and has done sponsored segments. This would be ideal for a launch mention.

**Josh Budd | The ADHD Tech Founder**
- Channel: youtube.com/channel/UCPh3olmBESX3i_0gk3A1D2Q
- Content: ADHD + tech tools — exactly the overlap FocusKit needs
- Contact: Via channel About page

**Bryan Jenks**
- Channel: Bryan Jenks
- "Top 5 ADHD Apps & Tools" video (57K views)
- Content: Tech-focused ADHD audience, affiliate-friendly format
- Contact: Via channel About page

**Mynd | Systems For ADHD (Braelyn)**
- Channel: youtube.com/@myndforadhd
- Content: ADHD systems and tools, Notion-focused but reviews apps
- Active in 2026 (June 2026 video)
- Contact: go.myndforadhd.com/website

---

### TIER 3 — ADHD Newsletters & Podcasts

**ADHD reWired Podcast (Eric Tivers)**
- Also wrote for ADDitude Magazine
- Focus: practical ADHD tools

**Hacking Your ADHD (Will Curb)**
- Podcast with ADHD tools segments

**The Mini ADHD Coach**
- Instagram-first but growing newsletter

---

## PITCH EMAIL TEMPLATE

**Subject:** New Android app for ADHD — body doubling + visual timer, privacy-first, free. Launching June 24.

---

Hi [Name],

I built FocusKit — an ADHD focus app for Android that launches on Google Play tomorrow (June 24). It's based on months of reading r/ADHD threads before writing a single line of code.

Five things, each solving a specific pain the community kept describing:

1. **Body-doubling companion** — a quiet on-screen presence for your session. No video call, no scheduling.
2. **Visual time-blindness timer** — a ring that shrinks as you work, so you can see time passing rather than reading digits.
3. **One-tap task capture** — before the thought disappears.
4. **"You showed up N days"** — counts days, never resets, no streak punishment.
5. **High-contrast + reduce-motion** built in from day one.

No account. Nothing leaves your phone. No ads. The codebase is public on GitHub. Free to start.

Play Store: [URL when live]
Landing page: https://costder.github.io/FocusKit/
GitHub: https://github.com/Costder/FocusKit

Happy to send a promo code when Play billing is set up, answer questions, or provide screenshots. If this fits something you're covering, I'd appreciate even a brief mention.

— Nyx (scout-01@agentmail.to)

---

## NOTES ON TIMING

- Send: Wednesday June 24 when Play Store listing is live (so the link is real)
- For Jessica McCabe / How to ADHD: This is the biggest swing — she does apps, she covers body doubling, and her audience is exactly right. Lead with the "months of reading r/ADHD" angle and the privacy-first claim.
- ADDitude Magazine: Their contact form is the right path. Their next roundup update could include FocusKit.
- Don't send to all at once — space by 1-2 days to avoid looking spammy.

---

## HBF SEND_EMAIL DEPLOYMENT COMMANDS (when tunnel is back)

```
# When HBF is back, execute in order:
# 1. Read inbox to confirm all pending verifications first
read_inbox(address="scout-01@agentmail.to", limit=10)

# 2. After Reddit/Hashnode/LaunchitX are confirmed:
# 3. Send outreach emails (after Play Store is live Wednesday):
send_email(
  from="scout-01@agentmail.to",
  to="[target email]",
  subject="New Android app for ADHD — body doubling + visual timer, privacy-first, free. Launching today.",
  body="[pitch email above with real Play Store URL]"
)
```

---

## PRESS KIT ASSETS

All at: github.com/Costder/FocusKit / docs/ folder (live when GitHub Pages enabled)

- Hero image: docs/images/feature-graphic.png (1024x500)
- Landing page: costder.github.io/FocusKit/
- Play Store: [Wednesday June 24]
- GitHub: github.com/Costder/FocusKit

Screenshots (download from Hyperagent thread):
- Timer screen: shortId h7vrmfdg
- Home screen: shortId pmojibdf  
- Progress screen: shortId y64wzsjz
