# Home Grocery (घरगुती किराणा यादी) - Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) - a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.1-build4.apk](./HomeGrocery-v1.0.1-build4.apk)
- **Direct Update Manifest:** [update.json](./update.json)

---

## Latest Release: v1.0.1 (Build 4)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.1`
- **Internal Version Code:** `11` (Build 4)
- **File Name:** `HomeGrocery-v1.0.1-build4.apk`
- **File Size:** 8,895,187 bytes (8.48 MB)
- **SHA-256 Checksum:** `7443A6B5EFD98E92756390182E3D912DD1C0FFD3BFCAFD19CE4E4D6D2756951E`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 4)

1. **Firebase Firestore Security Rules & Tenancy Isolation:**
   - Strict tenant isolation: user-scoped security rules matching root user document (`users/{userId}`) and all nested subcollections (`{document=**}`).
   - Explicit default deny for all unauthorized collections to prevent any public read/write access.
   - Enhanced `authStateReady()` session persistence in `FirebaseService` to ensure anonymous auth UIDs are preserved across app restarts without session churn.
   - Preserves authoritative Neon PostgreSQL as the primary source of truth, treating Cloud Firestore as secondary cloud backup with clear, independent status reporting.

2. **In-App APK Updater Lifecycle & System Handoff Fix:**
   - Eliminated premature "Update installed successfully" dialog during Android Package Installer handoff.
   - Prevents duplicate installer launches via disabled action states.
   - Added runtime package version detection through native `ApkInstallerPlugin.getInstalledVersion()`.
   - On application resume, checks actual installed `versionCode` against target build: transitions to completed if package was replaced, or returns cleanly to `READY_TO_INSTALL` if installer was cancelled.

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
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build4.apk
# Expected output: 7443A6B5EFD98E92756390182E3D912DD1C0FFD3BFCAFD19CE4E4D6D2756951E
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build4.apk
# Expected output: 7443a6b5efd98e92756390182e3d912dd1c0ffd3bfcafd19ce4e4d6d2756951e
```

---

## Previous Builds Archive

All past stable builds remain accessible for testing and rollback purposes:
- **Build 3 (versionCode 10):** [HomeGrocery-v1.0.1-build3.apk](./HomeGrocery-v1.0.1-build3.apk) (8.43 MB)
- **Build 2 (versionCode 9):** [HomeGrocery-v1.0.1-build2.apk](./HomeGrocery-v1.0.1-build2.apk) (8.48 MB)
- **Build 1 (versionCode 8):** [HomeGrocery-v1.0.1-build1.apk](./HomeGrocery-v1.0.1-build1.apk) (8.96 MB)
- **Build 7 (versionCode 7):** [HomeGrocery-v1.0.0-build7.apk](./HomeGrocery-v1.0.0-build7.apk) (8.58 MB)
- **Build 6 (versionCode 6):** [HomeGrocery-v1.0.0-build6.apk](./HomeGrocery-v1.0.0-build6.apk) (6.50 MB)
