/* ==========================================================================
   CORTEX PRODCOM — Script Interactiv (v2.0)
   Calculator Instant de Deviz, Slider Before/After, Galerie Filtrabilă & PWA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCalculator();
    initBeforeAfterSlider();
    initGalleryFilters();
    initFaqAccordion();
    initCookieConsent();
    initToastNotifications();
});

/* ==========================================================================
   1. NAVIGAȚIE & MENIU MOBIL
   ========================================================================== */
function initNavigation() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            mobileNavToggle.setAttribute('aria-expanded', isActive);
            mobileNavToggle.innerHTML = isActive 
                ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });

        // Închidere meniu la click pe un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    mobileNavToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
                }
            });
        });
    }
}

/* ==========================================================================
   2. CALCULATOR INTERACTIV DE DEVIZ (INSTANT ESTIMATOR)
   ========================================================================== */
function initCalculator() {
    const typeButtons = document.querySelectorAll('.calc-type-btn');
    const inputLen = document.getElementById('calc-len');
    const inputHeight = document.getElementById('calc-height');
    const optPrint = document.getElementById('opt-print');
    const optHardware = document.getElementById('opt-hardware');
    const optCable = document.getElementById('opt-cable');
    const optInstall = document.getElementById('opt-install');
    
    // Elemente afișare rezultate
    const resType = document.getElementById('res-type');
    const resArea = document.getElementById('res-area');
    const resTime = document.getElementById('res-time');
    const resPrice = document.getElementById('res-price');
    const btnWhatsApp = document.getElementById('calc-whatsapp-btn');

    if (!typeButtons.length || !inputLen || !inputHeight) return;

    let selectedType = 'camion';
    let typeName = 'Prelată Camion / TIR';

    // Schimbare tip lucrare
    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            typeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedType = btn.dataset.type;
            typeName = btn.querySelector('.type-label').textContent.trim();

            // Setări implicite de dimensiuni pe tip
            if (selectedType === 'camion') {
                inputLen.value = 13.6;
                inputHeight.value = 2.7;
            } else if (selectedType === 'remorca') {
                inputLen.value = 2.5;
                inputHeight.value = 1.4;
            } else if (selectedType === 'terasa') {
                inputLen.value = 6.0;
                inputHeight.value = 2.4;
            } else if (selectedType === 'agricol') {
                inputLen.value = 10.0;
                inputHeight.value = 6.0;
            } else if (selectedType === 'nautic') {
                inputLen.value = 5.5;
                inputHeight.value = 2.2;
            } else if (selectedType === 'reparatie') {
                inputLen.value = 2.0;
                inputHeight.value = 1.0;
            }
            updateCalculation();
        });
    });

    // Ascultători pentru modificarea dimensiunilor și opțiunilor
    [inputLen, inputHeight].forEach(inp => {
        inp.addEventListener('input', updateCalculation);
    });

    [optPrint, optHardware, optCable, optInstall].forEach(chk => {
        if (chk) chk.addEventListener('change', updateCalculation);
    });

    function updateCalculation() {
        const len = parseFloat(inputLen.value) || 0;
        const h = parseFloat(inputHeight.value) || 0;
        let area = 0;
        let execTime = '24 – 48 ore';

        if (selectedType === 'camion') {
            // Cutie TIR: 2 laterale + tavan
            area = Math.round((len * h * 2) + (len * 2.5));
            execTime = '24 – 48 ore';
        } else if (selectedType === 'remorca') {
            // Remorcă mică
            area = Math.round((len * h * 2) + (len * 1.5));
            execTime = '24 ore';
        } else if (selectedType === 'terasa') {
            // Folie transparentă cristal 0.8mm
            area = Math.round(len * h);
            execTime = '2 – 3 zile';
        } else if (selectedType === 'agricol') {
            // Prelată mare baloți / siloz
            area = Math.round(len * h);
            execTime = '24 – 48 ore';
        } else if (selectedType === 'nautic') {
            // Barcă sau piscină
            area = Math.round(len * h * 1.3);
            execTime = '2 – 4 zile';
        } else if (selectedType === 'reparatie') {
            // Reparație rapidă pe loc
            area = Math.round(len * h);
            execTime = '30 – 60 minute (Pe loc)';
        }

        // Opțiuni bifate
        let optionsList = [];
        if (optPrint && optPrint.checked) {
            optionsList.push('Inscripționare/Logo');
        }
        if (optHardware && optHardware.checked) {
            optionsList.push('Feronerie Zincată/Capse Dese');
        }
        if (optCable && optCable.checked) {
            optionsList.push('Cablu Vamal / Ancore de Fixare');
        }
        if (optInstall && optInstall.checked) {
            optionsList.push('Montaj Inclus la Atelier');
        }

        // Actualizare UI (Fără prețuri numerice)
        if (resType) resType.textContent = typeName;
        if (resArea) resArea.textContent = `${area} mp`;
        if (resTime) resTime.textContent = execTime;
        if (resPrice) resPrice.textContent = 'Calculat pe loc (Fără costuri ascunse)';

        // Generare mesaj WhatsApp profesional și complet
        if (btnWhatsApp) {
            let msg = `Bună ziua! Am configurat pe site o cerere pentru: *${typeName}*.\n`;
            msg += `📏 Dimensiuni: ${len}m lungime x ${h}m înălțime/lățime (~${area} mp).\n`;
            if (optionsList.length > 0) {
                msg += `⚙️ Opțiuni bifate: ${optionsList.join(', ')}.\n`;
            }
            msg += `Vă rog să-mi transmiteți o ofertă exactă de preț și când o puteți executa. Vă trimit și o poză pe WhatsApp.`;

            btnWhatsApp.href = `https://wa.me/40744533980?text=${encodeURIComponent(msg)}`;
        }
    }

    // Calcul inițial la încărcare
    updateCalculation();
}

/* ==========================================================================
   3. SLIDER INTERACTIV ÎNAINTE / DUPĂ (BEFORE & AFTER)
   ========================================================================== */
function initBeforeAfterSlider() {
    const container = document.querySelector('.ba-container');
    const afterWrapper = document.querySelector('.ba-after-wrapper');
    const handle = document.querySelector('.ba-handle');

    if (!container || !afterWrapper || !handle) return;

    let isDragging = false;

    function setSliderPosition(x) {
        const rect = container.getBoundingClientRect();
        let posX = x - rect.left;
        let percentage = (posX / rect.width) * 100;

        if (percentage < 5) percentage = 5;
        if (percentage > 95) percentage = 95;

        handle.style.left = `${percentage}%`;
        afterWrapper.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    }

    // Mouse Events
    handle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        setSliderPosition(e.clientX);
    });

    // Touch Events (Mobil)
    handle.addEventListener('touchstart', () => isDragging = true, { passive: true });
    window.addEventListener('touchend', () => isDragging = false);
    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    // Click direct oriunde în container
    container.addEventListener('click', (e) => {
        setSliderPosition(e.clientX);
    });
}

/* ==========================================================================
   4. FILTRARE GALERIE PROIECTE REALE
   ========================================================================== */
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!filterBtns.length || !galleryItems.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            galleryItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 20);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

/* ==========================================================================
   5. ACORDEON ÎNTREBĂRI FRECVENTE (FAQ)
   ========================================================================== */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Închide celelalte elemente pentru o navigare curată
                faqItems.forEach(i => i.classList.remove('active'));
                
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

/* ==========================================================================
   6. COOKIE CONSENT BANNER
   ========================================================================== */
function initCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (!localStorage.getItem('cortexCookieConsent')) {
        setTimeout(() => {
            banner.style.display = 'block';
        }, 1200);
    }
}

function acceptCookies() {
    localStorage.setItem('cortexCookieConsent', 'accepted');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

function rejectCookies() {
    localStorage.setItem('cortexCookieConsent', 'rejected');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

// Expunere globală pentru atributele onclick din HTML
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;

/* ==========================================================================
   7. NOTIFICĂRI TOAST LA TRIMITERE FORMULAR
   ========================================================================== */
function initToastNotifications() {
    if (window.location.search.includes('status=success')) {
        const toast = document.getElementById('success-toast');
        if (toast) {
            toast.style.display = 'block';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 6000);
        }
    }
}

function closeToast() {
    const toast = document.getElementById('success-toast');
    if (toast) toast.style.display = 'none';
}
window.closeToast = closeToast;
