/* Sistem bilingv RO | EN (js/i18n.js): Comutator complet Romana/Engleza pentru CORTEX PRODCOM cu pastrare fidela RO, localStorage si suport ?lang=en. */
(() => {
  const STORAGE_KEY = 'cortexLang';
  const WA_BASE = 'https://wa.me/40744533980?text=';

  const EN_META = {
    title: 'CORTEX PRODCOM — Truck Tarpaulins & Terraces | E85 Fălticeni, Suceava',
    description:
      'Manufacturer of truck & TIR tarpaulins and crystal terrace enclosures on E85 (KM 415, Fălticeni). Large 40t truck yard, on-site repairs in 60–90 min. Polyplan Austria 650–900g/sqm.',
  };

  /* Harta traducerilor EN pe selectori deterministi (toate sectiunile 1–16 din index.html). */
  const EN_HTML = [
    [
      '.top-alert-bar > span',
      '<span class="pulse-dot"></span> 🚨 <strong>E85 / TRANSIT EMERGENCIES:</strong> Torn or damaged tarpaulin? Find us at KM 415 (Fălticeni). Large TIR yard, on-site repairs!',
    ],
    ['.top-alert-bar .alert-link', 'Call Now: 0744 580 056'],
    ['.main-header .logo-subtitle', 'Tarpaulins & Terraces • Since 1994'],
    ['.hero-title', 'Truck Tarpaulins & Terraces <br><span class="text-gradient">Directly on E85, Fălticeni</span>'],
    [
      '.hero-subtitle',
      'New manufacturing and fast repairs for trucks, TIR semi-trailers, HoReCa terraces, and agriculture. Original Polyplan Austria material (650–900g/sqm), 650°C hot-air welding, 100% waterproof against rain, UV, and frost.',
    ],
    [
      '.hero-card-benefits li:nth-child(1) .benefit-text',
      '<strong>2,000 sqm Yard:</strong> Easy maneuvering for 13.6m TIR semi-trailers.',
    ],
    [
      '.hero-card-benefits li:nth-child(2) .benefit-text',
      '<strong>No Detours:</strong> Just 2 minutes off European Road DN2 / E85.',
    ],
    [
      '.hero-card-benefits li:nth-child(3) .benefit-text',
      '<strong>Customs Emergencies:</strong> TIR customs cable repair, rings, buckles, and eyelets.',
    ],
    [
      '.hero-card-benefits li:nth-child(4) .benefit-text',
      '<strong>Save up to 70%:</strong> Repair and get back on the road without buying an expensive new tarp.',
    ],
    ['.calc-configurator .calc-step-title:nth-of-type(1)', '<span>1.</span> Select Project Type:'],
    ['.calc-configurator .calc-step-title:nth-of-type(2)', '<span>2.</span> Approximate Dimensions (Meters):'],
    [
      '.ba-points li:nth-child(1) .ba-point-text',
      '<strong>650°C Hot-Air Welding:</strong> The weld becomes stronger than the original sheet, with zero water leaks.',
    ],
    [
      '.ba-points li:nth-child(2) .ba-point-text',
      '<strong>Save up to 70%:</strong> Pay only for the repair and material used, extending tarpaulin life by 3–5 years.',
    ],
    [
      '.ba-points li:nth-child(3) .ba-point-text',
      '<strong>On-Site Repair:</strong> Driver waits comfortably in our yard while the truck is ready in 60–90 minutes.',
    ],
    [
      '.google-badge-meta',
      'Rated on <strong>Google Maps</strong> • Over 30 Years at KM 415 (E85 Fălticeni)',
    ],
    [
      '.contact-entry:nth-child(4) .contact-entry-text p',
      'Monday – Friday: 08:00 – 18:00 | Saturday: 08:00 – 14:00<br><span style="color: var(--color-emergency); font-weight: 700;">E85 Transit Emergencies: Permanent Phone Assistance</span>',
    ],
    [
      '.company-meta p',
      '<strong>CORTEX PRODCOM SRL</strong> | VAT / CUI: RO6362870 | J33/1498/1994<br>Fully paid share capital • Fălticeni, Suceava, Romania',
    ],
    [
      '#inchiriere > .container > div:nth-of-type(3) > div:nth-child(1)',
      '<strong style="color: #ffca28; display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">📅 Flexible Rental Period</strong>Days, weeks, or months — tailored to your project',
    ],
    [
      '#inchiriere > .container > div:nth-of-type(3) > div:nth-child(2)',
      '<strong style="color: #ffca28; display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">💬 Prices on Request</strong>Contact us for stock availability and rates',
    ],
    [
      '#inchiriere > .container > div:nth-of-type(3) > div:nth-child(3)',
      '<strong style="color: #ffca28; display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">📍 Direct from Workshop</strong>Fălticeni, KM 415 E85 — large TIR access yard',
    ],
    [
      '.footer-bottom p:first-of-type',
      '&copy; 1994 – <span id="footer-year">' + new Date().getFullYear() + '</span> CORTEX PRODCOM SRL. All rights reserved.',
    ],
  ];

  const EN_TEXT = [
    ['.nav-links li:nth-child(1) a', 'Home'],
    ['.nav-links li:nth-child(2) a', 'Services'],
    ['.nav-links li:nth-child(3) a', 'Products'],
    ['.nav-links li:nth-child(4) a', 'Rental'],
    ['.nav-links li:nth-child(5) a', 'Before / After'],
    ['.nav-links li:nth-child(6) a', 'Calculator'],
    ['.nav-links li:nth-child(7) a', 'E85 Access'],
    ['.nav-links li:nth-child(8) a', 'Portfolio'],
    ['.nav-links li:nth-child(9) a', 'Contact'],

    ['.authority-badges .badge-pill:nth-child(1)', '🛡️ Over 30 Years (since 1994)'],
    ['.authority-badges .badge-pill:nth-child(2)', '🚛 Large TIR Access Yard (E85)'],
    ['.authority-badges .badge-pill:nth-child(3)', '⚡ On-Site Repairs in 60–90 Min'],
    ['.hero-actions .btn-main-text', 'Send Photo on WhatsApp'],
    ['.hero-actions .btn-sub-text', 'Price estimate in 5 minutes'],
    ['.hero-actions .btn-accent', '📐 Estimate Project Quote'],
    ['.hero-stats .stat-item:nth-child(1) h3', '30+ Years'],
    ['.hero-stats .stat-item:nth-child(1) p', 'Continuous Experience'],
    ['.hero-stats .stat-item:nth-child(2) h3', '60 Min'],
    ['.hero-stats .stat-item:nth-child(2) p', 'Express On-Site Repairs'],
    ['.hero-stats .stat-item:nth-child(3) p', 'Waterproof & Durable'],
    ['.hero-card-title', 'Fast E85 Transit Assistance'],
    ['.hero-card-subtitle', 'Direct entry at KM 415 (Fălticeni, exit toward Suceava)'],
    ['.hero-card-cta .btn-accent', '📞 Call Workshop: 0744 580 056'],
    ['.hero-card-cta .btn-outline', '📍 Open GPS Directions'],

    /* 4 Segmente */
    ['#segmente .segment-card:nth-child(1) .segment-title', 'Trucks & TIR Transport'],
    [
      '#segmente .segment-card:nth-child(1) .segment-desc',
      'Complete tarpaulins for trucks, curtain-sider semi-trailers, sliding roofs, and express on-site repairs for Moldova and international transit fleets.',
    ],
    ['#segmente .segment-card:nth-child(1) .segment-list li:nth-child(1)', 'Polyplan Austria 650–900g/sqm material'],
    ['#segmente .segment-card:nth-child(1) .segment-list li:nth-child(2)', 'TIR-approved customs cables & straps'],
    ['#segmente .segment-card:nth-child(1) .segment-list li:nth-child(3)', 'Tear welding, rollers, tracks & belts'],
    ['#segmente .segment-card:nth-child(1) .segment-btn', 'View Truck Solutions →'],

    ['#segmente .segment-card:nth-child(2) .segment-title', 'Terraces & HoReCa'],
    [
      '#segmente .segment-card:nth-child(2) .segment-desc',
      'Enclosures for terraces, restaurants, gazebos, and balconies using 0.8mm crystal clear foil resistant to frost, strong winds, and rain.',
    ],
    ['#segmente .segment-card:nth-child(2) .segment-list li:nth-child(1)', 'Anti-UV treated 0.8mm Crystal Foil'],
    ['#segmente .segment-card:nth-child(2) .segment-list li:nth-child(2)', 'Turn-buttons, zippers, or cassette systems'],
    ['#segmente .segment-card:nth-child(2) .segment-list li:nth-child(3)', 'Retains heat & 100% natural light'],
    ['#segmente .segment-card:nth-child(2) .segment-btn', 'View Terrace Solutions →'],

    ['#segmente .segment-card:nth-child(3) .segment-title', 'Agriculture & Silos'],
    [
      '#segmente .segment-card:nth-child(3) .segment-desc',
      'Reinforced tarpaulins for large hay/straw bale stacks, grain silo covers, combines, machinery, and heavy agricultural trailers.',
    ],
    ['#segmente .segment-card:nth-child(3) .segment-list li:nth-child(1)', '100% waterproof anti-mold PVC membrane'],
    ['#segmente .segment-card:nth-child(3) .segment-list li:nth-child(2)', 'Dense stainless eyelets & wind anchors'],
    ['#segmente .segment-card:nth-child(3) .segment-list li:nth-child(3)', 'Custom large sizes (10x15m, 12x20m)'],
    ['#segmente .segment-card:nth-child(3) .segment-btn', 'View Farm Solutions →'],

    ['#segmente .segment-card:nth-child(4) .segment-title', 'Marine & Pools'],
    [
      '#segmente .segment-card:nth-child(4) .segment-desc',
      'Custom-fitted waterproof covers for motorboats on trailers, jet-skis, and heavy-duty winter covers for residential swimming pools.',
    ],
    ['#segmente .segment-card:nth-child(4) .segment-list li:nth-child(1)', 'Tailored cut following hull contours'],
    ['#segmente .segment-card:nth-child(4) .segment-list li:nth-child(2)', 'Firmly anchored winter pool covers'],
    ['#segmente .segment-card:nth-child(4) .segment-list li:nth-child(3)', 'Marine stainless grommets & bungee cords'],
    ['#segmente .segment-card:nth-child(4) .segment-btn', 'View Marine Solutions →'],

    /* 5. Calculator */
    ['#calculator .section-tag', 'Fast & No-Obligation Consultation'],
    ['#calculator .section-title', 'Quick Quote Configurator'],
    [
      '#calculator .section-subtitle',
      'Select your project type, enter approximate dimensions, and send the details directly to our technical team on WhatsApp for an exact quote and turnaround time.',
    ],
    ['.calc-type-btn[data-type="camion"] .type-label', 'Truck / TIR Tarp'],
    ['.calc-type-btn[data-type="remorca"] .type-label', 'Car Trailer'],
    ['.calc-type-btn[data-type="terasa"] .type-label', 'Crystal Terrace'],
    ['.calc-type-btn[data-type="agricol"] .type-label', 'Agriculture / Bales'],
    ['.calc-type-btn[data-type="nautic"] .type-label', 'Boat / Pool Cover'],
    ['.calc-type-btn[data-type="reparatie"] .type-label', 'E85 Repair'],
    ['label[for="calc-len"]', 'Length (meters):'],
    ['label[for="calc-height"]', 'Height / Width (meters):'],
    ['.calc-options-title', 'Additional Options & Hardware:'],
    ['.results-header h4', 'Project Specifications'],
    ['.results-header p', 'Send details to our technical team for an exact quote'],
    ['.results-body .result-row:nth-child(1) .result-label', 'Project Type:'],
    ['.results-body .result-row:nth-child(2) .result-label', 'Estimated Area:'],
    ['.results-body .result-row:nth-child(3) .result-label', 'Turnaround Time:'],
    ['.result-price-highlight .price-small', 'Custom Quote'],
    ['#calc-whatsapp-btn .btn-main-text', 'Send via WhatsApp'],
    ['#calc-whatsapp-btn .btn-sub-text', 'Fast exact quote'],
    [
      '.calc-disclaimer',
      'Pricing is transparently calculated based on material weight (650g vs 900g), hardware, and exact dimensions.',
    ],

    /* 6. Before & After */
    ['.ba-tag-before', 'BEFORE: Torn Tarp'],
    ['.ba-tag-after', 'AFTER: 650°C Hot-Air Weld'],
    ['#before-after .section-tag', 'Circular Economy & Repairs'],
    ['#before-after .ba-info h3', 'Do not throw away your old tarpaulin! We restore it like new.'],
    [
      '#before-after .ba-info > p',
      'A tear or snag on the road does not mean spending thousands of euros on a brand-new tarpaulin. At CORTEX PRODCOM we assess the sheet integrity and repair it fast.',
    ],
    ['#before-after .btn-whatsapp', 'Send Photo for Repair Assessment'],

    /* 7. E85 Hub */
    ['#e85-hub .section-tag', 'Strategic Hub in Moldova'],
    ['#e85-hub .section-title', 'Direct Access from E85 — No Narrow Streets'],
    [
      '#e85-hub .section-subtitle',
      'Our workshop sits right at KM 415 on DN2 / E85 (Fălticeni), purpose-built for heavy transport vehicles.',
    ],
    ['.e85-card h3', 'Dedicated Facilities for Fleets & TIR Trucks'],
    [
      '.e85-card > p',
      'We know how difficult it is to drive a 13.6-meter semi-trailer down tight city streets. With us, access is wide and hassle-free.',
    ],
    ['.e85-features .e85-feat-item:nth-child(1) span:last-child', '2,000 sqm yard for easy turning'],
    ['.e85-features .e85-feat-item:nth-child(2) span:last-child', 'No tonnage restrictions on route'],
    ['.e85-features .e85-feat-item:nth-child(3) span:last-child', 'Suceava: 15 min | Botoșani: 35 min'],
    ['.e85-features .e85-feat-item:nth-child(4) span:last-child', 'Spare Parts & Hardware in Stock'],
    ['.gps-buttons .btn-accent', '🗺️ Open in Google Maps'],
    ['.gps-buttons .btn-outline', '🚗 Open in Waze'],

    /* 8. Produse */
    ['#produse .section-tag', 'Complete Portfolio'],
    ['#produse .section-title', 'Complete Tarpaulin & Terrace Solutions'],
    [
      '#produse .section-subtitle',
      'All products are manufactured to international durability standards using certified raw materials from Austria.',
    ],
    ['#produse .product-card:nth-child(1) .product-badge', 'Most Popular'],
    ['#produse .product-card:nth-child(1) .product-title', 'Truck & TIR Tarpaulins'],
    [
      '#produse .product-card:nth-child(1) .product-desc',
      'Full manufacturing of curtain-sider tarpaulins, fixed or sliding roofs, reinforced on pillars and equipped with TIR customs cables.',
    ],
    ['#produse .product-card:nth-child(1) .product-actions a', 'Request Quote on WhatsApp'],

    ['#produse .product-card:nth-child(2) .product-badge', 'Frost Resistant'],
    ['#produse .product-card:nth-child(2) .product-title', 'Crystal Terraces & Gazebos'],
    [
      '#produse .product-card:nth-child(2) .product-desc',
      'Weatherproof enclosures for restaurants, guesthouses, and homes. Blocks wind, snow, and dust while keeping natural daylight.',
    ],
    ['#produse .product-card:nth-child(2) .product-actions a', 'Request Terrace Quote'],

    ['#produse .product-card:nth-child(3) .product-badge', 'Heavy-Duty Farm'],
    ['#produse .product-card:nth-child(3) .product-title', 'Agriculture & Grain Silos'],
    [
      '#produse .product-card:nth-child(3) .product-desc',
      'High-strength covers for large bale stacks, grain silos, and harvesters. 100% waterproof against harsh sun and storms.',
    ],
    ['#produse .product-card:nth-child(3) .product-actions a', 'Request Farm Quote'],

    ['#produse .product-card:nth-child(4) .product-badge', 'Marine & Pools'],
    ['#produse .product-card:nth-child(4) .product-title', 'Marine & Winter Pool Covers'],
    [
      '#produse .product-card:nth-child(4) .product-desc',
      'Custom-fitted trailer covers for motorboats and jet-skis. Heavy-duty safety winter covers for swimming pools.',
    ],
    ['#produse .product-card:nth-child(4) .product-actions a', 'Request Marine/Pool Quote'],

    ['#produse .product-card:nth-child(5) .product-badge', 'Ultra-Durable'],
    ['#produse .product-card:nth-child(5) .product-title', 'Tipper Trucks & Small Trailers'],
    [
      '#produse .product-card:nth-child(5) .product-desc',
      'Manual or automatic roll-over cover systems for sand, gravel, and grain tippers with reinforced corner seams.',
    ],
    ['#produse .product-card:nth-child(5) .product-actions a', 'Request Trailer Quote'],

    ['#produse .product-card:nth-child(6) .product-badge', 'Transit Emergencies'],
    ['#produse .product-card:nth-child(6) .product-title', 'Express On-Site Repairs'],
    [
      '#produse .product-card:nth-child(6) .product-desc',
      'Prompt roadside assistance for drivers on E85. Tear heat-welding, roller/eyelet replacement, straps, and customs cable repair.',
    ],
    ['#produse .product-card:nth-child(6) .product-actions a', 'Call for Emergency Repair'],

    ['#produse .product-card:nth-child(7) .product-badge', 'Industrial B2B'],
    ['#produse .product-card:nth-child(7) .product-title', 'Industrial Tents & Halls'],
    [
      '#produse .product-card:nth-child(7) .product-desc',
      'Covering solutions for large storage areas, loading bay canopies, and flexible interior industrial partitions.',
    ],
    ['#produse .product-card:nth-child(7) .product-actions a', 'Discuss Industrial Project'],

    ['#produse .product-card:nth-child(8) .product-badge', 'Mobile Advertising'],
    ['#produse .product-card:nth-child(8) .product-title', 'Fleet Printing & Branding'],
    [
      '#produse .product-card:nth-child(8) .product-desc',
      'Turn your truck into a moving billboard using flexible UV-resistant PVC inks built to withstand pressure washing.',
    ],
    ['#produse .product-card:nth-child(8) .product-actions a', 'Request Branding Quote'],

    /* 9. Calitate */
    ['#calitate .section-tag', 'Top Technical Standards'],
    ['#calitate .section-title', 'Why Do CORTEX Tarpaulins Last Over 10 Years?'],
    [
      '#calitate .section-subtitle',
      'We never compromise on raw materials. Every weld, eyelet, and square meter of PVC is selected for maximum strength.',
    ],
    ['#calitate .quality-item:nth-child(1) h4', 'Polyplan Austria (650–900g/sqm)'],
    [
      '#calitate .quality-item:nth-child(1) p',
      'High-density polyester weave coated in PVC on both sides. Withstands winds over 100 km/h and heavy snow loads.',
    ],
    ['#calitate .quality-item:nth-child(2) h4', '650°C Hot-Air Welding (Leister)'],
    [
      '#calitate .quality-item:nth-child(2) p',
      'Molecular bonding using Swiss precision equipment. The seam fuses into one solid piece that cannot peel apart.',
    ],
    ['#calitate .quality-item:nth-child(3) h4', 'Anti-UV Treated Crystal Foil'],
    [
      '#calitate .quality-item:nth-child(3) p',
      'Clear terrace foil with UV inhibitors preventing yellowing in sunlight and cracking during freezing winter nights.',
    ],
    ['#calitate .quality-item:nth-child(4) h4', 'Galvanized Hardware & TIR Cables'],
    [
      '#calitate .quality-item:nth-child(4) p',
      'Corrosion-resistant galvanized steel grommets and buckles plus certified TIR customs cables for border crossings.',
    ],

    /* 10. Galerie */
    ['#galerie .section-tag', 'Real Projects'],
    ['#galerie .section-title', 'Completed Projects Portfolio'],
    [
      '#galerie .section-subtitle',
      'Explore a selection of the hundreds of truck tarpaulins and terrace enclosures built in our Fălticeni workshop.',
    ],
    ['.filter-btn[data-filter="all"]', 'All Projects'],
    ['.filter-btn[data-filter="tir"]', 'Trucks & TIR'],
    ['.filter-btn[data-filter="terasa"]', 'Terraces & HoReCa'],
    ['.filter-btn[data-filter="agricol"]', 'Agriculture & Silos'],
    ['.filter-btn[data-filter="nautic"]', 'Marine & Pools'],
    ['.filter-btn[data-filter="remorca"]', 'Trailers & Tippers'],
    ['.filter-btn[data-filter="industrial"]', 'Industrial'],
    ['.gallery-item:nth-child(1) .gallery-caption', 'TIR Semi-Trailer Suceava — Polyplan 900g'],
    ['.gallery-item:nth-child(2) .gallery-caption', 'Restaurant Terrace — 0.8mm Crystal Foil'],
    ['.gallery-item:nth-child(3) .gallery-caption', 'Hay Bale & Silo Cover — Reinforced Membrane'],
    ['.gallery-item:nth-child(4) .gallery-caption', 'Fitted Boat Trailer Cover — Marine Grommets'],
    ['.gallery-item:nth-child(5) .gallery-caption', 'Residential Winter Pool Cover — Secure Anchoring'],
    ['.gallery-item:nth-child(6) .gallery-caption', 'Distribution Truck — Fălticeni E85'],
    ['.gallery-item:nth-child(7) .gallery-caption', 'Aggregate Tipper Truck — Botoșani'],
    ['.gallery-item:nth-child(8) .gallery-caption', 'Logistics Fleet Custom Branding'],
    ['.gallery-item:nth-child(9) .gallery-caption', 'Car Trailer with High Frame Structure'],
    ['.gallery-item:nth-child(10) .gallery-caption', 'Industrial Warehouse Cover — Neamț'],
    ['.gallery-item:nth-child(11) .gallery-caption', 'Freight Transport Rig — Moldova E85 Route'],

    /* 11. Recenzii */
    [
      '.google-badge-text',
      'We value total transparency and long-term partnerships — over 3 decades working continuously with haulage companies, TIR drivers, farms, and private clients across Moldova. All our reviews are 100% authentic on Google Maps.',
    ],
    ['.google-badge-actions .btn-primary', '🗺️ View Location & Reviews on Google Maps'],
    ['.google-badge-actions .btn-outline', '⭐ Leave Us a Google Review'],

    /* 11B. Inchiriere */
    ['#inchiriere .section-tag', 'Available Immediately'],
    ['#inchiriere .section-title', 'Tarpaulin Rental'],
    [
      '#inchiriere .section-subtitle',
      'Need a tarpaulin quickly without buying a new one? We offer flexible rentals for construction sites, events, temporary storage, or transport emergencies.',
    ],
    ['#inchiriere .quality-item:nth-child(1) h4', '🚜 Construction Site Tarps'],
    [
      '#inchiriere .quality-item:nth-child(1) p',
      'Temporary covering for building materials, aggregates, sand, and gravel on job sites. Standard or custom sizes.',
    ],
    ['#inchiriere .quality-item:nth-child(1) li:nth-child(1)', '500–650 g/sqm thickness'],
    ['#inchiriere .quality-item:nth-child(1) li:nth-child(2)', 'Sizes from 4×6m up to 10×15m'],
    ['#inchiriere .quality-item:nth-child(1) li:nth-child(3)', 'UV and rain resistant'],

    ['#inchiriere .quality-item:nth-child(2) h4', '🏗️ Structure & Event Covers'],
    [
      '#inchiriere .quality-item:nth-child(2) p',
      'Temporary enclosures for halls, event tents, storage shelters, or winter protection for machinery and equipment.',
    ],
    ['#inchiriere .quality-item:nth-child(2) li:nth-child(1)', 'Heavy-duty 650–900 g/sqm PVC'],
    ['#inchiriere .quality-item:nth-child(2) li:nth-child(2)', 'Metal eyelets for secure tie-down'],
    ['#inchiriere .quality-item:nth-child(2) li:nth-child(3)', 'Short-term or long-term rental'],

    ['#inchiriere .quality-item:nth-child(3) h4', '🚛 Temporary Transport Tarps'],
    [
      '#inchiriere .quality-item:nth-child(3) p',
      'Urgent replacement tarp for your trailer or truck while yours is being repaired so you never miss a delivery.',
    ],
    ['#inchiriere .quality-item:nth-child(3) li:nth-child(1)', 'Fits standard curtain-sider systems'],
    ['#inchiriere .quality-item:nth-child(3) li:nth-child(2)', 'Optional TIR customs cable included'],
    ['#inchiriere .quality-item:nth-child(3) li:nth-child(3)', 'Pickup & return at our workshop'],
    ['#inchiriere > .container > div:last-of-type .btn-accent', '📞 Call for Availability'],
    ['#inchiriere > .container > div:last-of-type .btn-whatsapp', '💬 Ask on WhatsApp'],

    /* 12. FAQ */
    ['#faq .section-tag', 'Quick Answers'],
    ['#faq .section-title', 'Frequently Asked Questions'],
    ['#faq .section-subtitle', 'Fast answers to the most common questions about pricing, turnaround times, and TIR access.'],
    ['#faq .faq-item:nth-child(1) .faq-question', 'How long does an on-site truck tarpaulin repair take?'],
    [
      '#faq .faq-item:nth-child(1) .faq-answer',
      'A simple tear or side snag takes 30 to 60 minutes. Larger curtain sections, rollers, or rail repairs average 1–2 hours. Our crew is ready for E85 transit emergencies.',
    ],
    ['#faq .faq-item:nth-child(2) .faq-question', 'Can a full articulated truck (tractor + 13.6m semi-trailer) enter?'],
    [
      '#faq .faq-item:nth-child(2) .faq-answer',
      'Yes! Our workshop yard spans 2,000 sqm with a wide direct gate off DN2 / E85, allowing any 40t TIR truck to enter, turn, and park easily without narrow city roads.',
    ],
    ['#faq .faq-item:nth-child(3) .faq-question', 'How durable is the work and what is the expected lifespan?'],
    [
      '#faq .faq-item:nth-child(3) .faq-answer',
      'We use exclusively certified Polyplan Austria PVC and 650°C hot-air welding. Our tarpaulins last 8–10 years on average in heavy use, with seams that never peel in wind or rain.',
    ],
    ['#faq .faq-item:nth-child(4) .faq-question', 'Do you come on-site for terrace enclosure measurements?'],
    [
      '#faq .faq-item:nth-child(4) .faq-answer',
      'Yes, for HoReCa terraces, restaurants, and gazebos in Suceava, Botoșani, Neamț, and Iași counties we travel on-site for exact measurements and mounting consultation.',
    ],
    ['#faq .faq-item:nth-child(5) .faq-question', 'What is the fastest way to get an exact price quote?'],
    [
      '#faq .faq-item:nth-child(5) .faq-answer',
      'Simply send 2–3 photos and approximate dimensions on WhatsApp to +40 744 533 980. We reply with an exact quote and turnaround time within 10 minutes.',
    ],

    /* 13. Contact */
    ['.contact-info-card .section-tag', 'Direct Technical Support'],
    ['.contact-info-card h3', 'We Are Here to Help'],
    [
      '.contact-info-card > p',
      'Visit our workshop directly or call us for any technical inquiry or roadside emergency.',
    ],
    ['.contact-entry:nth-child(1) h5', 'Phone & E85 Emergencies (Mobile 1)'],
    ['.contact-entry:nth-child(2) h5', 'Direct WhatsApp (Mobile 2)'],
    ['.contact-entry:nth-child(2) a', '0744 533 980 (Send Photo on WhatsApp)'],
    ['.contact-entry:nth-child(3) h5', 'Workshop Address'],
    [
      '.contact-entry:nth-child(3) p',
      'DN2 (E85) KM 415, Fălticeni, Suceava County (entrance from Suceava / Iazuri area)',
    ],
    ['.contact-entry:nth-child(4) h5', 'Working Hours'],

    ['.contact-form-card .section-tag', 'Inquiry Form'],
    ['.contact-form-card h3', 'Request a Written Quote'],
    [
      '.contact-form-card > p',
      'Cannot call right now? Leave us a message and we will get back to you shortly.',
    ],
    ['label[for="nume"]', 'Your Name or Company:'],
    ['label[for="telefon"]', 'Phone Number:'],
    ['label[for="serviciu"]', 'Desired Service:'],
    ['#serviciu option:nth-child(1)', 'Truck / TIR Tarpaulin'],
    ['#serviciu option:nth-child(2)', 'E85 Urgent Transit Repair'],
    ['#serviciu option:nth-child(3)', 'Crystal Foil Terrace Enclosure'],
    ['#serviciu option:nth-child(4)', 'Small Trailer / Tipper Cover'],
    ['#serviciu option:nth-child(5)', 'Industrial / Agricultural Tarpaulin'],
    ['#serviciu option:nth-child(6)', 'Tarpaulin Rental (Temporary)'],
    ['#serviciu option:nth-child(7)', 'Other Custom Work'],
    ['label[for="mesaj"]', 'Details (Approximate dimensions or issue description):'],
    ['.contact-form button[type="submit"]', 'Send Request Now'],

    /* 14. Footer */
    ['.main-footer .logo-subtitle', 'Tarpaulins & Terraces • Since 1994'],
    [
      '.footer-col:nth-child(1) > p',
      'Specialized workshop for manufacturing and repairing truck & TIR tarpaulins, crystal foil terrace enclosures, and industrial canopies. Serving Suceava, Botoșani, Neamț, Iași, and E85 transit.',
    ],
    ['.footer-col:nth-child(2) h4', 'Quick Navigation'],
    ['.footer-col:nth-child(2) li:nth-child(1) a', 'Home'],
    ['.footer-col:nth-child(2) li:nth-child(2) a', 'Quote Calculator'],
    ['.footer-col:nth-child(2) li:nth-child(3) a', 'Before & After Comparison'],
    ['.footer-col:nth-child(2) li:nth-child(4) a', 'E85 TIR Access & Parking'],
    ['.footer-col:nth-child(2) li:nth-child(5) a', 'Products & Services'],
    ['.footer-col:nth-child(2) li:nth-child(6) a', 'Contact & Map'],
    ['.footer-col:nth-child(3) h4', 'Legal & GDPR'],
    ['.footer-col:nth-child(3) li:nth-child(1) a', 'Privacy Policy'],
    ['.footer-col:nth-child(3) li:nth-child(2) a', 'Terms & Conditions'],
    ['.footer-col:nth-child(3) li:nth-child(3) a', 'Cookie Policy'],
    ['.footer-col:nth-child(3) li:nth-child(4) a', 'ANPC (Consumer Protection)'],
    ['.footer-col:nth-child(3) li:nth-child(5) a', 'Online Dispute Resolution (ODR)'],
    ['.footer-bottom p:last-of-type', 'Website optimized for speed, low energy footprint, and fast mobile conversion.'],

    /* 16. Toast & Cookie */
    ['#success-toast span', '✔ Message sent successfully! We will contact you shortly.'],
    [
      '#cookie-banner p',
      'This website uses strictly necessary cookies for technical functionality and GDPR-compliant traffic measurement.',
    ],
    ['#cookie-banner .btn-accent', 'Accept'],
    ['#cookie-banner .btn-outline', 'Decline'],
  ];

  /* Specificatii produse (li cu <strong>) */
  const EN_PRODUCT_SPECS = [
    ['#produse .product-card:nth-child(1) .product-specs li:nth-child(1)', '<strong>Material:</strong> Polyplan 650g – 900g/sqm'],
    ['#produse .product-card:nth-child(1) .product-specs li:nth-child(2)', '<strong>Durability:</strong> Fire-retardant, tear-proof, UV'],
    ['#produse .product-card:nth-child(1) .product-specs li:nth-child(3)', '<strong>Turnaround:</strong> 24 – 48 hours'],
    ['#produse .product-card:nth-child(2) .product-specs li:nth-child(1)', '<strong>Foil:</strong> 0.8mm Anti-UV Clear Crystal'],
    ['#produse .product-card:nth-child(2) .product-specs li:nth-child(2)', '<strong>System:</strong> Turn-buttons or cassette rails'],
    ['#produse .product-card:nth-child(2) .product-specs li:nth-child(3)', '<strong>Resistance:</strong> No cracking in frost (-30°C)'],
    ['#produse .product-card:nth-child(3) .product-specs li:nth-child(1)', '<strong>Material:</strong> 650g/sqm PVC membrane with UV filter'],
    ['#produse .product-card:nth-child(3) .product-specs li:nth-child(2)', '<strong>Fixing:</strong> Dense eyelets every 50 cm & rings'],
    ['#produse .product-card:nth-child(3) .product-specs li:nth-child(3)', '<strong>Dimensions:</strong> Custom-cut to farm specs'],
    ['#produse .product-card:nth-child(4) .product-specs li:nth-child(1)', '<strong>Fit:</strong> Tailored exactly to boat hull curve'],
    ['#produse .product-card:nth-child(4) .product-specs li:nth-child(2)', '<strong>Hardware:</strong> Marine stainless grommets & springs'],
    ['#produse .product-card:nth-child(4) .product-specs li:nth-child(3)', '<strong>Protection:</strong> Anti-algae, frost & UV'],
    ['#produse .product-card:nth-child(5) .product-specs li:nth-child(1)', '<strong>Weight:</strong> 680g – 900g/sqm reinforced'],
    ['#produse .product-card:nth-child(5) .product-specs li:nth-child(2)', '<strong>Options:</strong> Side roll-over or accordion style'],
    ['#produse .product-card:nth-child(5) .product-specs li:nth-child(3)', '<strong>Turnaround:</strong> 24 hours'],
    ['#produse .product-card:nth-child(6) .product-specs li:nth-child(1)', '<strong>Technology:</strong> Leister 650°C hot-air welding'],
    ['#produse .product-card:nth-child(6) .product-specs li:nth-child(2)', '<strong>Wait Time:</strong> 30 – 90 minutes'],
    ['#produse .product-card:nth-child(6) .product-specs li:nth-child(3)', '<strong>Parking:</strong> Inside workshop yard'],
    ['#produse .product-card:nth-child(7) .product-specs li:nth-child(1)', '<strong>Material:</strong> Class B1 fire-retardant PVC'],
    ['#produse .product-card:nth-child(7) .product-specs li:nth-child(2)', '<strong>Size:</strong> Turnkey industrial projects'],
    ['#produse .product-card:nth-child(7) .product-specs li:nth-child(3)', '<strong>Lifespan:</strong> Over 10 years durability'],
    ['#produse .product-card:nth-child(8) .product-specs li:nth-child(1)', '<strong>Ink:</strong> Specialized ultra-resistant PVC ink'],
    ['#produse .product-card:nth-child(8) .product-specs li:nth-child(2)', '<strong>Design:</strong> Logos, graphics, contact info'],
    ['#produse .product-card:nth-child(8) .product-specs li:nth-child(3)', '<strong>Durability:</strong> Will not peel when folded'],
  ];

  /* Checkbox labels (pastrand elementul <input> intact) */
  const EN_CHECKBOX_LABELS = [
    ['#opt-print', ' Logo & Text Printing / Branding'],
    ['#opt-hardware', ' Galvanized Hardware & Stainless Eyelets'],
    ['#opt-cable', ' TIR Customs Cable / Heavy-Duty Anchors'],
    ['#opt-install', ' On-Site Mounting at Fălticeni Workshop'],
  ];

  /* Placeholders formular contact */
  const EN_PLACEHOLDERS = [
    ['#nume', 'e.g. John Smith / Euro Trans Ltd'],
    ['#telefon', 'e.g. +40 740 123 456'],
    ['#mesaj', 'e.g. Need a new 13.6m semi-trailer tarp or have a 1m tear on the left curtain...'],
  ];

  /* Linkuri WhatsApp (text precompletat in EN) */
  const EN_WA_TEXTS = [
    ['.header-actions .btn-whatsapp', 'Hello! I would like a price estimate for a tarpaulin.'],
    ['.hero-actions .btn-whatsapp', 'Hello! I am sending a photo of my tarpaulin for a price estimate.'],
    ['#before-after .btn-whatsapp', 'Hello! I have a torn tarpaulin. Here is a photo for assessment:'],
    ['#produse .product-card:nth-child(1) .product-actions a', 'Hello! I would like a quote for a truck/TIR tarpaulin.'],
    ['#produse .product-card:nth-child(2) .product-actions a', 'Hello! I would like a quote for a crystal foil terrace enclosure.'],
    ['#produse .product-card:nth-child(3) .product-actions a', 'Hello! I would like a quote for an agricultural hay/silo tarpaulin.'],
    ['#produse .product-card:nth-child(4) .product-actions a', 'Hello! I would like a quote for a boat or winter pool cover.'],
    ['#produse .product-card:nth-child(5) .product-actions a', 'Hello! I would like a quote for a tipper/trailer tarpaulin.'],
    ['#produse .product-card:nth-child(7) .product-actions a', 'Hello! I would like a quote for an industrial canopy/tent.'],
    ['#produse .product-card:nth-child(8) .product-actions a', 'Hello! I would like a quote for tarpaulin printing/branding.'],
    ['#inchiriere .btn-whatsapp', 'Hello! I would like information about tarpaulin rental.'],
    ['.mobile-sticky-bar .btn-whatsapp', 'Hello! I am on E85 and need a quick tarpaulin estimate.'],
  ];

  /* Butoane bara mobila (pastrand SVG-urile intacte) */
  const EN_STICKY_BTN_TEXT = [
    ['.mobile-sticky-bar .btn-accent', ' Call Now'],
    ['.mobile-sticky-bar .btn-whatsapp', ' WhatsApp Photo'],
  ];

  const roCache = {
    title: '',
    description: '',
    html: new Map(),
    text: new Map(),
    checkbox: new Map(),
    placeholder: new Map(),
    waHref: new Map(),
    stickyText: new Map(),
    mapSrc: '',
  };

  let currentLang = 'ro';
  let initialized = false;

  function getLastTextNode(el) {
    for (let i = el.childNodes.length - 1; i >= 0; i--) {
      if (el.childNodes[i].nodeType === Node.TEXT_NODE && el.childNodes[i].nodeValue.trim().length > 0) {
        return el.childNodes[i];
      }
    }
    return null;
  }

  function snapshotRo() {
    roCache.title = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    roCache.description = metaDesc ? metaDesc.getAttribute('content') || '' : '';

    [...EN_HTML, ...EN_PRODUCT_SPECS].forEach(([sel]) => {
      const el = document.querySelector(sel);
      if (el && !roCache.html.has(sel)) roCache.html.set(sel, el.innerHTML);
    });

    EN_TEXT.forEach(([sel]) => {
      const el = document.querySelector(sel);
      if (el && !roCache.text.has(sel)) roCache.text.set(sel, el.textContent);
    });

    EN_CHECKBOX_LABELS.forEach(([inputSel]) => {
      const inp = document.querySelector(inputSel);
      const label = inp ? inp.closest('label') : null;
      const node = label ? getLastTextNode(label) : null;
      if (node) roCache.checkbox.set(inputSel, node.nodeValue);
    });

    EN_PLACEHOLDERS.forEach(([sel]) => {
      const el = document.querySelector(sel);
      if (el) roCache.placeholder.set(sel, el.getAttribute('placeholder') || '');
    });

    EN_WA_TEXTS.forEach(([sel]) => {
      const el = document.querySelector(sel);
      if (el) roCache.waHref.set(sel, el.getAttribute('href') || '');
    });

    EN_STICKY_BTN_TEXT.forEach(([sel]) => {
      const el = document.querySelector(sel);
      const node = el ? getLastTextNode(el) : null;
      if (node) roCache.stickyText.set(sel, node.nodeValue);
    });

    const iframe = document.querySelector('.map-container iframe');
    if (iframe) roCache.mapSrc = iframe.getAttribute('src') || '';
  }

  function applyLanguage(lang) {
    const target = lang === 'en' ? 'en' : 'ro';
    currentLang = target;
    document.documentElement.lang = target;

    const metaDesc = document.querySelector('meta[name="description"]');
    document.title = target === 'en' ? EN_META.title : roCache.title;
    if (metaDesc) {
      metaDesc.setAttribute('content', target === 'en' ? EN_META.description : roCache.description);
    }

    [...EN_HTML, ...EN_PRODUCT_SPECS].forEach(([sel, enVal]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.innerHTML = target === 'en' ? enVal : (roCache.html.get(sel) ?? el.innerHTML);
    });

    EN_TEXT.forEach(([sel, enVal]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.textContent = target === 'en' ? enVal : (roCache.text.get(sel) ?? el.textContent);
    });

    EN_CHECKBOX_LABELS.forEach(([inputSel, enVal]) => {
      const inp = document.querySelector(inputSel);
      const label = inp ? inp.closest('label') : null;
      const node = label ? getLastTextNode(label) : null;
      if (node) node.nodeValue = target === 'en' ? enVal : (roCache.checkbox.get(inputSel) ?? node.nodeValue);
    });

    EN_PLACEHOLDERS.forEach(([sel, enVal]) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute('placeholder', target === 'en' ? enVal : (roCache.placeholder.get(sel) ?? ''));
    });

    EN_WA_TEXTS.forEach(([sel, enMsg]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.setAttribute('href', target === 'en' ? WA_BASE + encodeURIComponent(enMsg) : (roCache.waHref.get(sel) ?? ''));
    });

    EN_STICKY_BTN_TEXT.forEach(([sel, enVal]) => {
      const el = document.querySelector(sel);
      const node = el ? getLastTextNode(el) : null;
      if (node) node.nodeValue = target === 'en' ? enVal : (roCache.stickyText.get(sel) ?? node.nodeValue);
    });

    const iframe = document.querySelector('.map-container iframe');
    if (iframe && roCache.mapSrc) {
      iframe.setAttribute('src', target === 'en' ? roCache.mapSrc.replace('hl=ro', 'hl=en') : roCache.mapSrc);
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.dataset.lang === target;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try {
      localStorage.setItem(STORAGE_KEY, target);
    } catch (_) {}

    window.dispatchEvent(new CustomEvent('cortex:langchange', { detail: { lang: target } }));
  }

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = (params.get('lang') || '').toLowerCase();
    if (urlLang === 'en' || urlLang === 'ro') return urlLang;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ro') return saved;
    } catch (_) {}
    return 'ro';
  }

  function initI18n() {
    if (initialized) return;
    initialized = true;
    snapshotRo();

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });

    const initial = detectInitialLang();
    if (initial !== 'ro') {
      applyLanguage(initial);
    } else {
      document.querySelectorAll('.lang-btn').forEach((btn) => {
        const active = btn.dataset.lang === 'ro';
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }
  }

  window.cortexGetLang = () => currentLang;
  window.cortexSetLang = (lang) => {
    if (!initialized) initI18n();
    applyLanguage(lang);
  };

  document.addEventListener('DOMContentLoaded', initI18n);
})();
