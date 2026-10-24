# Home Grocery (घरगुती किराणा यादी) — Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) — a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.1-build1.apk](./HomeGrocery-v1.0.1-build1.apk)

---

## Latest Release: v1.0.1 (Build 1)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.1`
- **Internal Version Code:** `8` (Build 1)
- **File Name:** `HomeGrocery-v1.0.1-build1.apk`
- **File Size:** 9,395,829 bytes (8.96 MB)
- **SHA-256 Checksum:** `957614D6B9CDB44AFD377CCC6F17038263C11AED286C6F5235D4738421EB4657`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 1)

1. **Firebase Cloud Sync Hardening:**
   - Anonymous authentication token lifecycle management with automatic refresh and silent re-authentication on expiration.
   - Deployed strict Firestore security rules isolating each user's grocery documents (`/users/{userId}/**`) under granular UID verification.
   - Authoritative fallback to Neon PostgreSQL backend for seamless offline/online dual synchronization.

2. **Mobile and Printable Checkbox Separation:**
   - Mobile UI preserves digital interactive tap states (`Circle` / `CheckCircle2`) without physical checkbox confusion.
   - A4 PDF and print export engine draws dedicated 4.5 mm (16px) empty square checkboxes on the far-left column.
   - Every printed checkbox remains completely unfilled regardless of digital in-app purchase state, ready for manual pen checkoffs.

3. **Refined Currency & Price Handling:**
   - Explicit zero-priced items format cleanly as `₹0.00`.
   - Blank unpriced items display cleanly without NaN/undefined artifacts.
   - Automatic dynamic column hiding in PDF exports when items are unpriced.

4. **Integrity & Security:**
   - Universal Android binary verified against Android 14 requirements.
   - Instant WebCrypto SHA-256 checksum verification on the official download portal.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build1.apk
# Expected output: 957614D6B9CDB44AFD377CCC6F17038263C11AED286C6F5235D4738421EB4657
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build1.apk
# Expected output: 957614d6b9cdb44afd377ccc6f17038263c11aed286c6f5235d4738421eb4657  HomeGrocery-v1.0.1-build1.apk
```

---

## Historical Releases

- **Build 7 (v1.0.0):** [HomeGrocery-v1.0.0-build7.apk](./HomeGrocery-v1.0.0-build7.apk) (8,993,438 bytes, SHA-256: `5C8C8BC51572A464D7AC9A76C8B6B6C94FEC76908A4877ECFC57D51823816C30`)
- **Build 6 (v1.0.0):** [HomeGrocery-v1.0.0-build6.apk](./HomeGrocery-v1.0.0-build6.apk) (6,812,813 bytes, SHA-256: `E9B1EA96F7BA8ACFBA2688E87CBA7892A50DB2DE7BD5FECFA352107CC512A036`)
