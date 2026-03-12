# UBA Field BVN Enrollment System

A mobile-first field agent portal for United Bank for Africa (UBA) field agents to perform BVN enrollment, biometric verification, and account creation — built as a static HTML prototype.

> ⚠️ This is a UI prototype. All biometric capture, NIBSS transmission, and account creation flows are simulated.

---

## Features

- **Agent Authentication** — Secure staff ID & password login screen
- **New Customer Enrollment** — 5-step flow: customer info → face capture → fingerprint capture (10 fingers) → NIBSS submission → reference code generation
- **BVN Verification** — 4-step flow: face capture → fingerprint scan → NIBSS live check → result display
- **Pending Applications** — View BVN-ready customers and sync offline records
- **Account Creation** — Post-BVN account setup with account type, deposit, and branch selection
- **Reports & Analytics** — Daily/weekly/monthly enrollment stats with agent summary
- **Offline Sync Simulation** — Progress-based sync animation for offline-captured records

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — DM Sans, DM Mono |
| Icons | Google Material Icons Rounded |
| Hosting | Vercel (static) |

No frameworks. No build tools. No dependencies.

---

## Project Structure

```
uba-bvn-enrollment/
└── index.html       # Entire application — single file
```

---

## Getting Started

### View locally

Just open the file in your browser:

```bash
open index.html
# or double-click the file in your file explorer
```

### Deploy to Vercel

**Option 1 — Vercel CLI**

```bash
npm i -g vercel
vercel deploy
```

**Option 2 — GitHub + Vercel Dashboard**

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework preset: **Other**
4. Click **Deploy**

---

## Screens & Flows

```
Login
  └── Dashboard
        ├── New Enrollment
        │     ├── 1. Customer Information
        │     ├── 2. Face Capture
        │     ├── 3. Fingerprint Capture (10 fingers)
        │     ├── 4. NIBSS Transmission
        │     └── 5. Reference Code
        │
        ├── Verify BVN
        │     ├── 1. Face Capture
        │     ├── 2. Fingerprint Verification
        │     ├── 3. NIBSS Live Check
        │     └── 4. Result + Account Creation
        │
        ├── Pending Applications
        │     ├── BVN-Ready Customers → Account Creation
        │     └── Offline Records → Sync → Account Creation
        │
        └── Reports
              └── Today / This Week / This Month
```

---

## Demo Credentials

| Field | Value |
|-------|-------|
| Staff ID | `UBA-2026-08847` |
| Password | Any value |

---

## Compliance Notes

- UI designed in accordance with **NDPR** (Nigeria Data Protection Regulation) principles
- BVN enrollment flow modelled after **NIBSS** (Nigeria Inter-Bank Settlement System) standards
- All biometric data in this prototype is simulated — no real data is captured or transmitted

---

## Author

Built by a UBA GMAP field systems team.

---

## License

Private — United Bank for Africa internal use only.