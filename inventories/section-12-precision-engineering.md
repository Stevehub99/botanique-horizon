# Inventory — Section 12: Precision Engineering

## Source location
- Section class: `video-with-text-sec` (Shopify section ID: `template--19760795549861__video_with_text_ciyLP6`)
- Source HTML: `source/rendered.html` lines 6943–7121
- Source CSS: `source/css/external-00-base.css` lines 8702–8712, 9119–9122, 9417–9422, 9612–9614, 9633–9635, 9646–9648

## Layout structure
Centered column — NOT side-by-side image/text:
1. Heading (h3) centered above
2. Centered video container (max-width 800px)
3. Feature icons row below (flex)

## Source DOM (condensed)
```html
<div class="main-video-div main-vid-contain-template...">
  <div class="page-width">
    <div class="top-header" data-aos="fade-up">
      <h3><strong>Botanique Paris</strong> Precision Engineering</h3>
    </div>
    <div class="video-wrapper" data-aos="fade-up">
      <video playsinline controls preload="metadata" poster="...CDN..." autoplay>
        <source src="...CDN.mp4" type="video/mp4">
        <img src="...CDN...thumbnail">
      </video>
      <div class="video-cover" id="video-cover-...">
        <img src="...CDN poster..." alt="Video Cover">
        <div class="play-button">▶</div>
      </div>
    </div>
    <div class="video-last-icon-text" data-aos="fade-up">
      <div class="icon-block-part"><span>[green-check-SVG]</span><p>Medical-Grade LED Diodes</p></div>
      <div class="icon-block-part"><span>[green-check-SVG]</span><p>Precision-Calibrated Microcurrent</p></div>
      <div class="icon-block-part"><span>[green-check-SVG]</span><p>FDA-Registered Facility</p></div>
    </div>
  </div>
</div>
```

## Source CSS values (extracted)
| Property | Value | Source |
|---|---|---|
| Container padding-top | 50px | inline `main-vid-contain-...` |
| Container padding-bottom | 30px | inline `main-vid-contain-...` |
| Background | color-scheme-1 gradient → white (#FFFFFF or near-white) | source class |
| `.top-header` text-align | center | inline |
| `.top-header` margin-bottom | 20px | inline |
| h3 font-size (desktop) | not explicit in source; ~28px inferred from crop | - |
| h3 font-size (mobile) | 30px | b00:9633–9635 |
| `.video-wrapper` max-width | 800px | inline |
| `.video-wrapper` aspect-ratio | padding-top: 40.5% (desktop) | inline |
| `.video-wrapper` aspect-ratio | padding-top: 50% (mobile ≤767px) | inline |
| video border-radius | 16px | inline |
| video border-radius (mobile ≤768px) | 8px | inline |
| `.video-last-icon-text` display | flex | b00:8703 |
| `.video-last-icon-text` align-items | center | b00:8704 |
| `.video-last-icon-text` padding-top | 25px | b00:8705 |
| `.video-last-icon-text` justify-content | center | b00:8706 |
| `.video-last-icon-text p` margin-left | 10px | b00:8710 |
| `.video-last-icon-text p` margin-right | 15px | b00:8711 |
| `.icon-block-part` display | flex | b00:9120 |
| `.icon-block-part` align-items | center | b00:9121 |
| `.icon-block-part` (mobile) | flex-wrap wrap (container) + width 100% | b00:9417–9422 |
| Icon SVG | circle 14×14 fill #2ED215, checkpath white 0.833px | source HTML |

## Feature icon texts (source → IT localized)
| Source | Italian | Regulatory rule |
|---|---|---|
| Medical-Grade LED Diodes | Diodi LED di grado medico | direct calque (accepted) |
| Precision-Calibrated Microcurrent | Microcorrente calibrata di precisione | direct calque |
| FDA-Registered Facility | Impianto certificato CE | FDA-registered facility → CE per CLAUDE.md |

## Family assessment
- FAMILY-REUSE: bq-image-text (per locked decision in CLAUDE.md)
- Requires schema accretion: `video_centered` layout option + `feature_icon` block type
- Existing image_right/image_left instances unaffected

## Discrepancy log
1. Source has click-to-play JS cover overlay → we use autoplay (locked: bq-image-text video is autoplay; poster cover omitted)
2. Source has `controls` attribute on video → we use autoplay/loop/muted/playsinline (family standard)
3. Background appears white in crop; `color-scheme-1 gradient` in source is effectively white — use #FFFFFF for our section

## Assets
- Video: Shopify CDN upload (deferred to Phase 2 asset pass; placeholder SVG renders for now)
- Poster: same CDN upload (not needed with autoplay)
- Green check SVG: hardcoded (same as trust_item checks in bq-image-text family)
