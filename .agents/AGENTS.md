# Reguli de Dezvoltare, Control Git și Arhitectură pentru Agenți AI (AGENTS.md)
# Proiect: B2B-Email-Engine-v2 — Sistem Automatizat de Extragere Lead-uri și Trimitere Email B2B

Acest fișier conține directive OBLIGATORII pentru toți asistenții și agenții de codare (Antigravity, Gemini CLI, Claude, Copilot) care lucrează în acest repository.

---

## 🚫 Regula de Aur: Fără Fișiere Interne de Asistent, Secrete sau Baze Locale pe GitHub

Când efectuezi operațiuni Git (`git add`, `git commit`, `git push`), **ESTE STRICT INTERZIS** să incluzi sau să împingi pe GitHub:
1. **Foldere de asistent / AI**: `.agents/`, `.artifacts/`, `.gemini/`
2. **Foldere și fișiere de IDE**: `.idea/`, `.vscode/`, `*.iml`, `local.properties`
3. **Build artifacts și cache**: `build/`, `.gradle/`, `.cxx/`, `bin/`, `obj/`, `dist/`, `__pycache__/`, `*.pyc`
4. **Baze de date, fișiere confidențiale și credențiale**: `.env`, `.env.*`, `*.fdb`, `*.gdb`, `*.sqlite`, `*.db`, backup-uri locale. **NICIODATĂ nu comite `git add .` sau `git add -A` orbește!**

Pe GitHub trebuie să ajungă **DOAR codul sursă al programului**, resursele aplicației, testele și documentația proiectului.

### 🛡️ Instrucțiuni de Verificare Înainte de Orice Commit / Push
Înainte de a comite sau împinge modificări:
1. Verifică întotdeauna `git status` pentru a te asigura că nu există fișiere din folderele interzise pregătite pentru commit.
2. Dacă un fișier intern din greșeală a fost urmărit de Git, folosește comanda:
   ```bash
   git rm -r --cached .agents .artifacts .idea .vscode .gemini .env
   ```
   pentru a-l scoate din indexul Git fără a-l șterge de pe disc.
3. Asigură-te că fișierul `.gitignore` conține întotdeauna aceste excluderi.

---

## 🤖 Regula Obligatorie: Selectarea Modelului AI în Funcție de Rol, Putere de Procesare și Cotă (Stop & Recomandă)

Înainte de a începe **ORICE** implementare de cod, refactorizare majoră sau modificare tehnică, **ESTE STRICT INTERZIS să începi scrierea codului până când nu prezinți utilizatorului evaluarea complexității, domeniul tehnic și recomandarea exactă a modelului + treapta de putere**.

### 📋 Catalogul Modelelor AI, Rolul Lor și Puterea de Procesare:

| Model AI | Trepte de Putere | Rol & Specializare Principală | Regim de Cotă |
| :--- | :--- | :--- | :--- |
| **1. Gemini 4 Hydrogen** | `Low`, `Medium`, `High`, `XHigh` | **Sprinter & Execuție Rapidă**: latență minimă; ideal pentru editări punctuale, configurări, regex, scripturi scurte, fix-uri rapide și comenzi CLI. | 🟢 Cotă Zilnică (Reset la câteva ore) |
| **2. Gemini 4 Neon** | `Low`, `Medium`, `High`, `XHigh` | **Workhorse Full-Stack (Producție Zilnică)**: echilibrul ideal viteză/inteligență; excelent pentru Python/FastAPI, Kotlin, endpoint-uri REST, sincronizări, debugging și teste unitare. | 🟢 Cotă Zilnică (Reset la câteva ore) |
| **3. Gemini 4 Argon** | `Low`, `Medium`, `High` | **Arhitect Suprem & Deep Reasoning (Flagship Pro)**: sinteză arhitecturală grea, concurență/multithreading, tranzacții DB critice (SQLite WAL / Room / Firebird), securitate și bug-uri ascunse. | 🔴 Cotă Săptămânală (A se folosi strategic!) |
| **4. Orchestrator (Neon)** | *Auto-Orchestrare* | **Coordonator Rapid Multi-Modul**: sparge task-uri mari în pași logici și modifică sincronizat mai multe straturi (DB + Backend + Frontend) pe cota zilnică. | 🟢 Cotă Zilnică (Reset la câteva ore) |
| **5. Orchestrator (Argon)** | *Auto-Orchestrare Pro* | **Arhitect Șef & Coordonator Sisteme Critice**: orchestrare de nivel maxim pentru reorganizări masive de arhitectură și audituri sistemice cap-coadă. | 🔴 Cotă Săptămânală (A se folosi strategic!) |
| **6. Claude Sonnet 5.5** | `Low`, `Medium`, `High` | **Specialist UI/UX, Frontend & Cod Chirurgical**: urmează strict regulile de design (Tabler Light, HTML/CSS/JS, Jetpack Compose), refactorizări curate fără regresii și componente interactive. | 🟢 Cotă Zilnică Separată (Bazin Anthropic) |
| **7. Claude Opus 5.5** | `Low`, `Medium`, `High` | **Maestru Arhitectură Fină, UI/UX Complex & Copywriting**: calitate enterprise maximă, redesign-uri vizuale complete, explicații/tooltips în limba română, logică de business complexă și edge-cases. | 🟢 Cotă Zilnică Separată (Bazin Anthropic) |
| **8. Gemini 3.8 Flash** | `Low`, `Medium`, `High` | **Model Economic de Rezervă**: sarcini mecanice de rutină, verificări sintactice, curățenie fișiere și actualizări simple de documentație. | 🟢 Cotă Zilnică (Reset la câteva ore) |

### ⚙️ Ghidul Treptelor de Putere (Reasoning / Thinking Budget):
- **`Low` (Gândire Minimă)**: Execuție instantanee pentru modificări clare de 1–10 linii unde soluția este deja cunoscută.
- **`Medium` (Echilibrat)**: Analizează contextul fișierelor directe și implementează rapid (optim pentru ~70% din task-urile curente).
- **`High` (Gândire Profundă)**: Planificare internă completă, verificare dependențe încrucișate și prevenire regresii (obligatoriu pentru UI/UX complex, arhitectură și migrări).
- **`XHigh` (Gândire Extremă — pe Neon/Hydrogen)**: Verificare exhaustivă a tuturor ramurilor logice, oferind putere apropiată de clasa Argon fără a consuma cota săptămânală.

### 🚦 Matrice de Recomandare în Funcție de Complexitate și Domeniu:
- 🟢 **Complexitate Scăzută (Low — Configurări, Texte, Fix-uri Mici 1-10 linii)**:
  - *Recomandare Principală*: **Gemini 4 Hydrogen (Low sau Medium)** — execuție instantanee.
  - *Alternativă*: **Gemini 3.8 Flash (Low sau Medium)** sau **Claude Sonnet 5.5 (Low)**.
- 🟡 **Complexitate Medie (Medium — Endpoint-uri API, Formulare, Ecrane UI, Teste Unitare, Scripturi)**:
  - *Pentru Backend / Logică / Teste*: **Gemini 4 Neon (Medium sau High)** sau **Gemini 4 Hydrogen (High)**.
  - *Pentru UI/UX / CSS / Compose*: **Claude Sonnet 5.5 (Medium sau High)**.
- 🔴 **Complexitate Ridicată / Arhitecturală (High / Critical — Redesign UI/UX Major, Concurență, Baze de Date, Securitate)**:
  - *Pentru Redesign UI/UX, Ergonomie, Frontend Complex & Explicații Utilizator*: **Claude Opus 5.5 (High)** sau **Claude Sonnet 5.5 (High)** *(protejează cota săptămânală Argon și oferă precizie vizuală maximă)*.
  - *Pentru Logică Full-Stack Grea pe Cotă Zilnică*: **Gemini 4 Neon (High sau XHigh)** sau **Orchestrator (Neon)**.
  - *Pentru Arhitectură Critică de Sistem, Concurență & Persistență Tranzacțională*: **Gemini 4 Argon (High)**, **Claude Opus 5.5 (High)** sau **Orchestrator (Argon)**.

### 🛑 Protocol Obligatoriu de Execuție (Stop & Confirm):
Înainte de a rula orice unealtă de editare a codului sau scriere de fișiere de implementare:
1. **Analizează cerința**, clasifică **Complexitatea (Scăzută / Medie / Ridicată)** și **Domeniul (UI/UX, Backend, DB, Arhitectură)**.
2. **Prezintă explicit utilizatorului**:
   > „Această sarcină este de tip **[Domeniu]** și are o complexitate **[Scăzută / Medie / Ridicată]**.
   > • **Model Recomandat:** **[Nume Model + Treaptă Putere]** — *[Motivul tehnic: de ce este cel mai bun pe acest rol și cum optimizează cota]*.
   > • **Alternativă Recomandată:** **[Model Alternativ + Treaptă Putere]**.
   > Confirmați modelul pentru a începe implementarea?”
3. **NU începe implementarea** până când utilizatorul nu confirmă sau ajustează selecția modelului.

---

## 📐 Reguli Universale de Inginerie Software & Conduită

1. **Think Before Coding**: Înțelege codul existent înainte de a scrie cod nou. Identifică cea mai mică modificare sigură.
2. **Preserve Existing Behaviour**: Nu modifica comportamentul existent dacă cerința nu o cere expres. Păstrează backward-compatibility.
3. **Preserve Previous Implementations**: Când înlocuiești o logică existentă, marchează varianta anterioară ca `[OLD]` sau `[LEGACY]`. Nu șterge orbește.
4. **Smallest Safe Change**: Modifică doar ce este strict necesar. Nu face refactorizări cosmetice pe cod neasociat task-ului curent.
5. **Do Not Guess**: Dacă o cerință este ambiguă, oprește-te și cere clarificări utilizatorului. Nu inventa cerințe.
6. **No Silent Failures**: Nu înghiți excepții în gol (`except: pass`). Erorile trebuie logate și comunicate predictibil.
7. **Clean Working Tree**: La finalul oricărui task, șterge fișierele temporare (`*.tmp`, dump-uri de memorie, scripturi de scratch).
8. **Prompt Guard & Aliniere (PROMPT.md)**: Când utilizatorul trimite o cerință rapidă, ambiguă sau cu formulări eliptice/typos, aplică protocolul din [PROMPT.md](file:///e:/Drivere%20Imprimante/Kyocera/Document/readme/B2B-Email-Engine-v2/PROMPT.md). Decodifică intenția, propune varianta optimizată și cere confirmarea înainte de a face modificări pe disc.
9. **Persistența Memoriei (MEMORY.md)**: La fiecare modificare arhitecturală majoră, adăugare de modul nou sau rezolvare de bug critic, asistentul este obligat să actualizeze [MEMORY.md](file:///e:/Drivere%20Imprimante/Kyocera/Document/readme/B2B-Email-Engine-v2/MEMORY.md).

---

# 🚀 Reguli Specifice Domeniului: B2B Outbound Email Marketing & Lead Mining

## 1. 🔒 Strict Outbound Email Lock (Blocaj Trimitere în Masă)
- **ESTE STRICT INTERZISĂ trimiterea oricărui email extern către lead-uri/companii până când proiectul nu este 100% testat și aprobat explicit de utilizator.**
- Orice testare SMTP se face **EXCLUSIV către adresele de test autorizate ale dezvoltatorului**:
  - `cipriansimi@gmail.com`
  - `s_cyp@yahoo.com`
- Niciun asistent AI sau script nu are voie să pornească trimiterea în producție fără comanda expresă: *"Proiectul este finalizat, se poate începe trimiterea"*.

## 2. 🛡️ Protecția Reputației SMTP & Drip Rate Limits
- **Throttling Obligatoriu**: Nu trimite niciodată emailuri în rafală concurentă. Trimiterea se face exclusiv secvențial, cu timpi de așteptare randomizați (jitter) între mesaje (ex: 45 - 90 secunde).
- **Plafoane Zilnice**: Respectă plafoanele stricte de încălzire (warmup) și volum zilnic configurate în `.env` (ex: max 30-50 emailuri/zi/cont la început).
- **Oprire Automată la Bounce**: Dacă rata de bounce (adrese inexistente) depășește 2%, campania trebuie oprită automat pentru igienizarea bazei de date.

## 3. 🔍 Igienizarea Datelor & Verificare Prealabilă a Lead-urilor
- Fiecare adresă de email colectată din surse publice (ex: ANOFM, site-uri web) trebuie validată sintactic și verificată pentru existența înregistrării MX înainte de adăugarea în coada de trimitere.
- Deduplicare strictă: o companie sau un domeniu nu trebuie să primească mai mult de un mesaj introductiv în aceeași campanie.

## 4. 📜 Conformitate Anti-Spam & Dezabonare
- Fiecare email trimis trebuie să conțină antetul `List-Unsubscribe` și un link/instrucțiune clară de dezabonare (Opt-Out).
- Adresele care solicită dezabonarea trebuie salvate imediat într-o listă neagră (`blacklist / unsubscribed`) imutabilă.
- Păstrează întotdeauna o variantă text simplu (Plain Text) alături de varianta HTML pentru scor maxim de livrabilitate (SpamAssassin < 1.0).

---

## 📋 Checklist de Finalizare (Definition of Done)

Un task **NU este considerat terminat** până când nu sunt îndeplinite toate punctele:
- [ ] Cerința este implementată complet și verificată.
- [ ] Codul existent nu a fost modificat inutil sau rescris fără motiv.
- [ ] Testele existente și noile teste de regresie trec cu succes.
- [ ] Backward-compatibility este păstrată pentru interfețe, API-uri și baze de date.
- [ ] Tratarea erorilor este explicită (fără silent fallback).
- [ ] Logica specifică de domeniu este respectată riguros.
- [ ] Modificările majore și deciziile arhitecturale au fost înregistrate în MEMORY.md.
- [ ] Nu există credențiale, chei de API sau fișiere confidențiale în cod sau comise pe Git.
- [ ] Comanda `git status` este curată, respectând Regula de Aur Git.

