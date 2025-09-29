// Initialisation de GSAP
gsap.registerPlugin(ScrollTrigger);

// Données des projets
const projectsData = {
    bibliotheque: {
        title: "Gestion Bibliotheque",
        description: "Application web de gestion de bibliotheque interface admin et interface user",
        technologies: ["Django", "sqlite", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Python", "bootstrap"],
        features: [
            "Interface utilisateur et admin moderne et responsive",
            "Interface admin avec gestion des livres, des utilisateurs, des emprunts",
            "Interface user avec gestion des emprunts, des reservations, des retours",
            "Gestion des stocks en temps réel",
            "Génération de carte avec code QR pour chaque emprunteur",
            "Consultation des livres disponibles directement depuis l'interface user à travers internet"
        ],
        imageCategories: {
            lecteur: {
                title: "Interface Lecteur",
                description: "Interfaces destinées aux utilisateurs/lecteurs de la bibliothèque",
                images: [
                    "portfolio/assets/images/biblio/biblio A.png",
                    "portfolio/assets/images/biblio/biblio B.png",
                    "portfolio/assets/images/biblio/biblio1_acceuil.png"
                ]
            },
            bibliothecaire: {
                title: "Interface Bibliothécaire",
                description: "Interfaces d'administration pour les bibliothécaires",
                images: [
                    "portfolio/assets/images/biblio/biblio D.png",
                    "portfolio/assets/images/biblio/biblio2.png",
                    "portfolio/assets/images/biblio/biblio4.png"
                ]
            }
        },
        github: "https://github.com/Askia1313/E-biblio.git",
     
    },
    easyshare: {
        title: "EaseShare - Partage Fichier",
        description: "Lors de mon stage, j'ai participé à plusieurs ateliers où le partage de fichiers avec l'ensemble des participants s'est révélé compliqué. Il fallait récupérer manuellement les adresses e-mail de chacun, ce qui posait plusieurs problèmes : e-mails sensibles à la casse, erreurs de saisie fréquentes, adresses non vérifiées, etc. Ce processus était long, peu fiable, et surtout inadapté à un environnement collaboratif rapide. C'est à partir de cette expérience que j'ai eu l'idée de développer Ease Share, une application web simple, rapide et sécurisée pour le partage de fichiers.",
        technologies: ["python", "HTML5", "CSS3", "Django", "sqlite", "Git", "GitHub", "bootstrap"],
        features: [
            "Interface admin pour celui qui envoie le fichier",
            "Interface simple pour celui qui reçoit le fichier avec des codes de confidentialité",
            "Suppression automatique du fichier après la durée de vie sauf en cas de prolongation",
            "Possibilité de partager un ensemble de fichiers dans un dossier avec les mêmes codes de confidentialité",
            "Possibilité de générer de nouveaux codes de confidentialité"
        ],
        images: [
            "portfolio/assets/images/Nouveau dossier/es1.png",
            "portfolio/assets/images/Nouveau dossier/es2.png",
            "portfolio/assets/images/Nouveau dossier/es3.png",
            "portfolio/assets/images/Nouveau dossier/es4.png",
        ],
        github: "https://github.com/Askia1313/esasyshare.git",
       
    },
    gestion_personnel: {
        title: "Registre électronique du personnel",
        description: "Ce projet consiste en la mise en place d'un registre électronique moderne pour la gestion du personnel de santé. La solution centralise toutes les informations des agents (enregistrement, affectations, stages, disponibilités, retraites) et les organise de manière claire et accessible. L'un des points forts de l'application réside dans ses tableaux et tableaux de bord interactifs, qui offrent une visualisation instantanée des données.",
        technologies: ["Django", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
        features: [
            "Registre électronique centralisé pour tout le personnel de santé",
            "Tableaux de bord interactifs pour la DRH et les responsables de structure de santé",
            "Suivi des affectations, stages, disponibilités et retraites",
            "Recherche et mise à jour rapide des informations agents",
            "Génération automatique de rapports pour la prise de décision",
            "Interface simple et intuitive facilitant l'utilisation",
            "Réduction des erreurs liées au traitement manuel des dossiers",
            "Amélioration de la transparence et de la traçabilité"
        ],
        images: [
            "portfolio/assets/images/drh/DRH0.png",
            "portfolio/assets/images/drh/DRH1.png",
            "portfolio/assets/images/drh/DRH2.png",
            "portfolio/assets/images/drh/DRH3.png"
        ],
        github: "https://github.com/Askia1313/registre.git",
       demo: ""
    },
    e_recrutement: {
        title: "E-Recrutement",
        description: "Application de recrutement moderne permettant de postuler rapidement à des offres d'emploi directement depuis l'interface utilisateur. Elle permet de gérer les candidatures directement depuis l'interface entreprise, permettant ainsi de se libérer de la paperasse interminable.",
        technologies: ["JavaScript", "HTML5", "CSS3", "API REST"],
        features: [
            "Gestion des candidatures",
            "Gestion des entreprises",
            "Recherche par entreprise",
            "Interface utilisateur intuitive",
            "Système de postulation rapide",
            "Tableau de bord entreprise"
        ],
        images: [
            "portfolio/assets/images/recrutement/recrutement landing page.png",
            "portfolio/assets/images/recrutement/recrutement login.png",
            "portfolio/assets/images/recrutement/recrutement interface recruteur.png"
        ],
        github: "https://github.com/Askia1313/e-recrutement.git",
        demo: ""
    },
    gestion_stock: {
        title: "Gestion de Stock",
        description: "Application web complète de gestion de stock permettant de suivre les inventaires, gérer les entrées et sorties de produits, et générer des rapports détaillés. Cette solution offre une interface intuitive pour les gestionnaires et un système d'alertes pour les stocks faibles.",
        technologies: ["Django", "PostgreSQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
        features: [
            "Gestion complète des produits et catégories",
            "Suivi des entrées et sorties de stock en temps réel",
            "Système d'alertes pour les stocks faibles",
            "Génération de rapports et statistiques",
            "Interface de tableau de bord avec graphiques",
            "Historique complet des mouvements de stock",
            "Système de codes-barres pour identification rapide",
            "Export des données en Excel/PDF",
            "Gestion des fournisseurs et clients"
        ],
        images: [
            "portfolio/assets/images/stock/stock1.jpg",
            "portfolio/assets/images/stock/stock2.jpg"
        ],
        github: "https://github.com/guira500/gestStock.git",
        demo: ""
    }
};

// Fonction pour ouvrir les détails d'un projet
function openProjectDetail(projectId) {
    console.log('Tentative d\'ouverture du projet:', projectId);
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    console.log('Modal trouvé:', modal);
    console.log('ModalBody trouvé:', modalBody);
    
    if (!modal || !modalBody) {
        console.error('Éléments modal non trouvés');
        alert('Erreur: Modal non trouvée');
        return;
    }
    
    const project = projectsData[projectId];
    if (!project) {
        console.error('Projet non trouvé:', projectId);
        alert('Erreur: Projet non trouvé');
        return;
    }
    
    console.log('Projet trouvé:', project.title);

    modalBody.innerHTML = `
        <div class="project-detail">
            <h2>${project.title}</h2>
            <p class="project-description">${project.description}</p>
            
            <div class="project-images">
                ${project.imageCategories ? 
                    Object.entries(project.imageCategories).map(([categoryKey, category]) => `
                        <div class="image-category">
                            <h4 class="category-title">
                                <i class="fas ${categoryKey === 'lecteur' ? 'fa-user' : 'fa-user-cog'}"></i>
                                ${category.title}
                            </h4>
                            <p class="category-description">${category.description}</p>
                            <div class="category-images">
                                ${category.images.map(img => `
                                    <div class="project-image-container">
                                        <img src="${img}" alt="${project.title} - ${category.title}" class="project-image" onclick="zoomImage('${img}', '${project.title} - ${category.title}')" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                                        <div class="image-placeholder" style="display:none;">
                                            <i class="fas fa-image"></i>
                                            <p>Image non disponible</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')
                    : project.images && project.images.length > 0 ? 
                        project.images.map(img => `
                            <div class="project-image-container">
                                <img src="${img}" alt="${project.title}" class="project-image" onclick="zoomImage('${img}', '${project.title}')" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                                <div class="image-placeholder" style="display:none;">
                                    <i class="fas fa-image"></i>
                                    <p>Image non disponible</p>
                                </div>
                            </div>
                        `).join('') 
                        : `
                            <div class="image-placeholder">
                                <i class="fas fa-image"></i>
                                <p>Images du projet à venir</p>
                            </div>
                        `
                }
            </div>
            
            <div class="project-info-grid">
                <div class="project-section">
                    <h3><i class="fas fa-cogs"></i> Technologies utilisées</h3>
                    <div class="tech-list">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-section">
                    <h3><i class="fas fa-star"></i> Fonctionnalités principales</h3>
                    <ul class="feature-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="project-links-detail">
                ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> Voir le code
                </a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-external-link-alt"></i> Démo en ligne
                </a>` : ''}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fonction globale pour ouvrir les détails des projets (accessible depuis le HTML)
window.openProjectDetail = openProjectDetail;

// Test simple pour vérifier si la fonction est accessible
window.testModal = function() {
    console.log('Test modal function called');
    alert('La fonction est accessible !');
};

// Initialisation directe sans loader
document.addEventListener('DOMContentLoaded', () => {
  // Lancement immédiat des animations d'accueil
  initHomeAnimations();
});

// Animations de la page d'accueil optimisées
function initHomeAnimations() {
  if (typeof gsap !== 'undefined') {
    // Animation du contenu d'accueil
    gsap.fromTo('.home-content', 
      {opacity: 0, y: 30}, // Réduit de y: 60 à y: 30
      {opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'} // Réduit durée et ease
    );
  } else {
    // Fallback CSS
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
      homeContent.style.opacity = '1';
      homeContent.style.transform = 'translateY(0)';
    }
  }

  // Animation du titre typed optimisée avec fallback
  const titleElement = document.getElementById('typed-title');
  if (titleElement) {
    if (typeof Typed !== 'undefined') {
      // Vider le contenu pour l'effet de frappe
      titleElement.innerHTML = '';
      new Typed('#typed-title', {
        strings: ["Bonjour, je suis <span> KONATE Askia rachid</span> – Développeur Full Stack | Créateur de solutions numériques performantes."],
        typeSpeed: 50,
        backSpeed: 0,
        showCursor: false,
        startDelay: 300,
        loop: false
      });
    }
    // Si Typed.js n'est pas disponible, le texte reste affiché depuis le HTML
  }
}

// Animations des sections au scroll simplifiées
function initScrollAnimations() {
  // Vérifier si GSAP est disponible
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Fallback CSS simple
    const elements = document.querySelectorAll('.about-text, .timeline-item, .skill-category, .parcours-column, .contact-card');
    elements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return;
  }

  // Animation simplifiée de la section À propos
  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 85%',
      toggleActions: 'play none none none' // Supprime reverse pour économiser
    },
    opacity: 0,
    y: 20, // Réduit de 30 à 20
    duration: 0.6 // Réduit de 1 à 0.6
  });

  // Animation groupée des timeline items (plus efficace)
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 15,
    duration: 0.4,
    stagger: 0.1, // Réduit de 0.15 à 0.1
    ease: 'power1.out' // Ease plus simple
  });

  // Animation des compétences
  gsap.from('.skill-category', {
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.skill-list li', {
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 60%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -20,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power1.out'
  });

  // Animation du parcours
  gsap.from('.parcours-column', {
    scrollTrigger: {
      trigger: '.parcours',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  });

  // Animation des cartes de contact
  const contactCards = gsap.utils.toArray('.contact-card');
  contactCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power2.out'
    });
  });

  gsap.from('.contact-cta', {
    scrollTrigger: {
      trigger: '.contact-cta',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Navbar Background Change
function initNavbarScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 50 
      ? 'rgba(20, 24, 40, 0.95)' 
      : 'rgba(20, 24, 40, 0.85)';
  });
}

// Menu Mobile Hamburger
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  if (hamburger && navLinks) {
    // Toggle menu au clic sur hamburger
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      
      // Empêcher le scroll quand le menu est ouvert
      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    // Fermer le menu au clic sur un lien
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Fermer le menu si on redimensionne vers desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}


// Initialisation de toutes les animations au scroll
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSmoothScroll();
  initNavbarScroll();
  initMobileMenu();
  
  // Gestion de la modal
  const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Gestion du zoom d'image
  const imageZoomOverlay = document.getElementById('imageZoomOverlay');
  const zoomedImage = document.getElementById('zoomedImage');
  const zoomCloseBtn = document.querySelector('.image-zoom-close');
  
  if (zoomCloseBtn) {
    zoomCloseBtn.addEventListener('click', closeImageZoom);
  }
  
  if (imageZoomOverlay) {
    imageZoomOverlay.addEventListener('click', (e) => {
      if (e.target === imageZoomOverlay) {
        closeImageZoom();
      }
    });
  }
  
  // Fermer le zoom avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeImageZoom();
    }
  });
});

// Fonction pour zoomer une image
function zoomImage(imageSrc, imageAlt) {
  const imageZoomOverlay = document.getElementById('imageZoomOverlay');
  const zoomedImage = document.getElementById('zoomedImage');
  
  if (imageZoomOverlay && zoomedImage) {
    zoomedImage.src = imageSrc;
    zoomedImage.alt = imageAlt;
    imageZoomOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Fonction pour fermer le zoom
function closeImageZoom() {
  const imageZoomOverlay = document.getElementById('imageZoomOverlay');
  
  if (imageZoomOverlay) {
    imageZoomOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Fonction globale pour le zoom (accessible depuis le HTML)
window.zoomImage = zoomImage;
window.closeImageZoom = closeImageZoom; 