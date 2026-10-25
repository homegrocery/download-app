# Home Grocery (घरगुती किराणा यादी) - Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) - a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.1-build6.apk](./HomeGrocery-v1.0.1-build6.apk)
- **Direct Update Manifest:** [update.json](./update.json)

---

## Latest Release: v1.0.1 (Build 6)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.1`
- **Internal Version Code:** `13` (Build 6)
- **File Name:** `HomeGrocery-v1.0.1-build6.apk`
- **File Size:** 8,840,048 bytes (8.43 MB)
- **SHA-256 Checksum:** `d3e93293876b1ceef3953e6f256d431b1dc1d9894c2e5512cdd575dbd7714759`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 6)

1. **Failed Login Attempt Tracking & Real-Time Bilingual Attempt Counter:**
   - Real-time bilingual attempt count indicator on unsuccessful PIN attempts: `Incorrect PIN. Failed attempts: 1 of 5.` / `चुकीचा पिन. अयशस्वी प्रयत्न: १ पैकी ५.`.
   - Comprehensive audit logging of every authentication attempt to append-only `login_attempts` table.
   - Zero account enumeration defense for non-existent mobile numbers.

2. **Automatic 5-Attempt Account Lockout & Reactivation Requests:**
   - Automatic lockout upon 5 consecutive failed attempts (`lock_type = 'AUTOMATIC'`).
   - Dedicated `LockedAccountModal` displaying lock type, lock reason, and bilingual explanation.
   - In-app reactivation request submission with reason and status polling (`POST /api/reactivation-requests`).

3. **Admin ERP Approval & Management:**
   - Dedicated Reactivation Requests module in Admin ERP with Approve & Activate and Reject actions.
   - Administrative manual account locking requires non-empty reason and sets `lock_type = 'ADMINISTRATIVE'`.
   - Instant session revocation and attempt history inspection per account.

4. **Preserved Platform Features:**
   - In-App APK Updater with checksum verification and native package installer handoff.
   - Neon PostgreSQL primary database and Firebase Cloud Firestore secondary sync.
   - Devanagari A4 PDF receipt generation and printing.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build6.apk
# Expected output: D3E93293876B1CEEF3953E6F256D431B1DC1D9894C2E5512CDD575DBD7714759
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build6.apk
# Expected output: d3e93293876b1ceef3953e6f256d431b1dc1d9894c2e5512cdd575dbd7714759  HomeGrocery-v1.0.1-build6.apk
```
