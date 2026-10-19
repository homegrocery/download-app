# Home Grocery (घरगुती किराणा यादी) — Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) — a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.0-build7.apk](./HomeGrocery-v1.0.0-build7.apk)

---

## Latest Release: v1.0.0 (Build 7)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.0`
- **Internal Version Code:** `7` (Build 7)
- **File Name:** `HomeGrocery-v1.0.0-build7.apk`
- **File Size:** 8,993,438 bytes (8.58 MB)
- **SHA-256 Checksum:** `5C8C8BC51572A464D7AC9A76C8B6B6C94FEC76908A4877ECFC57D51823816C30`
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Author & Developer:** Santosh Koli

---

## Key Highlights in Build 7

1. **Native Splash Screen Overhaul:**
   - Default Capacitor launch logo removed completely.
   - Genuine Home Grocery midnight navy `#172554` branding and official logo load instantly on cold start.
   - Android 12+ Splash Screen API integrated with zero white screen or duplicate splash transition.

2. **Printable Physical Checkboxes:**
   - Dedicated 4.5 mm square checkbox added to the far-left column of every grocery item in all PDF exports and printouts.
   - Clean, unfilled, and unticked on paper regardless of digital completion state in the app for pen checkoffs at the market.

3. **Truly Optional Item Prices:**
   - Users can create and edit grocery items without entering unit prices or total costs.
   - Clean dash (`—`) displayed for unpriced items; explicitly typed zero (`₹0.00`) is preserved.

4. **Dynamic Price Column Hiding in PDF / Print:**
   - If no items have prices, Rate and Total columns are completely omitted, reclaiming width for item names, categories, and checkboxes.
   - If some items have prices, unpriced items display blank cells and financial summaries note unpriced items.

5. **Direct Repository Hosting & WebCrypto Verification:**
   - The application APK is hosted directly in this repository and downloadable straight from the official website.
   - Built-in browser-based WebCrypto SHA-256 verification sequence ensures cryptographic integrity before installation.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.0-build7.apk
# Expected output: 5C8C8BC51572A464D7AC9A76C8B6B6C94FEC76908A4877ECFC57D51823816C30
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.0-build7.apk
# Expected output: 5c8c8bc51572a464d7ac9a76c8b6b6c94fec76908a4877ecfc57d51823816c30  HomeGrocery-v1.0.0-build7.apk
```

---

## Historical Releases

- **Build 6 (v1.0.0):** [HomeGrocery-v1.0.0-build6.apk](./HomeGrocery-v1.0.0-build6.apk) (6,812,813 bytes, SHA-256: `E9B1EA96F7BA8ACFBA2688E87CBA7892A50DB2DE7BD5FECFA352107CC512A036`)
