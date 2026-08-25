# Mobile Coverflow and New Videos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add four new Drive videos at the beginning of the portfolio and make the carousel/player fit and center correctly on phones.

**Architecture:** Keep the existing vanilla JavaScript data-driven carousel and Google Drive iframe player. Extend `portfolioVideos`, then use mobile-only CSS to give the track an explicit centered frame and constrain the theater modal against the dynamic viewport height.

**Tech Stack:** Vanilla JavaScript, CSS media queries, CSS `aspect-ratio`, Google Drive preview iframe.

## Global Constraints

- Add the four new videos before existing records.
- Preserve existing IDs, filters, Coverflow 3D animation, arrows, and drag behavior.
- On mobile, center the active card and prevent horizontal overflow.
- On mobile, keep vertical and horizontal videos within the available viewport.
- Do not intentionally change desktop layout.

---

### Task 1: Add the new Drive records

**Files:**
- Modify: `creative-marketing-portfolio-main/js/main.js` at the beginning of `portfolioVideos`

- [ ] Insert records for these IDs before `gamexzonee`, using existing object fields and categories:

```text
carlotas-ad       1YPM_cn_Jn0yUEHYDiuWQY7r2nREqRHLC  commercial  vertical
4bm-m18-v1        1C-vcA1AJOVFu53zP4EYj-1dBMjsMbAkx      reels  vertical
4bm-m17-v3        1JCqlmZRhi7KVmcvUsqq373TJoaiXK58w       reels  vertical
4bm-m8-v2         158uco_UegB71AAmeGHeF4nA669fL144i       reels  vertical
```

Use localized titles/tags/subtitles and metadata consistent with the existing array. Keep the known Drive IDs exact. M8 may retain the existing poster fallback because its Drive thumbnail is black.

- [ ] Verify with:

```powershell
rg -n "carlotas-ad|4bm-m18-v1|4bm-m17-v3|4bm-m8-v2|gamexzonee" creative-marketing-portfolio-main/js/main.js
```

Expected: the four new IDs appear before `gamexzonee`.

### Task 2: Center the Coverflow on mobile

**Files:**
- Modify: `creative-marketing-portfolio-main/css/styles.css` inside mobile media queries

- [ ] Under `@media (max-width: 768px)`, make `.coverflow-stage` use `overflow: hidden` and make `.coverflow-track` an explicit frame with `position: absolute; inset: 0; width: 100%; height: 100%;`.
- [ ] Set mobile card width to `min(250px, calc(100vw - 5rem))`; preserve the existing card height and 3D transforms.
- [ ] Under `@media (max-width: 480px)`, reduce card width to `min(220px, calc(100vw - 4.5rem))` while preserving centered `margin-left`/`margin-top` calculations.
- [ ] Keep these changes scoped to mobile so desktop Coverflow behavior remains unchanged.

### Task 3: Fit the theater player to the mobile viewport

**Files:**
- Modify: `creative-marketing-portfolio-main/css/styles.css` inside mobile media queries

- [ ] Limit `.theater-box` to `max-height: calc(100dvh - 1rem)`.
- [ ] For vertical frames, use height-first sizing: `height: min(64vh, calc(100dvh - 10rem)); width: auto; max-width: 100%; max-height: none; aspect-ratio: 9 / 16`.
- [ ] For horizontal frames, keep `width: 100%`, `aspect-ratio: 16 / 9`, and set `max-height: calc(100dvh - 10rem)`.
- [ ] Let the top bar wrap and reduce padding at `max-width: 480px` so the title, Drive link, and close button remain usable.

### Task 4: Verify and publish

**Files:**
- Modify: `creative-marketing-portfolio-main/js/main.js`
- Modify: `creative-marketing-portfolio-main/css/styles.css`
- Add: `docs/superpowers/plans/2026-08-24-mobile-coverflow-new-videos.md`

- [ ] Run `node --check creative-marketing-portfolio-main/js/main.js`.
- [ ] Run `git diff --check` and inspect `git diff --stat`.
- [ ] Commit with `feat: add new portfolio videos and improve mobile player`.
- [ ] Push to `origin main` and verify `git ls-remote origin refs/heads/main` matches the new commit.
