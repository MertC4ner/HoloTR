// ==========================================================================
// 1. DİL VERİLERİ (TÜM WEB SİTESİNİN NİHAİ DİL HARİTASI)
// ==========================================================================
const translations = {
    tr: {
        "nav-home": "Ana Sayfa",
        "nav-projects": "Projelerimiz",
        "nav-about": "Hakkımızda",
        "nav-contact": "Teklif Al",
        "hero-title": "Geleceğin Görsel Deneyimiyle Tanışın",
        "hero-subtitle": "3 Kollu LED Hologram teknolojisiyle etkinliklerinize fütüristik bir dokunuş yapın.",
        "btn-get-proposal": "Teklif Al",
        "sec-how-title": "Nasıl Çalışır?",
        "sec-how-subtitle": "Yüksek hızda dönen LED teknolojisiyle havada asılı duran büyüleyici görüntüler.",
        "card-1-title": "Yüksek Hızlı Dönüş",
        "card-1-desc": "3 kollu özel pervanemiz insan gözünün algılayamayacağı bir hızda dönerek şeffaf bir zemin yaratır.",
        "card-2-title": "Akıllı LED Dizilimi",
        "card-2-desc": "Kolların üzerindeki ultra parlak mikro LED'ler, dönüş yönüne göre mikro saniyede renk değiştirir.",
        "card-3-title": "3D Hologram Etkisi",
        "card-3-desc": "Göz, pervaneyi görmez; sadece havada asılı duran, parıldayan fütüristik 3 boyutlu görseli algılar.",
        "proc-title": "3 Adımda Büyüyü Başlatın",
        "proc-subtitle": "Fikir aşamasından sahnedeki canlı gösteriye kadar tüm süreci biz yönetiyoruz.",
        "proc-step1-title": "Brief & Hayal Et",
        "proc-step1-desc": "Etkinlik konseptinizi ve isteklerinizi bize iletin. Ekibimizle birlikte kreatif kurguyu netleştirelim.",
        "proc-step2-title": "Prodüksiyon & Modelleme",
        "proc-step2-desc": "Tasarımcılarımız, cihaz özelliklerine en uygun fütüristik 3D videoyu hazırlar.",
        "proc-step3-title": "Kurulum & Canlı Gösteri",
        "proc-step3-desc": "Teknik ekibimiz sahneye gelerek donanımı kurar ve gösteri anında kusursuz yayını başlatır.",
        "events-title": "Sahne Alınan Etkinlikler",
        "events-subtitle": "Hologram teknolojimizin büyülediği seçkin sahnelerden ve lansmanlardan kareler.",
        "event-1-tag": "Lansman",
        "event-1-title": "Global Teknoloji Zirvesi",
        "event-1-desc": "Yeni nesil donanım tanıtımı için hazırlanan devasa 3D hologram şovu.",
        "event-2-tag": "Sahne Şovu",
        "event-2-title": "Neon Future Festival",
        "event-2-desc": "DJ performansıyla senkronize çalışan interaktif ışık og hologram gösterisi.",
        "event-3-tag": "Kurumsal Expo",
        "event-3-title": "Auto-Motion 2024",
        "event-3-desc": "Otomotiv devinin standında havada asılı duran 3D araç modelleri sunumu.",
        "btn-view-all": "Daha Fazlasını Gör",
        "sec-faq-title": "Sıkça Sorulan Sorular",
        "faq-q1": "Gündüz veya ışıklı ortamlarda net görünür mü?",
        "faq-a1": "Evet, kullandığımız cihazlar yüksek lümenli endüstriyel LED'lere sahip olduğu için fuar ve lansman gibi yoğun ışıklı iç mekanlarda bile son derece parlak ve net bir görünüm sunar.",
        "faq-q2": "Kendi şirket logomuzu hologram yapabilir miyiz?",
        "faq-a2": "Kesinlikle. 3D tasarım ekibimiz kurumsal logonuzu veya ürünlerinizin 3 boyutlu modelini sisteme uygun formatta hazırlar ve gösteri günü pervanelere yükler.",
        "faq-q3": "Güvenlik önlemleri nasıl sağlanıyor?",
        "faq-a3": "Etkinlik alanlarında pervanelerin etrafına şeffaf pleksi koruma fanusları yerleştiriyoruz. Böylece ziyaretçilerin pervanelere dokunması engellenerek maksimum güvenlik sağlanır.",
        "proj-title": "Projelerimiz & Referanslar",
        "proj-subtitle": "Bugüne kadar gerçekleştirdiğimiz fütüristik şovlar ve kurumsal entegrasyonlar.",
        "filter-all": "Hepsi",
        "filter-fuar": "Fuar Standları",
        "filter-lansman": "Lansmanlar",
        "filter-festival": "Konser / Festival",
        "about-title": "Hakkımızda",
        "about-subtitle": "Geleceğin görüntüleme teknolojilerini bugünün etkinliklerine taşıyoruz.",
        "about-vision-title": "Vizyonumuz & Misyonumuz",
        "about-vision-text": "Pervaneli LED hologram teknolojisinde öncü bir rol üstlenerek, markaların ve organizasyonların kitleleriyle kurduğu görsel bağı bambaşka bir boyuta taşımayı hedefliyoruz. Sıradan ekranların sınırlarını yıkarak, havada asılı duran büyüleyici 3D deneyimler tasarlıyoruz.",
        "about-info-title": "Kurumsal Bilgiler",
        "form-title": "Teklif Talep Formu",
        "form-subtitle": "Projeniz veya etkinliğiniz için fütüristik hologram çözümlerimize ait fiyat teklifi alın.",
        "lbl-name": "Ad Soyadı / Şirket Unvanı",
        "lbl-email": "E-posta Adresi",
        "lbl-phone": "Telefon Numarası",
        "lbl-event-type": "Etkinlik Türü",
        "lbl-date": "Etkinlik Tarihi",
        "lbl-hologram-size": "İstenilen Görüntü Boyutu",
        "lbl-event-location": "Etkinlik Lokasyonu (Şehir)",
        "lbl-event-duration": "Etkinlik Süresi",
        "lbl-notes": "Özel Notlar / Proje Detayları",
        "btn-send": "Teklif Talebi Gönder",
        "opt-select": "Seçiniz...",
        "opt-size-desktop": "Masaüstü / Ürün Boyutu (~50 cm)",
        "opt-size-human": "İnsan Boyu / Standart (~1.5 m - 2 m)",
        "opt-size-stage": "Sahne / Dev Boyut (3 m ve üzeri)",
        "opt-duration-1": "1 Gün",
        "opt-duration-2-4": "2-4 Gün (Fuar Süresince)",
        "opt-duration-weekly": "1 Hafta ve Üzeri",
        "opt-other": "Diğer / Özel Etkinlik",
        "msg-success-title": "Talebiniz Başarıyla Alındı!",
        "msg-success-desc": "Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.",
        "btn-view-projects": "Çalışmalarımızı İzle",
        "footer-slogan": "Boyutları aşan fütüristik görsel deneyimler. Etkinliğinizi geleceğin teknolojisiyle buluşturuyor, sahnenizde unutulmaz 3D illüzyonlar yaratıyoruz.",
        "footer-nav-title": "Hızlı Bağlantılar",
        "footer-services-title": "Hizmetlerimiz",
        "footer-svc-1": "Fuar Stand Kiralama",
        "footer-svc-2": "Ürün Lansmanı",
        "footer-svc-3": "Konser & Festival Şovları",
        "footer-svc-4": "Kurumsal Etkinlikler",
        "footer-contact-title": "İletişim",
        "footer-address": "Yeniköy Merkez, Vatan Cd. No:73E İç Kapı No:Z4, 41275 Başiskele/Kocaeli",
        "footer-privacy": "Gizlilik Politikası",
        "footer-terms": "Kullanım Koşulları",
        "footer-rights": "Tüm Hakları Saklıdır.",
        "placeholder-name": "Örn: Ahmet Yılmaz / X Ajans",
        "placeholder-email": "ahmet@sirket.com",
        "placeholder-phone": "0532 XXX XX XX",
        "placeholder-location": "Örn: İstanbul, Ankara...",
        "placeholder-notes": "Projeniz hakkında eklemek istediğiniz detaylar..."
    },
    en: {
        "nav-home": "Home",
        "nav-projects": "Projects",
        "nav-about": "About Us",
        "nav-contact": "Get Proposal",
        "hero-title": "Meet the Future of Visual Experience",
        "hero-subtitle": "Bring a futuristic touch to your events with 3-Blade LED Hologram technology.",
        "btn-get-proposal": "Get a Quote",
        "sec-how-title": "How It Works",
        "sec-how-subtitle": "Fascinating images floating in mid-air powered by high-speed rotating LED technology.",
        "card-1-title": "High-Speed Rotation",
        "card-1-desc": "Our specialized 3-blade fan rotates at a speed imperceptible to the human eye, creating a transparent background.",
        "card-2-title": "Smart LED Array",
        "card-2-desc": "Ultra-bright micro LEDs on the blades change colors in microseconds based on the rotation direction.",
        "card-3-title": "3D Hologram Effect",
        "card-3-desc": "The eye doesn't see the fan; it only perceives the glowing, futuristic 3D visual suspended in mid-air.",
        "proc-title": "Start the Magic in 3 Steps",
        "proc-subtitle": "We manage the entire process from the idea stage to the live show on stage.",
        "proc-step1-title": "Brief & Imagine",
        "proc-step1-desc": "Share your event concept and requests with us. Let's clarify the creative setup together with our team.",
        "proc-step2-title": "Production & Modeling",
        "proc-step2-desc": "Our designers prepare the most suitable futuristic 3D video according to the device specifications.",
        "proc-step3-title": "Installation & Live Show",
        "proc-step3-desc": "Our technical team arrives at the stage, sets up the hardware, and starts the flawless broadcast at the moment of the show.",
        "events-title": "Staged Events",
        "events-subtitle": "Highlights from exclusive stages and launches amazed by our hologram technology.",
        "event-1-tag": "Launch",
        "event-1-title": "Global Tech Summit",
        "event-1-desc": "Massive 3D hologram show prepared for the next-generation hardware introduction.",
        "event-2-tag": "Stage Show",
        "event-2-title": "Neon Future Festival",
        "event-2-desc": "Interactive light and hologram show working in sync with DJ performance.",
        "event-3-tag": "Corporate Expo",
        "event-3-title": "Auto-Motion 2024",
        "event-3-desc": "Presentation of floating 3D vehicle models at the automotive giant's booth.",
        "btn-view-all": "View More Projects",
        "sec-faq-title": "Frequently Asked Questions",
        "faq-q1": "Is it clearly visible in daylight or bright environments?",
        "faq-a1": "Yes, because our devices feature high-lumen industrial LEDs, they provide an extremely bright and clear display even in highly illuminated indoor spaces like fairs and launches.",
        "faq-q2": "Can we turn our own company logo into a hologram?",
        "faq-a2": "Absolutely. Our 3D design team prepares your corporate logo or 3D product models in the appropriate system format and uploads them to the fans on the event day.",
        "faq-q3": "What safety measures are provided?",
        "faq-a3": "We place transparent plexiglass protection shields around the fans in event areas. This prevents visitors from touching the blades and ensures maximum safety.",
        "proj-title": "Our Projects & References",
        "proj-subtitle": "Futuristic shows and corporate integrations we have realized so far.",
        "filter-all": "All",
        "filter-fuar": "Exhibition Booths",
        "filter-lansman": "Launches",
        "filter-festival": "Concert / Festival",
        "about-title": "About Us",
        "about-subtitle": "We bring the future of display technologies to today's events.",
        "about-vision-title": "Our Vision & Mission",
        "about-vision-text": "By taking a leading role in propeller LED hologram technology, we aim to carry the visual bond that brands and organizations establish with their audiences to a completely different dimension. Breaking the boundaries of ordinary screens, we design mesmerizing 3D experiences suspended in mid-air.",
        "about-info-title": "Corporate Information",
        "form-title": "Proposal Request Form",
        "form-subtitle": "Get a price quote for our futuristic hologram solutions for your project or event.",
        "lbl-name": "Full Name / Company Name",
        "lbl-email": "Email Address",
        "lbl-phone": "Phone Number",
        "lbl-event-type": "Event Type",
        "lbl-date": "Event Date",
        "lbl-hologram-size": "Desired Display Size",
        "lbl-event-location": "Event Location (City)",
        "lbl-event-duration": "Event Duration",
        "lbl-notes": "Special Notes / Project Details",
        "btn-send": "Send Proposal Request",
        "opt-select": "Select...",
        "opt-size-desktop": "Desktop / Product Size (~50 cm)",
        "opt-size-human": "Human Scale / Standard (~1.5 m - 2 m)",
        "opt-size-stage": "Stage / Massive Scale (3 m and above)",
        "opt-duration-1": "1 Day",
        "opt-duration-2-4": "2-4 Days (During Expo)",
        "opt-duration-weekly": "1 Week or More",
        "opt-other": "Other / Custom Event",
        "msg-success-title": "Your Request Has Been Received!",
        "msg-success-desc": "Our expert team will contact you as soon as possible.",
        "btn-view-projects": "View Our Work",
        "footer-slogan": "Futuristic visual experiences that transcend dimensions. We bring your events together with the technology of the future, creating unforgettable 3D illusions on your stage.",
        "footer-nav-title": "Quick Links",
        "footer-services-title": "Services",
        "footer-svc-1": "Exhibition Booth Rental",
        "footer-svc-2": "Product Launch",
        "footer-svc-3": "Concert & Festival Shows",
        "footer-svc-4": "Corporate Events",
        "footer-contact-title": "Contact",
        "footer-address": "Yeniköy Mahallesi, Vatan Cd. No:73E, 41275 Başiskele/Kocaeli",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Use",
        "footer-rights": "All Rights Reserved.",
        "placeholder-name": "E.g. John Smith / Company X",
        "placeholder-email": "john@company.com",
        "placeholder-phone": "+90 532 XXX XX XX",
        "placeholder-location": "E.g. Istanbul, Ankara...",
        "placeholder-notes": "Add any additional details about your project..."
    }
};

// ==========================================================================
// 2. TEMA DEĞİŞTİRME SİSTEMİ (Ay / Güneş İkonu)
// ==========================================================================
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const bodyElement = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    bodyElement.classList.add('light-theme');
}

function syncThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    if (bodyElement.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('light-theme');
        localStorage.setItem('theme', bodyElement.classList.contains('light-theme') ? 'light' : 'dark');
        syncThemeIcon();
    });
}

// ==========================================================================
// 3. DİNAMİK ÇOKLU DİL MOTORU
// ==========================================================================
const btnTr = document.getElementById('btn-tr');
const btnEn = document.getElementById('btn-en');

let currentLang = localStorage.getItem('lang') || 'tr';

document.addEventListener('DOMContentLoaded', () => {
    updateLanguageDOM(currentLang);
    initFaqAccordion();
    syncThemeIcon();
    initMobileMenu();
});

if (btnTr) btnTr.addEventListener('click', () => updateLanguageDOM('tr'));
if (btnEn) btnEn.addEventListener('click', () => updateLanguageDOM('en'));

function updateLanguageDOM(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    if (btnTr && btnEn) {
        if (lang === 'tr') {
            btnTr.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'tr';
        } else {
            btnEn.classList.add('active');
            btnTr.classList.remove('active');
            document.documentElement.lang = 'en';
        }
    }

    const currentTranslations = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (currentTranslations && currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (currentTranslations && currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
}

// ==========================================================================
// 3b. MOBİL HAMBURGER MENÜ
// ==========================================================================
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navWrapper = document.querySelector('.nav-wrapper');
    if (!toggle || !navWrapper) return;

    toggle.addEventListener('click', () => {
        const isOpen = navWrapper.classList.toggle('active');
        toggle.classList.toggle('active', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
    });

    navWrapper.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navWrapper.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', false);
        });
    });

    document.addEventListener('click', (e) => {
        if (!navWrapper.contains(e.target) && !toggle.contains(e.target)) {
            navWrapper.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', false);
        }
    });
}

// ==========================================================================
// 4. SSS AKORDEON MEKANIZMASI
// ==========================================================================
function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (!faqQuestions.length) return;

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            const isOpen = currentItem.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// 5. GLOBAL SCROLL DINLEYICISI (PERVANE & DUMAN MAKINESI)
// ==========================================================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Pervanenin yukarı kayma/solma hareketi için CSS değişkenini günceller
    document.documentElement.style.setProperty('--scroll', scrollTop);

    // Canlı duman odası kontrolü
    const leftMachine = document.querySelector('.machine-left');
    const rightMachine = document.querySelector('.machine-right');

    if (leftMachine && rightMachine) {
        if (scrollTop > 150) {
            leftMachine.classList.add('active');
            rightMachine.classList.add('active');
            
            // Yoğunluk çarpanı ve üst limit
            const dynamicOpacity = Math.min((scrollTop - 150) * 0.002, 0.45);
            leftMachine.style.opacity = dynamicOpacity;
            rightMachine.style.opacity = dynamicOpacity;
        } else {
            leftMachine.classList.remove('active');
            rightMachine.classList.remove('active');
            leftMachine.style.opacity = 0;
            rightMachine.style.opacity = 0;
        }
    }
});

// B. Kartların Ekrana Girince Soft Belirme Motoru
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});