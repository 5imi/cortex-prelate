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

## 🤖 Regula Obligatorie: Selectarea Modelului AI în Funcție de Complexitate (Stop & Recomandă)

Înainte de a începe **ORICE** implementare de cod, refactorizare majoră sau modificare tehnică, **ESTE STRICT INTERZIS să începi scrierea codului până când nu prezinți utilizatorului evaluarea complexității și nu îi spui exact ce model AI să folosească**.

### 📋 Lista Modelelor AI Disponibile:
1. **Gemini 3.8 Flash** (Low, Medium sau High)
2. **Gemini 3.7 Flash** (Low, Medium sau High)
3. **Gemini 3.6 Flash** (Low, Medium sau High)
4. **Gemini 3.1 Pro** (Low sau High)
5. **Claude Sonnet 4.6 (Thinking)**
6. **Claude Opus 4.6 (Thinking)**
7. **GPT-OSS 120B (Medium)**

### 🚦 Matrice de Decizie în Funcție de Complexitate:
- 🟢 **Complexitate Scăzută (Low)**:
  - Modificări simple de configurare, mesaje, corecturi de text/șabloane, regex-uri minore, ajustări punctuale de 1-5 linii de cod.
  - *Modele Recomandate*: Gemini 3.8 Flash (Low sau Medium), Gemini 3.6 Flash (Low sau Medium), GPT-OSS 120B (Medium)
- 🟡 **Complexitate Medie (Medium)**:
  - Scripturi utilitare noi, integrări de API-uri REST simple, adăugare endpoint nou, teste unitare noi, optimizări de parsare/filtrare.
  - *Modele Recomandate*: Gemini 3.8 Flash (High), Gemini 3.7 Flash (High), Gemini 3.1 Pro (Low)
- 🔴 **Complexitate Ridicată / Arhitecturală (High / Critical)**:
  - Refactorizări majore de arhitectură, concurență/multithreading/multi-proces, persistență tranzacțională critică, modificări de mașini de stări sau algoritmi de bază.
  - *Modele Recomandate*: Claude Sonnet 4.6 (Thinking), Claude Opus 4.6 (Thinking), Gemini 3.1 Pro (High)

### 🛑 Protocol Obligatoriu de Execuție (Stop & Confirm):
Înainte de a rula orice unealtă de editare a codului sau scriere de fișiere de implementare:
1. **Analizează cerința** și clasifică nivelul de complexitate (Scăzută / Medie / Ridicată).
2. **Prezintă explicit utilizatorului**:
   > „Această sarcină are o complexitate **[Scăzută / Medie / Ridicată]**. Pentru o execuție optimă și sigură, vă recomand să comutați pe modelul: **[Numele Modelului din listă]**. Confirmați comutarea pentru a începe implementarea?”
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

