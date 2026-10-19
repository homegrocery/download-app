# Home Grocery (घरगुती किराणा यादी) — Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) — a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download:** [HomeGrocery-v1.0.0-build6.apk](./HomeGrocery-v1.0.0-build6.apk)

---

## Latest Release: v1.0.0 (Build 6)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.0`
- **Internal Version Code:** `6` (Build 6)
- **File Name:** `HomeGrocery-v1.0.0-build6.apk`
- **File Size:** 6,812,813 bytes (6.50 MB)
- **SHA-256 Checksum:** `E9B1EA96F7BA8ACFBA2688E87CBA7892A50DB2DE7BD5FECFA352107CC512A036`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in Build 6

1. **Direct Repository Hosting & WebCrypto Verification:**
   - The application APK is hosted directly in this repository and downloadable straight from the official website.
   - Built-in browser-based WebCrypto SHA-256 verification sequence ensures cryptographic integrity before installation.

2. **Full Responsive Containment:**
   - Verified 320px to 1440px layout scaling across compact and large screen viewports.
   - Zero horizontal overflow, strict viewport clipping prevention, and adaptive modal sheets.

3. **Bilingual User Experience (मराठी & English):**
   - Instant language switching across all navigation tabs, item lists, search filters, and modals.

4. **Monthly Budgeting & Smart Expenses:**
   - Real-time expense computation, checkbox completion tallies, and monthly expenditure analysis.

5. **Devanagari PDF & Print Engine:**
   - High-fidelity A4 grocery list generation with native Marathi font rendering and receipt printing.

6. **Self-Service Personal Recovery Code:**
   - 16-character secure recovery key (`HG-XXXX-XXXX-XXXX`) for autonomous PIN resets.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.0-build6.apk
# Expected output: E9B1EA96F7BA8ACFBA2688E87CBA7892A50DB2DE7BD5FECFA352107CC512A036
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.0-build6.apk
# Expected output: e9b1ea96f7ba8acfba2688e87cba7892a50db2de7bd5fecfa352107cc512a036
```
