# Reguli de Dezvoltare și Control Git pentru Agenți AI (AGENTS.md)

Acest fișier conține directive OBLIGATORII pentru toți asistenții și agenții de codare (Antigravity, Gemini CLI, Claude, Copilot) care lucrează în acest repository.

---

## 🚫 Regula de Aur: Fără Fișiere Interne de Asistent sau IDE pe GitHub

Când efectuezi operațiuni Git (`git add`, `git commit`, `git push`), **ESTE STRICT INTERZIS** să incluzi sau să împingi pe GitHub:
1. **Foldere de asistent / AI**: `.agents/`, `.artifacts/`, `.gemini/`
2. **Foldere și fișiere de IDE**: `.idea/`, `.vscode/`, `*.iml`, `local.properties`
3. **Build artifacts și cache**: `build/`, `.gradle/`, `.cxx/`, `bin/`, `obj/`, `dist/`
4. **Baze de date, fișiere confidențiale și credențiale**: `.env`, `.env.*`, `*.fdb`, `*.gdb`, `*.sqlite`, `*.db`, foldere de baze locale (`BD SAGA/`, `Facturi Emise/`, `backups/`). **NICIODATĂ nu comite `git add .` sau `git add -A` orbește!**

Pe GitHub trebuie să ajungă **DOAR codul sursă al programului**, resursele aplicației, testele și documentația proiectului.

---

## 🛡️ Instrucțiuni de Verificare Înainte de Orice Commit / Push

Înainte de a comite sau împinge modificări:
1. Verifică întotdeauna `git status` pentru a te asigura că nu există fișiere din folderele interzise pregătite pentru commit.
2. Dacă un fișier intern din greșeală a fost urmărit de Git, folosește comanda:
   ```bash
   git rm -r --cached .agents .artifacts .idea .vscode .gemini .env
   ```
   pentru a-l scoate din indexul Git fără a-l șterge de pe disc.
3. Asigură-te că fișierul `.gitignore` conține întotdeauna aceste excluderi.

---

# Reguli de Arhitectură și Inginerie Software (Project Engineering Rules)

## 1. Think Before Coding

Before making any changes:

* Understand the existing implementation.
* Search for related code.
* Identify the smallest safe modification.
* Reuse existing code whenever possible.

Do not start writing new code before understanding the current implementation.

---

## 2. Preserve Previous Implementations

When replacing existing logic, **never permanently delete the previous implementation** unless explicitly instructed.

Instead:

* Comment it out.
* Keep it directly above or near the new implementation.
* Mark it as `[OLD]` or `[LEGACY]`.
* Add a short reason for the replacement.

Minor cosmetic edits (formatting, whitespace, imports, comments, variable renames without logic changes) do not require preserving the previous version.

---

## 3. Make the Smallest Safe Change

Modify only the code required to complete the requested task.

Do not refactor, reorganize, optimize, or clean unrelated code.

---

## 4. Preserve Existing Behaviour

Do not change existing functionality unless explicitly required.

New features must not break existing workflows.

---

## 5. Reuse Before Creating

Before adding new code, verify that similar functionality does not already exist.

Prefer extending existing code over creating duplicate implementations.

---

## 6. Respect Project Conventions

Follow the existing:

* architecture
* folder structure
* naming conventions
* coding style
* formatting

Do not introduce a different style.

---

## 7. Protect Existing Interfaces

Do not rename or remove existing:

* APIs
* routes
* exported functions
* configuration keys
* database fields
* public methods

unless explicitly instructed.

---

## 8. Database, Data & Security Safety

Never perform destructive database changes unless explicitly requested.

Do not automatically:

* drop tables
* remove columns
* delete data
* change column types

Additionally:
* Never log sensitive data (PINs, passwords, API tokens, personal client data) to console, Logcat, or log files.
* Always use secure storage mechanisms (e.g. EncryptedSharedPreferences, environment variables) for credentials and sensitive configuration.
* **Always hash credentials (PINs, passwords) before storage using bcrypt or argon2. Never store authentication credentials in plaintext — even for internal B2B users.**

---

## 9. Do Not Guess

If requirements are unclear or confidence is low:

* stop;
* explain the uncertainty;
* ask the user for clarification.

Never invent missing requirements.

---

## 10. Propose New Ideas

Before implementing any idea, optimization, or feature that was not explicitly requested:

* notify the user;
* explain the benefits and potential impact;
* wait for explicit approval.

Never implement "stealth" features or changes based on personal preference without consultation.

---

## 11. Keep Code Maintainable & Robust

Write code that is:

* readable
* simple
* consistent
* maintainable
* modular (isolated features to ensure they are easy to replace or maintain)

Additionally:
* Never swallow exceptions silently in business logic (invoice saving, calculations, data sync). Any failure must be explicitly handled and clearly communicated to the user.

Avoid unnecessary complexity.

---

## 12. Verify Before Finishing & Unit Tests

Before completing a task, verify that:

* the requested feature works;
* existing behaviour has been preserved;
* no unrelated code was modified;
* no duplicate logic was introduced;
* the implementation remains consistent with the project.

Additionally:
* Any modification to price, VAT, discount, or tax calculation algorithms must be covered by unit tests to prevent financial regressions.

---

## 13. User Instructions Override Everything

If any rule conflicts with an explicit user instruction, always follow the user's instruction.

---

## 14. Key Moment Backups & Interactive Workflow

* Create periodic backups/saves of the project in key moments (before major backend/dashboard changes and after verified milestones). **In this project, backups will be performed using Git commits with descriptive messages.**
* Collaboration workflow: Guide the user step-by-step with clear ideas and precise instructions, implement code changes when instructed, and verify every modification rigorously.

---

## 15. Strict Clean Start Rule

When the user requests `start clean` or `curata baza de date`:
* Do **NOT** create extra agents manually (no Simion Ciprian added manually).
* Do **NOT** manually populate clients (`catalog_clients`) or articles (`catalog_articles`).
* Do **NOT** manually allocate document ranges (`document_ranges`).
* The **ONLY** agent preserved in the database must be `Administrator Sistem` (`username: admin`, `pin: 000000`).

---

## 16. Document Range Lifecycle & Allocation Rules

When managing document ranges (invoices and receipts):
* **Draft vs. Published Workflow**: New ranges can be created as `CIORNĂ (REZERVATĂ)` (`is_active = False`). Unpublished ranges are strictly hidden from the agent's mobile app and cannot be downloaded until published (`is_active = True`).
* **Overlap Protection**: Range creation and editing must strictly prevent overlapping ranges for the same document type (`FACTURA` / `CHITANTA`) and series across agents.
* **Usage Protection & Immutability**:
  * Unused ranges (`current_number < start_number`) can be edited or deleted.
  * Used ranges (`current_number >= start_number`) CANNOT be edited (series and start number locked) and CANNOT be deleted, preserving accounting traceability.
* **Sequential Mobile Allocation**: Field agents consume numbers sequentially (`current_number + 1`). When the mobile app syncs, server `current_number` updates atomically.
* **Audit Trail**: Every action (create, publish, suspend, edit, delete, exhaust) must be logged in `system_audit_logs` and `approval_logs`.

---

## 17. Offline-First & Financial Integrity Rules

When working on offline-first logic, syncing, and local Android Room databases:
* **Multi-Device Identity**: A physical agent can have multiple active offline devices. Number allocation MUST strictly be linked to a unique hardware `device_id` lease, never globally by `agent_id`, to prevent silent identical sequence overlap (which creates permanently irreconcilable fiscal documents).
* **Database Constraints Over Code**: Never rely solely on Python application logic (`if conflict = db.query...`) to prevent duplicate financial documents (receipts, storno). The SQLite backend MUST enforce integrity using `UNIQUE(series, number)` and `FOREIGN KEY` constraints.
* **True Local Atomicity**: Generating fiscal numbers locally (e.g. `current_number + 1`) MUST be executed strictly within the identical SQLite atomic transaction as the insert query of the invoice (`UPDATE ... RETURNING ...` or similar), preventing Crash-Gaps if the app dies between memory extraction and the disk commit.
* **Batch/FIFO Integrity**: Sync logic must tolerate batch processing without causing self-conflicting 409 errors when an agent collects cash for multiple invoices on the same local receipt sequence.
* **Sync Confirmation Atomicity**: Never mark a local record as synced (`isSynced = true`) unless the server has returned an explicit success response (HTTP 200/201) for **that specific record**. Marking a batch as synced while only a subset was transmitted is a permanent data loss bug.
* **Fiscal Number Exhaustion Hard Block**: When a local document range is exhausted or unavailable, the UI MUST hard-block the invoice finalization flow with a clear error. Fallback series/numbers (e.g. `"ERR"/"LIMIT"`) are strictly forbidden — they produce fiscally invalid documents that cannot be reconciled.

---

## 18. Zero-Loss Production Database Integrity (Firebird / SAGA C Guard)

When working directly or indirectly with **SAGA C / Firebird databases (`.FDB`)**:
* **Backup First**: Before running any repair, migration, bulk import, or experimental queries, create a zero-copy or physical backup (`.FDB` / `.FBK`).
* **Concurrency Protection**: Never open an active database concurrently using both an embedded driver and a running Firebird Server service. If the server is active, always connect via TCP (`localhost/3060:...`) to prevent cache desynchronization and corrupted transaction inventory pages (TIP).
* **Zero-Copy Architecture**: For large binary databases (>2 GB), never duplicate the file across repositories. Use Windows Directory Junctions (`mklink /J`) or direct absolute paths in `.env` to protect disk space and prevent split-brain state.
* **Read-Only / Isolation**: External audit, reading, or reporting tools must connect in read-committed, read-only transaction mode wherever possible to prevent accidental table locks.

---

## 19. Precision Financial Math & Calculation Guard

In financial accounting, billing, and inventory applications:
* **Floating-Point Arithmetic Ban**: Never perform monetary totals, price calculations, or tax math using raw unrounded IEEE 754 floating-point operations. Use `Decimal` (in Python), `BigDecimal` (in Java/Kotlin), or rigorous two-decimal banking rounding (`ROUND_HALF_UP`) for currency and three-decimal for weights/quantities.
* **Tax Rate Consistency**: Taxes and VAT rates must strictly reflect official legal tiers (e.g. 0%, 5%, 9%, 11%, 19%, 21%). Never hardcode tax calculations as arbitrary multipliers without validating against the official tier catalog.
* **Line vs. Header Reconciliations**: The sum of invoice line totals must match the invoice header total exactly. Any discrepancy exceeding 0.01 RON must block document emission and trigger an audit alert.

---

## 20. Non-Destructive Desktop UI & Ergonomics

When building or updating graphical interfaces (CustomTkinter, Tkinter, PySide, Web Dashboards):
* **Information Density & Compactness**: Avoid fixed, arbitrary container heights when content is variable. Tables and card views must adapt dynamically to the number of rows to avoid massive empty whitespace.
* **Single Source of Truth in UI**: Critical operational metrics (e.g. `Selected Invoices`, `Total Value`) must be displayed in a single, clear, authoritative place. Never duplicate identical statistical widgets across multiple adjacent toolbars.
* **Safe Configuration Storage**: User settings and API keys changed in the UI must be atomically written to `.env` or configuration stores without stripping existing comments or unrelated environment keys.

---

## 21. Workspace Order, Project Isolation & Cataloguing (Zero-Clutter Rule)

When creating, cloning, or organizing files and repositories across the workstation (`D:\Proiecte`):
* **Dedicated Agent Directories**: The instructions file `AGENTS.md` must ALWAYS reside inside the dedicated `.agents/` folder of the project root. Never create loose copies, numbered backups (e.g. `.agents copy/`), or scatter unlinked rule files across arbitrary subfolders.
* **Project Boundary Isolation**: Never write or move source code or scratch files outside the designated project boundaries. Cross-project dependencies must be explicitly configured via environment variables or shared system libraries, never by dumping loose files into parent directories.
* **Catalog Registration**: Any newly created project, tool, or cloned repository must be documented in `D:\Proiecte\CATALOG_PROIECTE.md` with its purpose, tech stack, and GitHub remote URL to maintain complete traceability.
* **Clean Working Tree**: Before finishing any coding turn, clean up all temporary test files (`*.tmp`, scratch scripts, test database clones, memory dumps). Working directories must remain pristine and organized.
