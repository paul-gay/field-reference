---
title: "Reading the histogram"
category: "Fundamentals"
tags: ["Histogram", "Clipping", "Exposure", "Exposure tools"]
source: "Exposure tools guide"
summary: "A graph of every tone in the picture, from black on the left to white on the right. It tells you objectively whether detail is being lost, which the screen can't."
---

## What it is
The histogram is a graph of brightness. The **left edge is pure black**, the **right edge is pure white**, and everything in between is the range of tones. The **height** at any point shows how many pixels have that brightness.

> **The one rule**
>
> There's no "correct" histogram shape. A snowy scene should lean right and a night scene should lean left. What matters is whether data is **cut off at either edge**, because that's detail you've lost.

## Why trust it over the screen
Screens lie. Outdoors in bright sun, a correct photo looks too dark; in a dim room at night, a dark photo looks fine. The histogram doesn't change with screen brightness.

## Common shapes and what they mean
| Shape | What it means | What to do |
|---|---|---|
| **Mountain in the middle, gaps at both ends** | An average scene, well exposed. | Nothing. |
| **Piled against the right edge** | Highlights clipped: whites have no detail. | Reduce exposure (− compensation), unless it's only a light source or the sun. |
| **Piled against the left edge** | Shadows clipped: blacks have no detail. | Increase exposure, or accept it if the shadows aren't important. |
| **Touching both edges** | The scene has more contrast than the sensor can hold. | Decide which end matters, add light (fill flash, reflector), or bracket. |
| **Bunched on the left, empty right** | Underexposed, or a genuinely dark scene. | Brighten, unless it's a deliberate low key image. |
| **Bunched on the right, empty left** | Overexposed, or a genuinely bright scene. | Darken, unless it's a deliberate high key image. |
| **Narrow lump in the middle** | Low contrast: fog, haze, flat light. | Fine as is; add contrast in editing if you want punch. |

## Luminance vs RGB histograms
- **Luminance (white) histogram:** overall brightness. Good for quick checks.
- **RGB histogram:** separate red, green and blue graphs. One channel can clip while the overall graph looks fine, like a red flower or a blue sky losing detail in just one color. Check RGB for saturated subjects.

## Live vs review
- **Live histogram:** shown in the EVF or on the screen before you shoot (Q3, SL3 family, M EV1, and M cameras in live view).
- **Review histogram:** shown after the shot in playback. On a rangefinder M, this is how you check exposure.

## An honest caveat
Camera histograms are usually based on the processed preview, not the raw file. A raw file often holds a little more highlight detail than the histogram suggests. Treat a slight touch on the right edge as a warning, not a disaster.

> **Check on the camera**
>
> Display options and names vary by model. Look in each Leica's display settings for the histogram and clipping options.
