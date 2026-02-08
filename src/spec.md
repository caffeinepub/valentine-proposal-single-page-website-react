# Specification

## Summary
**Goal:** Build a single-page Valentine proposal experience in React that matches the provided HTML/CSS/JS layout, copy, and button interactions.

**Planned changes:**
- Create a full-viewport warm pink/red gradient background with a centered white rounded card, soft shadow, and consistent modern typography using Tailwind styling conventions.
- Render the card content: top image area, emoji row “🤗 🌸 💕”, heading “Hey Saesha 💖”, proposal paragraph ending with “Will you be my Valentine? 💘”, and two buttons labeled exactly “YES 💕” (pink primary) and “NO 🙈” (gray).
- Implement the “NO” interaction: on hover or click, move the NO button to a random nearby position and cycle the main text area through the provided funnyLines, including the embedded GIF from https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif.
- Implement the “YES” success state: clicking YES replaces the entire card content with the provided success emojis, heading, and message ending with “Forever yours, Varun ❤️”, removing both buttons.
- Add a static frontend asset named exactly `saesha.jpg` and display it at the top of the card with full width and rounded corners; if it fails to load, show a graceful placeholder without breaking layout.

**User-visible outcome:** Visitors see a romantic proposal card with YES/NO choices; NO playfully dodges while updating messages and showing the GIF, and YES switches to a celebratory success message.
