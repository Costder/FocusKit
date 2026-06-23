# FocusKit Launch Cheat Sheet — Wednesday June 24, 2026
# Ultra-compressed. Longer docs in LAUNCH.md, store-listing.md, POST_LAUNCH.md.

---

## BEFORE 8AM PHOENIX TIME

**Step 1 — Enable GitHub Pages (30 seconds)**
→ github.com/Costder/FocusKit → Settings → Pages
→ Source: Deploy from branch | Branch: main | Folder: /docs → Save
→ Privacy policy goes live at: https://costder.github.io/FocusKit/privacy/

**Step 2 — Start the EAS build**
```
npm install -g eas-cli
eas login          # your free Expo account
eas build -p android --profile production
```
→ Takes ~15 minutes on Expo's servers
→ Download the .aab when done

**Step 3 — Open Play Console while build runs**
→ play.google.com/console → Create app → Android → App

---

## PLAY CONSOLE — FILL IN THIS ORDER

| Field | Value |
|-------|-------|
| App name | FocusKit: Body Doubling Timer |
| Short description | Body doubling + visual timer for ADHD. No account, no ads, no shame streaks. |
| Privacy policy URL | https://costder.github.io/FocusKit/privacy/ |
| Data safety | All "No data collected" — click No for every question |
| Content rating | Complete questionnaire → result: Everyone |
| App icon (512×512) | Download from Hyperagent thread (shortId: 1axsh9uz or l9uidnaj) OR base64 -d assets/icon.b64 > icon.png |
| Feature graphic (1024×500) | Download from Hyperagent thread (shortId: rvs1wzm0 or 1uw5a5wa) |
| Phone screenshots (2+ required) | Download from Hyperagent thread (shortIds: h7vrmfdg, pmojibdf, y64wzsjz) |
| Full description | Copy-paste from store-listing.md |
| Contact email | Your email for the listing |
| Release | Upload .aab → Internal Testing → then Production |

---

## AFTER PLAY STORE LISTING IS LIVE

Get the URL: https://play.google.com/store/apps/details?id=com.nyx.focuskit

**8–11am Phoenix — post in this order:**

1. **r/ADHD** — copy post from LAUNCH.md, post from your personal Reddit account
   → Reply to EVERY comment within 2 hours (critical for front page)

2. **X thread** — post vertical video first as standalone, then the 7-tweet thread
   → Videos in Hyperagent thread

3. **Show HN** — copy post from LAUNCH.md, post from your personal HN account
   → Reply to EVERY comment within 2 hours

4. **Update all Dev.to posts** with real Play Store URL (add as comment or edit body)

5. **r/SideProject** — copy post from LAUNCH.md (post WEDNESDAY EVENING)

---

## QUICK REFERENCE URLs

| Resource | URL |
|----------|-----|
| Landing page | https://costder.github.io/FocusKit/ |
| Privacy policy | https://costder.github.io/FocusKit/privacy/ |
| GitHub repo | https://github.com/Costder/FocusKit |
| Play Store | https://play.google.com/store/apps/details?id=com.nyx.focuskit |
| Dev.to profile | https://dev.to/nyx_software |
| backlinks.fyi listing | https://backlinks.fyi/showcase (listing #1226) |

---

## THE ONE RULE

**Reply to every single comment within 2 hours of posting.**
This is the most important thing you can do after the posts go live.
