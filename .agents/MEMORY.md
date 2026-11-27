# Jurnal de Memorie Arhitecturală și Context Activ (MEMORY.md)
# Proiect: cortex-prelate

Acest fișier este un **registru viu (living ledger)** al arhitecturii, deciziilor tehnice și stării curente a proiectului cortex-prelate. Este sincronizat pe Git pentru a asigura continuitatea contextului între sesiuni de lucru, dezvoltatori și agenți AI.

---

## 📌 Regula de Menținere a Memoriei
> **Obligatoriu pentru orice Agent AI / Dezvoltator:**  
> După orice modificare arhitecturală majoră, rezolvare de bug critic sau adăugare de modul nou testat cu succes, actualizați această memorie înainte de a rula git commit.

---

## 🚀 Starea Curentă a Sistemului

* **Tip Proiect:** Modul comercial si portal ofertare productie prelate si corturi industriale
* **Stivă Tehnologică:** Python / Web, Template Engine
* **Design UI:** Exclusiv Temă Deschisă (Light Theme) — Slate-50 / Carduri Albe / Contrast ridicat

---

## 📜 Jurnal Cronologic de Modificări

### [2026-10-29] Standardizare Guvernanță & Memorie Tehnică
- Actualizat .agents/AGENTS.md conform standardului global.
- Adăugat .agents/PROMPT.md (ghid Prompt Guard & Auto-Prompting).
- Inițializat .agents/MEMORY.md ca registru viu sincronizat cu Git.
- Configurat .gitignore cu excepția !.agents/*.md.


### [2026-11-27] Sistem Bilingv Complet RO | EN (`js/i18n.js`)
- Adăugat comutator compact `RO | EN` în antet (`.lang-switcher` în `index.html` + `css/style.css`), vizibil pe desktop și mobil (`1280px` până la `320px`, `overflow = 0px`, `lang_in_view = True`, `mob_in_view = True`).
- Creat [js/i18n.js](file:///D:/Proiecte/cortex-prelate/js/i18n.js): traduce toate cele 16 secțiuni (299/299 selectori verificați), atribute `<title>`, `<meta description>`, `<html lang>`, linkurile WhatsApp precompletate și Google Maps (`hl=en`/`hl=ro`), cu persistență în `localStorage` (`cortexLang`) și suport `?lang=en` / `?lang=ro`.
- Integrat evenimentul `cortex:langchange` în calculatorul de ofertă din [js/main.js](file:///D:/Proiecte/cortex-prelate/js/main.js) (`mp`/`sqm`, timpi de execuție și mesaj WhatsApp bilingv).
- Teste: `node --check` pe `js/i18n.js` și `js/main.js` (`0` erori), Playwright pe `1280×800`, `768×1024`, `375×812` și `320×568` (`PASS`, `299/299` selectori, `ro_restored = True`).
