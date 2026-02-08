# Specification

## Summary
**Goal:** Make the proposal page photo grid fully static by adding the 6 newly uploaded photos to the existing grid layout and removing the local upload/replace UI and related state.

**Planned changes:**
- Add the 6 newly uploaded images as static frontend assets with the exact filenames: IMG-20260208-WA0008-1.jpg, IMG-20260208-WA0010-1.jpg, IMG-20260208-WA0005-5.jpg, IMG-20260208-WA0008-2.jpg, IMG-20260208-WA0010-2.jpg, IMG-20260208-WA0005-6.jpg, and ensure they are included in production builds.
- Update the proposal page grid under the main `/saesha.jpg` image to render exactly 6 smaller tiles (2 columns × 3 rows) using the new static assets, preserving the existing spacing/rounded corners and keeping the main image spanning both columns.
- Remove all local photo upload UI and related code/state from `frontend/src/App.tsx` (file input, add/replace/clear controls, and any now-unused hooks/imports/handlers tied to local uploads).
- Preserve graceful fallback behavior: if any static image fails to load, show a pink-themed placeholder tile without breaking the grid layout (including keeping the existing main-image fallback behavior for `/saesha.jpg`).

**User-visible outcome:** The proposal page shows the same layout and YES/NO flow as before, but the photo grid always displays the 6 provided photos (no upload/replace controls), and missing images degrade to consistent placeholders without layout issues.
