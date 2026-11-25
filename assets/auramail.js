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
      announcementBadge: 'नवीन अपडेट',
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
      footerRights: 'सर्व हक्क राखीव.'
    },

    en: {
      langBtn: 'EN',
      langNext: 'मराठी',
      announcement: 'Home Grocery v1.0.3 (Build 5) Official Stable Release is now live!',
      announcementBadge: 'NEW RELEASE',
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
      footerRights: 'All rights reserved.'
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
    initAuraMail
  };
})();
