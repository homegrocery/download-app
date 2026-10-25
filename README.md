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
- **File Size:** 9,378,245 bytes (8.94 MB)
- **SHA-256 Checksum:** `200090E78450AD7B719B0615239FF1B1493EC1900F6879B7DC26BD39A83D81D6`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 7)

1. **Mandatory SHA-256 Integrity Verification Before Installation:**
   - Pre-download metadata validation requires a valid package ID (`com.homegrocery.app`), release version, positive file size, and valid 64-character hexadecimal SHA-256 checksum.
   - APK downloads stream strictly into temporary, untrusted staging storage and are never exposed to installer plugins until binary integrity is proven.
   - Complete exact binary SHA-256 computation over received bytes using native WebCrypto in web/preview and dual-layer cryptographic `MessageDigest` + `PackageManager` inspection in native Android.
   - Immediate rejection on any hash mismatch, truncated file, or corrupt archive: staging file is deleted immediately and installation blocked.

2. **Roman Marathi Typing & Devanagari Transliteration Suggestions:**
   - Type in everyday Roman English letters (`dudha`, `sakhar`, `kanda`, `batata`, `tandul`, `dahi`) and get instant, accurate Marathi Devanagari suggestions (`दूध`, `साखर`, `कांदा`, `बटाटा`, `तांदूळ`, `दही`).
   - Clickable suggestion chips beneath the Marathi field allow easy selection of alternate orthographies and spellings.
   - Marathi item name is now strictly required for all new and edited items, ensuring complete bilingual catalog integrity.
   - Preserves manual edits and corrections without unintended overwrites, with a one-click "पुन्हा सुचवा / Re-suggest" option.
   - Fully offline-capable transliteration engine with grocery lexicon, phonetic rule-based transliterator, and brand protection (e.g., Horlicks, Colgate, Surf Excel, Maggi).

3. **Public Website Checksum & Download Stream Fix:**
   - Repaired public download site (`download-app`) by replacing legacy Build 4 bundled assets with dynamically bundled Build 7 assets.
   - Implemented real-time chunked stream reader (`ReadableStreamDefaultReader`) that provides truthful dynamic byte progress.
   - Dynamically loads `update.json` for authoritative file size and SHA-256 checksum, eliminating hardcoded mismatch false alarms.
   - Native WebCrypto API verification validates exact SHA-256 binary hash before saving.

4. **Build 6 Account Security Hardening & Full Regression:**
   - 5-consecutive failed PIN attempt server-enforced automatic lockout (`lock_type = 'AUTOMATIC'`).
   - Bilingual attempt counter indicator (`Incorrect PIN. Failed attempts: X of 5.` / `चुकीचा पिन. अयशस्वी प्रयत्न: X पैकी ५.`).
   - Zero-enumeration protection for non-existent accounts.
   - Locked account modal with in-app reactivation requests and Owner Admin approval flow.
   - Administrative manual locking with mandatory reason and instant session revocation.

5. **Preserved Core Platform Features:**
   - In-App APK Updater with automatic update checking and direct installer handoff.
   - PostgreSQL primary database with Firebase Cloud Firestore backup synchronization.
   - Marathi A4 PDF receipt generation and printing with Devanagari Unicode support.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build7.apk
# Expected output: 200090E78450AD7B719B0615239FF1B1493EC1900F6879B7DC26BD39A83D81D6
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build7.apk
# Expected output: 200090e78450ad7b719b0615239ff1b1493ec1900f6879b7dc26bd39a83d81d6  HomeGrocery-v1.0.1-build7.apk
```
