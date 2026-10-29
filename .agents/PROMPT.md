# Protocol de Procesare, Corectare și Optimizare a Prompturilor (PROMPT.md)
# Proiect: B2B-Email-Engine-v2

Acest document stabilește regulile și mecanismele prin care asistentul AI interceptează, corectează și optimizează cerințele introduse rapid sau incomplet de către utilizator.

---

## 🎯 Scopul Acestui Ghid

Când se lucrează în ritm alert, mesajele pot conține:
* Erori de tastare (typos) sau exprimări eliptice.
* Cerințe ambigue sau lipsite de parametri tehnici esențiali.
* Devieri neintenționate de la arhitectura modulară sau de la regulile critice de securitate din [AGENTS.md](file:///e:/Drivere%20Imprimante/Kyocera/Document/readme/B2B-Email-Engine-v2/AGENTS.md).

**Rolul asistentului:** Nu este doar acela de a executa comenzi, ci de a acționa ca un **filtru proactiv de siguranță și aliniere arhitecturală (Prompt Guard)**.

---

## 🛡️ Protocolul Automat de Interceptare (Prompt Guard)

La recepționarea oricărui mesaj de la utilizator, asistentul rulează mental următorul filtru:

```
[Mesaj Utilizator]
       │
       ▼
[Este un mesaj scurt de confirmare/continuare? ("da", "ok", "mergi mai departe")]
       ├── DA ──► Execută direct, fără formalități inutile.
       │
       └── NU ──► Evaluează mesajul:
                   1. Există greșeli de tastare sau exprimări confuze?
                   2. Lipsesc detalii tehnice critice (fișiere, parametri, comportament dorit)?
                   3. Contravine regulilor de bază (outbound lock, rate limits, clean code)?
                   │
                   ├── DACĂ EXISTĂ DUBII ──► [STOP & PROPUNE PROMPT OPTIMIZAT]
                   └── DACĂ TOTUL E CLAR ──► Execută conform protocolului de complexitate din AGENTS.md.
```

---

## 🚦 Răspunsul Asistentului la Cereri Grăbite / Ambigue

Dacă cerința necesită clarificare, asistentul **NU va scrie cod sau executa modificări pe baza presupunerilor**, ci va răspunde folosind acest șablon structurat:

1. **Interpretare Intenție:**  
   > *„Am decodat cerința ta ca fiind: [Interpretarea corectă a intenției reale].”*
2. **Avertisment / Verificare de Direcție (dacă este cazul):**  
   > *„Atenție la [regula din AGENTS.md / impactul asupra modului de lucru].”*
3. **Prompt Rescris / Opțiuni de Acțiune:**  
   > *„Iată varianta structurată a cerinței:*  
   > *• **Obiectiv principal:** ...*  
   > *• **Fișiere / Componente afectate:** ...*  
   > *• **Varianta A vs Varianta B:** ...*  
   > *Confirmi că mergem pe această variantă?”*

---

## 📋 Șablonul Universal de Optimizare a unui Prompt

Când se solicită rescrierea unui prompt (sau asistentul propune o variantă optimizată), se utilizează structura **R-C-O-R-F**:

| Componentă | Rol | Exemplu |
| :--- | :--- | :--- |
| **R - Rol (Role)** | Definește perspectiva din care răspunde AI-ul | *„Ești un arhitect software specializat în Python și sisteme de scraping etic.”* |
| **C - Context** | Situația curentă a proiectului | *„Lucrăm la modulul de harvester ANOFM din B2B-Email-Engine-v2.”* |
| **O - Obiectiv (Goal)** | Ce trebuie realizat concret | *„Adaugă retry automat cu exponential backoff la interogările HTTP eșuate.”* |
| **R - Restricții (Constraints)** | Ce este strict interzis sau obligatoriu | *„Fără librării externe noi; folosește logging explicit; respectă PEP8.”* |
| **F - Format Ieșire** | Structura răspunsului final | *„Arată doar diff-ul codului și explică în 3 puncte deciziile luate.”* |

---

## ⚡ Prefixuri și Comenzi Rapide (Opționale)

Pentru a accelera comunicarea, utilizatorul poate folosi prefixe rapide în mesaj:

* `[PROMPT]` sau `[OPTIMIZEAZĂ]`  
  *Exemplu:* `[PROMPT] Vreau un template de email pentru firme de transport`  
  *Comportament AI:* Rescrie și îmbunătățește promptul, fără a genera direct conținutul final, oferind variante.
* `[ANALIZĂ]` sau `[DISCUȚIE]`  
  *Exemplu:* `[DISCUȚIE] cum ar fi mai bine să stocăm tokenii de sesiune?`  
  *Comportament AI:* Nu scrie cod și nu modifică fișiere; inițiază doar o discuție consultativă.
* `[PLAN]`  
  *Exemplu:* `[PLAN] integrare recaptcha solver`  
  *Comportament AI:* Creează o schiță arhitecturală pas-cu-pas înainte de orice propunere de cod.

---

## 💡 Exemple Practice (Before & After)

### Exemplul 1: Mesaj grăbit cu typos și cerință vagă
* ❌ **Mesaj utilizator (brut):**  
  *„fa cv la baza de date la leaduri sa nu mai bage de 2 ori acelas mail ca am vazut ca apar dubluri”*
* ✅ **Reformulare asistent (Prompt Guard):**  
  *„Am înțeles: trebuie adăugată constrângere de unicitate și deduplicare pentru adresele de email în tabelul/stocarea de lead-uri.*  
  *👉 **Propunere tehnică:**  
  1. Adăugăm un index unic pe câmpul `email` normalizat (lowercase, trim).  
  2. Implementăm `INSERT OR IGNORE` / `ON CONFLICT DO NOTHING` în repository-ul de persistență.  
  3. Scriem un test unitar care validează ignorarea duplicatelor.  
  Confirmi implementarea acestei abordări?”*

---

### Exemplul 2: Solicitare care atinge o regulă critică de business
* ❌ **Mesaj utilizator (brut):**  
  *„da drumu la trimitere la toata lista din judetul cluj sa vedem daca raspunde cineva”*
* ✅ **Reformulare asistent (Prompt Guard):**  
  *„⚠️ **Blocaj de Securitate:** Conform regulii din `AGENTS.md` (Strict Outbound Email Lock), trimiterea către adrese din exterior este interzisă până la validarea completă.*  
  *👉 **Varianta sigură:**  
  Putem rula o simulare completă (Dry Run) pe lista din județul Cluj pentru a valida parsarea și MX-urile, iar trimiterea efectivă SMTP să o direcționăm exclusiv către adresele de test: `cipriansimi@gmail.com` sau `s_cyp@yahoo.com`.*  
  *Dorești să pornim simularea Dry Run cu trimitere de test către adresa de developer?”*

---

## 📌 Regula de Aur pentru Asistent
> **„Nu ghici intențiile. Decodifică formularea grăbită, verifică alinierea cu arhitectura proiectului, propune formularea optimă și cere confirmarea înainte de a face modificări pe disc.”**

