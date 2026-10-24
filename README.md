# Home Grocery (घरगुती किराणा यादी) - Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) - a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.1-build3.apk](./HomeGrocery-v1.0.1-build3.apk)
- **Direct Update Manifest:** [update.json](./update.json)

---

## Latest Release: v1.0.1 (Build 3)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.1`
- **Internal Version Code:** `10` (Build 3)
- **File Name:** `HomeGrocery-v1.0.1-build3.apk`
- **File Size:** 8,834,980 bytes (8.43 MB)
- **SHA-256 Checksum:** `172A816035A8CCFFB547BE7B985C9C283CC597217D8D04E6BE4E4317646EC301`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 3)

1. **Firebase Cloud Backup Architecture & Security Rules:**
   - Strict tenant isolation: user-scoped security rules matching root user document (`users/{userId}`) and all nested subcollections (`{document=**}`).
   - Explicit default deny for all unauthorized collections to prevent any public read/write access.
   - Enhanced `authStateReady()` session persistence in `FirebaseService` to ensure anonymous auth UIDs are preserved across app restarts without session churn.
   - Preserves authoritative Neon PostgreSQL as the primary source of truth, treating Cloud Firestore as secondary cloud backup with clear, independent status reporting.

2. **In-App APK Updater End-to-End Real Device Verification:**
   - Verified live on physical hardware (Vivo 1814, Android 8.1.0).
   - Upgraded seamlessly from Build 2 (`versionCode 9`) to Build 3 (`versionCode 10`) entirely inside the app.
   - Direct streaming download with real-time byte progress (8.43 MB), WebCrypto SHA-256 checksum verification, and native `ApkInstallerPlugin` handoff to Android Package Installer.
   - Confirmed 100% preservation of all grocery lists, items, and settings without re-login or data loss.

3. **Primary Server Independence & Integrity:**
   - Confirmed production API (`https://home-grocery-api.onrender.com/api/health`) is online and secure with zero owner credential or database schema leaks.
   - Guaranteed full decoupling so Firebase backup state never marks primary PostgreSQL offline.

4. **Mobile & Printable Checkbox Separation (Preserved):**
   - Clean digital checklist on mobile devices; crisp, empty square checkboxes on printable A4 PDFs for manual pen checkoff.
   - Optional pricing formatting preserved (genuine `₹0.00` vs unpriced items).

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build3.apk
# Expected output: 172A816035A8CCFFB547BE7B985C9C283CC597217D8D04E6BE4E4317646EC301
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build3.apk
# Expected output: 172a816035a8ccffb547be7b985c9c283cc597217d8d04e6be4e4317646ec301  HomeGrocery-v1.0.1-build3.apk
```

---

## Historical Releases

- **Build 2 (v1.0.1):** [HomeGrocery-v1.0.1-build2.apk](./HomeGrocery-v1.0.1-build2.apk) (8,894,137 bytes, SHA-256: `7F6477CFADFE772DA89C35770337FD4AD0EE92B441F7A4AAFC09BF1C5D2AE244`)
- **Build 1 (v1.0.1):** [HomeGrocery-v1.0.1-build1.apk](./HomeGrocery-v1.0.1-build1.apk) (9,395,829 bytes, SHA-256: `957614D6B9CDB44AFD377CCC6F17038263C11AED286C6F5235D4738421EB4657`)
- **Build 7 (v1.0.0):** [HomeGrocery-v1.0.0-build7.apk](./HomeGrocery-v1.0.0-build7.apk) (8,993,438 bytes, SHA-256: `5C8C8BC51572A464D7AC9A76C8B6B6C94FEC76908A4877ECFC57D51823816C30`)
- **Build 6 (v1.0.0):** [HomeGrocery-v1.0.0-build6.apk](./HomeGrocery-v1.0.0-build6.apk) (6,812,813 bytes, SHA-256: `E9B1EA96F7BA8ACFBA2688E87CBA7892A50DB2DE7BD5FECFA352107CC512A036`)
