# 🎥 SKILL: CINEMA-LUXE VISUAL ENGINE

This is the distilled protocol for high-authority cinematographic implementation, divided into the **Hero Engine** (Identity) and the **Protocol Pillar Engine** (Execution).

---

## 1. ASSET OPTIMIZATION (HANDBRAKE)
*   **Format**: MP4
*   **Summary**: [✅] **Web Optimized** (Mandatory for instant start).
*   **Video**: H.264, **RF 24** (The quality "Sweet Spot").
*   **Audio**: Select **NONE** (Reduces file size by ~30%).
*   **Save As**: Lowercase names only (e.g., `protocol_node_01.mp4`).

---

## 2. COMPONENT ARCHITECTURES

### SECTION A: THE HERO ENGINE (Identity Layer)
*   **Layout**: Full-screen (`h-screen`) or full-width container.
*   **Visual Logic**: Multi-video crossfade (2000ms duration).
*   **CSS Standards**:
   ```css
   .hero-video {
    object-fit: cover;
    brightness: 0.5;
    contrast: 1.1;
    /* No blur for Hero to maintain maximum resolution */
   }
   ```
*   **Z-Index Strategy**: `absolute inset-0`. `z-10` for active, `z-0` for transitioning assets.

### SECTION B: THE PROTOCOL PILLAR ENGINE (Execution Layer)
*   **Layout**: 3-Column horizontal grid.
*   **Ratio**: Fixed **16:9 Aspect Ratio** (`aspect-video`).
*   **Visual Logic**: Focus-on-Hover focus.
*   **CSS Standards (Default State)**:
   ```css
   .pillar-video {
    object-fit: cover;
    transform: scale(1.03); /* Slight zoom to mask edges */
    filter: brightness(0.4) blur(1.5px); /* Deep authority focus */
    transition: all 0.8s ease-out;
   }
   ```
*   **Interaction (Hover)**:
   *   **Video**: `brightness(0.8) blur(0px) scale(1.0)`.
   *   **Content**: Text reveals or accent lines animate (e.g., bottom-border width transition).

---

## 3. GLOBAL TECHNICAL STANDARDS

### Typography Hierarchy (Inter)
*   **Main Headlines (H1/H2)**: 48px - 84px (Font Extrabold, tracking-tighter).
*   **Pillar Titles (H3)**: 24px - 32px (Font Bold, uppercase).
*   **Pillar Body**: 16px - 20px (Font Regular/Normal, opacity 0.5-0.7).

### Parser-Safe Injection
When injecting JSON-LD or script tags in template strings, never write `</script>` literally.
*   **Rule**: Use `'<' + '/script>'`.

### Corner Mask (Watermark Protection)
If source watermarks persist, add this overlay to the specific corner (usually bottom right):
`bg-[radial-gradient(circle_at_bottom_right,_#000000_0%,_transparent_25%)]`

---

## 4. DEPLOYMENT CHECKLIST
1. [ ] Assets optimized via HandBrake (RF 24 + Web Optimized)?
2. [ ] Audio removed from all background files?
3. [ ] Section IDs correctly assigned (e.g., `#protocol`)?
4. [ ] Vertical order verified: Hero -> CtaBridge -> Protocol?
