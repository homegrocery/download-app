# Home Grocery (घरगुती किराणा यादी) - Official Public Website & Android App

Official public distribution repository for Home Grocery (घरगुती किराणा यादी) - a modern, bilingual Marathi/English grocery budgeting and inventory management application.

- **Live Public Website:** [https://homegrocery.github.io/download-app/](https://homegrocery.github.io/download-app/)
- **Direct APK Download (Latest):** [HomeGrocery-v1.0.1-build10.apk](./HomeGrocery-v1.0.1-build10.apk)
- **Direct Update Manifest:** [update.json](./update.json)

---

## Latest Release: v1.0.1 (Build 10)

- **Application Name:** Home Grocery (घरगुती किराणा यादी)
- **Package ID:** `com.homegrocery.app`
- **Version Name:** `1.0.1`
- **Internal Version Code:** `17` (Build 10)
- **File Name:** `HomeGrocery-v1.0.1-build10.apk`
- **File Size:** 7,797,519 bytes (7.44 MB)
- **SHA-256 Checksum:** `A96F1012A78D298D1537BCBC4F8E3BD37E2B0866A9A628D026A4748003956CB8`
- **Production Certificate SHA-256:** `244BC047A850D42D67EB6D48C633E52BC9E81EFB5F3CFAFBA991B96E8DF0C000`
- **Signing Scheme:** v1 (JAR), v2 (APK Signature Scheme v2), v3 (APK Signature Scheme v3)
- **Architecture:** Universal (ARM64, ARMv7, x86_64)
- **Target SDK:** Android 14 (API 34)
- **Min SDK:** Android 5.1 (API 22)
- **Release Channel:** STABLE
- **Author & Developer:** Santosh Koli

---

## Key Highlights in v1.0.1 (Build 10)

1. **Official Production RSA-4096 Release Signing:**
   - Compiled with production Android release toolchain and signed with official RSA-4096 keystore certificate (`244BC047A850D42D67EB6D48C633E52BC9E81EFB5F3CFAFBA991B96E8DF0C000`).
   - Compliant with Android v1, v2, and v3 signature requirements for long-term lineage and security.

2. **Offline Database Preservation & Migration Integrity:**
   - Ensures local SQLite databases, customer shopping lists, and categorizations are 100% preserved during updates.
   - Robust offline-first schema compatibility guarantees uninterrupted access when network connectivity is unavailable.

3. **Cryptographic Integrity & Preflight Verification:**
   - Pre-download manifest verification enforces exact 64-character SHA-256 validation before saving to storage.
   - Client streaming verification prevents execution of corrupt, truncated, or tampered APK binaries.

---

## Integrity Verification

To verify the integrity of the downloaded APK:

### PowerShell (Windows):
```powershell
Get-FileHash -Algorithm SHA256 .\HomeGrocery-v1.0.1-build10.apk
# Expected output: A96F1012A78D298D1537BCBC4F8E3BD37E2B0866A9A628D026A4748003956CB8
```

### Linux / macOS:
```bash
sha256sum HomeGrocery-v1.0.1-build10.apk
# Expected output: a96f1012a78d298d1537bcbc4f8e3bd37e2b0866a9a628d026a4748003956cb8  HomeGrocery-v1.0.1-build10.apk
```

---

## Historical Releases

- **Build 9 (v1.0.2, versionCode 16):** [HomeGrocery-v1.0.2-build9.apk](./HomeGrocery-v1.0.2-build9.apk) (8,854,872 bytes, SHA-256: `5027D8B180D4DC0F0CAF8931D8141088C42DECB7E57909C64503759A13B538CD`)
- **Build 8 (v1.0.1, versionCode 15):** [HomeGrocery-v1.0.1-build8.apk](./HomeGrocery-v1.0.1-build8.apk) (9,429,395 bytes)
- **Build 7 (v1.0.1, versionCode 14):** [HomeGrocery-v1.0.1-build7.apk](./HomeGrocery-v1.0.1-build7.apk) (9,378,245 bytes)
- **Build 6 (v1.0.0, versionCode 13):** [HomeGrocery-v1.0.0-build6.apk](./HomeGrocery-v1.0.0-build6.apk) (8,840,048 bytes)
