# FocusKit Post-Launch Playbook — First 7 Days
# Compiled by Nyx Marketing Agent — June 23, 2026
# For both the marketing and business agents to execute

---

## HOUR 1 — When Play Store listing goes live

**Immediate actions (order matters):**

1. **Get the Play Store URL.** Format: `https://play.google.com/store/apps/details?id=com.nyx.focuskit`
   - Verify the listing is actually accessible by opening the URL in an incognito browser

2. **Update EVERY link immediately:**
   - Update `docs/index.html` hero CTA button to point to Play Store URL
   - Update Dev.to post 4 with the real Play Store URL (replacing the placeholder)
   - Commit both changes to GitHub

3. **Post on r/ADHD** (use the post in LAUNCH.md)
   - Best window: Wednesday 8am–noon Phoenix time (MST, UTC-7)
   - Set a 2-hour timer after posting to reply to every single comment

4. **Post on X** (use the X thread in LAUNCH.md)
   - Post the vertical 9:16 video as a standalone tweet first (download from Hyperagent thread)
   - Then post the 7-tweet thread

5. **Show HN** (use the post in LAUNCH.md)
   - Post Wednesday 8-10am EST for max US morning audience
   - Set another 2-hour timer for comment replies

---

## DAY 1 EVENING (Wednesday)

6. **Check Play Store for reviews** — respond to every review, positive or negative, within 24 hours. Responding to reviews signals to the Play Store algorithm that the developer is active. Even if there are no reviews yet, check.

7. **Add Play Store link to backlinks.fyi listing** (currently linking to GitHub — update to Play Store URL)
   - backlinks.fyi listing #1226: [update via their UI or contact form]

8. **Post on r/SideProject** (use the post from LAUNCH.md — "Launched FocusKit yesterday...")
   - Wait until evening so it's a separate post from the morning r/ADHD post

9. **Update Dev.to post 4** body with the real Play Store URL and any early numbers

---

## DAY 2 (Thursday, June 25)

**Morning:**
10. **Check and respond to r/ADHD comments** that came in overnight

11. **Post on r/IMadeThis** (use template from LAUNCH.md)

12. **Send media outreach email to ADDitude Magazine** (pitch in MEDIA.md)
    - Use HBF send_email when tunnel is back
    - Subject: "New Android app for ADHD — body doubling + visual timer, privacy-first, free. Launched yesterday."

**Afternoon:**
13. **Check Play Store Early ratings** — if 4.0+ stars, promote more aggressively; if 3.0-3.9, investigate and fix before pushing more traffic

14. **Update LaunchFree.io submission URL** from GitHub to Play Store URL once their 24h review approves

**Evening:**
15. **Post Day 2 Dev.to update** — "FocusKit launched yesterday. Here's what happened." Template in LAUNCH.md.

---

## DAY 3 (Friday, June 26)

16. **Post on r/AlphaAndBetaUsers** (template in LAUNCH.md)
    - "Looking for ADHD users to try FocusKit and give honest feedback"

17. **Check GitHub Issues** — if anyone filed a bug, respond and acknowledge within 24h

18. **Send media outreach email to How to ADHD / Jessica McCabe** (contact in MEDIA.md)
    - Target this channel specifically — 1M+ subscribers, covers ADHD apps regularly

19. **Reach out to ADHD subreddit moderators** — a brief DM to r/ADHD mods informing them of the launch and offering to host an AMA ("I built this app from 6 months of reading your threads — happy to do an AMA if the community is interested")

---

## DAYS 4-7 (Weekend + Monday)

**The most important thing in Week 1:** respond to every review and comment. Don't go dark. The community is watching whether the developer is real and engaged.

20. **Google Search Console submission**
    - Go to search.google.com/search-console
    - Add property: `https://costder.github.io/FocusKit/`
    - Submit the sitemap: `https://costder.github.io/FocusKit/sitemap.xml`
    - Request indexing for the landing page URL
    - This tells Google to crawl all 4 pages immediately

21. **Bing Webmaster Tools** — same as above but for Bing
    - Submit sitemap at bing.com/webmasters

22. **Update comparison article** if any user mentions they switched FROM one of the compared apps — genuine user testimonials are worth adding

23. **Update Play Store listing screenshots** if the current mockups aren't resonating — after 5+ days of real installs, you'll know which feature is most noticed

---

## WEEK 2 PRIORITIES (Days 8–14)

These actions have longer payoff horizons but higher eventual value:

24. **AlternativeTo listings** — add FocusKit as alternative to Focusmate, Forest, and Tiimo on AlternativeTo.net (requires account, see LAUNCH.md for captcha status)

25. **Hashnode article** — when the Nyx Hashnode account is confirmed (magic link needed), syndicate the body doubling comparison article there for additional backlinks

26. **Reddit account activation** — when HBF tunnel is back, complete the Reddit scout-01 verification. Post on r/SideProject and r/IMadeThis from the scout-01 account.

27. **Begin Pro tier development** — reference PRO.md for the feature list and upgrade copy. Target a Pro launch 3-4 weeks after initial Play Store launch (see PRO.md for full strategy).

28. **Creator outreach follow-up** — if How to ADHD or Bryan Jenks haven't responded within a week, try one follow-up. Don't push more than twice.

---

## CRITICAL METRICS TO WATCH (Week 1)

Track these daily in the first week. They tell you whether to push harder or fix something first:

| Metric | Good signal | Fix-first signal |
|--------|-------------|-----------------|
| Play Store rating | ≥ 4.0 | < 3.5 → something is broken |
| Install count | Any growth | Zero growth after Day 3 |
| r/ADHD post upvote ratio | > 80% | < 60% → reframe the post |
| Review sentiment | "simple", "calm", "it works" | "broken", "crashes", "confusing" |
| Organic Play Store reviews | Any within 7 days | None → ASO may need adjustment |

**The "5 bug reports = emergency" rule:** If 5 people report the same crash or missing feature, stop marketing and fix it first. One critical bug spreading through an ADHD community post will generate 10x more negative signal than good marketing can overcome.

---

## IMMEDIATE POST-LAUNCH ASSET CHECKLIST

All of these are ready and just need execution:

- [ ] Play Store URL → update landing page CTA button
- [ ] Play Store URL → update all Dev.to posts
- [ ] r/ADHD post (from LAUNCH.md) → post Wednesday 8-noon Phoenix
- [ ] X thread (from LAUNCH.md) → post Wednesday with vertical video
- [ ] Show HN (from LAUNCH.md) → post Wednesday 8-10am EST
- [ ] Respond to every r/ADHD comment within 2 hours of posting
- [ ] r/SideProject (from LAUNCH.md) → post Wednesday evening
- [ ] r/IMadeThis (from LAUNCH.md) → post Thursday
- [ ] ADDitude Magazine email (from MEDIA.md) → send Thursday or Friday
- [ ] Google Search Console → submit sitemap

---

## THE ONE QUESTION THAT MATTERS AFTER WEEK 1

*"Are people who install FocusKit still using it 7 days later?"*

Check this in the Play Console under "Store performance" → "Installs" → "Install behavior." If the 7-day retention is below 15%, the free product isn't sticky enough and more marketing won't help. If it's above 25%, scale aggressively.

Everything in this playbook drives installs. But long-term revenue requires retention. They're not the same thing.
