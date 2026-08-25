# Coverflow Click and Drag Interaction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the Coverflow carousel distinguish clicks from drags so the centered card opens the video while mouse, touch, and arrow navigation retain the existing 3D animation.

**Architecture:** Keep the current vanilla JavaScript Coverflow engine and CSS untouched visually. Add a small pointer gesture state machine in `main.js`: record the initial point, mark the gesture as dragging only after a distance threshold, and suppress card activation after a real drag. Preserve the existing active-index behavior for lateral cards and the existing settling animation.

**Tech Stack:** Vanilla JavaScript, Pointer Events, requestAnimationFrame, existing CSS 3D transforms.

## Global Constraints

- Preserve the existing Coverflow 3D transforms and animation.
- Preserve mouse drag, touch/pointer drag, and arrow navigation.
- A click on the centered card opens the theater player.
- A click on a lateral card centers it without immediately playing it.
- Do not change responsive layout or the theater player.

---

### Task 1: Separate click gestures from drag gestures

**Files:**
- Modify: `creative-marketing-portfolio-main/js/main.js:534-622`

**Interfaces:**
- Consumes: existing `stage`, `cardEls`, `activeIndex`, `goToCoverflowIndex`, and `settleCoverflow` behavior.
- Produces: card clicks that activate only when the pointer gesture did not cross the drag threshold.

- [ ] **Step 1: Add gesture state fields to `dragRef`**

Store `startX`, `startY`, and `hasDragged` alongside the existing pointer id, position, and velocity. Keep `x` as the horizontal origin used by the current movement calculation.

- [ ] **Step 2: Mark a gesture as dragging only after a threshold**

In `pointermove`, compute horizontal and vertical distance from the initial pointer location. Set `hasDragged` once the distance reaches `6px`; only then update `posRef`, velocity, caption, dots, and painting. This lets a click finish without being treated as a drag.

- [ ] **Step 3: Preserve inertial settling and expose the completed gesture result**

In `endDrag`, copy `hasDragged` and velocity into local values before clearing `dragRef`. Settle only after an actual drag; for a click, leave the current position untouched. Store a one-shot `lastCoverflowGestureWasDrag` flag for the card click listener.

- [ ] **Step 4: Guard card activation after a drag**

In the card click handler, return immediately when `lastCoverflowGestureWasDrag` is true. Otherwise keep the existing behavior: the active card opens the theater player and a lateral card centers first.

- [ ] **Step 5: Run static verification**

Run:

```powershell
rg -n "lastCoverflowGestureWasDrag|hasDragged|pointerdown|pointermove|pointerup|card.addEventListener" creative-marketing-portfolio-main/js/main.js
```

Expected: the gesture flag is initialized, set during pointer handling, read by the card click handler, and no old unconditional drag behavior remains in the modified block.

- [ ] **Step 6: Commit the implementation**

```powershell
git add -- creative-marketing-portfolio-main/js/main.js docs/superpowers/plans/2026-08-24-coverflow-click-drag.md
git commit -m "fix: allow coverflow cards to play on click"
```

### Task 2: Verify the interaction and regression surface

**Files:**
- Inspect: `creative-marketing-portfolio-main/index.html`
- Inspect: `creative-marketing-portfolio-main/js/main.js`
- Inspect: `creative-marketing-portfolio-main/css/styles.css`

**Interfaces:**
- Consumes: the updated pointer gesture handling from Task 1.
- Produces: evidence that playback, lateral centering, arrows, drag, and responsive touch behavior remain wired.

- [ ] **Step 1: Verify all navigation hooks remain present**

Run:

```powershell
rg -n "cfPrevBtn|cfNextBtn|goToCoverflowIndex|launchActiveVideo|openTheaterPlayer|touch-action|@media \(max-width: 768px\)" creative-marketing-portfolio-main/index.html creative-marketing-portfolio-main/js/main.js creative-marketing-portfolio-main/css/styles.css
```

Expected: arrow controls, player launch, index navigation, touch behavior, and mobile rules are still present.

- [ ] **Step 2: Check the working tree and diff**

Run:

```powershell
git diff --check
git status --short
```

Expected: no whitespace errors; only the intended implementation and plan changes are present before the implementation commit.
