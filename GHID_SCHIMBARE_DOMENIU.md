# 🔄 Ghid Complet: Schimbare Domeniu

## 📋 Lista Completă de Modificări

Când îți iei un domeniu nou (ex: `www.cortexprodcom.ro` sau `cortex-prelate.ro`), trebuie să actualizezi **16 locuri** în total.

---

## 1️⃣ **index.html** - 7 modificări

### A. Canonical URL (linia ~21)
```html
<!-- ÎNAINTE -->
<link rel="canonical" href="https://5imi.github.io/cortex-prelate/">

<!-- DUPĂ (exemplu cu domeniu nou) -->
<link rel="canonical" href="https://www.cortexprodcom.ro/">
```

### B. Open Graph Image (linia ~27)
```html
<!-- ÎNAINTE -->
<meta property="og:image" content="https://5imi.github.io/cortex-prelate/images/card_truck_new.webp">

<!-- DUPĂ -->
<meta property="og:image" content="https://www.cortexprodcom.ro/images/card_truck_new.webp">
```

### C. Open Graph URL (linia ~30)
```html
<!-- ÎNAINTE -->
<meta property="og:url" content="https://5imi.github.io/cortex-prelate/">

<!-- DUPĂ -->
<meta property="og:url" content="https://www.cortexprodcom.ro/">
```

### D. Twitter Card Image (linia ~39)
```html
<!-- ÎNAINTE -->
<meta name="twitter:image" content="https://5imi.github.io/cortex-prelate/images/card_truck_new.webp">

<!-- DUPĂ -->
<meta name="twitter:image" content="https://www.cortexprodcom.ro/images/card_truck_new.webp">
```

### E. Schema.org JSON-LD - Image (linia ~72)
```html
<!-- ÎNAINTE -->
"image": "https://5imi.github.io/cortex-prelate/images/logo.webp",

<!-- DUPĂ -->
"image": "https://www.cortexprodcom.ro/images/logo.webp",
```

### F. Schema.org JSON-LD - URL (linia ~73)
```html
<!-- ÎNAINTE -->
"url": "https://5imi.github.io/cortex-prelate/",

<!-- DUPĂ -->
"url": "https://www.cortexprodcom.ro/",
```

### G. Form Submit Redirect (linia ~561)
```html
<!-- ÎNAINTE -->
<input type="hidden" name="_next" value="https://5imi.github.io/cortex-prelate/?status=success">

<!-- DUPĂ -->
<input type="hidden" name="_next" value="https://www.cortexprodcom.ro/?status=success">
```

---

## 2️⃣ **robots.txt** - 2 modificări

### A. Comentariu header (linia 1)
```txt
# ÎNAINTE
# robots.txt for https://5imi.github.io/cortex-prelate/

# DUPĂ
# robots.txt for https://www.cortexprodcom.ro/
```

### B. Sitemap URL (linia 29)
```txt
# ÎNAINTE
Sitemap: https://5imi.github.io/cortex-prelate/sitemap.xml

# DUPĂ
Sitemap: https://www.cortexprodcom.ro/sitemap.xml
```

---

## 3️⃣ **sitemap.xml** - 4 modificări

### A. Main page (linia 9)
```xml
<!-- ÎNAINTE -->
<loc>https://5imi.github.io/cortex-prelate/</loc>

<!-- DUPĂ -->
<loc>https://www.cortexprodcom.ro/</loc>
```

### B. Privacy page (linia 17)
```xml
<!-- ÎNAINTE -->
<loc>https://5imi.github.io/cortex-prelate/privacy.html</loc>

<!-- DUPĂ -->
<loc>https://www.cortexprodcom.ro/privacy.html</loc>
```

### C. Terms page (linia 25)
```xml
<!-- ÎNAINTE -->
<loc>https://5imi.github.io/cortex-prelate/terms.html</loc>

<!-- DUPĂ -->
<loc>https://www.cortexprodcom.ro/terms.html</loc>
```

### D. Cookies page (linia 33)
```xml
<!-- ÎNAINTE -->
<loc>https://5imi.github.io/cortex-prelate/cookies.html</loc>

<!-- DUPĂ -->
<loc>https://www.cortexprodcom.ro/cookies.html</loc>
```

---

## 4️⃣ **privacy.html** - 1 modificare

### Canonical URL (linia ~9)
```html
<!-- ÎNAINTE -->
<link rel="canonical" href="https://5imi.github.io/cortex-prelate/privacy.html">

<!-- DUPĂ -->
<link rel="canonical" href="https://www.cortexprodcom.ro/privacy.html">
```

---

## 5️⃣ **terms.html** - 1 modificare

### Canonical URL (linia ~9)
```html
<!-- ÎNAINTE -->
<link rel="canonical" href="https://5imi.github.io/cortex-prelate/terms.html">

<!-- DUPĂ -->
<link rel="canonical" href="https://www.cortexprodcom.ro/terms.html">
```

---

## 6️⃣ **cookies.html** - 1 modificare

### Canonical URL (linia ~9)
```html
<!-- ÎNAINTE -->
<link rel="canonical" href="https://5imi.github.io/cortex-prelate/cookies.html">

<!-- DUPĂ -->
<link rel="canonical" href="https://www.cortexprodcom.ro/cookies.html">
```

---

## ✅ Checklist Final

- [ ] **index.html** - 7 modificări (canonical, OG tags, Schema.org, form redirect)
- [ ] **robots.txt** - 2 modificări (comentariu + sitemap URL)
- [ ] **sitemap.xml** - 4 modificări (toate URL-urile)
- [ ] **privacy.html** - 1 modificare (canonical)
- [ ] **terms.html** - 1 modificare (canonical)
- [ ] **cookies.html** - 1 modificare (canonical)

**TOTAL: 16 modificări în 6 fișiere**

---

## 🚀 Pași Suplimentari După Schimbare

1. **Google Search Console:**
   - Adaugă noul domeniu ca proprietate
   - Trimite noul sitemap.xml
   - Verifică indexarea

2. **Redirect 301 (IMPORTANT!):**
   - Configurează redirect 301 de la domeniul vechi la cel nou
   - Asta păstrează SEO-ul și linkurile externe

3. **Verificare:**
   - Testează toate linkurile
   - Verifică că imaginile se încarcă corect
   - Testează formularul de contact

4. **Actualizare Linkuri Externe:**
   - Facebook page
   - Google Business Profile
   - Alte directoare online

---

## 💡 Sfat Pro

**Folosește "Find & Replace" în editor:**
- Caută: `https://5imi.github.io/cortex-prelate`
- Înlocuiește cu: `https://www.cortexprodcom.ro` (sau domeniul tău nou)
- Verifică manual fiecare înlocuire!

---

## ⚠️ ATENȚIE

- **Nu uita** să actualizezi și în **manifest.json** dacă ai PWA
- **Nu uita** să actualizezi linkurile în **Google Analytics** (dacă folosești)
- **Nu uita** să actualizezi linkurile în **Google Tag Manager** (dacă folosești)

