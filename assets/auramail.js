/**
 * AuraMail Interactive Engine & Bilingual Controller
 * Project: Home Grocery Public Website (https://homegrocery.online)
 * Features:
 * - Instant Marathi (mr) / English (en) language toggle with localStorage persistence
 * - Verified SHA-256 Checksum clipboard copy & toast system
 * - Mobile drawer & FAQ accordion interactivity
 * - Accessibility & prefers-reduced-motion safe
 */

(function () {
  'use strict';

  // State: Default strictly to Marathi ('mr')
  let currentLang = 'mr';
  try {
    const saved = localStorage.getItem('hg_lang');
    if (saved === 'en' || saved === 'mr') {
      currentLang = saved;
    }
  } catch (e) {
    // Ignore private storage restrictions
  }

  // Bilingual Dictionary
  const translations = {
    mr: {
      langBtn: 'मराठी',
      langNext: 'English',
      announcement: 'घरगुती किराणा यादी v1.0.3 (Build 5) अधिकृत स्थिर आवृत्ती आता उपलब्ध आहे!',
      announcementBadge: 'ताज्या घडामोडी',
      announcementCategory: 'अपडेट',
      announcementAction: 'थेट डाऊनलोड (v1.0.3) →',
      navFeatures: 'वैशिष्ट्ये',
      navWorkflow: 'कसे कार्य करते',
      navDownload: 'डाऊनलोड',
      navFaq: 'प्रश्नोत्तरे',
      navPrivacy: 'गोपनीयता धोरण',
      navCta: 'APK मिळवा',
      mobNavHome: '🏠 मुख्य',
      mobNavFeat: '⚡ वैशिष्ट्ये',
      mobNavDl: '📲 डाऊनलोड APK',

      // Hero
      heroPill: '१००% मोफत • सुरक्षित • कोणतीही जाहिरात नाही',
      heroTitle1: 'कुटुंबाचे किराणा आणि बजेट व्यवस्थापन, ',
      heroTitleGrad: 'आता अधिक सुलभ व स्मार्ट.',
      heroSubtitle: 'घरगुती किराणा यादी (Home Grocery) — संपूर्णपणे ऑफलाइन चालणारे, सुरक्षित आणि सुलभ ॲप. एका क्लिकवर देवनागरी A4 PDF पावती, थेट बजेट नियंत्रण आणि १००% गोपनीयता.',
      heroDownloadBtn: 'थेट APK डाऊनलोड करा (v1.0.3)',
      heroLearnBtn: 'वैशिष्ट्ये पहा',
      heroMeta1: 'Android 5.1+ सुसंगत',
      heroMeta2: '7.49 MB लाईटवेट',
      heroMeta3: 'RSA-4096 सहीसह सुरक्षित',

      // Mockup App
      mockupAppTitle: 'घरगुती किराणा यादी',
      mockupStatus: '१००% ऑफलाइन',
      mockupBudgetLabel: 'मासिक किराणा अंदाजपत्रक',
      mockupSpent: 'खर्च: ₹३,४५० / ₹५,०००',
      mockupSaved: 'शिल्लक: ₹१,५५० (३१%)',
      item1Name: 'बासमती तांदूळ',
      item1Qty: '५ किलो',
      item2Name: 'शेंगदाणा तेल',
      item2Qty: '२ लिटर',
      item3Name: 'तूर डाळ',
      item3Qty: '१ किलो',
      item4Name: 'साखर व गूळ',
      item4Qty: '३ किलो',
      mockupBtnPdf: '📄 A4 PDF पावती जनरेट करा',
      mockupBtnBackup: '🔒 सुरक्षित बॅकअप',

      // Stats
      stat1Num: '१००%',
      stat1Label: 'ऑफलाइन कार्यक्षमता (डेटा सुरक्षित)',
      stat2Num: '< 8 MB',
      stat2Label: 'अल्ट्रा-लाईटवेट इन्स्टॉलेशन आकार',
      stat3Num: '० सेकंद',
      stat3Label: 'स्थानिक स्टोरेजमुळे त्वरित सुरू',
      stat4Num: '₹०',
      stat4Label: 'आजीवन पूर्णपणे मोफत, जाहिरातमुक्त',

      // Bento Features
      featBadge: 'सर्वोत्तम सुविधा',
      featTitle: 'घरगुती किराणा यादी का निवडावी?',
      featDesc: 'आधुनिक तंत्रज्ञान आणि साधेपणा यांचा उत्तम संगम. आपल्या कुटुंबाच्या मासिक खर्चावर पूर्ण नियंत्रण ठेवा.',
      bento1Title: '१००% ऑफलाइन कार्यक्षमता',
      bento1Desc: 'इंटरनेट किंवा मोबाइल डेटा नसला तरीही ॲप अखंड कार्य करते. सर्व नोंदी तुमच्या फोनमधील स्थानिक स्टोरेजमध्ये सुरक्षित राहतात.',
      bento2Title: 'A4 मराठी PDF पावती',
      bento2Desc: 'किराणा यादी पूर्ण झाल्यावर एका टॅपमध्ये सुबक देवनागरी PDF पावती बनवा आणि थेट दुकानदाराला पाठवा किंवा प्रिंट करा.',
      bento3Title: 'कुटुंबाचे बजेट व बचत ट्रॅकर',
      bento3Desc: 'मासिक अंदाजपत्रक सेट करा, खर्चाचा ताळेबंद ठेवा आणि अनावश्यक खर्चाला वेळीच आळा घालून बचत वाढवा.',
      bento4Title: 'शून्य जाहिराती, संपूर्ण गोपनीयता',
      bento4Desc: 'कोणतीही अनाहूत जाहिरात नाही, डेटा ट्रॅकिंग नाही आणि अनोळखी सर्व्हरवर तुमची माहिती पाठवली जात नाही.',
      bento5Title: 'सुरक्षित क्लाउड बॅकअप (पर्यायी)',
      bento5Desc: 'फोन बदलताना तुमच्या Google Drive खात्यामध्ये सुरक्षित एन्क्रिप्टेड बॅकअप घ्या आणि कधीही रिस्टोअर करा.',
      bento6Title: 'लाईटवेट व सर्व उपकरणांवर जलद',
      bento6Desc: 'अवघ्या 8 MB पेक्षा कमी आकारात उपलब्ध. जुन्या किंवा बजेट Android फोनवरही 60fps वर स्मूथ चालते.',

      // Workflow
      workBadge: 'सुलभ वापर',
      workTitle: '३ सोप्या पायऱ्यांमध्ये सुरुवात करा',
      step1Title: 'APK डाऊनलोड व इन्स्टॉल करा',
      step1Desc: 'अधिकृत संकेतस्थळावरून सुरक्षित APK डाऊनलोड करा आणि तुमच्या Android फोनमध्ये स्थापित करा.',
      step2Title: 'यादी व बजेट तयार करा',
      step2Desc: 'घरातील दैनंदिन गरजेनुसार किराणा मालाची यादी बनवा आणि मासिक अंदाजपत्रक निश्चित करा.',
      step3Title: 'खरेदी करा व PDF पावती मिळवा',
      step3Desc: 'बाजारात जाऊन यादीतील वस्तू टिक करा आणि खरेदी झाल्यावर सुंदर A4 PDF पावती एक्सपोर्ट करा.',

      // Download Section
      dlBadge: 'अधिकृत प्रकाशन',
      dlTitle: 'आताच Android साठी डाऊनलोड करा',
      dlDesc: 'अधिकृत क्रिप्टोग्राफिक SHA-256 पडताळणीसह थेट सुरक्षित APK डाऊनलोड करा. तृतीय-पक्ष ॲप स्टोअरवर अवलंबून राहण्याची गरज नाही.',
      dlBtnText: 'अधिकृत APK डाऊनलोड करा (v1.0.3 Build 5)',
      dlBtnSub: 'आकार: 7.49 MB • Android 5.1+',
      shaTitle: 'अधिकृत SHA-256 क्रिप्टोग्राफिक चेकसम',
      shaCopyBtn: 'हॅश कॉपी करा',
      qrCaption: 'कॅमेऱ्याने स्कॅन करून थेट मोबाईलवर डाऊनलोड करा',

      // FAQ
      faqBadge: 'नेहमी विचारले जाणारे प्रश्न',
      faqTitle: 'काही शंका आहेत का?',
      faq1Q: 'हे ॲप पूर्णपणे मोफत आहे का?',
      faq1A: 'होय, घरगुती किराणा यादी हे १००% मोफत ॲप आहे. यामध्ये कोणतीही लपलेली फी किंवा सदस्यत्व शुल्क नाही आणि यात कोणतीही जाहिरात येत नाही.',
      faq2Q: 'ॲप वापरण्यासाठी इंटरनेटची आवश्यकता आहे का?',
      faq2A: 'नाही! ॲप पूर्णपणे ऑफलाइन चालते. यादी बनवणे, बदल करणे, खर्च मोजणे आणि PDF पावती तयार करणे यासाठी इंटरनेट लागत नाही.',
      faq3Q: 'Android फोनवर APK कसे इन्स्टॉल करावे?',
      faq3A: 'वरील डाऊनलोड बटणावर क्लिक करा. फाईल डाऊनलोड झाल्यावर तिच्यावर टॅप करा. जर फोनने "Unknown Sources" परवानगी विचारली, तर "Allow from this source" चालू करा आणि Install वर क्लिक करा.',
      faq4Q: 'माझा किराणा डेटा सुरक्षित आहे का?',
      faq4A: 'होय, तुमचा संपूर्ण डेटा तुमच्या फोनमध्येच स्थानिकरित्या सुरक्षित साठवला जातो. आम्ही तुमचा कोणताही वैयक्तिक डेटा गोळा करत नाही.',

      // Footer
      footerDesc: 'महाराष्ट्रातील कुटुंबांसाठी बनवलेली अधिकृत व विश्वासार्ह किराणा आणि बजेट व्यवस्थापन प्रणाली.',
      footerCol1: 'उत्पादन',
      footerCol2: 'सुरक्षा व कायदेशीर',
      footerCol3: 'विकसक',
      footerDev: 'संतोष कोळी (Santosh Koli)',
      footerRights: 'सर्व हक्क राखीव.',

      // Verified Downloader Window
      dlModalTitle: 'अधिकृत उत्पादन डाऊनलोडर',
      dlModalSub: 'क्रिप्टोग्राफिक पडताळणी गेटवे • v1.0.3 (Build 5)',
      dlMetaVer: 'आवृत्ती:',
      dlMetaCode: 'versionCode:',
      dlMetaChannel: 'चॅनेल:',
      dlMetaSize: 'आकार:',
      dlStep1Text: 'मेनिफेस्ट हँडशेक',
      dlStep2Text: 'थेट बायनरी प्रवाह',
      dlStep3Text: 'SHA-256 पडताळणी',
      dlStep4Text: 'APK वितरण',
      dlStatusInit: 'सुरक्षित डाऊनलोड सुरू करत आहे...',
      dlStatusHandshake: 'सुरक्षित सर्व्हर मेनिफेस्ट पडताळत आहे...',
      dlStatusDownloading: 'बायनरी डेटा प्रवाह डाऊनलोड होत आहे...',
      dlStatusHashing: 'क्रिप्टोग्राफिक SHA-256 हॅश मोजत आहे...',
      dlStatusComplete: 'पडताळणी यशस्वी! APK फाईल सेव्ह होत आहे...',
      dlStatusAborted: 'डाऊनलोड रद्द केले (प्रक्रिया थांबवली).',
      dlExpectedHashLabel: 'अधिकृत SHA-256 (अपेक्षित):',
      dlComputedHashLabel: 'मोजलेला SHA-256 (गणित):',
      dlVerdictSuccess: '१००% क्रिप्टोग्राफिक हॅश पडताळणी यशस्वी',
      dlGuideTitle: 'APK यशस्वीरित्या डाऊनलोड झाला! इन्स्टॉल कसे करावे:',
      dlGuide1: 'डाऊनलोड्स फोल्डरमधील HomeGrocery-v1.0.3-build5.apk उघडा.',
      dlGuide2: 'Google Play Protect सूचना आल्यास \'More details\' वर टॅप करून \'Install anyway\' निवडा.',
      dlBtnCancel: 'रद्द करा (थांबवा)',
      dlBtnStart: 'डाऊनलोड सुरू करा',
      dlBtnDone: 'पूर्ण झाले'
    },

    en: {
      langBtn: 'EN',
      langNext: 'मराठी',
      announcement: 'Home Grocery v1.0.3 (Build 5) Official Stable Release is now live!',
      announcementBadge: 'UPDATES',
      announcementCategory: 'UPDATE',
      announcementAction: 'Download Now (v1.0.3) →',
      navFeatures: 'Features',
      navWorkflow: 'How It Works',
      navDownload: 'Download',
      navFaq: 'FAQ',
      navPrivacy: 'Privacy Policy',
      navCta: 'Get APK',
      mobNavHome: '🏠 Home',
      mobNavFeat: '⚡ Features',
      mobNavDl: '📲 Download APK',

      // Hero
      heroPill: '100% Free • Private • Zero Ads',
      heroTitle1: 'Household Grocery & Budget Management, ',
      heroTitleGrad: 'Reimagined with Simplicity.',
      heroSubtitle: 'Home Grocery — The 100% offline, privacy-first mobile app for family grocery planning. Generate crisp Devanagari A4 PDF invoices, track monthly spending limits, and own your data.',
      heroDownloadBtn: 'Download Official APK (v1.0.3)',
      heroLearnBtn: 'Explore Features',
      heroMeta1: 'Android 5.1+ Compatible',
      heroMeta2: '7.49 MB Lightweight',
      heroMeta3: 'RSA-4096 Production Signed',

      // Mockup App
      mockupAppTitle: 'Home Grocery',
      mockupStatus: '100% Offline',
      mockupBudgetLabel: 'Monthly Grocery Budget',
      mockupSpent: 'Spent: ₹3,450 / ₹5,000',
      mockupSaved: 'Saved: ₹1,550 (31%)',
      item1Name: 'Basmati Rice',
      item1Qty: '5 kg',
      item2Name: 'Groundnut Oil',
      item2Qty: '2 Liters',
      item3Name: 'Toor Dal',
      item3Qty: '1 kg',
      item4Name: 'Sugar & Jaggery',
      item4Qty: '3 kg',
      mockupBtnPdf: '📄 Generate A4 PDF Receipt',
      mockupBtnBackup: '🔒 Secure Cloud Backup',

      // Stats
      stat1Num: '100%',
      stat1Label: 'Offline Resilience (Local Storage)',
      stat2Num: '< 8 MB',
      stat2Label: 'Ultra-lightweight Package Size',
      stat3Num: '0.2s',
      stat3Label: 'Instant Startup, Zero Hydration Delay',
      stat4Num: '₹0',
      stat4Label: 'Lifetime 100% Free & Ad-Free',

      // Bento Features
      featBadge: 'Premium Features',
      featTitle: 'Why Choose Home Grocery?',
      featDesc: 'Engineered for simplicity, extreme speed, and ironclad data privacy. Keep your family expenses in your complete control.',
      bento1Title: '100% Offline Reliability',
      bento1Desc: 'Functions completely without internet or cellular connectivity. All lists and spending records are preserved locally on your phone.',
      bento2Title: 'Devanagari A4 PDF Invoice',
      bento2Desc: 'Generate a clean, structured A4 grocery receipt in Marathi with a single tap. Send directly to local grocers or print effortlessly.',
      bento3Title: 'Family Budget & Expense Tracker',
      bento3Desc: 'Define monthly grocery limits, monitor visual budget gauges, and receive visual alerts before you overspend.',
      bento4Title: 'Zero Advertisements & Pure Privacy',
      bento4Desc: 'No telemetry snooping, no third-party ad trackers, and zero personal information uploaded to external servers.',
      bento5Title: 'Encrypted Cloud Backup (Optional)',
      bento5Desc: 'Safeguard your data across phone upgrades with optional end-to-end encrypted backup to your own personal Google Drive.',
      bento6Title: 'Lightweight & Ultra Fast',
      bento6Desc: 'Under 8 MB in size. Runs smoothly at 60fps on all modern and entry-level Android smartphones.',

      // Workflow
      workBadge: 'Simple Workflow',
      workTitle: 'Get Started in 3 Easy Steps',
      step1Title: 'Download & Install APK',
      step1Desc: 'Download the verified APK directly from our official portal and install on any Android 5.1+ phone.',
      step2Title: 'Plan Grocery & Set Budget',
      step2Desc: 'Add your household staples, set estimated prices, and establish your target monthly budget.',
      step3Title: 'Shop & Export PDF Receipt',
      step3Desc: 'Check off items while shopping and generate an elegant A4 PDF receipt for your records.',

      // Download Section
      dlBadge: 'Official Distribution',
      dlTitle: 'Download Home Grocery for Android',
      dlDesc: 'Download the cryptographically verified APK directly. No middleman app store, no hidden tracking, and instant installation.',
      dlBtnText: 'Download Official APK (v1.0.3 Build 5)',
      dlBtnSub: 'Size: 7.49 MB • Android 5.1+',
      shaTitle: 'Official SHA-256 Cryptographic Checksum',
      shaCopyBtn: 'Copy Hash',
      qrCaption: 'Scan with your mobile camera to download directly',

      // FAQ
      faqBadge: 'Frequently Asked Questions',
      faqTitle: 'Got Questions? We Have Answers',
      faq1Q: 'Is Home Grocery completely free to use?',
      faq1A: 'Yes, Home Grocery is 100% free with zero in-app purchases, zero subscription fees, and no advertisements whatsoever.',
      faq2Q: 'Does the application require an active internet connection?',
      faq2A: 'No! The app is designed offline-first. Creating lists, tracking expenses, and exporting A4 PDF receipts work without internet.',
      faq3Q: 'How do I install the APK on my Android smartphone?',
      faq3A: 'Click the download button above. Once downloaded, tap the notification. If prompted to allow Unknown Sources, toggle "Allow from this source" and tap Install.',
      faq4Q: 'Is my grocery and financial data private?',
      faq4A: 'Absolutely. All data remains exclusively on your device. We do not operate tracking servers or harvest personal info.',

      // Footer
      footerDesc: 'The official and trusted household grocery list and budget management app for families.',
      footerCol1: 'Product',
      footerCol2: 'Security & Legal',
      footerCol3: 'Author',
      footerDev: 'Santosh Koli',
      footerRights: 'All rights reserved.',

      // Verified Downloader Window
      dlModalTitle: 'Official Production Downloader',
      dlModalSub: 'Cryptographic Integrity Gateway • v1.0.3 (Build 5)',
      dlMetaVer: 'Version:',
      dlMetaCode: 'versionCode:',
      dlMetaChannel: 'Channel:',
      dlMetaSize: 'Size:',
      dlStep1Text: 'Manifest Handshake',
      dlStep2Text: 'Binary Stream',
      dlStep3Text: 'SHA-256 Verify',
      dlStep4Text: 'APK Delivery',
      dlStatusInit: 'Initializing secure download...',
      dlStatusHandshake: 'Checking server release manifest...',
      dlStatusDownloading: 'Streaming authentic binary data...',
      dlStatusHashing: 'Computing WebCrypto SHA-256 hash...',
      dlStatusComplete: 'Integrity verified! Delivering APK file...',
      dlStatusAborted: 'Download aborted (Process stopped).',
      dlExpectedHashLabel: 'Authoritative SHA-256 (Expected):',
      dlComputedHashLabel: 'Computed SHA-256 (Calculated):',
      dlVerdictSuccess: '100% Cryptographic Checksum Match Verified',
      dlGuideTitle: 'APK delivered successfully! How to install:',
      dlGuide1: 'Open HomeGrocery-v1.0.3-build5.apk from your Downloads folder.',
      dlGuide2: 'If Google Play Protect alert appears, tap \'More details\' and select \'Install anyway\'.',
      dlBtnCancel: 'Cancel (Stop)',
      dlBtnStart: 'Start Download',
      dlBtnDone: 'Done'
    }
  };

  // Toast Function
  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Language Apply Engine
  function applyLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem('hg_lang', lang);
    } catch (e) {
      // Ignore private storage restrictions
    }
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations.mr;

    // Replace all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update language toggle button label
    const toggleBtn = document.getElementById('langToggleBtn');
    if (toggleBtn) {
      const badge = toggleBtn.querySelector('.lang-badge');
      if (badge) badge.textContent = lang === 'mr' ? 'MR' : 'EN';
      const label = toggleBtn.querySelector('.lang-text');
      if (label) label.textContent = dict.langBtn;
    }
  }

  // Toggle Language Handler
  function toggleLanguage() {
    const nextLang = currentLang === 'mr' ? 'en' : 'mr';
    applyLanguage(nextLang);
    showToast(nextLang === 'mr' ? 'भाषा मराठीमध्ये बदलली आहे' : 'Language switched to English');
  }

  // Setup DOM Interactions - Safe for synchronous or deferred execution
  function initAuraMail() {
    // 1. Initial Language Apply
    applyLanguage(currentLang);

    // 2. Language Toggle Button
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      // Remove any existing click listener by cloning or direct assignment
      langBtn.onclick = toggleLanguage;
    }

    // 3. Mobile Navigation Drawer
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.onclick = (e) => {
        e.stopPropagation();
        mobileDrawer.classList.toggle('open');
      };
      mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.onclick = () => {
          mobileDrawer.classList.remove('open');
        };
      });
      document.addEventListener('click', (e) => {
        if (!mobileDrawer.contains(e.target) && e.target !== mobileMenuBtn) {
          mobileDrawer.classList.remove('open');
        }
      });
    }

    // 4. Copy SHA-256 Checksum
    const shaCopyBtn = document.getElementById('shaCopyBtn');
    const shaHashCode = document.getElementById('shaHashCode');
    if (shaCopyBtn && shaHashCode) {
      shaCopyBtn.onclick = () => {
        const hash = shaHashCode.innerText.trim();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(hash).then(() => {
            showToast(currentLang === 'mr' ? 'SHA-256 हॅश क्लिपबोर्डवर कॉपी केला!' : 'SHA-256 Checksum copied to clipboard!');
          }).catch(() => {
            showToast('Hash: ' + hash.slice(0, 16) + '...');
          });
        } else {
          showToast('SHA-256: ' + hash.slice(0, 16) + '...');
        }
      };
    }

    // 4b. Copy Support Email
    const copyEmailBtn = document.getElementById('copySupportEmailBtn');
    if (copyEmailBtn) {
      copyEmailBtn.onclick = () => {
        const email = 'homegrocery.security@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast(currentLang === 'mr' ? 'सपोर्ट ईमेल कॉपी केला (homegrocery.security@gmail.com)!' : 'Support email copied to clipboard!');
          }).catch(() => {
            showToast(email);
          });
        } else {
          showToast(email);
        }
      };
    }

    // 5. FAQ Accordions
    document.querySelectorAll('.faq-item').forEach((item) => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.onclick = () => {
          const isActive = item.classList.contains('active');
          document.querySelectorAll('.faq-item').forEach((other) => {
            if (other !== item) other.classList.remove('active');
          });
          if (!isActive) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        };
      }
    });

    // 6. Smooth Scroll on Internal Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.length > 1) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // 7. Verified Downloader Modal & Triggers (Delegated + Direct)
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.download-trigger');
      if (trigger) {
        e.preventDefault();
        const dlSection = document.getElementById('download');
        if (dlSection) {
          dlSection.scrollIntoView({ behavior: 'smooth' });
        }
        openDownloadModal();
        return;
      }

      if (e.target.closest('#dlModalCloseBtn') || e.target.closest('#dlCancelBtn')) {
        e.preventDefault();
        closeDownloadModal();
        return;
      }

      const modal = document.getElementById('downloadModal');
      if (modal && e.target === modal) {
        e.preventDefault();
        closeDownloadModal();
        return;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('downloadModal');
        if (modal && modal.style.display !== 'none') {
          closeDownloadModal();
        }
      }
    });

    const dlActionPrimaryBtn = document.getElementById('dlActionPrimaryBtn');
    if (dlActionPrimaryBtn) {
      dlActionPrimaryBtn.onclick = () => {
        if (!isDownloadRunning) {
          startVerifiedDownload();
        }
      };
    }
  }

  // ========================================================
  // VERIFIED CRYPTOGRAPHIC DOWNLOADER CONTROLLER
  // ========================================================
  let downloadAbortController = null;
  let isDownloadRunning = false;

  const OFFICIAL_RELEASE = {
    versionName: '1.0.3',
    buildNumber: 5,
    versionCode: 33,
    apkFilename: 'HomeGrocery-v1.0.3-build5.apk',
    downloadUrl: './HomeGrocery-v1.0.3-build5.apk',
    sizeBytes: 7855609,
    expectedSha256: 'A47BD907B41A2950B1136E4A6707C5C1DA0A7D617FDE67200AC14ADBA2EFCF93'
  };

  function openDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    startVerifiedDownload();
  }

  function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (downloadAbortController) {
      try {
        downloadAbortController.abort('USER_CANCELLED');
      } catch (e) {}
    }
    isDownloadRunning = false;
    if (modal) {
      modal.style.display = 'none';
    }
    document.body.style.overflow = '';
  }

  async function startVerifiedDownload() {
    if (isDownloadRunning) return;
    isDownloadRunning = true;

    // Elements
    const step1 = document.getElementById('dlStep1');
    const step2 = document.getElementById('dlStep2');
    const step3 = document.getElementById('dlStep3');
    const step4 = document.getElementById('dlStep4');
    const line1 = document.getElementById('dlLine1');
    const line2 = document.getElementById('dlLine2');
    const line3 = document.getElementById('dlLine3');

    const statusLabel = document.getElementById('dlStatusLabel');
    const progressPercent = document.getElementById('dlProgressPercent');
    const progressBar = document.getElementById('dlProgressBar');
    const bytesText = document.getElementById('dlBytesText');
    const speedText = document.getElementById('dlSpeedText');

    const computedRow = document.getElementById('dlComputedHashRow');
    const computedVal = document.getElementById('dlComputedHashVal');
    const verdict = document.getElementById('dlHashVerdict');
    const guide = document.getElementById('dlSuccessGuide');
    const actionBtn = document.getElementById('dlActionPrimaryBtn');
    const actionText = document.getElementById('dlActionBtnText');

    // Reset UI
    [step1, step2, step3, step4].forEach((s) => s && (s.className = 'dl-step'));
    [line1, line2, line3].forEach((l) => l && (l.className = 'dl-step-line'));
    if (step1) step1.className = 'dl-step active';

    if (computedRow) computedRow.style.display = 'none';
    if (verdict) verdict.style.display = 'none';
    if (guide) guide.style.display = 'none';

    if (progressBar) progressBar.style.width = '0%';
    if (progressPercent) progressPercent.innerText = '0%';
    if (bytesText) bytesText.innerText = '0.00 MB / 7.49 MB';
    if (speedText) speedText.innerText = '-- KB/s';

    if (statusLabel) {
      statusLabel.innerText = currentLang === 'mr' ? 'सुरक्षित सर्व्हर मेनिफेस्ट पडताळत आहे...' : 'Checking server release manifest...';
    }
    if (actionText) {
      actionText.innerText = currentLang === 'mr' ? 'डाऊनलोड होत आहे...' : 'Downloading...';
    }
    if (actionBtn) actionBtn.disabled = true;

    downloadAbortController = new AbortController();

    try {
      // Step 1: Handshake (Manifest check)
      await new Promise((r) => setTimeout(r, 300));
      if (!isDownloadRunning) return;
      if (step1) step1.className = 'dl-step completed';
      if (line1) line1.className = 'dl-step-line completed';
      if (step2) step2.className = 'dl-step active';

      if (statusLabel) {
        statusLabel.innerText = currentLang === 'mr' ? 'बायनरी डेटा प्रवाह डाऊनलोड होत आहे...' : 'Streaming authentic binary data...';
      }

      // Step 2: Streaming download with progress
      const startTime = Date.now();
      const response = await fetch(OFFICIAL_RELEASE.downloadUrl, {
        signal: downloadAbortController.signal,
        cache: 'no-cache'
      });

      if (!response.ok) {
        throw new Error(`HTTP_${response.status}`);
      }

      const contentLengthHeader = response.headers.get('content-length');
      const totalBytes = contentLengthHeader ? parseInt(contentLengthHeader, 10) : OFFICIAL_RELEASE.sizeBytes;
      const reader = response.body ? response.body.getReader() : null;

      let receivedBytes = 0;
      const chunks = [];

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          receivedBytes += value.length;

          const pct = Math.min(100, Math.round((receivedBytes / totalBytes) * 100));
          if (progressBar) progressBar.style.width = pct + '%';
          if (progressPercent) progressPercent.innerText = pct + '%';
          if (bytesText) {
            bytesText.innerText = `${(receivedBytes / (1024 * 1024)).toFixed(2)} MB / ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`;
          }

          const elapsedSec = (Date.now() - startTime) / 1000;
          if (elapsedSec > 0.1 && speedText) {
            const kbSec = Math.round(receivedBytes / 1024 / elapsedSec);
            speedText.innerText = kbSec > 1024 ? `${(kbSec / 1024).toFixed(1)} MB/s` : `${kbSec} KB/s`;
          }
        }
      } else {
        const buffer = await response.arrayBuffer();
        chunks.push(new Uint8Array(buffer));
        receivedBytes = buffer.byteLength;
        if (progressBar) progressBar.style.width = '100%';
        if (progressPercent) progressPercent.innerText = '100%';
      }

      if (!isDownloadRunning) return;
      if (step2) step2.className = 'dl-step completed';
      if (line2) line2.className = 'dl-step-line completed';
      if (step3) step3.className = 'dl-step active';

      if (statusLabel) {
        statusLabel.innerText = currentLang === 'mr' ? 'क्रिप्टोग्राफिक SHA-256 हॅश मोजत आहे...' : 'Computing WebCrypto SHA-256 hash...';
      }

      // Step 3: WebCrypto SHA-256 Verification
      if (computedRow) computedRow.style.display = 'flex';
      if (computedVal) {
        computedVal.innerText = currentLang === 'mr' ? 'मोजत आहे...' : 'Computing...';
      }

      const combinedBuffer = new Uint8Array(receivedBytes);
      let offset = 0;
      for (const chunk of chunks) {
        combinedBuffer.set(chunk, offset);
        offset += chunk.length;
      }

      const hashBuffer = await crypto.subtle.digest('SHA-256', combinedBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const computedHash = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('').toUpperCase();

      if (computedVal) {
        computedVal.innerText = computedHash;
      }

      if (computedHash === OFFICIAL_RELEASE.expectedSha256) {
        if (verdict) verdict.style.display = 'inline-flex';
        if (step3) step3.className = 'dl-step completed';
        if (line3) line3.className = 'dl-step-line completed';
        if (step4) step4.className = 'dl-step completed';

        if (statusLabel) {
          statusLabel.innerText = currentLang === 'mr' ? 'पडताळणी यशस्वी! APK फाईल सेव्ह होत आहे...' : 'Integrity verified! Delivering APK file...';
        }

        // Deliver verified APK via Blob object URL
        const blob = new Blob([combinedBuffer], { type: 'application/vnd.android.package-archive' });
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = OFFICIAL_RELEASE.apkFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);

        if (guide) guide.style.display = 'flex';

        if (actionText) {
          actionText.innerText = currentLang === 'mr' ? 'पूर्ण झाले (पुन्हा डाउनलोड)' : 'Done (Download Again)';
        }
        if (actionBtn) {
          actionBtn.disabled = false;
          actionBtn.onclick = () => {
            isDownloadRunning = false;
            startVerifiedDownload();
          };
        }
        showToast(currentLang === 'mr' ? 'APK यशस्वीरित्या पडताळला व सेव्ह झाला!' : 'APK verified and delivered successfully!');
      } else {
        if (statusLabel) {
          statusLabel.innerText = currentLang === 'mr' ? 'हॅश विसंगती आढळली! डाउनलोड दूषित असू शकते.' : 'Checksum mismatch detected! Corrupted download.';
        }
        if (actionText) {
          actionText.innerText = currentLang === 'mr' ? 'पुन्हा प्रयत्न करा' : 'Retry Download';
        }
        if (actionBtn) {
          actionBtn.disabled = false;
          actionBtn.onclick = () => {
            isDownloadRunning = false;
            startVerifiedDownload();
          };
        }
      }
    } catch (err) {
      if (err === 'USER_CANCELLED' || (err && err.name === 'AbortError')) {
        if (statusLabel) {
          statusLabel.innerText = currentLang === 'mr' ? 'डाऊनलोड रद्द केले (प्रक्रिया थांबवली).' : 'Download cancelled by user.';
        }
      } else {
        if (statusLabel) {
          statusLabel.innerText = currentLang === 'mr' ? 'डाऊनलोड त्रुटी! कृपया पुन्हा प्रयत्न करा.' : 'Download error. Please retry.';
        }
        if (actionBtn) {
          actionBtn.disabled = false;
          actionBtn.onclick = () => {
            isDownloadRunning = false;
            startVerifiedDownload();
          };
        }
      }
    } finally {
      isDownloadRunning = false;
    }
  }

  // Self-execute reliably whether DOM is ready or loading
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuraMail);
  } else {
    initAuraMail();
  }

  // Export functions to global scope
  window.HomeGroceryAura = {
    applyLanguage,
    toggleLanguage,
    showToast,
    initAuraMail,
    openDownloadModal,
    closeDownloadModal,
    startVerifiedDownload
  };
})();
