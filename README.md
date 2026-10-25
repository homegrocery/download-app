# Home Grocery (घरगुती किराणा यादी) - Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) - a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.1-build7.apk](./HomeGrocery-v1.0.1-build7.apk)
- **Direct Update Manifest:** [update.json](./update.json)

---

## Latest Release: v1.0.1 (Build 7)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.1`
- **Internal Version Code:** `14` (Build 7)
- **File Name:** `HomeGrocery-v1.0.1-build7.apk`
- **File Size:** 9,375,768 bytes (8.94 MB)
- **SHA-256 Checksum:** `9DB407B3D3EB258C0B90FDBAE3F9D6190247E377988ED75177E1540CD780FA21`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 7)

1. **Roman Marathi Typing & Devanagari Transliteration Suggestions:**
   - Type in everyday Roman English letters (`dudha`, `sakhar`, `kanda`, `batata`, `tandul`, `dahi`) and get instant, accurate Marathi Devanagari suggestions (`दूध`, `साखर`, `कांदा`, `बटाटा`, `तांदूळ`, `दही`).
   - Clickable suggestion chips beneath the Marathi field allow easy selection of alternate orthographies and spellings.
   - Marathi item name is now strictly required for all new and edited items, ensuring complete bilingual catalog integrity.
   - Preserves manual edits and corrections without unintended overwrites, with a one-click "पुन्हा सुचवा / Re-suggest" option.
   - Fully offline-capable transliteration engine with grocery lexicon, phonetic rule-based transliterator, and brand protection (e.g., Horlicks, Colgate, Surf Excel, Maggi).

2. **Public Website Checksum & Download Stream Fix:**
   - Repaired public download site (`download-app`) by replacing legacy Build 4 bundled assets with dynamically bundled Build 7 assets.
   - Implemented real-time chunked stream reader (`ReadableStreamDefaultReader`) that provides truthful dynamic byte progress.
   - Dynamically loads `update.json` for authoritative file size and SHA-256 checksum, eliminating hardcoded mismatch false alarms.
   - Native WebCrypto API verification validates exact SHA-256 binary hash before saving.

3. **Build 6 Account Security Hardening & Full Regression:**
   - 5-consecutive failed PIN attempt server-enforced automatic lockout (`lock_type = 'AUTOMATIC'`).
   - Bilingual attempt counter indicator (`Incorrect PIN. Failed attempts: X of 5.` / `चुकीचा पिन. अयशस्वी प्रयत्न: X पैकी ५.`).
   - Zero-enumeration protection for non-existent accounts.
   - Locked account modal with in-app reactivation requests and Owner Admin approval flow.
   - Administrative manual locking with mandatory reason and instant session revocation.

4. **Preserved Core Platform Features:**
   - In-App APK Updater with automatic update checking and direct installer handoff.
   - PostgreSQL primary database with Firebase Cloud Firestore backup synchronization.
   - Marathi A4 PDF receipt generation and printing with Devanagari Unicode support.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build7.apk
# Expected output: 9DB407B3D3EB258C0B90FDBAE3F9D6190247E377988ED75177E1540CD780FA21
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build7.apk
# Expected output: 9db407b3d3eb258c0b90fdbae3f9d6190247e377988ed75177e1540cd780fa21  HomeGrocery-v1.0.1-build7.apk
```
