# Home Grocery (घरगुती किराणा यादी) - Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) - a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.1-build2.apk](./HomeGrocery-v1.0.1-build2.apk)
- **Direct Update Manifest:** [update.json](./update.json)

---

## Latest Release: v1.0.1 (Build 2)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.1`
- **Internal Version Code:** `9` (Build 2)
- **File Name:** `HomeGrocery-v1.0.1-build2.apk`
- **File Size:** 8,894,137 bytes (8.48 MB)
- **SHA-256 Checksum:** `7F6477CFADFE772DA89C35770337FD4AD0EE92B441F7A4AAFC09BF1C5D2AE244`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 2)

1. **FIX 1 — In-App APK Updater:**
   - Seamless update checks against remote `https://homegrocery.github.io/download-app/update.json`.
   - Streaming direct byte-level download progress with real cancellation support via `AbortController`.
   - WebCrypto SHA-256 checksum and package verification prior to installation.
   - Built custom native Android Capacitor plugin `ApkInstallerPlugin` with `FileProvider` (`content://`) URI grant and `REQUEST_INSTALL_PACKAGES` permission, cleanly handing verified APKs off to the Android system package installer.
   - *Note for older installations:* Because Build 1 and Build 7 had no native installer intent, existing users on Build 1 or Build 7 must perform a one-time direct manual installation of Build 2. Once Build 2 is installed, all subsequent updates will install directly in-app!

2. **FIX 2 — Firebase Cloud Sync Resiliency:**
   - Root-cause resolution of `7 PERMISSION_DENIED: Missing or insufficient permissions`: configured recursive subcollection security rule `match /users/{userId}/{document=**}`.
   - User root document auto-creation (`users/{userId}`) ensuring Firestore path integrity.
   - Clear dual-sync architecture: authoritative synchronization with Neon PostgreSQL backend via `SyncManager` supplemented by secondary Firestore replication.
   - Detailed user-facing sync feedback distinguishing between cloud storage, local device state, and network connectivity.

3. **FIX 3 — App Server Status & Connectivity:**
   - Hardened and sanitized production `/api/health` endpoint on Render: removed sensitive database schema and owner credentials leakage, keeping lightweight `<5ms` `SELECT 1` ping.
   - Corrected web/PWA/GitHub Pages URL resolution: fixed `StorageService.getServerUrl()` which previously defaulted to relative empty paths on non-native environments, causing false "Server Offline" badges.
   - Render cold-start resilience: added intelligent 40-second timeout and retry logic with visual "Checking Server..." pulse instead of premature offline warnings.

4. **Mobile & Printable Checkbox Separation (Build 1 Feature Preserved):**
   - Clean digital checklist on mobile devices; crisp, empty square checkboxes on printable A4 PDFs for manual pen checkoff.
   - Perfect formatting for zero-priced items (`₹0.00`) and unpriced grocery items.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build2.apk
# Expected output: 7F6477CFADFE772DA89C35770337FD4AD0EE92B441F7A4AAFC09BF1C5D2AE244
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build2.apk
# Expected output: 7f6477cfadfe772da89c35770337fd4ad0ee92b441f7a4aafc09bf1c5d2ae244  HomeGrocery-v1.0.1-build2.apk
```

---

## Historical Releases

- **Build 1 (v1.0.1):** [HomeGrocery-v1.0.1-build1.apk](./HomeGrocery-v1.0.1-build1.apk) (9,395,829 bytes, SHA-256: `957614D6B9CDB44AFD377CCC6F17038263C11AED286C6F5235D4738421EB4657`)
- **Build 7 (v1.0.0):** [HomeGrocery-v1.0.0-build7.apk](./HomeGrocery-v1.0.0-build7.apk) (8,993,438 bytes, SHA-256: `5C8C8BC51572A464D7AC9A76C8B6B6C94FEC76908A4877ECFC57D51823816C30`)
- **Build 6 (v1.0.0):** [HomeGrocery-v1.0.0-build6.apk](./HomeGrocery-v1.0.0-build6.apk) (6,812,813 bytes, SHA-256: `E9B1EA96F7BA8ACFBA2688E87CBA7892A50DB2DE7BD5FECFA352107CC512A036`)
