# Contributing to AI Detection Tools Directory

Thank you for helping keep this directory accurate and up-to-date.
All tool data lives in a single Markdown file — no database, no build step required.

---

## How to add a tool

### Option A — Pull Request (preferred)

1. Fork this repository
2. Open `data/tools.md`
3. Copy the template below and fill it in
4. Commit with the message `feat: add <tool-name>`
5. Open a PR — we review within 48 hours

### Option B — GitHub Issue

Open an issue titled `[Submit] Tool Name` and paste the filled-in template.
A maintainer will add it on your behalf.

### Option C — Website form

Use the **Submit Tool** page on the live site.
Submissions made there are queued and merged into `data/tools.md` by a maintainer.

---

## Tool template

Copy this block verbatim into `data/tools.md` and fill in every field:

```markdown
---
slug: tool-name-here
name: "Tool Name"
emoji: 🤖
tagline: "One-line pitch (max 80 characters)"
description: "Optional longer description (max 200 characters)."
website: https://example.com
accuracy: 95
false_pos: Low
price: Free
signup: false
featured: false
rank: 99
tags: [free, academic]
date_added: 2025-01-01
---
```

---

## Field reference

| Field         | Required | Type    | Notes |
|---------------|----------|---------|-------|
| `slug`        | ✅        | string  | Lowercase, hyphens only. Must be unique. |
| `name`        | ✅        | string  | Display name shown in the UI. |
| `emoji`       | —        | string  | Single emoji; defaults to 🤖 if omitted. |
| `tagline`     | ✅        | string  | Max 80 chars. Shown under the tool name. |
| `description` | —        | string  | Max 200 chars. Used in the About view. |
| `website`     | ✅        | URL     | Full URL including `https://`. |
| `accuracy`    | —        | integer | Detection accuracy in %, 1–100. |
| `false_pos`   | —        | string  | `Very Low` / `Low` / `Medium` / `High` |
| `price`       | ✅        | string  | `Free` / `Freemium` / `Paid` / `Enterprise` |
| `signup`      | —        | boolean | `true` if an account is required; `false` otherwise. |
| `featured`    | —        | boolean | Set to `true` only by maintainers. |
| `rank`        | —        | integer | Lower = higher in default sort. Set by maintainers. |
| `tags`        | ✅        | array   | See valid tags below. At least one required. |
| `date_added`  | —        | date    | `YYYY-MM-DD`. Set automatically on merge if omitted. |

### Valid tags

```
free            — Available on a free tier
freemium        — Free tier + paid upgrade
no-signup       — Works without creating an account
academic        — Designed for or used by educators/students
enterprise      — Targeted at businesses or institutions
multilingual    — Supports languages beyond English
api             — Provides a REST or webhook API
bulk-upload     — Accepts batch document uploads
plagiarism      — Combines AI detection with plagiarism checking
sentence-level  — Highlights individual sentences
browser-extension — Has a browser extension
open-source     — Source code is publicly available
```

---

## Updating an existing tool

Edit the relevant block in `data/tools.md`.
Change only the fields that need updating, and open a PR with the message:
`fix: update <tool-name> — <what changed>`

---

## Removing a tool

Open an issue titled `[Remove] Tool Name` with a reason (e.g. tool is discontinued).
Maintainers handle removals directly.

---

## Code of conduct

- Be factual. If accuracy figures are unverified, omit them or note the source.
- No affiliate links, referral codes, or sponsored placements.
- Tools must be real, publicly accessible products.

---

_Data file: [`data/tools.md`](data/tools.md)_
