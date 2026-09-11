/* ==========================================================================
   Kevin Matthew L. Palma - Portfolio Script
   ========================================================================== */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------- loader */
  function initLoader() {
    const screen = document.getElementById('loading-screen');
    const typed = document.getElementById('loader-typed');
    const fill = document.getElementById('loader-fill');
    const pct = document.getElementById('loading-progress');
    if (!screen || !typed || !fill || !pct) return;

    const FULL_NAME = 'Kevin Matthew L. Palma';
    let charIndex = 0;
    let percent = 0;
    let typeDone = false;
    let loadDone = false;

    const typeTimer = reduceMotion
      ? null
      : setInterval(() => {
          charIndex = Math.min(charIndex + 1, FULL_NAME.length);
          typed.textContent = FULL_NAME.slice(0, charIndex);
          if (charIndex >= FULL_NAME.length) {
            clearInterval(typeTimer);
            typeDone = true;
            maybeExit();
          }
        }, 42);

    if (reduceMotion) typed.textContent = FULL_NAME;

    const progressTimer = setInterval(() => {
      percent = Math.min(percent + Math.ceil(Math.random() * 11), loadDone ? 100 : 92);
      fill.style.width = percent + '%';
      pct.textContent = String(percent).padStart(2, '0') + '%';
      if (percent >= 100) clearInterval(progressTimer);
    }, 90);

    function maybeExit() {
      if (!(typeDone || reduceMotion) || !loadDone) return;
      percent = 100;
      fill.style.width = '100%';
      pct.textContent = '100%';
      clearInterval(progressTimer);
      setTimeout(() => {
        screen.classList.add('exiting');
        setTimeout(() => screen.classList.remove('active'), reduceMotion ? 0 : 900);
      }, reduceMotion ? 0 : 260);
    }

    window.addEventListener(
      'load',
      () => {
        loadDone = true;
        maybeExit();
      },
      { once: true }
    );
    if (document.readyState === 'complete') {
      loadDone = true;
      maybeExit();
    }
  }

  /* ---------------------------------------------------------- nav */
  function initNav() {
    const nav = document.getElementById('nav');
    const menu = document.getElementById('nav-menu');
    const toggle = document.getElementById('mobile-menu-toggle');
    const links = document.querySelectorAll('.nav-link');

    if (nav) {
      const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('mobile-open');
        toggle.classList.toggle('active', open);
        document.body.classList.toggle('no-scroll', open);
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

  /* ---------------------------------------------------------- scrollspy */
  function initScrollspy() {
    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav-link');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((l) => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------------------------------------------------- theme */
  function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    });
  }

  /* ---------------------------------------------------------- reveal */
  function initReveal() {
    if (reduceMotion) return;
    const targets = document.querySelectorAll(
      '.section-head, .about-text, .now-list, .work-entry, .craft-grid, .cv-block, .contact-info, .contact-form, .ledger'
    );
    targets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------- project data */
  const PROJECTS = {
    'yvez-bank': {
      title: 'Yvez Bank', subtitle: 'Mobile Banking App - Academic Project',
      image: 'pics/YvezBank.png',
      tags: 'Mobile design / Financial UX / Prototyping / User research',
      overview: 'A mobile banking app designed to give users a seamless way to manage their finances, simplifying complex banking operations without compromising on security or accessibility.',
      responsibilities: ['Led end-to-end UI/UX design, from concept sketches to a high-fidelity Figma prototype', 'Mapped core flows for transfers, bill payments, and account monitoring', 'Defined the visual system: type, color, iconography, and components'],
      process: ['Researched common pain points in existing banking apps', 'Sketched low-fidelity wireframes and tested flow logic', 'Built and refined a high-fidelity interactive prototype'],
      features: ['Biometric-ready login flow', 'At-a-glance account dashboard', 'Guided transfer and bill-pay flows'],
      tools: 'Figma, FigJam, Prototyping',
      challenges: 'Balancing information density with clarity, since banking apps need to show a lot at a glance without overwhelming the user, solved by grouping actions by frequency of use.',
      results: 'A complete, testable prototype demonstrating a full mobile banking experience.',
      links: [{ label: 'View prototype ↗', url: 'https://www.figma.com/proto/aorakAlbc8ycpjFCCzZaLo/YvezBank?page-id=0%3A1&node-id=15-19&p=f&viewport=585%2C-65%2C0.77&t=2X8bdlYEQjbRkyLP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2' }],
    },
    'nanny-nest': {
      title: 'NannyNest', subtitle: 'Service Platform - Academic Project',
      image: 'pics/NannyNest.png',
      tags: 'Service design / Two-sided platform / Trust & safety / Wireframing',
      overview: 'A two-sided platform connecting families with qualified nannies, verified profiles, background checks, and scheduling built to make trust visible on both sides of the match.',
      responsibilities: ['Researched both parent and caregiver needs', 'Designed wireframes and a high-fidelity prototype for both user roles', 'Designed the verification and trust-signaling elements of profiles'],
      process: ['Interviewed prospective users on hiring concerns', 'Wireframed search, profile review, booking, and scheduling flows', 'Refined into a high-fidelity, trust-forward prototype'],
      features: ['Verified-caregiver badges', 'Two-sided profile system', 'Built-in scheduling flow'],
      tools: 'Figma, User Interviews',
      challenges: 'Designing for two very different mindsets, parents seeking reassurance and caregivers seeking fair opportunity, in one coherent system.',
      results: 'A complete high-fidelity prototype demonstrating a trusted, efficient matching experience.',
      links: [{ label: 'High fidelity ↗', url: 'https://www.figma.com/proto/SNlKk4ErAIqfWHMgGdCf0W/2N---PalmaKevin?page-id=124%3A2&node-id=185-444&starting-point-node-id=143%3A4&t=qQXLu1wKCGzSyYFv-1' }],
    },
    'bayan-link': {
      title: 'BayanLink v2', subtitle: 'Capstone Project',
      image: 'pics/BayanLink.png',
      tags: 'Community platform / Capstone / User research / System design',
      overview: 'My capstone project: a platform aimed at strengthening local communities through digital tools for communication and collaboration.',
      responsibilities: ['Led the full UX process, including research, IA, wireframing, and prototyping', 'Produced project documentation and design specs', 'Iterated across rounds based on stakeholder feedback'],
      process: ['Interviewed stakeholders to find coordination gaps', 'Mapped information architecture for a multi-role platform', 'Iteratively designed and documented low- to high-fidelity'],
      features: ['Community announcement boards', 'Role-based access for organizers and members', 'Event coordination tools'],
      tools: 'Figma, Documentation, Stakeholder interviews',
      challenges: 'Designing an information architecture flexible enough for many community types without becoming generic.',
      results: 'A fully documented capstone demonstrating the complete UX process from research through prototype.',
      links: [{ label: 'View design ↗', url: 'https://www.figma.com/design/8WsI4BgiR6TkP19o4ddPFG/BayanLink-2.0?node-id=0-1&t=cEle6Cxy8R2XS65m-1' }],
    },
    marahuyo: {
      title: 'Marahuyo', subtitle: 'HCI Final Project - Group Work',
      image: 'pics/Marahuyo.png',
      tags: 'HCI / Responsive design / Group collaboration / Usability testing',
      overview: 'A Human-Computer Interaction group project exploring core UX principles through a practical, responsive application.',
      responsibilities: ['Contributed to interaction design decisions within the group', 'Contributed to usability testing and responsive layout design'],
      process: ['Applied HCI principles to structure the interaction model', 'Tested usability with peers and iterated on feedback', 'Adapted the design for consistency across screen sizes'],
      features: ['Responsive layouts across devices', 'Interaction patterns grounded in HCI principles'],
      tools: 'Figma, Usability Testing',
      challenges: 'Coordinating one design vision across a group while applying formal HCI methodology.',
      results: 'A high-fidelity prototype demonstrating applied interaction design and usability principles.',
      links: [{ label: 'High fidelity ↗', url: 'https://www.figma.com/proto/gQIAR6NGpSgaqRfQ0InFiO/HCI-Groupwork?page-id=1%3A4&node-id=217-72&starting-point-node-id=217%3A72&t=zmkcJf6sHDeQCTSF-1' }],
    },
    'dpwh-ticketing': {
      title: 'DPWH Ticketing Web App', subtitle: 'Internship Project - DPWH',
      image: 'pics/DPWH.png',
      tags: 'Government system / Process improvement / Stakeholder research',
      overview: 'Designed during a 500-hour internship at the DPWH Nueva Ecija 2nd District Engineering Office, this ticketing system streamlines internal request processes.',
      responsibilities: ['Interviewed staff stakeholders on existing manual processes', 'Designed the ticketing interface and submission flow', 'Documented the system for internal handoff'],
      process: ['Shadowed staff on the existing paper-based process', 'Mapped the ideal digital workflow with stakeholder input', 'Designed and refined the interface on real feedback'],
      features: ['Ticket submission and status tracking', 'Role-based views for staff and requesters'],
      tools: 'Figma, Stakeholder interviews, Process mapping',
      challenges: 'Designing for staff with varied technical comfort in a government office with established manual habits.',
      results: 'A working design intended to reduce processing time and improve request visibility.',
      links: [{ label: 'View design ↗', url: 'https://www.figma.com/design/j25y0rWYxGGe6w2Suss4Zb/dpwh?node-id=0-1&t=vQaMgFegsOkRjWP6-1' }],
    },
    'sinister-sips': {
      title: 'Sinister Sips Cafe', subtitle: 'Web Design',
      image: 'pics/Sinister Sips.png',
      tags: 'Web design / Branding',
      overview: 'A niche cafe website concept built around a dark, atmospheric brand identity.',
      responsibilities: ['Designed the full site concept and visual identity', 'Built an interactive prototype'],
      process: ['Explored a moody, atmospheric visual direction', 'Prototyped the site experience end to end'],
      features: ['Atmospheric dark theme', 'Custom illustrated branding elements'],
      tools: 'Figma',
      challenges: 'Keeping a dark palette legible and inviting rather than heavy.',
      results: 'A cohesive brand concept demonstrating range beyond standard light-UI work.',
      links: [{ label: 'View project ↗', url: 'https://www.figma.com/proto/7PyvYm10jw8fENIPvNG1a4/Sinister-Sips?page-id=0%3A1&node-id=27-480&node-type=frame&viewport=437%2C536%2C0.49&t=99Q0nND4FrpV7cta-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3' }],
    },
    'bear-belly': {
      title: 'BearBelly NFT', subtitle: 'Crypto / NFT',
      image: 'pics/BearBelly.png',
      tags: 'Crypto/NFT / Web design',
      overview: 'A crypto webpage prototype built for NFT minting and collection representation.',
      responsibilities: ['Designed the minting page and collection showcase', 'Designed and published trait artwork'],
      process: ['Designed the minting flow and wallet-connection states', 'Built out the collection gallery presentation'],
      features: ['Minting interface', 'Collection showcase gallery'],
      tools: 'Figma',
      challenges: 'Designing for a crypto-native audience while keeping the flow approachable.',
      results: 'A complete minting-page design used for an active NFT project.',
      links: [{ label: 'View project ↗', url: 'https://www.figma.com/design/E332BqXQ7ZrLi15MUfxAph/Bear-Belly?m=auto&t=rafIIbK20plAn7VY-1' }],
    },
    ecomrz: {
      title: 'ECOmrZ', subtitle: 'E-Commerce',
      image: 'pics/ECOMRz.png',
      tags: 'E-commerce / Sustainability',
      overview: 'An e-commerce design practice project focused on sustainable, eco-conscious products.',
      responsibilities: ['Designed the storefront and product browsing experience'],
      process: ['Explored a visual language suited to a sustainability-focused brand', 'Designed core storefront and product pages'],
      features: ['Product catalog browsing', 'Sustainability-focused visual branding'],
      tools: 'Figma',
      challenges: 'Communicating sustainability visually without cliché "green" tropes.',
      results: 'A cohesive e-commerce concept exploring design for a values-driven brand.',
      links: [{ label: 'View project ↗', url: 'https://www.figma.com/design/iv6zUajnnSdxy9R1gbm3U7/ECOmrZ?node-id=0-1&t=VBBtdOZFUSp9dUKO-1' }],
    },
  };

  /* ---------------------------------------------------------- modal */
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

    const setList = (el, items) => {
      el.innerHTML = '';
      (items || []).forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        el.appendChild(li);
      });
    };

    function fallbackFromEl(el) {
      const img = el.querySelector('img');
      const heading = el.querySelector('h3, h4, b');
      const desc = el.querySelector('p');
      return {
        title: heading ? heading.textContent.trim() : 'Project',
        subtitle: '',
        image: img ? img.getAttribute('src') : '',
        tags: '',
        overview: desc ? desc.textContent.trim() : '',
        responsibilities: [], process: [], features: [],
        tools: '', challenges: '', results: '', links: [],
      };
    }

    function open(data) {
      els.image.src = data.image || '';
      els.image.alt = data.title || '';
      els.title.textContent = data.title || '';
      els.subtitle.textContent = data.subtitle || '';
      els.tags.textContent = data.tags || '';
      els.overview.textContent = data.overview || '';
      setList(els.responsibilities, data.responsibilities);
      setList(els.process, data.process);
      setList(els.features, data.features);
      els.tools.textContent = data.tools || '';
      els.challenges.textContent = data.challenges || '';
      els.results.textContent = data.results || '';

      els.links.innerHTML = '';
      (data.links || []).forEach((link) => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = link.label;
        els.links.appendChild(a);
      });

      overlay.classList.add('active');
      document.body.classList.add('no-scroll');
    }

    function close() {
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }

    document.querySelectorAll('.work-details').forEach((btn) => {
      btn.addEventListener('click', () => {
        const entry = btn.closest('[data-project]');
        const slug = entry && entry.getAttribute('data-project');
        open((slug && PROJECTS[slug]) || fallbackFromEl(entry));
      });
    });

    document.querySelectorAll('.craft-item').forEach((item) => {
      item.addEventListener('click', () => {
        const slug = item.getAttribute('data-project');
        open((slug && PROJECTS[slug]) || fallbackFromEl(item));
      });
    });

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  /* ---------------------------------------------------------- filter */
  function initFilter() {
    const tabs = document.querySelectorAll('.filter-tab');
    const items = document.querySelectorAll('.craft-item');
    if (!tabs.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-filter');
        items.forEach((item) => {
          const match = filter === 'all' || item.getAttribute('data-category') === filter;
          item.classList.toggle('is-hidden', !match);
        });
      });
    });
  }

  /* ---------------------------------------------------------- contact form */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const status = form.querySelector('.form-status');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.textContent = 'Sending…';
      status.className = 'form-status';

      // No backend wired up, this simulates a send. Connect Formspree,
      // EmailJS, or your own endpoint to make it live.
      setTimeout(() => {
        status.textContent = "Thanks, I'll get back to you soon.";
        status.className = 'form-status success';
        btn.disabled = false;
        form.reset();
      }, 800);
    });
  }

  /* ---------------------------------------------------------- download */
  function initDownload() {
    const btn = document.getElementById('download-cv-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = 'Kevin_Matthew_Palma_Resume.pdf';
      a.download = 'Kevin_Matthew_Palma_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNav();
    initScrollspy();
    initTheme();
    initReveal();
    initModal();
    initFilter();
    initContactForm();
    initDownload();
  });
})();
