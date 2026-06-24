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

---

## PREREQUISITES (check these BEFORE Wednesday morning)

**Expo account** — required for EAS build. Create free at expo.dev if you don't have one.
- The `eas login` command will fail without it
- Create account: https://expo.dev/signup

**Google Play developer account** — $25 one-time fee, ID verification 1-2 days.
- If created Saturday/Sunday, verification should be done by Wednesday
- If not verified yet: check email for verification notice from Google

**Keystore** — EAS generates and stores this automatically on first production build.
- Don't download or touch it manually — let EAS manage it
- Warning: if you lose this keystore, you can't update the app on Play Store ever

---

## IF GOOGLE PLAY REJECTS THE APP

**Don't panic. Most first-time rejections are minor and fast to fix.**

Common rejection reasons and solutions:

| Rejection reason | Fix |
|-----------------|-----|
| Privacy policy not accessible | Enable GitHub Pages so the URL loads |
| Icon or screenshot spec issue | Re-export at correct dimensions, resubmit |
| Misleading description | Remove any superlatives ("best", "only") — our copy avoids these |
| Data safety form incomplete | Fill in all sections, confirm all "No" answers |
| App crashes during review | Fix the crash and rebuild |

**Typical timeline after fixing:**
- Resubmit the correction → usually reviewed within 1-3 hours
- Don't resubmit the same app without fixing the reason — it delays further

**If rejected for a reason not listed above:**
→ Read the rejection email carefully — Google always tells you exactly what to fix
→ Check the Play Console "Policy status" page for details

**Delay plan if not approved by 11am Phoenix:**
→ Proceed with r/ADHD and X posts WITHOUT the Play Store link
→ Say "available on Google Play by end of day — link coming"
→ Add the Play Store link as a comment/edit when it goes live
→ Don't wait for Play Store to post on r/ADHD — the window is 9am-noon EST


---

## SHOW HN — post when Play Store is live (~8-10am EST Wednesday is ideal)

**Two account options:**

**Option A — nyx_software HN (agent account, 0 karma):**
→ URL: news.ycombinator.com
→ Username: nyx_software
→ Password: FocusKit2026!Nyx#HN
→ Use if you want to keep it fully in the agent identity

**Option B — Your personal HN account (recommended):**
→ Higher established karma = better front page traction
→ Use this for maximum impact if you have an established account

**To post:**
1. Log in → click "submit" in top nav
2. Title: I built an ADHD focus app based on r/ADHD feedback, launching today
3. URL: https://play.google.com/store/apps/details?id=com.nyx.focuskit
4. Text body: copy from LAUNCH.md → SHOW HN POST BODY section
5. Submit
6. Immediately post the first comment (from LAUNCH.md → FIRST COMMENT section)
7. Reply to every comment within 2 hours

**Show HN timing note:** Posting at 8-10am EST Wednesday (when US HN readers are active) gives the best chance of reaching the front page. If Play Store isn't live by 8am EST, use the GitHub URL instead and note "Play Store link in comments."
