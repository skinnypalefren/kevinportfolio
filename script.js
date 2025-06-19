// Portfolio Website JavaScript
// Author: Kevin Matthew L. Palma

// Project data for modals
const projectData = {
    'yvez-bank': {
        title: 'Yvez Bank - Mobile Banking App',
        subtitle: 'Mobile Banking App • Academic Project',
        image: 'pics/YvezBank.png',
        tags: ['Mobile Design', 'Financial UX', 'Prototyping', 'User Research'],
        overview: 'Yvez Bank is a comprehensive mobile banking application designed to provide users with seamless financial management capabilities. The project focused on creating an intuitive interface that simplifies complex banking operations while maintaining security and accessibility standards.',
        responsibilities: [
            'Led UI/UX design from concept to final prototype',
            'Conducted user research and competitive analysis',
            'Created wireframes, mockups, and interactive prototypes',
            'Designed user flows for key banking features',
            'Implemented accessibility guidelines and security considerations'
        ],
        process: [
            'User Research & Persona Development',
            'Information Architecture & User Flow Mapping',
            'Low-fidelity Wireframing',
            'High-fidelity UI Design',
            'Interactive Prototyping',
            'Usability Testing & Iteration'
        ],
        features: [
            'Secure login with biometric authentication',
            'Account overview and transaction history',
            'Money transfer and bill payment functionality',
            'Investment portfolio management',
            'Real-time notifications and alerts',
            'Customer support chat integration'
        ],
        tools: ['Figma', 'Adobe Illustrator', 'Principle', 'Maze'],
        challenges: 'The main challenge was balancing security requirements with user experience. Banking apps need to be highly secure, but this often creates friction in the user journey. I solved this by implementing progressive security measures and clear visual feedback for each security step.',
        results: 'The final prototype received positive feedback from both peers and instructors. The design successfully demonstrated how complex financial operations could be simplified through thoughtful UX design while maintaining necessary security protocols.',
        links: [
            { text: 'View Prototype', url: 'https://www.figma.com/proto/aorakAlbc8ycpjFCCzZaLo/YvezBank?page-id=0%3A1&node-id=15-19&p=f&viewport=585%2C-65%2C0.77&t=2X8bdlYEQjbRkyLP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2' },
            { text: 'Documentation', url: 'https://docs.google.com/document/d/1cVFsShPxBqZXzTgjYWKHMZgVF2M_4fqV1BAHOtdyW1E/edit?usp=sharing' }
        ]
    },
    'nanny-nest': {
        title: 'NannyNest - Nanny Hiring App',
        subtitle: 'Service Platform • Academic Project',
        image: 'pics/NannyNest.png',
        tags: ['Service Design', 'Two-sided Platform', 'Trust & Safety', 'Wireframing'],
        overview: 'NannyNest is a platform connecting families with qualified nannies, featuring comprehensive profiles, background verification, and scheduling systems. The design process included extensive user research to understand both parent and caregiver needs.',
        responsibilities: [
            'Designed end-to-end user experience for both user types',
            'Created comprehensive user research plan and execution',
            'Developed wireframes and high-fidelity prototypes',
            'Designed trust and safety features',
            'Created onboarding flows for families and nannies'
        ],
        process: [
            'Stakeholder interviews with parents and caregivers',
            'Competitive analysis of existing platforms',
            'User journey mapping for both user types',
            'Low-fidelity wireframe creation',
            'High-fidelity design and prototyping',
            'User testing with target demographics'
        ],
        features: [
            'Dual onboarding for families and nannies',
            'Comprehensive profile creation with verification',
            'Advanced search and filtering system',
            'In-app messaging and scheduling',
            'Background check integration',
            'Review and rating system'
        ],
        tools: ['Figma', 'Miro', 'Adobe Creative Suite', 'InVision'],
        challenges: 'Creating a platform that serves two distinct user groups with different needs and motivations. Parents prioritize safety and reliability, while nannies focus on fair compensation and flexible scheduling. I addressed this by creating separate but connected user flows that cater to each group\'s specific needs.',
        results: 'The project successfully demonstrated how to design for multi-sided platforms. The solution balanced the needs of both user groups while maintaining a cohesive brand experience. The prototype was well-received for its comprehensive approach to trust and safety.',
        links: [
            { text: 'High Fidelity Prototype', url: 'https://www.figma.com/proto/SNlKk4ErAIqfWHMgGdCf0W/2N---PalmaKevin?page-id=124%3A2&node-id=185-444&starting-point-node-id=143%3A4&t=qQXLu1wKCGzSyYFv-1' },
            { text: 'Low Fidelity Wireframes', url: 'https://www.figma.com/proto/SNlKk4ErAIqfWHMgGdCf0W/2N---PalmaKevin?page-id=0%3A1&node-id=3-6&starting-point-node-id=116%3A54&t=V3rf37AvOCwEBDI8-1' }
        ]
    },
    'bayan-link': {
        title: 'BayanLink v2 - Community Platform',
        subtitle: 'Capstone Project • Final Project',
        image: 'pics/BayanLink.png',
        tags: ['Community Platform', 'Capstone Project', 'User Research', 'System Design'],
        overview: 'My capstone project focusing on connecting local communities through digital platforms. BayanLink aims to strengthen community bonds through technology-enabled communication and collaboration, featuring comprehensive user research and iterative design processes.',
        responsibilities: [
            'Led complete UX research and design process',
            'Conducted extensive community stakeholder interviews',
            'Created comprehensive design system and documentation',
            'Developed user testing protocols and analysis',
            'Presented findings to academic committee'
        ],
        process: [
            'Community needs assessment and research',
            'Stakeholder mapping and interviews',
            'User persona development',
            'Information architecture design',
            'Iterative prototyping and testing',
            'Final documentation and presentation'
        ],
        features: [
            'Community event planning and management',
            'Local business directory and promotion',
            'Neighborhood communication channels',
            'Resource sharing marketplace',
            'Emergency alert system',
            'Community governance tools'
        ],
        tools: ['Figma', 'Miro', 'Adobe Creative Suite', 'Google Analytics', 'Hotjar'],
        challenges: 'Understanding the diverse needs of different community members and creating a platform that encourages participation across age groups and technical skill levels. I solved this through extensive user research and creating multiple interaction pathways for different user comfort levels.',
        results: 'The project received high marks for its comprehensive research methodology and practical application. The design successfully addressed real community needs identified through research, and the documentation serves as a blueprint for potential implementation.',
        links: [
            { text: 'View Design Files', url: 'https://www.figma.com/design/8WsI4BgiR6TkP19o4ddPFG/BayanLink-2.0?node-id=0-1&t=cEle6Cxy8R2XS65m-1' },
            { text: 'Project Documentation', url: 'https://drive.google.com/drive/folders/1KQ5UOn0jfl3iOLA_vJ2BVa8NG47xMLIR?usp=sharing' }
        ]
    },
    'marahuyo': {
        title: 'Marahuyo - HCI Final Project',
        subtitle: 'HCI Final Project • Group Project',
        image: 'pics/Marahuyo.png',
        tags: ['Human-Computer Interaction', 'Responsive Design', 'Group Collaboration', 'Usability Testing'],
        overview: 'A comprehensive Human-Computer Interaction project that explores user experience design principles through practical application. The project demonstrates understanding of interaction design, usability principles, and responsive design across multiple platforms.',
        responsibilities: [
            'Collaborated with team on UX research and design',
            'Led responsive design implementation',
            'Conducted usability testing sessions',
            'Created interaction design specifications',
            'Contributed to final presentation and documentation'
        ],
        process: [
            'HCI principles research and application',
            'User-centered design methodology',
            'Responsive design planning',
            'Prototype development and testing',
            'Usability evaluation and iteration',
            'Cross-platform compatibility testing'
        ],
        features: [
            'Responsive design across devices',
            'Intuitive navigation system',
            'Accessibility-compliant interface',
            'Interactive elements with clear feedback',
            'Mobile-first design approach',
            'Performance-optimized interactions'
        ],
        tools: ['Figma', 'Adobe XD', 'InVision', 'Principle', 'Maze'],
        challenges: 'Ensuring consistent user experience across different devices and screen sizes while maintaining performance and accessibility. The team addressed this by implementing a mobile-first design approach and conducting extensive cross-device testing.',
        results: 'The project successfully demonstrated practical application of HCI principles. The final prototype showed strong understanding of interaction design and received positive feedback for its comprehensive approach to responsive design and usability.',
        links: [
            { text: 'High Fidelity Prototype', url: 'https://www.figma.com/proto/gQIAR6NGpSgaqRfQ0InFiO/HCI-Groupwork?page-id=1%3A4&node-id=217-72&starting-point-node-id=217%3A72&t=zmkcJf6sHDeQCTSF-1' },
            { text: 'Mobile Version', url: 'https://www.figma.com/proto/gQIAR6NGpSgaqRfQ0InFiO/HCI-Groupwork?page-id=1%3A5&node-id=245-285&starting-point-node-id=245%3A285&t=j2bybeqz8IqRoq19-1' }
        ]
    },
    'dpwh-ticketing': {
        title: 'DPWH Ticketing Web App',
        subtitle: 'Internship Project • DPWH Internship',
        image: 'pics/DPWH.png',
        tags: ['Government System', 'Process Improvement', 'Stakeholder Research', 'Web Application'],
        overview: 'Designed during my internship at Department of Public Works and Highways Nueva Ecija 2nd District Engineering Office. This ticketing system streamlines internal processes and improves workflow efficiency through stakeholder interviews and iterative design.',
        responsibilities: [
            'Conducted stakeholder interviews with government employees',
            'Analyzed existing workflow processes',
            'Designed user interface for ticketing system',
            'Created comprehensive documentation',
            'Collaborated with technical team on implementation'
        ],
        process: [
            'Stakeholder interviews and process mapping',
            'Current state analysis and pain point identification',
            'User flow design and optimization',
            'Interface design and prototyping',
            'User testing with government employees',
            'Documentation and handoff preparation'
        ],
        features: [
            'Ticket creation and assignment system',
            'Status tracking and updates',
            'User role management',
            'Reporting and analytics dashboard',
            'Document attachment capabilities',
            'Email notification system'
        ],
        tools: ['Figma', 'Adobe Creative Suite', 'Microsoft Visio', 'Excel'],
        challenges: 'Working within government constraints and existing systems while improving user experience. The challenge was understanding complex bureaucratic processes and translating them into intuitive digital workflows. I addressed this through extensive stakeholder interviews and iterative design sessions.',
        results: 'The design successfully streamlined the internal ticketing process, reducing processing time and improving tracking capabilities. The solution was well-received by government employees and demonstrated practical application of UX design in government systems.',
        links: [
            { text: 'View Design', url: 'https://www.figma.com/design/j25y0rWYxGGe6w2Suss4Zb/dpwh?node-id=0-1&t=vQaMgFegsOkRjWP6-1' },
            { text: 'Project Documentation', url: 'https://docs.google.com/document/d/1Rf-1R-Aaqt6Hrpv0rqQvEoTQtfg4pG3zfmO0TpCMnXA/edit?usp=sharing' }
        ]
    },
    'sinister-sips': {
        title: 'Sinister Sips Cafe',
        subtitle: 'Web Design • Personal Project',
        image: 'pics/Sinister Sips.png',
        tags: ['Web Design', 'Branding', 'Dark Theme', 'Cafe'],
        overview: 'A niche cafe website design featuring dark, atmospheric branding that creates an immersive experience for visitors. The project explores how visual design can communicate brand personality and create emotional connections with users.',
        responsibilities: [
            'Complete brand identity and visual design',
            'Website layout and user experience design',
            'Typography and color palette selection',
            'Responsive design implementation',
            'Brand guidelines creation'
        ],
        process: [
            'Brand research and mood board creation',
            'Visual identity development',
            'Website wireframing and layout',
            'High-fidelity design creation',
            'Responsive design adaptation',
            'Brand guidelines documentation'
        ],
        features: [
            'Dark, atmospheric visual design',
            'Interactive menu presentation',
            'Location and hours information',
            'Online ordering integration',
            'Social media integration',
            'Mobile-responsive layout'
        ],
        tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
        challenges: 'Creating a dark theme that remains accessible and readable while maintaining the atmospheric brand feeling. I solved this by carefully balancing contrast ratios and using strategic color accents to guide user attention.',
        results: 'The design successfully creates a unique brand experience that stands out in the competitive cafe market. The dark theme effectively communicates the brand\'s unique personality while maintaining usability and accessibility standards.',
        links: [
            { text: 'View Prototype', url: 'https://www.figma.com/proto/7PyvYm10jw8fENIPvNG1a4/Sinister-Sips?page-id=0%3A1&node-id=27-480&node-type=frame&viewport=437%2C536%2C0.49&t=99Q0nND4FrpV7cta-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3' }
        ]
    },
    'bear-belly': {
        title: 'BearBelly NFT',
        subtitle: 'Crypto/NFT • Web Design',
        image: 'pics/BearBelly.png',
        tags: ['NFT', 'Crypto', 'Web Design', 'Blockchain'],
        overview: 'A crypto webpage prototype designed for NFT minting and representation. The project explores the intersection of digital art, blockchain technology, and user experience design in the emerging NFT space.',
        responsibilities: [
            'NFT collection visual design',
            'Minting website interface design',
            'Blockchain integration planning',
            'Community engagement features',
            'Responsive design implementation'
        ],
        process: [
            'NFT market research and analysis',
            'Visual identity and art direction',
            'Website wireframing and design',
            'Minting flow optimization',
            'Community features planning',
            'Technical integration planning'
        ],
        features: [
            'NFT collection showcase',
            'Minting interface and process',
            'Wallet connection integration',
            'Rarity and traits display',
            'Community features',
            'Roadmap presentation'
        ],
        tools: ['Figma', 'Adobe Creative Suite', 'Blender'],
        challenges: 'Designing for a new and rapidly evolving technology space while ensuring the interface remains accessible to users unfamiliar with blockchain technology. I addressed this by creating clear onboarding flows and educational content.',
        results: 'The design successfully bridges the gap between complex blockchain technology and user-friendly interface design. The project demonstrates understanding of emerging technology trends and their design implications.',
        links: [
            { text: 'View Design', url: 'https://www.figma.com/design/E332BqXQ7ZrLi15MUfxAph/Bear-Belly?m=auto&t=rafIIbK20plAn7VY-1' }
        ]
    },
    'ecomrz': {
        title: 'ECOmrZ',
        subtitle: 'E-Commerce • Design Practice',
        image: 'pics/ECOMRz.png',
        tags: ['E-Commerce', 'Sustainability', 'Product Design', 'Shopping'],
        overview: 'An e-commerce design practice project focusing on sustainable products. The project explores how design can promote environmental consciousness while maintaining commercial viability and user engagement.',
        responsibilities: [
            'E-commerce user experience design',
            'Product catalog organization',
            'Shopping cart and checkout flow',
            'Sustainability messaging integration',
            'Mobile commerce optimization'
        ],
        process: [
            'E-commerce best practices research',
            'Sustainable brand positioning',
            'User journey mapping',
            'Interface design and prototyping',
            'Conversion optimization',
            'Mobile-first design approach'
        ],
        features: [
            'Sustainable product catalog',
            'Environmental impact indicators',
            'Streamlined checkout process',
            'Product comparison tools',
            'Sustainability education content',
            'Mobile-optimized shopping experience'
        ],
        tools: ['Figma', 'Adobe Creative Suite', 'Principle'],
        challenges: 'Balancing commercial e-commerce requirements with sustainability messaging without overwhelming the user experience. I solved this by integrating environmental information naturally into the shopping flow.',
        results: 'The design successfully demonstrates how sustainability can be integrated into e-commerce without compromising usability. The project shows understanding of both commercial and environmental design considerations.',
        links: [
            { text: 'View Design', url: 'https://www.figma.com/design/iv6zUajnnSdxy9R1gbm3U7/ECOmrZ?node-id=0-1&t=VBBtdOZFUSp9dUKO-1' }
        ]
    }
};

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial body overflow to hidden for loading screen
    document.body.style.overflow = 'hidden';
    
    // Initialize all components
    initializeLoading();
    initializeNavigation();
    initializeTheme();
    initializeScrollAnimations();
    initializeContactForm();
    initializeCreativeFilter();
    initializeModals();
    initializePDFDownload();
});

// Loading Screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('loading-progress');
    
    if (!loadingScreen || !progressBar) {
        console.warn('Loading screen elements not found');
        return;
    }
    
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        progressBar.style.width = Math.min(progress, 100) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.remove('active');
                document.body.style.overflow = 'visible';
            }, 500);
        }
    }, 100);
}

// Navigation
function initializeNavigation() {
    const nav = document.getElementById('nav');
    const navMenu = document.getElementById('nav-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    if (!nav || !navMenu || !mobileMenuToggle) {
        console.warn('Navigation elements not found');
        return;
    }
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Update active navigation link
        updateActiveNavLink();
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Theme Toggle
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) {
        console.warn('Theme toggle not found');
        return;
    }
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.case-study-card, .creative-item, .highlight-card, .skill-category').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) {
        console.warn('Contact form not found');
        return;
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2"/></svg> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Creative Works Filter
function initializeCreativeFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const creativeItems = document.querySelectorAll('.creative-item');

    if (filterBtns.length === 0 || creativeItems.length === 0) {
        console.warn('Creative filter elements not found');
        return;
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            const filter = btn.getAttribute('data-filter');
            
            creativeItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('animate-in'), 100);
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate-in');
                }
            });
        });
    });
}

// Modal functionality
function initializeModals() {
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    
    if (!modal || !modalClose) {
        console.warn('Modal elements not found');
        return;
    }
    
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const projectCard = btn.closest('[data-project]');
            if (!projectCard) return;
            
            const projectId = projectCard.getAttribute('data-project');
            
            if (projectData[projectId]) {
                openModal(projectData[projectId]);
            }
        });
    });

    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    
    // Populate modal content
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalOverview = document.getElementById('modal-overview');
    const modalChallenges = document.getElementById('modal-challenges');
    const modalResults = document.getElementById('modal-results');
    
    if (modalImage) modalImage.src = project.image;
    if (modalImage) modalImage.alt = project.title;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
    if (modalOverview) modalOverview.textContent = project.overview;
    if (modalChallenges) modalChallenges.textContent = project.challenges;
    if (modalResults) modalResults.textContent = project.results;

    // Populate tags
    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'modal-tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
    }

    // Populate responsibilities
    const responsibilitiesList = document.getElementById('modal-responsibilities');
    if (responsibilitiesList) {
        responsibilitiesList.innerHTML = '';
        project.responsibilities.forEach(responsibility => {
            const li = document.createElement('li');
            li.textContent = responsibility;
            responsibilitiesList.appendChild(li);
        });
    }

    // Populate process
    const processList = document.getElementById('modal-process');
    if (processList) {
        processList.innerHTML = '';
        project.process.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            processList.appendChild(li);
        });
    }

    // Populate features
    const featuresList = document.getElementById('modal-features');
    if (featuresList) {
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }

    // Populate tools
    const toolsContainer = document.getElementById('modal-tools');
    if (toolsContainer) {
        toolsContainer.innerHTML = '';
        project.tools.forEach(tool => {
            const toolElement = document.createElement('span');
            toolElement.className = 'modal-tool';
            toolElement.textContent = tool;
            toolsContainer.appendChild(toolElement);
        });
    }

    // Populate links
    const linksContainer = document.getElementById('modal-links');
    if (linksContainer) {
        linksContainer.innerHTML = '';
        if (project.links) {
            project.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.url;
                linkElement.target = '_blank';
                linkElement.rel = 'noopener';
                linkElement.className = 'modal-project-link';
                linkElement.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2"/>
                        <polyline points="15,3 21,3 21,9" stroke="currentColor" stroke-width="2"/>
                        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    ${link.text}
                `;
                linksContainer.appendChild(linkElement);
            });
        }
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'visible';
}

// PDF Download functionality
function initializePDFDownload() {
    const downloadCvBtn = document.getElementById('download-cv-btn');
    
    if (!downloadCvBtn) {
        console.warn('Download CV button not found');
        return;
    }
    
    downloadCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show loading state
        const originalText = downloadCvBtn.innerHTML;
        downloadCvBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2"/>
            </svg>
            Generating PDF...
        `;
        downloadCvBtn.disabled = true;

        // Simulate PDF generation
        setTimeout(() => {
            generateAndDownloadPDF();
            
            // Reset button
            downloadCvBtn.innerHTML = originalText;
            downloadCvBtn.disabled = false;
        }, 2000);
    });
}

function generateAndDownloadPDF() {
    // Create resume content
    const resumeContent = `
KEVIN MATTHEW L. PALMA
UI/UX & Graphic Designer

CONTACT INFORMATION
Email: kevinmatthewlopezpalma@gmail.com
Phone: 0908-260-9219
Location: Block 24, Lot 14, Lemnos Street, Camella Nueva Ecija, Cabanatuan City, Nueva Ecija

EDUCATION
Bachelor of Science in Information Technology (2021 - Present)
Nueva Ecija University of Science and Technology
- Focused on UI/UX Design, Human-Computer Interaction, and Software Development
- Active member of NEUST Honor Society
- Completed capstone project on community platform development

STEM - Science, Technology, Engineering, and Mathematics (2019 - 2021)
Cabanatuan City Senior High School
- Participated in Robotics and Intelligent Machines competition
- Achieved 3rd place as District Representative

EXPERIENCE
UI/UX Designer and Helpdesk Technician Trainee (January - May 2025)
Department of Public Works and Highways Nueva Ecija 2nd District Engineering Office
- Completed 500 hours of on-the-job training
- Designed a comprehensive ticketing web application for internal processes
- Conducted stakeholder interviews and user research

Head of Technical Team & Graphic Editor (2023 - Present)
NEUST Honor Society, Nueva Ecija University of Science and Technology
- Promoted to Head of Technical Team while continuing graphic design duties
- Successfully managed and distributed workload among volunteers and committee members

NFT Designer & Web Developer (2020 - 2021)
Freelance - Gooey Kids / Graf / Kurieitib
- Designed websites for NFT minting and representation
- Created and published traits for multiple NFT projects

SKILLS
UI/UX Design: Figma, Wireframing, Prototyping, User Research, Information Architecture, Usability Testing
Design & Development: Graphic Design, Illustration, HTML/CSS, MySQL, Photo Editing, Video Editing
Soft Skills: Analytical Thinking, Problem Solving, Team Leadership, Documentation, Project Management

CERTIFICATIONS
- Certiport HTML & CSS - Web development fundamentals certification

AWARDS & RECOGNITION
- 3rd Place District Representative - Robotics and Intelligent Machines (Team) - 2019-2020
- Leadership Role - Promoted to Head of Technical Team at NEUST Honor Society
    `;

    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kevin_Matthew_Palma_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    // Show success message
    alert('Resume downloaded successfully! Note: This is a text version. A PDF version will be available soon.');
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    });

    // Monitor scroll performance
    let ticking = false;
    function updateScrollPosition() {
        // Scroll-based animations and updates
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    });
}

// Initialize performance monitoring
initializePerformanceMonitoring();

// Accessibility enhancements
function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #6366f1;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management for modal
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }
}

// Initialize accessibility features
initializeAccessibility();