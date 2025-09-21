// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar transparente au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.project-card, .timeline-item, .skill-item, .stat-item').forEach(el => {
    observer.observe(el);
});

// Modal pour les détails des projets
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

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
        challenges: [
            "Implémentation du système d'authentification Django",
            "Gestion des rôles utilisateur (admin/user)",
            "Génération dynamique des codes QR",
            "Interface responsive avec Bootstrap"
        ],
        images: [
            "images/bibliotheque-1.jpg",
            "images/bibliotheque-2.jpg",
            "images/bibliotheque-3.jpg"
        ],
        github: "https://github.com/votre-username/gestion-bibliotheque",
        demo: "https://votre-bibliotheque-demo.herokuapp.com"
    },
    easyshare: {
        title: "Partage Fichier",
        description: "Lors de mon stage, j’ai participé à plusieurs ateliers où le partage de fichiers avec l’ensemble des participants s’est révélé compliqué. Il fallait récupérer manuellement les adresses e-mail de chacun, ce qui posait plusieurs problèmes : e-mails sensibles à la casse, erreurs de saisie fréquentes, adresses non vérifiées, etc. Ce processus était long, peu fiable, et surtout inadapté à un environnement collaboratif rapide. C’est à partir de cette expérience que j’ai eu l’idée de développer Ease Share, une application web simple, rapide et sécurisée pour le partage de fichiers. Le fonctionnement est le suivant : Seul l’expéditeur du fichier crée un compte. Il téléverse son fichier et définit une durée de vie (après laquelle le fichier est automatiquement supprimé). Deux codes de confidentialité sont générés. L’expéditeur partage ces codes avec les destinataires. Sans inscription, les destinataires peuvent accéder au fichier sur Ease Share en entrant les deux codes. Ce système élimine la nécessité de collecter les adresses e-mail et permet un partage instantané, tout en garantissant la confidentialité grâce à la suppression automatique des fichiers une fois expirés.",
        technologies: ["python", "HTML5", "CSS3", "Django", "sqlite", "Git", "GitHub", "bootstrap"],
        features: [
            "interface qdmin pour celui qui envoie le fichier",
            "interface simple pour celui qui reçoit le fichier avec des codes de confidentialité",
            "suppression automatique du fichier après la durée de vie sauf en cas de prolongation",
            "possibilite de partager un ensemble de fichiers dans un dossier avec les memes codes de confidentialité",
            "possibiliter de generer de nouveaux codes de confidentialité",
        ],

        images: [
            "images/calculator-1.jpg",
            "images/calculator-2.jpg",
            "images/calculator-3.jpg"
        ],
        github: "",
        demo: ""
    },
    gestion_personnel: {
        title: "Gestion Personnel",
        description: "Ce projet consiste en la mise en place d’un registre électronique moderne pour la gestion du personnel de santé. La solution centralise toutes les informations des agents (enregistrement, affectations, stages, disponibilités, retraites) et les organise de manière claire et accessible.L’un des points forts de l’application réside dans ses tableaux et tableaux de bord interactifs, qui offrent une visualisation instantanée des données. Ces outils facilitent l’élaboration rapide et fiable des rapports destinés à la DRH et soutiennent la prise de décision stratégique.En transformant un suivi manuel en une plateforme numérique intuitive, ce projet contribue à une gestion plus efficace, transparente et proactive des ressources humaines dans le secteur de la santé.",
        technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "Drag & Drop API"],
        features: [
            "Registre électronique centralisé pour tout le personnel de santé",
            "Tableaux de bord interactifs pour la DRH et les responsables de structure de santé",
            "Suivi des affectations, stages, disponibilités et retraites",
            "Recherche et mise à jour rapide des informations agents",
            "Génération automatique de rapports pour la prise de décision",
            "Interface simple et intuitive facilitant l’utilisation",
            "Réduction des erreurs liées au traitement manuel des dossiers",
            "Amélioration de la transparence et de la traçabilité"
        ],
        images: [
            "images/todoapp-1.jpg",
            "images/todoapp-2.jpg",
            "images/todoapp-3.jpg"
        ],
        github: "",
        demo: ""
    },
    e_recrutement: {
        title: "E_recrutement",
        description: "Application de recrutement moderne avec gestion des candidatures et des entreprises",
        technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API", "Geolocation API"],
        features: [
            "Gestion des candidatures",
            "Gestion des entreprises",
            "Recherche par entreprise",
    
        ],
        images: [
            "img/recrutement/recrutement landing page.png",
            "img/recrutement/recrutement login.png",
            "img/recrutement/recrutement interface recruteur.png"
        ],

    }
};

// Fonction pour ouvrir les détails d'un projet
function openProjectDetail(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    modalBody.innerHTML = `
        <div class="project-detail">
            <h2>${project.title}</h2>
            <p class="project-description">${project.description}</p>
            
            <div class="project-images">
                ${project.images && project.images.length > 0 ? 
                    project.images.map(img => `
                        <div class="project-image-container">
                            <img src="${img}" alt="${project.title}" class="project-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
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
                

            
            <div class="project-links-detail">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> Voir le code
                </a>
                <a href="${project.demo}" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-external-link-alt"></i> Démo en ligne
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fermer la modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Formulaire de contact
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulation d'envoi de formulaire
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulation d'un délai d'envoi
    setTimeout(() => {
        alert('Message envoyé avec succès ! Je vous répondrai bientôt.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Effet de frappe pour le titre principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Animation du titre principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
    
    // Compteurs animés pour les statistiques
    const counters = document.querySelectorAll('.stat-item h3');
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + '+';
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    };
    
    // Observer pour déclencher l'animation des compteurs
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        
        statsObserver.observe(statsSection);
    }
});

// Fonction globale pour ouvrir les détails des projets (accessible depuis le HTML)
window.openProjectDetail = openProjectDetail;

// Gestion des erreurs JavaScript
window.addEventListener('error', (e) => {
    console.error('Erreur JavaScript:', e.error);
});

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page chargée en ${Math.round(loadTime)}ms`);
});
