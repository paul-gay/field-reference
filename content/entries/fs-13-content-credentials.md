---
title: "FS 13: Content Credentials"
category: "Fundamentals"
tags: ["Content Credentials", "C2PA", "Authenticity", "Field Snapshots"]
source: "Field Snapshots (October 2026)"
summary: "Proof of where a photo came from, signed inside the camera."
---

> **Your fifteen second intro**
>
> "With AI images everywhere, people ask whether a photo is real. This camera can prove it. When Content Credentials is on, a security chip inside signs every picture. Anyone can check later which camera made it, when, and what was edited after."

| Term | Meaning |
|---|---|
| CAI | Content Authenticity Initiative, founded in 2019 by Adobe, The New York Times and Twitter. Builds free tools and pushes adoption. |
| C2PA | The technical standard: Coalition for Content Provenance and Authenticity, founded in 2021 by Adobe, Arm, BBC, Intel, Microsoft and Truepic. |
| Content Credentials | The consumer name for a signed C2PA record. A nutrition label for an image: who, what device, when, and every edit since. |

## How it works on a Leica
1. **Switch it on.** One menu setting; add your name and copyright if you like. A CR icon appears.
2. **Press the shutter.** A security chip signs the file with a certificate from D-Trust, part of Germany's Federal Printing Office.
3. **Saved as JPG or DNG.** The signature covers the image, camera make and model, and date and time.
4. **Edit as usual.** Lightroom and Photoshop keep the credential and can add edit history.
5. **Anyone can verify** at contentcredentials.org/verify, or via the CR pin on LinkedIn and Google's "About this image."

## Which Leicas have it
| Has it | Note |
|---|---|
| M11-P | The world's first camera with it built in (Oct 2023). |
| M11-D | Switched on through the FOTOS app. |
| M EV1 | Built in. |
| SL3-S | Chip inside from launch; firmware 2.1.0 switched it on. |
| Q3 Monochrom | The first Q with it. |
| SL3-P | Built in. Confirm on Leica's spec sheet. |

**Doesn't have it:** M11 Glossy Black, M11 Monochrom, SL3, Q3, Q3 43. Leica requires a hardware chip, so a firmware update can't add it.

## EXIF vs Content Credentials
| | EXIF | Content Credentials |
|---|---|---|
| Can be edited | By anyone, invisibly | Any change breaks the signature |
| Proves the camera | No | Yes, signed by the chip |
| Edit history | No | Yes, with compliant software |
| Checked by | Nobody | Free public verify site |

**Context, not competition:** Sony and Canon offer it mainly through newsroom programs and licenses. Nikon paused its version in 2025 after a security flaw. Leica's is built in and available to every owner.

**Who cares:** photojournalists, contest entrants and agencies, artists proving authorship, anyone who posts work online.

## If they say
- **"I can put my name in EXIF."** Anyone can change EXIF without a trace. This is signed. Change one pixel and the check fails.
- **"Can my Q3 get it by update?"** No. Leica requires the security chip.

## Honest limits
It doesn't stop copying or screenshots. Many social sites strip it on upload. It proves the capture, not that the scene wasn't staged. Leica makes no warranty for any specific legal use.
