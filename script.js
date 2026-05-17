/* =============================================
   VOX.ai — JavaScript
   ============================================= */

// ─── i18n TRANSLATIONS ────────────────────────
const translations = {
  fr: {
    nav_services: "Services", nav_industries: "Industries", nav_team: "Équipe", nav_contact: "Contact", nav_cta: "Démarrer",
    hero_badge: "✦ Intelligence Artificielle de Nouvelle Génération",
    hero_line1: "Boostez votre business", hero_line2: "avec des AI Agents", hero_line3: "sur mesure.",
    hero_sub: "VOX.ai crée des agents intelligents qui automatisent vos appels, emails, réservations et plus — 24h/24, 7j/7, sans erreur.",
    hero_cta1: "Démarrer le projet", hero_cta2: "Découvrir nos services",
    stat1: "Disponibilité", stat2: "Coûts opérationnels", stat3: "Personnalisé",
    fc1_title: "Appel automatisé", fc2_title: "Réservation confirmée", fc3_title: "Email traité",
    scroll: "Défiler",
    services_tag: "Ce que nous faisons", services_title: "Nos Services d'Intelligence Artificielle",
    services_sub: "Des solutions IA clé-en-main pour automatiser, optimiser et transformer votre activité.",
    s1_title: "AI Agent Téléphonique", s1_desc: "Un agent vocal intelligent qui répond à vos appels, qualifie les demandes, prend des rendez-vous et traite les réclamations — 24h/24.", s1_f1: "✓ Réponse instantanée", s1_f2: "✓ Transfert intelligent", s1_f3: "✓ Multilingue",
    s2_title: "Gestion d'Emails IA", s2_desc: "Tri, réponse automatique et escalade intelligente de vos emails entrants. Zéro email ignoré.",
    s3_title: "Réservations & Rendez-vous", s3_desc: "Système de réservation automatique pour restaurants, hôtels, cliniques — synchronisé avec votre agenda.",
    s4_title: "Chatbot Client Avancé", s4_desc: "Intégration sur votre site, WhatsApp, ou Instagram. Répond, conseille, vend et fidélise vos clients.",
    s5_title: "Analyse & Reporting IA", s5_desc: "Dashboards intelligents avec insights automatiques sur vos performances, tendances et opportunités.",
    s6_title: "Automatisation sur Mesure", s6_desc: "Workflow IA personnalisé pour n'importe quelle tâche répétitive dans votre entreprise.",
    ind_tag: "Nos domaines", ind_title: "Des agents IA pour chaque secteur", ind_sub: "Nous développons des solutions adaptées aux réalités de chaque industrie.",
    ind1_title: "Restaurants", ind1_desc: "Réservations automatiques, commandes, réclamations, suivi de satisfaction client.", ind1_t1: "Réservation", ind1_t2: "Commandes", ind1_t3: "Avis clients",
    ind2_title: "Cliniques Médicales", ind2_desc: "Prise de rendez-vous, rappels de consultations, suivi patient et gestion des urgences.", ind2_t1: "Rendez-vous", ind2_t2: "Rappels", ind2_t3: "Suivi patient",
    ind3_title: "Hôtels", ind3_desc: "Gestion des réservations, conciergerie virtuelle, check-in/check-out automatisé.", ind3_t1: "Réservations", ind3_t2: "Conciergerie", ind3_t3: "Check-in",
    ind4_title: "Vente Automobile", ind4_desc: "Qualification des leads, essais routiers, suivi client, relances automatiques et devis instantanés.", ind4_t1: "Leads", ind4_t2: "Essais", ind4_t3: "Devis IA",
    ind5_title: "Agences & Call Centers", ind5_desc: "Automatisation des appels entrants et sortants, gestion des emails en masse, reporting en temps réel.", ind5_t1: "Appels IA", ind5_t2: "Emails auto", ind5_t3: "Reporting",
    ind6_title: "Votre secteur ?", ind6_desc: "Si votre métier implique de la communication client, de la répétition ou de la gestion — nous avons une solution IA pour vous.", ind6_cta: "Parlez-nous",
    how_tag: "Notre processus", how_title: "De l'idée à l'agent IA opérationnel",
    step1_title: "Audit & Analyse", step1_desc: "Nous analysons vos processus actuels, vos points de friction et vos objectifs de croissance.",
    step2_title: "Design de l'Agent", step2_desc: "Nous concevons un agent IA personnalisé — personnalité, flux de dialogue, intégrations.",
    step3_title: "Développement & Tests", step3_desc: "Développement rapide avec des cycles de test intensifs pour garantir la fiabilité.",
    step4_title: "Déploiement & Suivi", step4_desc: "Mise en production, formation de vos équipes, monitoring continu et optimisation.",
    team_tag: "Notre équipe", team_title: "Les fondateurs de VOX.ai", team_sub: "Deux passionnés d'IA au service de votre transformation digitale.",
    role1: "Co-Fondateur & Directeur Technique", bio1: "Expert en intelligence artificielle et développement de solutions automatisées. Abdeldjabar pilote l'architecture technique des agents IA de VOX.ai.",
    role2: "Co-Fondateur & Directeur Stratégie", bio2: "Stratège en transformation digitale et développement commercial. Ramy orchestre la vision produit et les relations clients de VOX.ai.",
    why_tag: "Pourquoi VOX.ai", why_title: "Ce qui nous rend différents",
    w1_title: "Déploiement rapide", w1_desc: "Votre agent IA opérationnel en moins de 2 semaines.",
    w2_title: "100% sur mesure", w2_desc: "Chaque solution est construite spécifiquement pour vos besoins.",
    w3_title: "Sécurité garantie", w3_desc: "Données hébergées en toute sécurité, conformité RGPD assurée.",
    w4_title: "Multilingue natif", w4_desc: "Agents capables de communiquer en arabe, français, anglais et plus.",
    w5_title: "ROI mesurable", w5_desc: "Résultats quantifiables dès les premières semaines de déploiement.",
    w6_title: "Support dédié", w6_desc: "Une équipe dédiée pour vous accompagner tout au long du projet.",
    contact_tag: "Contactez-nous", contact_title: "Prêt à transformer votre business avec l'IA ?",
    contact_sub: "Parlez-nous de votre projet. Nous vous proposerons une démonstration personnalisée gratuite.",
    ci_loc: "Algérie — Disponible dans le monde entier",
    f_name: "Nom complet", fph_name: "Votre nom", f_email: "Email", fph_email: "votre@email.com",
    f_sector: "Secteur d'activité", fopt0: "Sélectionnez votre secteur", fopt1: "Restaurant", fopt2: "Clinique médicale", fopt3: "Hôtel", fopt4: "Vente automobile", fopt5: "Agence / Call Center", fopt6: "Autre",
    f_msg: "Message", fph_msg: "Décrivez votre besoin...", f_send: "Envoyer la demande →", f_success: "✅ Merci ! Nous vous répondrons dans les 24h.",
    footer_desc: "Automatisez. Optimisez. Évoluez.\nL'IA au service de votre croissance.",
    fl1: "Services", fl1_1: "Agents Vocaux", fl1_2: "Gestion Email", fl1_3: "Chatbots", fl1_4: "Automatisation",
    fl2: "Industries", fl2_1: "Restaurants", fl2_2: "Cliniques", fl2_3: "Hôtels", fl2_4: "Automobile",
    fl3: "Entreprise", fl3_1: "Notre équipe", fl3_2: "Contact",
    footer_rights: "Tous droits réservés", footer_made: "Conçu avec ❤️ par VOX.ai"
  },
  en: {
    nav_services: "Services", nav_industries: "Industries", nav_team: "Team", nav_contact: "Contact", nav_cta: "Get Started",
    hero_badge: "✦ Next-Generation Artificial Intelligence",
    hero_line1: "Boost your business", hero_line2: "with custom AI Agents", hero_line3: "built for you.",
    hero_sub: "VOX.ai builds intelligent agents that automate your calls, emails, bookings and more — 24/7, error-free.",
    hero_cta1: "Start your project", hero_cta2: "Discover our services",
    stat1: "Availability", stat2: "Operational costs", stat3: "Customized",
    fc1_title: "Automated call", fc2_title: "Booking confirmed", fc3_title: "Email processed",
    scroll: "Scroll",
    services_tag: "What we do", services_title: "Our Artificial Intelligence Services",
    services_sub: "Turnkey AI solutions to automate, optimize and transform your business.",
    s1_title: "Phone AI Agent", s1_desc: "An intelligent voice agent that answers your calls, qualifies requests, books appointments and handles complaints — 24/7.", s1_f1: "✓ Instant response", s1_f2: "✓ Smart transfer", s1_f3: "✓ Multilingual",
    s2_title: "AI Email Management", s2_desc: "Sorting, automatic replies and intelligent escalation of incoming emails. Zero email ignored.",
    s3_title: "Reservations & Appointments", s3_desc: "Automatic booking system for restaurants, hotels, clinics — synced with your calendar.",
    s4_title: "Advanced Customer Chatbot", s4_desc: "Integrated on your website, WhatsApp, or Instagram. Replies, advises, sells and retains your customers.",
    s5_title: "AI Analytics & Reporting", s5_desc: "Smart dashboards with automatic insights on your performance, trends and opportunities.",
    s6_title: "Custom Automation", s6_desc: "Personalized AI workflow for any repetitive task in your business.",
    ind_tag: "Our fields", ind_title: "AI agents for every industry", ind_sub: "We build solutions tailored to the realities of each industry.",
    ind1_title: "Restaurants", ind1_desc: "Automatic reservations, orders, complaints, customer satisfaction tracking.", ind1_t1: "Reservations", ind1_t2: "Orders", ind1_t3: "Reviews",
    ind2_title: "Medical Clinics", ind2_desc: "Appointment booking, consultation reminders, patient follow-up and emergency management.", ind2_t1: "Appointments", ind2_t2: "Reminders", ind2_t3: "Patient follow-up",
    ind3_title: "Hotels", ind3_desc: "Booking management, virtual concierge, automated check-in/check-out.", ind3_t1: "Bookings", ind3_t2: "Concierge", ind3_t3: "Check-in",
    ind4_title: "Automotive Sales", ind4_desc: "Lead qualification, test drives, customer follow-up, automatic reminders and instant quotes.", ind4_t1: "Leads", ind4_t2: "Test drives", ind4_t3: "AI Quotes",
    ind5_title: "Agencies & Call Centers", ind5_desc: "Automation of inbound and outbound calls, bulk email management, real-time reporting.", ind5_t1: "AI Calls", ind5_t2: "Auto emails", ind5_t3: "Reporting",
    ind6_title: "Your industry?", ind6_desc: "If your business involves customer communication, repetition or management — we have an AI solution for you.", ind6_cta: "Talk to us",
    how_tag: "Our process", how_title: "From idea to operational AI agent",
    step1_title: "Audit & Analysis", step1_desc: "We analyze your current processes, friction points and growth objectives.",
    step2_title: "Agent Design", step2_desc: "We design a custom AI agent — personality, dialogue flow, integrations.",
    step3_title: "Development & Testing", step3_desc: "Rapid development with intensive testing cycles to guarantee reliability.",
    step4_title: "Deployment & Monitoring", step4_desc: "Go live, team training, continuous monitoring and optimization.",
    team_tag: "Our team", team_title: "The founders of VOX.ai", team_sub: "Two AI enthusiasts dedicated to your digital transformation.",
    role1: "Co-Founder & CTO", bio1: "Expert in artificial intelligence and automated solution development. Abdeldjabar leads the technical architecture of VOX.ai's AI agents.",
    role2: "Co-Founder & Chief Strategy Officer", bio2: "Digital transformation strategist and business developer. Ramy orchestrates the product vision and client relations of VOX.ai.",
    why_tag: "Why VOX.ai", why_title: "What makes us different",
    w1_title: "Fast deployment", w1_desc: "Your AI agent live in less than 2 weeks.",
    w2_title: "100% custom", w2_desc: "Every solution is built specifically for your needs.",
    w3_title: "Guaranteed security", w3_desc: "Data hosted securely, full GDPR compliance.",
    w4_title: "Native multilingual", w4_desc: "Agents able to communicate in Arabic, French, English and more.",
    w5_title: "Measurable ROI", w5_desc: "Quantifiable results from the first weeks of deployment.",
    w6_title: "Dedicated support", w6_desc: "A dedicated team to support you throughout the project.",
    contact_tag: "Contact us", contact_title: "Ready to transform your business with AI?",
    contact_sub: "Tell us about your project. We'll offer you a free personalized demo.",
    ci_loc: "Algeria — Available worldwide",
    f_name: "Full name", fph_name: "Your name", f_email: "Email", fph_email: "your@email.com",
    f_sector: "Industry", fopt0: "Select your industry", fopt1: "Restaurant", fopt2: "Medical clinic", fopt3: "Hotel", fopt4: "Automotive sales", fopt5: "Agency / Call Center", fopt6: "Other",
    f_msg: "Message", fph_msg: "Describe your need...", f_send: "Send request →", f_success: "✅ Thank you! We'll reply within 24h.",
    footer_desc: "Automate. Optimize. Evolve.\nAI powering your growth.",
    fl1: "Services", fl1_1: "Voice Agents", fl1_2: "Email Management", fl1_3: "Chatbots", fl1_4: "Automation",
    fl2: "Industries", fl2_1: "Restaurants", fl2_2: "Clinics", fl2_3: "Hotels", fl2_4: "Automotive",
    fl3: "Company", fl3_1: "Our team", fl3_2: "Contact",
    footer_rights: "All rights reserved", footer_made: "Made with ❤️ by VOX.ai"
  },
  ar: {
    nav_services: "الخدمات", nav_industries: "القطاعات", nav_team: "الفريق", nav_contact: "تواصل", nav_cta: "ابدأ الآن",
    hero_badge: "✦ الذكاء الاصطناعي من الجيل الجديد",
    hero_line1: "طوّر أعمالك", hero_line2: "بوكلاء الذكاء الاصطناعي", hero_line3: "المخصصين لك.",
    hero_sub: "VOX.ai تبني وكلاء أذكياء يؤتمتون مكالماتك ورسائلك وحجوزاتك والمزيد — 24/7 بدون أخطاء.",
    hero_cta1: "ابدأ مشروعك", hero_cta2: "اكتشف خدماتنا",
    stat1: "التوفر", stat2: "تخفيض التكاليف", stat3: "مخصص بالكامل",
    fc1_title: "مكالمة آلية", fc2_title: "حجز مؤكد", fc3_title: "بريد معالج",
    scroll: "اسحب للأسفل",
    services_tag: "ما نقدمه", services_title: "خدمات الذكاء الاصطناعي",
    services_sub: "حلول ذكاء اصطناعي متكاملة لأتمتة وتحسين وتحويل أعمالك.",
    s1_title: "وكيل الهاتف الذكي", s1_desc: "وكيل صوتي ذكي يرد على مكالماتك، يأخذ المواعيد، ويعالج الشكاوى — على مدار الساعة.", s1_f1: "✓ رد فوري", s1_f2: "✓ تحويل ذكي", s1_f3: "✓ متعدد اللغات",
    s2_title: "إدارة البريد الإلكتروني", s2_desc: "فرز الرسائل والرد التلقائي والتصعيد الذكي للبريد الوارد. لا رسالة تُهمل.",
    s3_title: "الحجوزات والمواعيد", s3_desc: "نظام حجز تلقائي للمطاعم والفنادق والعيادات — متزامن مع جدولك.",
    s4_title: "روبوت دردشة متقدم", s4_desc: "مدمج في موقعك أو واتساب أو إنستغرام. يرد ويقترح ويبيع ويحتفظ بعملائك.",
    s5_title: "التحليلات والتقارير الذكية", s5_desc: "لوحات تحكم ذكية مع رؤى تلقائية حول أدائك واتجاهاتك وفرصك.",
    s6_title: "الأتمتة المخصصة", s6_desc: "سير عمل ذكاء اصطناعي مخصص لأي مهمة متكررة في شركتك.",
    ind_tag: "مجالاتنا", ind_title: "وكلاء ذكاء اصطناعي لكل قطاع", ind_sub: "نطور حلولاً مصممة خصيصاً لواقع كل صناعة.",
    ind1_title: "المطاعم", ind1_desc: "الحجوزات التلقائية والطلبات والشكاوى ومتابعة رضا العملاء.", ind1_t1: "الحجوزات", ind1_t2: "الطلبات", ind1_t3: "آراء العملاء",
    ind2_title: "العيادات الطبية", ind2_desc: "حجز المواعيد والتذكيرات ومتابعة المرضى وإدارة حالات الطوارئ.", ind2_t1: "المواعيد", ind2_t2: "التذكيرات", ind2_t3: "متابعة المريض",
    ind3_title: "الفنادق", ind3_desc: "إدارة الحجوزات والكونسيرج الافتراضي وتسجيل الوصول/المغادرة الآلي.", ind3_t1: "الحجوزات", ind3_t2: "الكونسيرج", ind3_t3: "تسجيل الوصول",
    ind4_title: "بيع السيارات", ind4_desc: "تأهيل العملاء المحتملين وتجارب القيادة والمتابعة وعروض الأسعار الفورية.", ind4_t1: "العملاء المحتملون", ind4_t2: "تجارب القيادة", ind4_t3: "عروض أسعار ذكية",
    ind5_title: "الوكالات ومراكز الاتصال", ind5_desc: "أتمتة المكالمات الواردة والصادرة وإدارة الرسائل الجماعية والتقارير الفورية.", ind5_t1: "مكالمات ذكية", ind5_t2: "رسائل آلية", ind5_t3: "التقارير",
    ind6_title: "قطاعك؟", ind6_desc: "إذا كان عملك يتضمن تواصلاً مع العملاء أو تكراراً أو إدارة — لدينا حل ذكاء اصطناعي لك.", ind6_cta: "تحدث إلينا",
    how_tag: "منهجيتنا", how_title: "من الفكرة إلى الوكيل الذكي العامل",
    step1_title: "التدقيق والتحليل", step1_desc: "نحلل عملياتك الحالية ونقاط الاحتكاك وأهداف النمو.",
    step2_title: "تصميم الوكيل", step2_desc: "نصمم وكيل ذكاء اصطناعي مخصص — الشخصية وتدفق الحوار والتكاملات.",
    step3_title: "التطوير والاختبار", step3_desc: "تطوير سريع مع دورات اختبار مكثفة لضمان الموثوقية.",
    step4_title: "النشر والمتابعة", step4_desc: "الإطلاق وتدريب فرقك والمراقبة المستمرة والتحسين.",
    team_tag: "فريقنا", team_title: "مؤسسو VOX.ai", team_sub: "شغوفان بالذكاء الاصطناعي في خدمة تحولك الرقمي.",
    role1: "مؤسس مشارك ومدير تقني", bio1: "خبير في الذكاء الاصطناعي وتطوير الحلول الآلية. يقود عبد الجبار البنية التقنية لوكلاء VOX.ai.",
    role2: "مؤسس مشارك ومدير الاستراتيجية", bio2: "استراتيجي في التحول الرقمي وتطوير الأعمال. ينسق رامي رؤية المنتج وعلاقات العملاء في VOX.ai.",
    why_tag: "لماذا VOX.ai", why_title: "ما يميزنا",
    w1_title: "نشر سريع", w1_desc: "وكيلك الذكي جاهز في أقل من أسبوعين.",
    w2_title: "100% مخصص", w2_desc: "كل حل مبني خصيصاً لاحتياجاتك.",
    w3_title: "أمان مضمون", w3_desc: "بيانات مستضافة بأمان مع الامتثال الكامل للخصوصية.",
    w4_title: "متعدد اللغات", w4_desc: "وكلاء قادرون على التواصل بالعربية والفرنسية والإنجليزية والمزيد.",
    w5_title: "عائد استثمار قابل للقياس", w5_desc: "نتائج قابلة للقياس منذ الأسابيع الأولى للنشر.",
    w6_title: "دعم مخصص", w6_desc: "فريق متخصص لمرافقتك طوال المشروع.",
    contact_tag: "تواصل معنا", contact_title: "جاهز لتحويل أعمالك بالذكاء الاصطناعي؟",
    contact_sub: "حدثنا عن مشروعك. سنقدم لك عرضاً تجريبياً مجانياً ومخصصاً.",
    ci_loc: "الجزائر — متوفر في جميع أنحاء العالم",
    f_name: "الاسم الكامل", fph_name: "اسمك", f_email: "البريد الإلكتروني", fph_email: "بريدك@مثال.com",
    f_sector: "قطاع النشاط", fopt0: "اختر قطاعك", fopt1: "مطعم", fopt2: "عيادة طبية", fopt3: "فندق", fopt4: "بيع سيارات", fopt5: "وكالة / مركز اتصال", fopt6: "أخرى",
    f_msg: "الرسالة", fph_msg: "صف حاجتك...", f_send: "إرسال الطلب →", f_success: "✅ شكراً! سنرد عليك خلال 24 ساعة.",
    footer_desc: "أتمتة. تحسين. تطور.\nالذكاء الاصطناعي في خدمة نموك.",
    fl1: "الخدمات", fl1_1: "وكلاء صوتيون", fl1_2: "إدارة البريد", fl1_3: "روبوتات الدردشة", fl1_4: "الأتمتة",
    fl2: "القطاعات", fl2_1: "المطاعم", fl2_2: "العيادات", fl2_3: "الفنادق", fl2_4: "السيارات",
    fl3: "الشركة", fl3_1: "فريقنا", fl3_2: "تواصل",
    footer_rights: "جميع الحقوق محفوظة", footer_made: "صُنع بـ ❤️ من قبل VOX.ai"
  },
  es: {
    nav_services: "Servicios", nav_industries: "Industrias", nav_team: "Equipo", nav_contact: "Contacto", nav_cta: "Comenzar",
    hero_badge: "✦ Inteligencia Artificial de Nueva Generación",
    hero_line1: "Potencia tu negocio", hero_line2: "con Agentes de IA", hero_line3: "a medida.",
    hero_sub: "VOX.ai crea agentes inteligentes que automatizan tus llamadas, emails, reservas y más — 24/7, sin errores.",
    hero_cta1: "Iniciar el proyecto", hero_cta2: "Descubrir nuestros servicios",
    stat1: "Disponibilidad", stat2: "Costes operativos", stat3: "Personalizado",
    fc1_title: "Llamada automatizada", fc2_title: "Reserva confirmada", fc3_title: "Email procesado",
    scroll: "Desplazar",
    services_tag: "Lo que hacemos", services_title: "Nuestros Servicios de Inteligencia Artificial",
    services_sub: "Soluciones de IA llave en mano para automatizar, optimizar y transformar tu negocio.",
    s1_title: "Agente Telefónico IA", s1_desc: "Un agente de voz inteligente que responde llamadas, toma citas y gestiona reclamaciones — 24/7.", s1_f1: "✓ Respuesta instantánea", s1_f2: "✓ Transferencia inteligente", s1_f3: "✓ Multilingüe",
    s2_title: "Gestión de Emails IA", s2_desc: "Clasificación, respuesta automática y escalado inteligente de emails entrantes.",
    s3_title: "Reservas & Citas", s3_desc: "Sistema de reservas automático para restaurantes, hoteles, clínicas — sincronizado con tu agenda.",
    s4_title: "Chatbot de Cliente Avanzado", s4_desc: "Integración en tu web, WhatsApp o Instagram. Responde, asesora, vende y fideliza.",
    s5_title: "Análisis & Reporting IA", s5_desc: "Dashboards inteligentes con insights automáticos sobre tu rendimiento y tendencias.",
    s6_title: "Automatización a Medida", s6_desc: "Flujo de trabajo IA personalizado para cualquier tarea repetitiva en tu empresa.",
    ind_tag: "Nuestros sectores", ind_title: "Agentes IA para cada sector", ind_sub: "Desarrollamos soluciones adaptadas a la realidad de cada industria.",
    ind1_title: "Restaurantes", ind1_desc: "Reservas automáticas, pedidos, reclamaciones y seguimiento de satisfacción.", ind1_t1: "Reservas", ind1_t2: "Pedidos", ind1_t3: "Reseñas",
    ind2_title: "Clínicas Médicas", ind2_desc: "Citas, recordatorios, seguimiento de pacientes y gestión de urgencias.", ind2_t1: "Citas", ind2_t2: "Recordatorios", ind2_t3: "Seguimiento",
    ind3_title: "Hoteles", ind3_desc: "Gestión de reservas, conserjería virtual, check-in/check-out automatizado.", ind3_t1: "Reservas", ind3_t2: "Conserjería", ind3_t3: "Check-in",
    ind4_title: "Venta de Automóviles", ind4_desc: "Cualificación de leads, pruebas de conducción, seguimiento y presupuestos instantáneos.", ind4_t1: "Leads", ind4_t2: "Pruebas", ind4_t3: "Presupuestos IA",
    ind5_title: "Agencias & Call Centers", ind5_desc: "Automatización de llamadas, gestión masiva de emails, reporting en tiempo real.", ind5_t1: "Llamadas IA", ind5_t2: "Emails auto", ind5_t3: "Reporting",
    ind6_title: "¿Tu sector?", ind6_desc: "Si tu negocio implica comunicación con clientes, repetición o gestión — tenemos una solución IA para ti.", ind6_cta: "Háblanos",
    how_tag: "Nuestro proceso", how_title: "De la idea al agente IA operativo",
    step1_title: "Auditoría & Análisis", step1_desc: "Analizamos tus procesos actuales y objetivos de crecimiento.",
    step2_title: "Diseño del Agente", step2_desc: "Diseñamos un agente IA personalizado — personalidad, flujo de diálogo, integraciones.",
    step3_title: "Desarrollo & Pruebas", step3_desc: "Desarrollo rápido con ciclos de pruebas intensivos para garantizar la fiabilidad.",
    step4_title: "Despliegue & Seguimiento", step4_desc: "Puesta en marcha, formación de equipos, monitoreo continuo y optimización.",
    team_tag: "Nuestro equipo", team_title: "Los fundadores de VOX.ai", team_sub: "Dos apasionados de la IA al servicio de tu transformación digital.",
    role1: "Co-Fundador & Director Técnico", bio1: "Experto en IA y desarrollo de soluciones automatizadas. Abdeldjabar lidera la arquitectura técnica de los agentes IA de VOX.ai.",
    role2: "Co-Fundador & Director de Estrategia", bio2: "Estratega en transformación digital y desarrollo comercial. Ramy orquesta la visión de producto y relaciones con clientes de VOX.ai.",
    why_tag: "Por qué VOX.ai", why_title: "Lo que nos hace diferentes",
    w1_title: "Despliegue rápido", w1_desc: "Tu agente IA operativo en menos de 2 semanas.",
    w2_title: "100% a medida", w2_desc: "Cada solución se construye específicamente para tus necesidades.",
    w3_title: "Seguridad garantizada", w3_desc: "Datos alojados de forma segura, cumplimiento RGPD.",
    w4_title: "Multilingüe nativo", w4_desc: "Agentes capaces de comunicarse en árabe, francés, inglés y más.",
    w5_title: "ROI medible", w5_desc: "Resultados cuantificables desde las primeras semanas de despliegue.",
    w6_title: "Soporte dedicado", w6_desc: "Un equipo dedicado para acompañarte durante todo el proyecto.",
    contact_tag: "Contáctanos", contact_title: "¿Listo para transformar tu negocio con IA?",
    contact_sub: "Cuéntanos tu proyecto. Te ofreceremos una demostración personalizada gratuita.",
    ci_loc: "Argelia — Disponible en todo el mundo",
    f_name: "Nombre completo", fph_name: "Tu nombre", f_email: "Email", fph_email: "tu@email.com",
    f_sector: "Sector de actividad", fopt0: "Selecciona tu sector", fopt1: "Restaurante", fopt2: "Clínica médica", fopt3: "Hotel", fopt4: "Venta de autos", fopt5: "Agencia / Call Center", fopt6: "Otro",
    f_msg: "Mensaje", fph_msg: "Describe tu necesidad...", f_send: "Enviar solicitud →", f_success: "✅ ¡Gracias! Te responderemos en 24h.",
    footer_desc: "Automatiza. Optimiza. Evoluciona.\nIA al servicio de tu crecimiento.",
    fl1: "Servicios", fl1_1: "Agentes de Voz", fl1_2: "Gestión Email", fl1_3: "Chatbots", fl1_4: "Automatización",
    fl2: "Industrias", fl2_1: "Restaurantes", fl2_2: "Clínicas", fl2_3: "Hoteles", fl2_4: "Automoción",
    fl3: "Empresa", fl3_1: "Nuestro equipo", fl3_2: "Contacto",
    footer_rights: "Todos los derechos reservados", footer_made: "Hecho con ❤️ por VOX.ai"
  },
  pt: {
    nav_services: "Serviços", nav_industries: "Indústrias", nav_team: "Equipa", nav_contact: "Contacto", nav_cta: "Começar",
    hero_badge: "✦ Inteligência Artificial de Nova Geração",
    hero_line1: "Impulsione o seu negócio", hero_line2: "com Agentes de IA", hero_line3: "personalizados.",
    hero_sub: "VOX.ai cria agentes inteligentes que automatizam as suas chamadas, emails, reservas e muito mais — 24/7, sem erros.",
    hero_cta1: "Iniciar o projeto", hero_cta2: "Descobrir os nossos serviços",
    stat1: "Disponibilidade", stat2: "Custos operacionais", stat3: "Personalizado",
    fc1_title: "Chamada automatizada", fc2_title: "Reserva confirmada", fc3_title: "Email processado",
    scroll: "Rolar",
    services_tag: "O que fazemos", services_title: "Os Nossos Serviços de Inteligência Artificial",
    services_sub: "Soluções de IA chave-na-mão para automatizar, otimizar e transformar o seu negócio.",
    s1_title: "Agente Telefónico IA", s1_desc: "Um agente de voz inteligente que atende chamadas, agenda consultas e trata reclamações — 24/7.", s1_f1: "✓ Resposta instantânea", s1_f2: "✓ Transferência inteligente", s1_f3: "✓ Multilingue",
    s2_title: "Gestão de Email IA", s2_desc: "Triagem, resposta automática e escalonamento inteligente de emails recebidos.",
    s3_title: "Reservas & Consultas", s3_desc: "Sistema de reservas automático para restaurantes, hotéis, clínicas — sincronizado com a sua agenda.",
    s4_title: "Chatbot de Cliente Avançado", s4_desc: "Integrado no seu site, WhatsApp ou Instagram. Responde, aconselha, vende e fideliza.",
    s5_title: "Análise & Relatórios IA", s5_desc: "Dashboards inteligentes com insights automáticos sobre o seu desempenho e tendências.",
    s6_title: "Automação Personalizada", s6_desc: "Fluxo de trabalho IA personalizado para qualquer tarefa repetitiva na sua empresa.",
    ind_tag: "Os nossos setores", ind_title: "Agentes IA para cada setor", ind_sub: "Desenvolvemos soluções adaptadas à realidade de cada indústria.",
    ind1_title: "Restaurantes", ind1_desc: "Reservas automáticas, pedidos, reclamações e acompanhamento da satisfação do cliente.", ind1_t1: "Reservas", ind1_t2: "Pedidos", ind1_t3: "Avaliações",
    ind2_title: "Clínicas Médicas", ind2_desc: "Marcação de consultas, lembretes, acompanhamento de pacientes e gestão de urgências.", ind2_t1: "Consultas", ind2_t2: "Lembretes", ind2_t3: "Acompanhamento",
    ind3_title: "Hotéis", ind3_desc: "Gestão de reservas, concierge virtual, check-in/check-out automatizado.", ind3_t1: "Reservas", ind3_t2: "Concierge", ind3_t3: "Check-in",
    ind4_title: "Venda Automóvel", ind4_desc: "Qualificação de leads, test drives, acompanhamento e orçamentos instantâneos.", ind4_t1: "Leads", ind4_t2: "Test drives", ind4_t3: "Orçamentos IA",
    ind5_title: "Agências & Call Centers", ind5_desc: "Automação de chamadas, gestão de emails em massa, relatórios em tempo real.", ind5_t1: "Chamadas IA", ind5_t2: "Emails auto", ind5_t3: "Relatórios",
    ind6_title: "O seu setor?", ind6_desc: "Se o seu negócio envolve comunicação com clientes, repetição ou gestão — temos uma solução IA para si.", ind6_cta: "Fale connosco",
    how_tag: "O nosso processo", how_title: "Da ideia ao agente IA operacional",
    step1_title: "Auditoria & Análise", step1_desc: "Analisamos os seus processos atuais e objetivos de crescimento.",
    step2_title: "Design do Agente", step2_desc: "Desenhamos um agente IA personalizado — personalidade, fluxo de diálogo, integrações.",
    step3_title: "Desenvolvimento & Testes", step3_desc: "Desenvolvimento rápido com ciclos de testes intensivos para garantir fiabilidade.",
    step4_title: "Implementação & Monitorização", step4_desc: "Lançamento, formação de equipas, monitorização contínua e otimização.",
    team_tag: "A nossa equipa", team_title: "Os fundadores da VOX.ai", team_sub: "Dois apaixonados por IA ao serviço da sua transformação digital.",
    role1: "Co-Fundador & Diretor Técnico", bio1: "Especialista em inteligência artificial e desenvolvimento de soluções automatizadas. Abdeldjabar lidera a arquitetura técnica dos agentes IA da VOX.ai.",
    role2: "Co-Fundador & Diretor de Estratégia", bio2: "Estrategista em transformação digital e desenvolvimento comercial. Ramy orquestra a visão de produto e as relações com clientes da VOX.ai.",
    why_tag: "Porquê VOX.ai", why_title: "O que nos torna diferentes",
    w1_title: "Implementação rápida", w1_desc: "O seu agente IA operacional em menos de 2 semanas.",
    w2_title: "100% personalizado", w2_desc: "Cada solução é construída especificamente para as suas necessidades.",
    w3_title: "Segurança garantida", w3_desc: "Dados alojados com segurança, conformidade com RGPD.",
    w4_title: "Multilingue nativo", w4_desc: "Agentes capazes de comunicar em árabe, francês, inglês e mais.",
    w5_title: "ROI mensurável", w5_desc: "Resultados quantificáveis desde as primeiras semanas de implementação.",
    w6_title: "Suporte dedicado", w6_desc: "Uma equipa dedicada para o acompanhar ao longo do projeto.",
    contact_tag: "Contacte-nos", contact_title: "Pronto para transformar o seu negócio com IA?",
    contact_sub: "Fale-nos do seu projeto. Ofereceremos uma demonstração personalizada gratuita.",
    ci_loc: "Argélia — Disponível em todo o mundo",
    f_name: "Nome completo", fph_name: "O seu nome", f_email: "Email", fph_email: "o_seu@email.com",
    f_sector: "Setor de atividade", fopt0: "Selecione o seu setor", fopt1: "Restaurante", fopt2: "Clínica médica", fopt3: "Hotel", fopt4: "Venda automóvel", fopt5: "Agência / Call Center", fopt6: "Outro",
    f_msg: "Mensagem", fph_msg: "Descreva a sua necessidade...", f_send: "Enviar pedido →", f_success: "✅ Obrigado! Responderemos em 24h.",
    footer_desc: "Automatize. Otimize. Evolua.\nIA ao serviço do seu crescimento.",
    fl1: "Serviços", fl1_1: "Agentes de Voz", fl1_2: "Gestão Email", fl1_3: "Chatbots", fl1_4: "Automatização",
    fl2: "Indústrias", fl2_1: "Restaurantes", fl2_2: "Clínicas", fl2_3: "Hotéis", fl2_4: "Automóvel",
    fl3: "Empresa", fl3_1: "A nossa equipa", fl3_2: "Contacto",
    footer_rights: "Todos os direitos reservados", footer_made: "Feito com ❤️ por VOX.ai"
  },
  de: {
    nav_services: "Dienste", nav_industries: "Branchen", nav_team: "Team", nav_contact: "Kontakt", nav_cta: "Starten",
    hero_badge: "✦ KI der nächsten Generation",
    hero_line1: "Steigern Sie Ihr Geschäft", hero_line2: "mit maßgeschneiderten", hero_line3: "KI-Agenten.",
    hero_sub: "VOX.ai entwickelt intelligente Agenten, die Ihre Anrufe, E-Mails, Buchungen und mehr automatisieren — 24/7, fehlerfrei.",
    hero_cta1: "Projekt starten", hero_cta2: "Unsere Dienste entdecken",
    stat1: "Verfügbarkeit", stat2: "Betriebskosten", stat3: "Individuell",
    fc1_title: "Automatisierter Anruf", fc2_title: "Buchung bestätigt", fc3_title: "E-Mail bearbeitet",
    scroll: "Scrollen",
    services_tag: "Was wir tun", services_title: "Unsere KI-Dienstleistungen",
    services_sub: "Schlüsselfertige KI-Lösungen zur Automatisierung, Optimierung und Transformation Ihres Unternehmens.",
    s1_title: "KI-Telefon-Agent", s1_desc: "Ein intelligenter Sprachagent, der Ihre Anrufe beantwortet, Termine vereinbart und Beschwerden bearbeitet — 24/7.", s1_f1: "✓ Sofortige Antwort", s1_f2: "✓ Intelligente Weiterleitung", s1_f3: "✓ Mehrsprachig",
    s2_title: "KI-E-Mail-Verwaltung", s2_desc: "Sortierung, automatische Antworten und intelligente Eskalation eingehender E-Mails.",
    s3_title: "Buchungen & Termine", s3_desc: "Automatisches Buchungssystem für Restaurants, Hotels, Kliniken — mit Ihrem Kalender synchronisiert.",
    s4_title: "Erweiterter Kunden-Chatbot", s4_desc: "Integration auf Ihrer Website, WhatsApp oder Instagram. Antwortet, berät, verkauft und bindet Kunden.",
    s5_title: "KI-Analyse & Reporting", s5_desc: "Intelligente Dashboards mit automatischen Einblicken in Ihre Leistung und Trends.",
    s6_title: "Maßgeschneiderte Automatisierung", s6_desc: "Individueller KI-Workflow für jede repetitive Aufgabe in Ihrem Unternehmen.",
    ind_tag: "Unsere Bereiche", ind_title: "KI-Agenten für jede Branche", ind_sub: "Wir entwickeln Lösungen, die auf die Realitäten jeder Branche zugeschnitten sind.",
    ind1_title: "Restaurants", ind1_desc: "Automatische Reservierungen, Bestellungen, Beschwerden und Kundenzufriedenheit.", ind1_t1: "Reservierungen", ind1_t2: "Bestellungen", ind1_t3: "Bewertungen",
    ind2_title: "Medizinische Kliniken", ind2_desc: "Terminbuchung, Erinnerungen, Patientenverfolgung und Notfallmanagement.", ind2_t1: "Termine", ind2_t2: "Erinnerungen", ind2_t3: "Patientenverfolgung",
    ind3_title: "Hotels", ind3_desc: "Buchungsverwaltung, virtueller Concierge, automatisiertes Check-in/Check-out.", ind3_t1: "Buchungen", ind3_t2: "Concierge", ind3_t3: "Check-in",
    ind4_title: "Fahrzeugverkauf", ind4_desc: "Lead-Qualifizierung, Probefahrten, Kundenverfolgung und Sofortangebote.", ind4_t1: "Leads", ind4_t2: "Probefahrten", ind4_t3: "KI-Angebote",
    ind5_title: "Agenturen & Call Center", ind5_desc: "Automatisierung von Anrufen, Massen-E-Mail-Verwaltung, Echtzeit-Reporting.", ind5_t1: "KI-Anrufe", ind5_t2: "Auto-E-Mails", ind5_t3: "Reporting",
    ind6_title: "Ihre Branche?", ind6_desc: "Wenn Ihr Geschäft Kundenkommunikation, Wiederholungen oder Verwaltung umfasst — wir haben eine KI-Lösung für Sie.", ind6_cta: "Kontaktieren Sie uns",
    how_tag: "Unser Prozess", how_title: "Von der Idee zum betriebsbereiten KI-Agenten",
    step1_title: "Audit & Analyse", step1_desc: "Wir analysieren Ihre aktuellen Prozesse, Reibungspunkte und Wachstumsziele.",
    step2_title: "Agent-Design", step2_desc: "Wir entwickeln einen maßgeschneiderten KI-Agenten — Persönlichkeit, Dialogfluss, Integrationen.",
    step3_title: "Entwicklung & Tests", step3_desc: "Schnelle Entwicklung mit intensiven Testzyklen zur Gewährleistung der Zuverlässigkeit.",
    step4_title: "Einsatz & Überwachung", step4_desc: "Inbetriebnahme, Teamschulung, kontinuierliche Überwachung und Optimierung.",
    team_tag: "Unser Team", team_title: "Die Gründer von VOX.ai", team_sub: "Zwei KI-Enthusiasten im Dienst Ihrer digitalen Transformation.",
    role1: "Mitgründer & Technischer Direktor", bio1: "Experte für künstliche Intelligenz und automatisierte Lösungsentwicklung. Abdeldjabar leitet die technische Architektur der KI-Agenten von VOX.ai.",
    role2: "Mitgründer & Strategiedirektor", bio2: "Stratege für digitale Transformation und Geschäftsentwicklung. Ramy orchestriert die Produktvision und Kundenbeziehungen von VOX.ai.",
    why_tag: "Warum VOX.ai", why_title: "Was uns unterscheidet",
    w1_title: "Schneller Einsatz", w1_desc: "Ihr KI-Agent in weniger als 2 Wochen betriebsbereit.",
    w2_title: "100% maßgeschneidert", w2_desc: "Jede Lösung wird speziell für Ihre Bedürfnisse entwickelt.",
    w3_title: "Garantierte Sicherheit", w3_desc: "Daten sicher gehostet, vollständige DSGVO-Konformität.",
    w4_title: "Mehrsprachig nativ", w4_desc: "Agenten können auf Arabisch, Französisch, Englisch und mehr kommunizieren.",
    w5_title: "Messbarer ROI", w5_desc: "Quantifizierbare Ergebnisse ab den ersten Einsatzwochen.",
    w6_title: "Dedizierter Support", w6_desc: "Ein dediziertes Team begleitet Sie während des gesamten Projekts.",
    contact_tag: "Kontaktieren Sie uns", contact_title: "Bereit, Ihr Unternehmen mit KI zu transformieren?",
    contact_sub: "Erzählen Sie uns von Ihrem Projekt. Wir bieten Ihnen eine kostenlose personalisierte Demo.",
    ci_loc: "Algerien — Weltweit verfügbar",
    f_name: "Vollständiger Name", fph_name: "Ihr Name", f_email: "E-Mail", fph_email: "ihre@email.com",
    f_sector: "Tätigkeitsbereich", fopt0: "Wählen Sie Ihren Bereich", fopt1: "Restaurant", fopt2: "Medizinische Klinik", fopt3: "Hotel", fopt4: "Fahrzeugverkauf", fopt5: "Agentur / Call Center", fopt6: "Sonstiges",
    f_msg: "Nachricht", fph_msg: "Beschreiben Sie Ihren Bedarf...", f_send: "Anfrage senden →", f_success: "✅ Danke! Wir antworten innerhalb von 24h.",
    footer_desc: "Automatisieren. Optimieren. Weiterentwickeln.\nKI im Dienst Ihres Wachstums.",
    fl1: "Dienste", fl1_1: "Sprachagenten", fl1_2: "E-Mail-Verwaltung", fl1_3: "Chatbots", fl1_4: "Automatisierung",
    fl2: "Branchen", fl2_1: "Restaurants", fl2_2: "Kliniken", fl2_3: "Hotels", fl2_4: "Automobil",
    fl3: "Unternehmen", fl3_1: "Unser Team", fl3_2: "Kontakt",
    footer_rights: "Alle Rechte vorbehalten", footer_made: "Mit ❤️ von VOX.ai gemacht"
  },
  mt: {
    nav_services: "Servizzi", nav_industries: "Industriji", nav_team: "Tim", nav_contact: "Kuntatt", nav_cta: "Ibda",
    hero_badge: "✦ Intelliġenza Artifiċjali tal-Ġenerazzjoni l-Ġdida",
    hero_line1: "Żid in-negozju tiegħek", hero_line2: "b'Aġenti ta' AI", hero_line3: "personalizzati.",
    hero_sub: "VOX.ai jibni aġenti intelliġenti li jawtomatizzaw it-telefonati, emails, prenotazzjonijiet u aktar — 24/7, mingħajr żbalji.",
    hero_cta1: "Ibda l-proġett", hero_cta2: "Skopri s-servizzi tagħna",
    stat1: "Disponibilità", stat2: "Ispejjeż operattivi", stat3: "Personalizzat",
    fc1_title: "Telefonata awtomatika", fc2_title: "Prenotazzjoni kkonfermata", fc3_title: "Email ipproċessat",
    scroll: "Skorrja",
    services_tag: "X'nagħmlu", services_title: "Is-Servizzi tal-Intelliġenza Artifiċjali tagħna",
    services_sub: "Soluzzjonijiet ta' AI b'wiċċ il-bieb biex tawtomatizza, tottimizza u tbiddel in-negozju tiegħek.",
    s1_title: "Aġent Telefoniku AI", s1_desc: "Aġent tal-vuċi intelliġenti li jwieġeb it-telefonati tiegħek, jieħu appuntamenti u jittratta lmenti — 24/7.", s1_f1: "✓ Risposta immedjata", s1_f2: "✓ Trasferiment intelliġenti", s1_f3: "✓ Multilingwali",
    s2_title: "Ġestjoni ta' Emails AI", s2_desc: "Sorting, tweġiba awtomatika u eskalazzjoni intelliġenti ta' emails li jidħlu.",
    s3_title: "Prenotazzjonijiet & Appuntamenti", s3_desc: "Sistema awtomatika ta' prenotazzjonijiet għal ristoranti, lukandi, kliniki.",
    s4_title: "Chatbot avanzat", s4_desc: "Integrat fuq is-sit web tiegħek, WhatsApp jew Instagram.",
    s5_title: "Analiżi & Rappurtaġġ AI", s5_desc: "Dashboards intelliġenti b'insights awtomatiċi fuq il-prestazzjoni tiegħek.",
    s6_title: "Awtomazzjoni personalizzata", s6_desc: "Flusso ta' xogħol AI personalizzat għal kwalunkwe kompitu repetittiv.",
    ind_tag: "L-oqsma tagħna", ind_title: "Aġenti AI għal kull settur", ind_sub: "Niżviluppaw soluzzjonijiet adattati għar-realtà ta' kull industrija.",
    ind1_title: "Ristoranti", ind1_desc: "Prenotazzjonijiet awtomatiċi, ordnijiet, lmenti u sorveljanza tal-klijenti.", ind1_t1: "Prenotazzjonijiet", ind1_t2: "Ordnijiet", ind1_t3: "Reviżjonijiet",
    ind2_title: "Kliniki Mediċi", ind2_desc: "Appuntamenti, tifkiriet, follow-up tal-pazjenti u ġestjoni tal-emerġenzi.", ind2_t1: "Appuntamenti", ind2_t2: "Tifkiriet", ind2_t3: "Segwitu",
    ind3_title: "Lukandi", ind3_desc: "Ġestjoni tal-prenotazzjonijiet, concierge virtwali, check-in/check-out awtomatizzat.", ind3_t1: "Prenotazzjonijiet", ind3_t2: "Concierge", ind3_t3: "Check-in",
    ind4_title: "Bejgħ tal-Karozzi", ind4_desc: "Kwalifikazzjoni ta' leads, test drives, segwitu u kwotazzjonijiet immedjati.", ind4_t1: "Leads", ind4_t2: "Test drives", ind4_t3: "Kwotazzjonijiet AI",
    ind5_title: "Aġenziji & Call Centers", ind5_desc: "Awtomazzjoni ta' telefonati, ġestjoni massiva ta' emails, rappurtaġġ f'ħin reali.", ind5_t1: "Telefonati AI", ind5_t2: "Emails awto", ind5_t3: "Rappurtaġġ",
    ind6_title: "Is-settur tiegħek?", ind6_desc: "Jekk in-negozju tiegħek jinvolvi komunikazzjoni mal-klijenti — għandna soluzzjoni AI għalik.", ind6_cta: "Ikkuntattjana",
    how_tag: "Il-proċess tagħna", how_title: "Mill-idea għall-aġent AI operazzjonali",
    step1_title: "Awditu & Analiżi", step1_desc: "Nanalizzaw il-proċessi attwali tiegħek u l-għanijiet tat-tkabbir.",
    step2_title: "Disinn tal-Aġent", step2_desc: "Niddisinjaw aġent AI personalizzat — personalità, fluss tad-djalogu, integrazzjonijiet.",
    step3_title: "Żvilupp & Testijiet", step3_desc: "Żvilupp rapidu b'ċikli ta' ttestjar intensivi.",
    step4_title: "Skjerament & Monitoraġġ", step4_desc: "Tniedija, taħriġ tat-tim, monitoraġġ kontinwu u ottimizzazzjoni.",
    team_tag: "It-tim tagħna", team_title: "Il-fundaturi ta' VOX.ai", team_sub: "Tnejn passjonati dwar l-AI fis-servizz tat-trasformazzjoni diġitali tiegħek.",
    role1: "Ko-Fundatur & Direttur Tekniku", bio1: "Espert fl-intelliġenza artifiċjali u l-iżvilupp ta' soluzzjonijiet awtomatizzati.",
    role2: "Ko-Fundatur & Direttur tal-Istrateġija", bio2: "Strategu fit-trasformazzjoni diġitali u l-iżvilupp tal-kummerċ.",
    why_tag: "Għaliex VOX.ai", why_title: "X'jagħmilna differenti",
    w1_title: "Skjerament rapidu", w1_desc: "L-aġent AI tiegħek operazzjonali f'inqas minn ġimgħatejn.",
    w2_title: "100% personalizzat", w2_desc: "Kull soluzzjoni hija mibnija speċifikament għall-ħtiġijiet tiegħek.",
    w3_title: "Sigurtà garantita", w3_desc: "Data ospitata b'mod sigur, konformità sħiħa mal-GDPR.",
    w4_title: "Multilingwali nattiv", w4_desc: "Aġenti kapaċi jikkomunikaw bl-Għarbi, Franċiż, Ingliż u aktar.",
    w5_title: "ROI kejl", w5_desc: "Riżultati kwantifikabbli mill-ewwel ġimgħat ta' skjerament.",
    w6_title: "Appoġġ iddedikat", w6_desc: "Tim iddedikat biex jakkumpanjak tul il-proġett.",
    contact_tag: "Ikkuntattjana", contact_title: "Lest biex titrasforma n-negozju tiegħek b'AI?",
    contact_sub: "Għidilna dwar il-proġett tiegħek. Ser noffrulek dimostrazzjoni personalizzata b'xejn.",
    ci_loc: "Alġerija — Disponibbli mad-dinja kollha",
    f_name: "Isem sħiħ", fph_name: "Ismek", f_email: "Email", fph_email: "tiegħek@email.com",
    f_sector: "Settur tal-attività", fopt0: "Agħżel is-settur tiegħek", fopt1: "Ristorant", fopt2: "Klinika medika", fopt3: "Lukanda", fopt4: "Bejgħ tal-karozzi", fopt5: "Aġenzija / Call Center", fopt6: "Oħra",
    f_msg: "Messaġġ", fph_msg: "Iddeskrivi l-ħtieġa tiegħek...", f_send: "Ibgħat it-talba →", f_success: "✅ Grazzi! Nirrispondu fi żmien 24 siegħa.",
    footer_desc: "Awtomat. Ottimizza. Evolvi.\nAI fis-servizz tat-tkabbir tiegħek.",
    fl1: "Servizzi", fl1_1: "Aġenti tal-Vuċi", fl1_2: "Ġestjoni tal-Email", fl1_3: "Chatbots", fl1_4: "Awtomazzjoni",
    fl2: "Industriji", fl2_1: "Ristoranti", fl2_2: "Kliniki", fl2_3: "Lukandi", fl2_4: "Karozzi",
    fl3: "Kumpanija", fl3_1: "It-tim tagħna", fl3_2: "Kuntatt",
    footer_rights: "Id-drittijiet kollha riżervati", footer_made: "Magħmul b'❤️ minn VOX.ai"
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  const isRTL = lang === 'ar';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // Update current lang display
  const labels = { fr: 'FR', en: 'EN', ar: 'عر', es: 'ES', pt: 'PT', de: 'DE', mt: 'MT' };
  document.getElementById('current-lang').textContent = labels[lang] || lang.toUpperCase();

  // Update active class
  document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));

  // Apply translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Close dropdown
  document.getElementById('lang-dropdown').classList.remove('open');
}

// ─── LANG DROPDOWN ────────────────────────────
document.getElementById('lang-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('lang-dropdown').classList.toggle('open');
});
document.addEventListener('click', () => {
  document.getElementById('lang-dropdown').classList.remove('open');
});
document.getElementById('lang-dropdown').addEventListener('click', e => e.stopPropagation());

// ─── NAVBAR SCROLL ─────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const navLinks = document.getElementById('nav-links');

  if (window.scrollY > 40) nav.classList.add('scrolled');
  if (
    navLinks.classList.contains('nav-links') &&
    navLinks.classList.contains('open')
  ) {
      console.log('les deux classes existent');
      nav.classList.remove('scrolled');
  }
  if (window.scrollY < 40) nav.classList.remove('scrolled');

});

// ─── HAMBURGER ─────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const nav = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  if (window.scrollY > 40) nav.classList.toggle('scrolled');
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');

  

 
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (window.scrollY > 40) nav.classList.toggle('scrolled');
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');

}));

// ─── CUSTOM CURSOR ─────────────────────────────
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button, .service-card, .ind-card, .why-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-expand'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-expand'));
});

// ─── PARTICLES ─────────────────────────────────
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let W, H;

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticle() {
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1
  };
}

for (let i = 0; i < 120; i++) particles.push(createParticle());

function drawParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > W) p.dx *= -1;
    if (p.y < 0 || p.y > H) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
    ctx.fill();
  });
  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ─── SCROLL REVEAL ─────────────────────────────
function revealOnScroll() {
  document.querySelectorAll('.service-card, .ind-card, .step, .why-card, .section-header, .team-card, .contact-left, .contact-right').forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
revealOnScroll();

// ─── TEAM SLIDER ──────────────────────────────
let slideIndex = 0;
const totalSlides = 2;

function goSlide(val, isRelative = false) {
  if (isRelative) slideIndex = (slideIndex + val + totalSlides) % totalSlides;
  else slideIndex = ((val % totalSlides) + totalSlides) % totalSlides;

  const slider = document.getElementById('team-slider');
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  slider.style.transform = `translateX(${isRTL ? '' : '-'}${slideIndex * 100}%)`;

  document.querySelectorAll('.sdot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

// Auto-advance
setInterval(() => goSlide(1, true), 6000);

// ─── FORM SUBMIT ──────────────────────────────
function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-msg').value.trim();
  if (!name || !email || !msg) {
    alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Veuillez remplir tous les champs requis.');
    return;
  }
  const successEl = document.getElementById('form-success');
  const t = translations[currentLang];
  successEl.textContent = t?.f_success || '✅ Merci !';
  successEl.style.display = 'block';
  document.getElementById('f-name').value = '';
  document.getElementById('f-email').value = '';
  document.getElementById('f-msg').value = '';
  setTimeout(() => successEl.style.display = 'none', 5000);
}

// ─── SMOOTH LINK ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
