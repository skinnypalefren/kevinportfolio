/* ==========================================================================
   Kevin Matthew L. Palma — Portfolio Script
   Loading sequence, navigation, theme, scroll reveal, project modal,
   creative filter, and contact form handling.
   ========================================================================== */

(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. Loading screen
     ------------------------------------------------------------------------ */
  function initLoadingScreen() {
    const screen = document.getElementById('loading-screen');
    const progress = document.getElementById('loading-progress');
    if (!screen || !progress) return;

    const finish = () => {
      requestAnimationFrame(() => {
        progress.style.width = '100%';
        setTimeout(() => {
          screen.classList.remove('active');
          document.body.classList.add('loaded');
        }, prefersReducedMotion ? 0 : 500);
      });
    };

    // Give the bar a moment to animate even on fast loads.
    setTimeout(() => { progress.style.width = '70%'; }, 120);
    window.addEventListener('load', finish, { once: true });
    // Safety net in case 'load' already fired.
    if (document.readyState === 'complete') finish();
  }

  /* ------------------------------------------------------------------------
     2. Navigation: scrolled state, mobile menu, smooth anchor scroll
     ------------------------------------------------------------------------ */
  function initNav() {
    const nav = document.getElementById('nav');
    const menu = document.getElementById('nav-menu');
    const toggle = document.getElementById('mobile-menu-toggle');
    const links = document.querySelectorAll('.nav-link');

    if (nav) {
      const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('mobile-open');
        toggle.classList.toggle('active', isOpen);
        document.body.classList.toggle('no-scroll', isOpen);
      });
    }

    links.forEach((link) => {
      link.addEventListener('click', () => {
        if (menu && menu.classList.contains('mobile-open')) {
          menu.classList.remove('mobile-open');
          toggle && toggle.classList.remove('active');
          document.body.classList.remove('no-scroll');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Scrollspy — highlight the nav link for the section in view
     ------------------------------------------------------------------------ */
  function initScrollspy() {
    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav-link');
    if (!sections.length || !links.length) return;

    const linkFor = (id) => document.querySelector(`.nav-link[href="#${id}"]`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'));
            const active = linkFor(entry.target.id);
            if (active) active.classList.add('active');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* ------------------------------------------------------------------------
     4. Theme toggle (session-only; no storage)
     ------------------------------------------------------------------------ */
  function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ------------------------------------------------------------------------
     5. Scroll reveal
     ------------------------------------------------------------------------ */
  function initScrollReveal() {
    if (prefersReducedMotion) return;

    const staggerSelectors = ['.skills-grid', '.about-highlights', '.case-studies-grid', '.creative-grid'];
    const singleSelectors = [
      '.section-header',
      '.about-intro',
      '.education-section',
      '.skills-section',
      '.resume-section',
      '.contact-intro',
      '.contact-methods',
      '.social-links',
      '.contact-form',
    ];

    staggerSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => el.classList.add('reveal-stagger'));
    });
    singleSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => el.classList.add('reveal'));
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     6. Project data for the modal
     ------------------------------------------------------------------------ */
  const PROJECT_DATA = {
    'yvez-bank': {
      title: 'Yvez Bank — Mobile Banking App',
      subtitle: 'Mobile Banking App · Academic Project',
      image: 'pics/YvezBank.png',
      tags: ['Mobile Design', 'Financial UX', 'Prototyping', 'User Research'],
      overview:
        'A mobile banking app designed to give users a seamless way to manage their finances, simplifying complex banking operations without compromising on security or accessibility.',
      responsibilities: [
        'Led end-to-end UI/UX design, from early concept sketches to a high-fidelity Figma prototype',
        'Mapped core user flows for transfers, bill payments, and account monitoring',
        'Defined the visual system: type scale, color, iconography, and component library',
      ],
      process: [
        'Researched common pain points in existing banking apps',
        'Sketched low-fidelity wireframes and tested flow logic',
        'Built and refined a high-fidelity interactive prototype in Figma',
      ],
      features: ['Biometric-ready login flow', 'At-a-glance account dashboard', 'Guided transfer and bill-pay flows'],
      tools: ['Figma', 'FigJam', 'Prototyping'],
      challenges:
        'Balancing information density with clarity — banking apps need to show a lot at a glance without overwhelming the user. Solved by grouping actions by frequency of use and progressively disclosing advanced options.',
      results:
        'Delivered a complete, testable prototype demonstrating a full mobile banking experience, used as a portfolio centerpiece for financial UX work.',
      links: [{ label: 'View Prototype', url: 'https://www.figma.com/proto/aorakAlbc8ycpjFCCzZaLo/YvezBank?page-id=0%3A1&node-id=15-19&p=f&viewport=585%2C-65%2C0.77&t=2X8bdlYEQjbRkyLP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2' }],
    },
    'nanny-nest': {
      title: 'NannyNest — Nanny Hiring App',
      subtitle: 'Service Platform · Academic Project',
      image: 'pics/NannyNest.png',
      tags: ['Service Design', 'Two-sided Platform', 'Trust & Safety', 'Wireframing'],
      overview:
        'A two-sided platform connecting families with qualified nannies, featuring detailed profiles, background verification, and scheduling — designed to make trust visible on both sides of the match.',
      responsibilities: [
        'Conducted research to understand both parent and caregiver needs',
        'Designed wireframes and a high-fidelity prototype for both user roles',
        'Designed the verification and trust-signaling elements of caregiver profiles',
      ],
      process: [
        'Interviewed prospective users to understand hiring concerns on both sides',
        'Wireframed core flows: search, profile review, booking, and scheduling',
        'Refined into a high-fidelity prototype with a consistent trust-forward visual language',
      ],
      features: ['Verified-caregiver badges', 'Two-sided profile system', 'Built-in scheduling flow'],
      tools: ['Figma', 'User Interviews'],
      challenges:
        'Designing for two very different user mindsets — parents seeking reassurance and caregivers seeking fair, transparent opportunities — in a single coherent system.',
      results: 'Produced a complete high-fidelity prototype demonstrating a trusted, efficient matching experience.',
      links: [{ label: 'High Fidelity', url: 'https://www.figma.com/proto/SNlKk4ErAIqfWHMgGdCf0W/2N---PalmaKevin?page-id=124%3A2&node-id=185-444&starting-point-node-id=143%3A4&t=qQXLu1wKCGzSyYFv-1' }],
    },
    'bayan-link': {
      title: 'BayanLink v2 — Community Platform',
      subtitle: 'Capstone Project · Final Project',
      image: 'pics/BayanLink.png',
      tags: ['Community Platform', 'Capstone Project', 'User Research', 'System Design'],
      overview:
        'My capstone project: a platform aimed at strengthening local communities through digital tools for communication and collaboration.',
      responsibilities: [
        'Led the full UX process — research, information architecture, wireframing, and prototyping',
        'Produced comprehensive project documentation and design specifications',
        'Iterated the design across multiple rounds based on stakeholder feedback',
      ],
      process: [
        'Conducted stakeholder interviews to identify community coordination gaps',
        'Mapped information architecture for a multi-role platform',
        'Iteratively designed and documented the system from low- to high-fidelity',
      ],
      features: ['Community announcement boards', 'Role-based access for organizers and members', 'Event coordination tools'],
      tools: ['Figma', 'Documentation', 'Stakeholder Interviews'],
      challenges:
        'Designing an information architecture flexible enough for many types of community groups without becoming generic or unfocused.',
      results:
        'Delivered a fully documented capstone project demonstrating the complete UX design process from research through final prototype.',
      links: [{ label: 'View Design', url: 'https://www.figma.com/design/8WsI4BgiR6TkP19o4ddPFG/BayanLink-2.0?node-id=0-1&t=cEle6Cxy8R2XS65m-1' }],
    },
    marahuyo: {
      title: 'Marahuyo — HCI Final Project',
      subtitle: 'HCI Final Project · Group Project',
      image: 'pics/Marahuyo.png',
      tags: ['Human-Computer Interaction', 'Responsive Design', 'Group Collaboration', 'Usability Testing'],
      overview:
        'A Human-Computer Interaction group project exploring core UX principles through a practical, responsive design application.',
      responsibilities: [
        'Collaborated on interaction design decisions within a group setting',
        'Contributed to usability testing and responsive layout design',
      ],
      process: [
        'Applied HCI principles to structure the interaction model',
        'Tested usability with peers and iterated on feedback',
        'Adapted the design for consistency across screen sizes',
      ],
      features: ['Responsive layouts across devices', 'Interaction patterns grounded in HCI principles'],
      tools: ['Figma', 'Usability Testing'],
      challenges: 'Coordinating a consistent design vision across a group project while applying formal HCI methodology.',
      results: 'Delivered a high-fidelity prototype demonstrating applied interaction design and usability principles.',
      links: [{ label: 'High Fidelity', url: 'https://www.figma.com/proto/gQIAR6NGpSgaqRfQ0InFiO/HCI-Groupwork?page-id=1%3A4&node-id=217-72&starting-point-node-id=217%3A72&t=zmkcJf6sHDeQCTSF-1' }],
    },
    'dpwh-ticketing': {
      title: 'DPWH Ticketing Web App',
      subtitle: 'Internship Project · DPWH Internship',
      image: 'pics/DPWH.png',
      tags: ['Government System', 'Process Improvement', 'Stakeholder Research', 'Web Application'],
      overview:
        'Designed during a 500-hour internship at the DPWH Nueva Ecija 2nd District Engineering Office, this ticketing system streamlines internal request processes.',
      responsibilities: [
        'Interviewed staff stakeholders to map existing manual processes',
        'Designed the ticketing interface and submission flow',
        'Documented the system for internal handoff',
      ],
      process: [
        'Shadowed staff to understand the existing paper-based process',
        'Mapped the ideal digital workflow with stakeholder input',
        'Designed and refined the interface based on real user feedback',
      ],
      features: ['Ticket submission and status tracking', 'Role-based views for staff and requesters'],
      tools: ['Figma', 'Stakeholder Interviews', 'Process Mapping'],
      challenges:
        'Designing for staff with varied technical comfort levels, in a government office context with established manual habits.',
      results: 'Delivered a working design for a system intended to reduce processing time and improve request visibility.',
      links: [{ label: 'View Design', url: 'https://www.figma.com/design/j25y0rWYxGGe6w2Suss4Zb/dpwh?node-id=0-1&t=vQaMgFegsOkRjWP6-1' }],
    },
    'sinister-sips': {
      title: 'Sinister Sips Cafe',
      subtitle: 'Web Design',
      image: 'pics/Sinister Sips.png',
      tags: ['Web Design', 'Branding'],
      overview: 'A niche cafe website concept built around a dark, atmospheric brand identity.',
      responsibilities: ['Designed the full site concept and visual identity', 'Built an interactive prototype in Figma'],
      process: ['Explored a moody, atmospheric visual direction to match the cafe concept', 'Prototyped the site experience end to end'],
      features: ['Atmospheric dark theme', 'Custom illustrated branding elements'],
      tools: ['Figma'],
      challenges: 'Keeping a dark, moody palette legible and inviting rather than heavy.',
      results: 'A cohesive, distinctive brand concept demonstrating range beyond standard light-UI design work.',
      links: [{ label: 'View Project', url: 'https://www.figma.com/proto/7PyvYm10jw8fENIPvNG1a4/Sinister-Sips?page-id=0%3A1&node-id=27-480&node-type=frame&viewport=437%2C536%2C0.49&t=99Q0nND4FrpV7cta-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3' }],
    },
    'bear-belly': {
      title: 'BearBelly NFT',
      subtitle: 'Crypto / NFT',
      image: 'pics/BearBelly.png',
      tags: ['Crypto/NFT', 'Web Design'],
      overview: 'A crypto webpage prototype built for NFT minting and collection representation.',
      responsibilities: ['Designed the minting page and collection showcase', 'Designed and published trait artwork'],
      process: ['Designed the minting flow and wallet-connection states', 'Built out the collection gallery presentation'],
      features: ['Minting interface', 'Collection showcase gallery'],
      tools: ['Figma'],
      challenges: 'Designing for an audience already familiar with crypto UI conventions while keeping the flow approachable.',
      results: 'A complete minting-page design used for an active NFT project.',
      links: [{ label: 'View Project', url: 'https://www.figma.com/design/E332BqXQ7ZrLi15MUfxAph/Bear-Belly?m=auto&t=rafIIbK20plAn7VY-1' }],
    },
    ecomrz: {
      title: 'ECOmrZ',
      subtitle: 'E-Commerce',
      image: 'pics/ECOMRz.png',
      tags: ['E-Commerce', 'Sustainability'],
      overview: 'An e-commerce design practice project focused on sustainable, eco-conscious products.',
      responsibilities: ['Designed the storefront and product browsing experience'],
      process: ['Explored a visual language suited to a sustainability-focused brand', 'Designed core storefront and product pages'],
      features: ['Product catalog browsing', 'Sustainability-focused visual branding'],
      tools: ['Figma'],
      challenges: 'Communicating a sustainability message visually without relying on cliché "green" design tropes.',
      results: 'A cohesive e-commerce concept exploring design for a values-driven brand.',
      links: [{ label: 'View Project', url: 'https://www.figma.com/design/iv6zUajnnSdxy9R1gbm3U7/ECOmrZ?node-id=0-1&t=VBBtdOZFUSp9dUKO-1' }],
    },
  };

  /* ------------------------------------------------------------------------
     7. Project modal
     ------------------------------------------------------------------------ */
  function initModal() {
    const overlay = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    if (!overlay || !closeBtn) return;

    const els = {
      image: document.getElementById('modal-image'),
      title: document.getElementById('modal-title'),
      subtitle: document.getElementById('modal-subtitle'),
      tags: document.getElementById('modal-tags'),
      overview: document.getElementById('modal-overview'),
      responsibilities: document.getElementById('modal-responsibilities'),
      process: document.getElementById('modal-process'),
      features: document.getElementById('modal-features'),
      tools: document.getElementById('modal-tools'),
      challenges: document.getElementById('modal-challenges'),
      results: document.getElementById('modal-results'),
      links: document.getElementById('modal-links'),
    };

    const fillList = (el, items) => {
      el.innerHTML = '';
      (items || []).forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        el.appendChild(li);
      });
      el.closest('.modal-section').style.display = items && items.length ? '' : 'none';
    };

    const fillPills = (el, items, tagName) => {
      el.innerHTML = '';
      (items || []).forEach((item) => {
        const span = document.createElement('span');
        span.textContent = item;
        el.appendChild(span);
      });
      if (el.closest('.modal-section')) {
        el.closest('.modal-section').style.display = items && items.length ? '' : 'none';
      }
    };

    const fillText = (el, text) => {
      el.textContent = text || '';
      el.closest('.modal-section').style.display = text ? '' : 'none';
    };

    function fallbackFromCard(card) {
      const img = card.querySelector('img');
      const title = card.querySelector('h3, h4');
      const desc = card.querySelector('p');
      const tagEls = card.querySelectorAll('.tag, .modal-tags span');
      return {
        title: title ? title.textContent.trim() : 'Project',
        subtitle: '',
        image: img ? img.getAttribute('src') : '',
        tags: Array.from(tagEls).map((t) => t.textContent.trim()),
        overview: desc ? desc.textContent.trim() : '',
        responsibilities: [],
        process: [],
        features: [],
        tools: [],
        challenges: '',
        results: '',
        links: [],
      };
    }

    function openModal(data) {
      els.image.src = data.image || '';
      els.image.alt = data.title || '';
      els.title.textContent = data.title || '';
      els.subtitle.textContent = data.subtitle || '';
      fillPills(els.tags, data.tags);
      fillText(els.overview, data.overview);
      fillList(els.responsibilities, data.responsibilities);
      fillList(els.process, data.process);
      fillList(els.features, data.features);
      fillPills(els.tools, data.tools);
      fillText(els.challenges, data.challenges);
      fillText(els.results, data.results);

      els.links.innerHTML = '';
      (data.links || []).forEach((link) => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'btn btn-primary';
        a.textContent = link.label;
        els.links.appendChild(a);
      });

      overlay.classList.add('active');
      document.body.classList.add('no-scroll');
    }

    function closeModal() {
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }

    document.querySelectorAll('.view-details-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('[data-project]') || btn.closest('.case-study-card, .creative-item');
        const slug = card ? card.getAttribute('data-project') : null;
        const data = (slug && PROJECT_DATA[slug]) || fallbackFromCard(card);
        openModal(data);
      });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });
  }

  /* ------------------------------------------------------------------------
     8. Creative works filter
     ------------------------------------------------------------------------ */
  function initFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.creative-item');
    if (!buttons.length || !items.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        items.forEach((item) => {
          const match = filter === 'all' || item.getAttribute('data-category') === filter;
          if (match) {
            item.classList.remove('is-hidden');
          } else {
            item.classList.add('is-hidden');
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. Contact form
     ------------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    let status = form.querySelector('.form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'form-status';
      form.appendChild(status);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      status.textContent = 'Sending…';
      status.className = 'form-status';

      // No backend is wired up yet — this simulates a send so the form feels
      // complete. Connect a service like Formspree or EmailJS to make it live.
      setTimeout(() => {
        status.textContent = "Thanks for reaching out! I'll get back to you soon.";
        status.className = 'form-status success';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        form.reset();
      }, 900);
    });
  }

  /* ------------------------------------------------------------------------
     10. Download CV
     ------------------------------------------------------------------------ */
  function initDownloadCV() {
    const btn = document.getElementById('download-cv-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'Kevin_Matthew_Palma_Resume.pdf';
      link.download = 'Kevin_Matthew_Palma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  /* ------------------------------------------------------------------------
     Init
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initNav();
    initScrollspy();
    initTheme();
    initScrollReveal();
    initModal();
    initFilter();
    initContactForm();
    initDownloadCV();
  });
})();
