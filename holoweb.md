HoloTR - PROJECT CONTEXT, INSTRUCTIONS & SKILLS

Bu kılavuz, projenin mevcut ön yüz mimarisini, tasarım standartlarını, hassas responsive (mobil/tablet) kurallarını, geliştirme süreçlerinde uyulması gereken kırmızı çizgileri ve Claude Code Özel Yetenek şablonlarını tanımlar. Claude Code veya diğer AI asistanları tarafından yapılacak tüm güncellemelerde bu yapıya ve yeteneklere sadık kalınmalıdır.

🛠️ 1. CLAUDE CODE SKILLS & INITIALIZATION

Claude Code'un projede tam bir uzman gibi çalışabilmesi için aşağıdaki yetenek şablonları (skills) önceden tanımlanmıştır ve projenin başlangıcında çalıştırılmalıdır:

# 1. Yaratıcı Ön Yüz Tasarımı ve Siber Estetik Yeteneği
npx claude-code-templates@latest --skill creative-design/frontend-design

# 2. Kıdemli Ön Yüz Mimarı ve Temiz Kod Standartları Yeteneği
npx claude-code-templates@latest --skill development/senior-frontend


Bu şablonlar sayesinde Claude, projedeki tüm kararlarında hem sanatsal ve siber estetiği koruyacak hem de en temiz, optimize edilmiş ön yüz kod mimarisini uygulayacaktır.

2. PROJE GENEL ÖZETİ

Marka: HoloTR (HOLO<span>TR</span>)
Sektör: 3 Kollu LED Hologram Gösteri ve Kiralama Hizmetleri (Fütüristik / Siber Ajans)

Teknoloji Yapısı: HTML5, CSS3 (Custom Variables, CSS Transitions, Keyframe Animations), Vanilla JavaScript (ES6+). Tamamen statik ve ön yüz (front-end) odaklıdır.

Dil Desteği: Dinamik i18n dil motoru devrededir (tr varsayılan, en alternatif sürümdür).

Tema Yönetimi: Dinamik Koyu (Varsayılan - dark-theme) ve Açık (light-theme) tema mevcuttur.

3. ARTIK MATRİS VE TASARIM ESASLARI

A. CSS Değişkenleri ve Tema Adaptasyonu (css/style.css)

Tüm renkler ve gölgeler CSS değişkenleri üzerinden yönetilir. Temalar arası geçişte bu değişkenler otomatik olarak ezilir:

Koyu Tema (:root): Arka plan #0a0a0f, Metin #f0f0f5, Siber Mavi (Accent) #00f3ff, Plazma Pembe (Plasma) #ff0055.

Açık Tema (body.light-theme): Arka plan #f4f6f9, Metin #1a1a24, Güçlü Okunabilir Mavi #0055cc, Mat Koyu Pembe #e6004c.

B. Katman Hiyerarşisi (Z-Index Listesi)

z-index: 1: .hologram-bg-container (Sabit duran ve parallax kayan hologram fan arka planı)

z-index: 2: .cyber-fog (Arka plandaki genel süs sis bulutları)

z-index: 99: .fog-machine (Scroll ile tetiklenen yan dinamik duman makineleri - en önde olmalıdır)

z-index: 1000: .site-header (Ekranın üstünde yüzen Kapsül Navbar)

Kritik Kural: İçerik bölümlerinin (section, .info-section, vb.) ve kartların arka plan renkleri sayfa kaydırılırken arkadaki dumanları ve fanı kapatmaması için her iki temada da background-color: transparent !important; olarak kalmalıdır.

4. KRİTİK BİLEŞENLER VE KOD STANDARTLARI

💊 Kapsül Navbar Sistemi (Sol - Orta - Sağ Dengesi)

Masaüstü görünümde menü elemanları ekranın üzerinde yüzen, köşeleri yuvarlatılmış ve buzlu cam efekti (backdrop-filter: blur(15px)) taşıyan bağımsız bir kapsül (.nav-wrapper) içindedir.

Aktif Sayfa Parlaması (.main-nav a.active): Kullanıcının üzerinde bulunduğu sayfa siber mavi renkte parlar (text-shadow neon efekti) ve altında küçük parlayan siber mavi bir çizgi taşır.

Teklif Al Butonu (.main-nav a.btn-cta): Bu butonun kaba dolgu (background-color) renkleri ve sınır çizgileri (border) tamamen kaldırılmıştır. Yazısı kapkalın (font-weight: 800) ve doğrudan fütüristik plazma pembesi (var(--plasma-color)) rengindedir. Üzerine gelindiğinde (hover) yazının kendisi neon tabela gibi parlar (text-shadow).

HTML Menü Hiyerarşisi (Tüm sayfalarda birebir korunmalıdır):

<header class="site-header">
    <div class="header-inner">
        <div class="logo"><a href="index.html">HOLO<span>TR</span></a></div>
        <nav class="main-nav">
            <div class="nav-wrapper">
                <ul>
                    <li><a href="index.html" class="active" data-i18n="nav-home">Ana Sayfa</a></li>
                    <li><a href="projects.html" data-i18n="nav-projects">Projelerimiz</a></li>
                    <li><a href="about.html" data-i18n="nav-about">Hakkımızda</a></li>
                    <li><a href="contact.html" class="btn-cta" data-i18n="nav-contact">Teklif Al</a></li>
                </ul>
            </div>
        </nav>
        <div class="header-actions">
            <div class="lang-switch">
                <button id="btn-tr">TR</button>
                <button id="btn-en">EN</button>
            </div>
        </div>
    </div>
</header>


Geliştirici Notu: Yeni bir sayfa oluşturulurken ya da mevcut bir sayfa düzenlenirken <div class="header-inner"> yapısı eksiksiz kurulmalıdır. Aksi takdirde logo, menü ve butonlar sola hizalanarak düzen tamamen bozulur.

💨 Dinamik Parallax & Duman Üfleme Motoru (js/main.js & css/animations.css)

Kullanıcı sayfayı aşağı kaydırdıkça JS, window.scrollY değerini alıp kök CSS belgesine --scroll değişkeni olarak atar. Hologram fanı bu parallax değeriyle yukarı doğru süzülerek solar.

Kullanıcı 150px değerinden aşağı indiği anda .machine-left ve .machine-right duman makinelerine otomatik olarak .active sınıfı verilir. Dumanlar ekranın iki yanından içeri fışkırır. Aşağı kaydırma devam ettikçe duman opaklığı dinamik olarak artar (Maksimum 0.45 değerine kilitlenir).

Açık Tema Koruma Ayarı: Beyaz arka planda dumanların şeffaf olup görünmez hale gelmesini önlemek için body.light-theme altında mix-blend-mode: normal !important; ve opaklık 0.25 yapılarak koyu pastel tonlar (rgba mavi ve gül kurusu gölgeler) basılır.

🎬 Sahne Alınan Etkinlikler Alanı (Showcase)

Ana sayfada SSS (FAQ) alanının hemen üzerinde konumlanır. 3 adet öne çıkan etkinlik fütüristik kart mimarisi ve hover efektleriyle sergilenir. En altta projects.html sayfasına yönlendiren .btn-outline ("Daha Fazlasını Gör") butonu bulunur.

📥 Formspree Entegrasyonu (contact.html)

Sunucusuz ve güvenli mail gönderimi için Formspree altyapısına uyumludur.

HTML'deki form <form id="proposalForm" action="https://formspree.io/f/senin_form_kodun" method="POST"> şeklinde güncellenmelidir.

Gönderilen verilerin sağlıklı ulaşması için form içindeki her girdinin (input, select, textarea) benzersiz name="..." niteliği olmak zorundadır.

5. RESPONSIVE (MOBİL/TABLET) TASARIM KURALLARI

Sitenin mobil cihazlarda yatayda kayma (horizontal scroll) yapmaması ve fütüristik nizamını koruması için şu kurallar esastır:

A. Mobil Kapsül Navbar Çözümü (Max-Width: 768px)

Küçük ekranlarda logo ve sağdaki dil değiştirici yan yana hizalı kalırken, orta alandaki .nav-wrapper dikey bir akışa (flex-direction: column) dönüşerek dikeyde listelenir ve mobil cihazın üst sınırından aşağı doğru yumuşakça kayar.

B. 1000px Genişliğindeki Pervanenin Mobil Ölçeklenmesi

Pervanenin (.hologram-fan) fiziksel boyutu 1000px olduğundan mobilde taşma yapmaması için piksel boyutuna dokunulmaz. Bunun yerine CSS transform: scale() mekanizması ile mobil og tablet ekranlarına göre orantılı şekilde küçültülür:

768px ve altı ekranlar için: transform: scale(0.4) !important;

480px og altı ekranlar için: transform: scale(0.3) !important;

.hologram-bg-container üzerinde overflow: hidden; kullanılarak görünmeyen alanların taşması kesin olarak engellenir.

C. Grid ve Flex Yapılarının Tek Kolona Düşmesi

.info-grid, .events-grid ve .projects-grid alanları mobil genişliklerde tek kolona (grid-template-columns: 1fr;) dönmelidir.

Sayfa footer alanı .site-footer mobilde dikey düzene geçmeli ve tüm yazılar ortalanmalıdır.

Hero ana başlığı .hero-content h1 mobilde font-size: 32px seviyesine çekilerek kırılmalar önlenmelidir.

6. GELİŞTİRİCİLER İÇİN TAVSİYELER VE PROMPT REHBERİ

Sitede herhangi bir güncelleme yaparken:

Dil motorunun bozulmaması için eklenen her yeni metni js/main.js dosyasındaki translations.tr ve translations.en nesnelerine işleyip HTML tarafında data-i18n ataması yap.

Link ve menü elemanlarında .header-inner og .nav-wrapper hiyerarşisini bozma.

CSS animasyonlarını css/animations.css dosyasına, genel yapısal stilleri ise css/style.css dosyasına yaz.

Yazılan kodların hem koyu temada hem de açık temada (body.light-theme) kusursuz okunabilirliğe ve kontrasta sahip olduğunu kontrol et.

Eklenen veya değiştirilen tüm elemanların en az 320px genişliğe kadar yatayda kaydırma barı (horizontal scrollbar) çıkarmadan tam uyumlu çalıştığını doğrula.

eof
