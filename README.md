# Home Grocery (घरगुती किराणा यादी) — Android App Distribution

Official Android APK distribution repository for Home Grocery (घरगुती किराणा यादी).

## Latest Release: v1.0.0 (Build 5)

- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.0`
- **Internal Version Code:** `5` (Build 5)
- **File Name:** `HomeGrocery-v1.0.0-debug.apk`
- **File Size:** 6,790,001 bytes (~6.48 MB)
- **SHA-256 Checksum:** `1A82D4A2CD0B60CC6066BBEF981CA976BBADA76D0903B5733FF7D7B0947873D7`
- **Release Tag:** `v1.0.0-b5`
- **Direct Download:** [HomeGrocery-v1.0.0-debug.apk](HomeGrocery-v1.0.0-debug.apk)

## What's New in Build 5

1. **Network Connectivity & Zero-Fetch Failure:**
   - Resolved `Failed to fetch` connection issue on physical Android devices.
   - Dual-stack IPv6 socket binding (`HOST=::`) with reverse tunnel support.
   - Robust offline detection and automatic reconnection.

2. **Personal Recovery Code Architecture:**
   - Formatted 16-character recovery codes (`HG-XXXX-XXXX-XXXX`) with SHA-256 server-side storage.
   - End-to-end 2-step PIN reset workflow without phone lockouts.

3. **Responsive UI & Polish:**
   - Full viewport responsive containment across mobile screen heights and widths.
   - Proper soft keyboard management preventing field clipping and overflow.
   - Real-time monthly budget tracking, purchase toggling, and expense calculations.

4. **Devanagari PDF & Native Print Subsystem:**
   - High-fidelity PDF generation with Marathi fonts and grocery expense tables.
   - Decoupled native Android print subsystem saving documents directly to device storage.

## Verification

To verify the integrity of the downloaded APK:

```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.0-debug.apk
# Must output: 1A82D4A2CD0B60CC6066BBEF981CA976BBADA76D0903B5733FF7D7B0947873D7
```
